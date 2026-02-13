"use client";

import { forwardRef } from "react";

/**
 * Immersive gradient backdrop for the intro phase.
 * Pure CSS — zero JS animation cost. GSAP controls opacity externally.
 *
 * Tuning: adjust the radial-gradient stops and opacities below
 * to change the volumetric feel during the intro.
 */
const IntroBackground = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="intro-backdrop"
      aria-hidden="true"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, rgba(80,200,120,0.10), transparent 70%),
          radial-gradient(ellipse 60% 50% at 25% 60%, rgba(11,61,46,0.16), transparent 60%),
          radial-gradient(ellipse 50% 40% at 75% 30%, rgba(0,75,59,0.12), transparent 60%),
          linear-gradient(180deg, rgba(13,23,19,0.9) 0%, rgba(10,18,15,0.7) 100%)
        `,
      }}
    />
  );
});

IntroBackground.displayName = "IntroBackground";
export default IntroBackground;
