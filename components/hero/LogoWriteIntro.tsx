"use client";

import { forwardRef, useRef, useImperativeHandle } from "react";

export interface LogoWriteIntroHandle {
  /** Outer container — GSAP transforms for scale + translate to top-left */
  containerEl: HTMLDivElement | null;
  /** Image element — GSAP animates clip-path for write-on */
  imgEl: HTMLImageElement | null;
}

/**
 * Persistent SVG signature logo.
 *
 * Scroll-driven animations (controlled externally by CinematicHero):
 *   - imgEl clip-path: inset(0 100% 0 0) → inset(0 0% 0 0) (write-on)
 *   - containerEl transform: scale + translate (centered → top-left)
 *
 * The SVG is rendered as <img> with CSS invert + brightness
 * to convert black paths to light on dark.
 */
const LogoWriteIntro = forwardRef<LogoWriteIntroHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useImperativeHandle(ref, () => ({
    containerEl: containerRef.current,
    imgEl: imgRef.current,
  }));

  return (
    <div ref={containerRef} className="logo-write-container">
      <div className="logo-write-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={imgRef}
          src="/jcpl-signature.svg"
          alt=""
          aria-hidden="true"
          className="logo-write-img"
          draggable={false}
        />
      </div>
    </div>
  );
});

LogoWriteIntro.displayName = "LogoWriteIntro";
export default LogoWriteIntro;
