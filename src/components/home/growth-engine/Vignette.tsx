"use client";

import { memo } from "react";

const Vignette = memo(function Vignette() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-50"
      style={{
        background:
          "radial-gradient(ellipse at center, transparent 38%, rgba(0,0,0,0.55) 78%, rgba(0,0,0,0.85) 100%)",
        mixBlendMode: "multiply",
      }}
    />
  );
});

export default Vignette;
