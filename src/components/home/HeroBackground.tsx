import { useRef, useEffect } from "react";

// Placeholder for WebGL/GLSL canvas effect
export default function HeroBackground() {
  // For now, render a premium dark gradient background
  return (
    <div
      aria-hidden
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        background: "radial-gradient(circle at 55% 35%, #1a2233 60%, #09090b 100%)",
        opacity: 0.95,
      }}
    />
  );
}
