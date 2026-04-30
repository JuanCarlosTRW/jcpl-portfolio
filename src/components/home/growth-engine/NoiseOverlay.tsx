"use client";

import { memo } from "react";

const NoiseOverlay = memo(function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-50"
      style={{ opacity: 0.08, mixBlendMode: "overlay" }}
    >
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <filter id="ge-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#ge-noise)" />
      </svg>
    </div>
  );
});

export default NoiseOverlay;
