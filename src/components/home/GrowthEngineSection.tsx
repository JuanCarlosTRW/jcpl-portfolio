"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionValue } from "motion/react";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import GrowthEngineStatic from "./growth-engine/GrowthEngineStatic";
import VisualLayer from "./growth-engine/VisualLayer";
import SceneText from "./growth-engine/SceneText";
import ParticleField from "./growth-engine/ParticleField";
import Vignette from "./growth-engine/Vignette";
import NoiseOverlay from "./growth-engine/NoiseOverlay";
import { SCENES, SCROLL_DURATION_VH } from "./growth-engine/sceneData";
import { ACCENT_HEX } from "./growth-engine/types";

gsap.registerPlugin(ScrollTrigger);

export default function GrowthEngineSection() {
  const reduced = usePrefersReducedMotionSafe();
  const [layout, setLayout] = useState<"loading" | "desktop" | "static">("loading");
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const [particlesActive, setParticlesActive] = useState(false);

  // Layout decision — desktop pinned vs static stacked
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px) and (hover: hover)");
    const update = () => setLayout(reduced || !mq.matches ? "static" : "desktop");
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, [reduced]);

  // Pin + progress sync (desktop only)
  useEffect(() => {
    if (layout !== "desktop") return;
    if (!sectionRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current!,
        start: "top top",
        end: () => "+=" + window.innerHeight * SCROLL_DURATION_VH,
        pin: pinRef.current!,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => progress.set(self.progress),
        onEnter: () => setParticlesActive(true),
        onEnterBack: () => setParticlesActive(true),
        onLeave: () => setParticlesActive(false),
        onLeaveBack: () => setParticlesActive(false),
      });

      // Refresh on font load — headlines change height
      if (typeof document !== "undefined" && document.fonts?.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      // Debounced refresh on resize
      let resizeTimer: number | null = null;
      const onResize = () => {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        resizeTimer = window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 150);
      };
      const ro = new ResizeObserver(onResize);
      if (sectionRef.current) ro.observe(sectionRef.current);

      return () => {
        if (resizeTimer) window.clearTimeout(resizeTimer);
        ro.disconnect();
        trigger.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [layout, progress]);

  if (layout === "loading") {
    return <section style={{ minHeight: "100vh" }} aria-hidden="true" />;
  }

  if (layout === "static") {
    return <GrowthEngineStatic />;
  }

  return (
    <section
      ref={sectionRef}
      id="growth-engine"
      aria-label="The Growth Engine"
      className="relative"
      style={{
        height: `${(SCROLL_DURATION_VH + 1) * 100}vh`,
        background: "#0D0B09",
      }}
    >
      <div
        ref={pinRef}
        className="relative h-screen w-full overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212,168,83,0.05) 0%, rgba(13,11,9,0) 60%), #0D0B09",
        }}
      >
        {/* Section label */}
        <div className="pointer-events-none absolute left-1/2 top-8 z-40 -translate-x-1/2 text-center">
          <span
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.32em]"
            style={{ color: ACCENT_HEX.gold }}
          >
            <span
              className="inline-block h-px w-8"
              style={{ backgroundColor: ACCENT_HEX.gold }}
            />
            The Growth Engine
            <span
              className="inline-block h-px w-8"
              style={{ backgroundColor: ACCENT_HEX.gold }}
            />
          </span>
        </div>

        {/* Layered visuals */}
        <ParticleField active={particlesActive} density="desktop" />
        <VisualLayer progress={progress} />

        {/* Scene text — all stacked, opacity-driven */}
        {SCENES.map((s) => (
          <SceneText key={s.id} scene={s} progress={progress} />
        ))}

        {/* Overlays */}
        <Vignette />
        <NoiseOverlay />

        {/* Progress indicator */}
        <ProgressIndicator progress={progress} />
      </div>
    </section>
  );
}

function ProgressIndicator({ progress }: { progress: ReturnType<typeof useMotionValue<number>> }) {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2">
      {SCENES.map((s) => {
        const start = s.start;
        const end = s.end;
        return <ProgressDot key={s.id} progress={progress} start={start} end={end} />;
      })}
    </div>
  );
}

function ProgressDot({
  progress,
  start,
  end,
}: {
  progress: ReturnType<typeof useMotionValue<number>>;
  start: number;
  end: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const unsubscribe = progress.on("change", (p) => {
      const el = ref.current;
      if (!el) return;
      const active = p >= start && p <= end;
      el.style.backgroundColor = active ? ACCENT_HEX.gold : "rgba(245,240,232,0.25)";
      el.style.transform = active ? "scale(1.4)" : "scale(1)";
    });
    return unsubscribe;
  }, [progress, start, end]);
  return (
    <motion.span
      ref={ref}
      className="block h-1.5 w-1.5 rounded-full transition-all duration-200"
      style={{ backgroundColor: "rgba(245,240,232,0.25)" }}
    />
  );
}
