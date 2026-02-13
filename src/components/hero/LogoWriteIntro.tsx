"use client";

import { forwardRef, useRef, useImperativeHandle } from "react";

export interface LogoWriteIntroHandle {
  containerEl: HTMLDivElement | null;
  imgEl: HTMLImageElement | null;
  glowEl: HTMLDivElement | null;
}

/**
 * SVG signature reveal via clip-path wipe.
 *
 * GSAP animates:
 *   - imgEl clip-path: inset(0 100% 0 0) → inset(0 0% 0 0)
 *   - glowEl left position: follows the clip edge
 *   - glowEl opacity: 0 → 0.8 → 0
 *   - containerEl opacity: 1 → 0 (during crossfade)
 *
 * The SVG is rendered as <img> with CSS invert + brightness
 * to convert black paths to light on dark.
 */
const LogoWriteIntro = forwardRef<LogoWriteIntroHandle>((_, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    containerEl: containerRef.current,
    imgEl: imgRef.current,
    glowEl: glowRef.current,
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
        <div ref={glowRef} className="logo-write-glow" />
      </div>
    </div>
  );
});

LogoWriteIntro.displayName = "LogoWriteIntro";
export default LogoWriteIntro;
