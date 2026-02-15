"use client";

import { useRef, useEffect } from "react";
import LogoLoop from "./LogoLoop";
import "./beam-platform.css";

/* ─── Placeholder partner logos (text nodes) ─── */
const PARTNER_LOGOS = [
  { node: "Next.js" },
  { node: "React" },
  { node: "TypeScript" },
  { node: "Three.js" },
  { node: "Vercel" },
  { node: "Figma" },
  { node: "Tailwind" },
  { node: "Node.js" },
  { node: "PostgreSQL" },
  { node: "Stripe" },
];

export default function LogoPlatform() {
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = platformRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("bp-visible");
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={platformRef} className="bp-wrapper" aria-hidden="true">
      {/* Ambient haze behind the platform */}
      <div className="bp-haze" />

      {/* The platform rectangle */}
      <div className="bp-platform">
        {/* Impact glow — where the beam hits center */}
        <div className="bp-impact" />

        {/* Light sweep — spreads left to right across the top edge */}
        <div className="bp-sweep" />

        {/* Edge glow lines — horizontal light emanating from center */}
        <div className="bp-edge bp-edge-left" />
        <div className="bp-edge bp-edge-right" />

        {/* Surface sheen */}
        <div className="bp-surface" />

        {/* ── Logo loop content ── */}
        <div className="bp-logo-content">
          {/* Label above logos */}
          <p className="bp-label">Trusted Technologies</p>

          {/* Scrolling logo loop */}
          <LogoLoop
            logos={PARTNER_LOGOS}
            direction="horizontal"
            speed={35}
            gap={56}
            logoHeight={28}
            pauseOnHover
            fadeEdges
            fadeColor="#0c0e12"
            scaleOnHover
          />
        </div>
      </div>
    </div>
  );
}
