"use client";

import {
  memo,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
  type CSSProperties,
} from "react";
import "./LogoLoop.css";

/* ─── Types ─── */
interface LogoImageItem {
  src: string;
  alt?: string;
  href?: string;
  style?: CSSProperties;
}

interface LogoNodeItem {
  node: ReactNode;
  href?: string;
  style?: CSSProperties;
}

type LogoItem = LogoImageItem | LogoNodeItem;

function isNodeItem(item: LogoItem): item is LogoNodeItem {
  return "node" in item;
}

interface LogoLoopProps {
  logos?: LogoItem[];
  direction?: "horizontal" | "vertical";
  speed?: number;
  gap?: number;
  logoHeight?: number;
  pauseOnHover?: boolean;
  fadeEdges?: boolean;
  fadeColor?: string;
  scaleOnHover?: boolean;
}

/* ─── Hooks ─── */
function useResizeObserver(ref: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function useImageLoader(logos: LogoItem[]) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const imageSrcs = logos
      .filter((l): l is LogoImageItem => !isNodeItem(l))
      .map((l) => l.src);

    if (imageSrcs.length === 0) {
      setLoaded(true);
      return;
    }

    let cancelled = false;
    Promise.all(
      imageSrcs.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = src;
          })
      )
    ).then(() => {
      if (!cancelled) setLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, [logos]);

  return loaded;
}

function useAnimationLoop(
  trackRef: React.RefObject<HTMLDivElement | null>,
  speed: number,
  isPaused: boolean,
  isHorizontal: boolean,
  listSize: number
) {
  const posRef = useRef(0);
  const frameRef = useRef(0);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    if (listSize === 0) return;

    const animate = (time: number) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!isPaused) {
        posRef.current -= speed * dt;
        if (Math.abs(posRef.current) >= listSize) {
          posRef.current += listSize;
        }
      }

      const track = trackRef.current;
      if (track) {
        if (isHorizontal) {
          track.style.transform = `translateX(${posRef.current}px)`;
        } else {
          track.style.transform = `translateY(${posRef.current}px)`;
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [trackRef, speed, isPaused, isHorizontal, listSize]);
}

/* ─── Component ─── */
const LogoLoop = memo(function LogoLoop({
  logos = [],
  direction = "horizontal",
  speed = 50,
  gap = 48,
  logoHeight = 32,
  pauseOnHover = true,
  fadeEdges = true,
  fadeColor = "#050608",
  scaleOnHover = false,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const [listSize, setListSize] = useState(0);

  const isHorizontal = direction === "horizontal";
  const containerSize = useResizeObserver(containerRef);
  const imagesLoaded = useImageLoader(logos);

  /* Measure the size of one full logo list */
  useEffect(() => {
    if (!imagesLoaded || !listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    setListSize(isHorizontal ? rect.width : rect.height);
  }, [imagesLoaded, isHorizontal, logos, containerSize]);

  /* Determine how many copies we need to fill the viewport seamlessly */
  const copies = useMemo(() => {
    if (listSize === 0) return 2;
    const viewportSize = isHorizontal
      ? containerSize.width
      : containerSize.height;
    return Math.ceil(viewportSize / listSize) + 2;
  }, [listSize, containerSize, isHorizontal]);

  useAnimationLoop(trackRef, speed, isPaused, isHorizontal, listSize);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) setIsPaused(true);
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) setIsPaused(false);
  }, [pauseOnHover]);

  if (logos.length === 0) return null;

  const cssVars = {
    "--logoloop-gap": `${gap}px`,
    "--logoloop-logoHeight": `${logoHeight}px`,
    "--logoloop-fadeColor": fadeColor,
  } as CSSProperties;

  const dirClass = isHorizontal
    ? "logoloop--horizontal"
    : "logoloop--vertical";

  const modifiers = [
    dirClass,
    fadeEdges ? "logoloop--fade" : "",
    scaleOnHover ? "logoloop--scale-hover" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const renderItem = (item: LogoItem, idx: number) => {
    const inner = isNodeItem(item) ? (
      <span className="logoloop__node">{item.node}</span>
    ) : (
      <img
        src={item.src}
        alt={item.alt || ""}
        draggable={false}
        loading="eager"
        className="h-10 w-auto object-contain opacity-60 filter brightness-0 invert"
        style={{ minWidth: 140, ...item.style }}
      />
    );

    return (
      <div key={idx} className="logoloop__item" style={{ minWidth: 140, ...item.style }}>
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="logoloop__link"
          >
            {inner}
          </a>
        ) : (
          inner
        )}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`logoloop ${modifiers}`}
      style={cssVars}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={trackRef} className="logoloop__track">
        {Array.from({ length: copies }).map((_, copyIdx) => (
          <div
            key={copyIdx}
            ref={copyIdx === 0 ? listRef : undefined}
            className="logoloop__list"
          >
            {logos.map((item, i) => renderItem(item, i))}
          </div>
        ))}
      </div>
    </div>
  );
});

export default LogoLoop;
