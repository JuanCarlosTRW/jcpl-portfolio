"use client";

import { useRef, useEffect, Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import {
  heroIntroSequence,
  objectFloatAnimation,
  mouseGlowDrift,
  prefersReducedMotion,
} from "@/lib/motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import "./premium-hero.css";

const ProceduralIceObject = dynamic(() => import("./ProceduralIceObject"), {
  ssr: false,
});

/* ═══════════════════════════════════════════════════
   COPY & DATA — easy to edit
   ═══════════════════════════════════════════════════ */
const EYEBROW = "Growth Systems Architect";
const HEADLINE =
  "I engineer growth systems that turn demand into predictable revenue.";
const SUBHEADLINE =
  "Acquisition funnels, conversion systems, and AI automation — built to scale your business without scaling your headcount.";
const CTA_PRIMARY = { label: "Book Strategy Call", href: "/apply" };
const CTA_SECONDARY = { label: "View Case Studies", href: "/case-studies" };

const METRICS = [
  { value: "+31%", label: "Avg CVR Lift" },
  { value: "-22% to -41%", label: "CPL Reduction" },
  { value: "< 60 sec", label: "Speed-to-Lead" },
] as const;

const HUD_LABELS = [
  { text: "Acquisition", anchor: "top" },
  { text: "Conversion", anchor: "mid" },
  { text: "Automation", anchor: "bottom" },
  { text: "Intelligence", anchor: "left" },
] as const;

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */
export default function PremiumHero() {
  const reduced = prefersReducedMotion();
  const init = reduced ? 1 : 0;

  /* refs */
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);
  const ringsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  /* track mount for Canvas (avoids SSR mismatch) */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  /* intro + float + glow drift */
  useEffect(() => {
    const tl = heroIntroSequence({
      eyebrow: eyebrowRef.current,
      headline: headlineRef.current,
      subheadline: subRef.current,
      ctas: ctasRef.current,
      metrics: metricsRef.current,
      hud: hudRef.current,
      object: objectRef.current,
      rings: ringsRef.current,
      glow: glowRef.current,
    });

    const float = objectFloatAnimation(objectRef.current, 6);
    const cleanupGlow = mouseGlowDrift(glowRef.current, 40);

    return () => {
      tl?.kill();
      float?.kill();
      cleanupGlow?.();
    };
  }, []);

  return (
    <section className="ph" aria-label="Hero — Growth Systems">
      {/* ── Background layers ── */}
      <div className="ph-bg" aria-hidden="true">
        <div className="ph-bg-gradient" />
        <div className="ph-bg-radial" />
        <div className="ph-bg-vignette" />
        <div className="ph-bg-grain" />
      </div>

      {/* ── Content grid ── */}
      <div className="ph-grid">
        {/* LEFT — Copy column */}
        <div className="ph-copy">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="ph-eyebrow" style={{ opacity: init }}>
            <span className="ph-eyebrow-dot" aria-hidden="true" />
            <span className="ph-eyebrow-line" aria-hidden="true" />
            <span>{EYEBROW}</span>
          </div>

          {/* Headline */}
          <h1 ref={headlineRef} className="ph-headline" style={{ opacity: init }}>
            {HEADLINE}
          </h1>

          {/* Subheadline */}
          <p ref={subRef} className="ph-sub" style={{ opacity: init }}>
            {SUBHEADLINE}
          </p>

          {/* CTAs */}
          <div ref={ctasRef} className="ph-ctas" style={{ opacity: init }}>
            <PrimaryButton href={CTA_PRIMARY.href} variant="solid">
              {CTA_PRIMARY.label}
              <span className="ph-cta-arrow" aria-hidden="true">→</span>
            </PrimaryButton>
            <PrimaryButton href={CTA_SECONDARY.href} variant="outline">
              {CTA_SECONDARY.label}
            </PrimaryButton>
          </div>

          {/* Metrics */}
          <div ref={metricsRef} className="ph-metrics" style={{ opacity: init }}>
            {METRICS.map((m) => (
              <div key={m.label} className="ph-metric" data-metric>
                <span className="ph-metric-val">{m.value}</span>
                <span className="ph-metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual column */}
        <div className="ph-visual">
          {/* Rings */}
          <div ref={ringsRef} className="ph-rings" aria-hidden="true" style={{ opacity: init }}>
            <div className="ph-ring ph-ring-1" />
            <div className="ph-ring ph-ring-2" />
            <div className="ph-ring ph-ring-3" />
          </div>

          {/* Glow (mouse-reactive) */}
          <div ref={glowRef} className="ph-glow" aria-hidden="true" style={{ opacity: init }} />

          {/* 3D Object */}
          <div ref={objectRef} className="ph-object" style={{ opacity: init }}>
            {mounted && (
              <Canvas
                camera={{ position: [0, 0, 5.5], fov: 42 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                style={{ pointerEvents: "none" }}
              >
                <Suspense fallback={null}>
                  <ProceduralIceObject scale={1.1} reducedMotion={reduced} />
                </Suspense>
              </Canvas>
            )}
          </div>

          {/* HUD labels */}
          <div ref={hudRef} className="ph-hud" aria-hidden="true" style={{ opacity: init }}>
            {HUD_LABELS.map((l) => (
              <div key={l.text} className={`ph-hud-label ph-hud-${l.anchor}`} data-hud>
                <span className="ph-hud-dot" />
                <span className="ph-hud-line" />
                <span className="ph-hud-text">{l.text}</span>
              </div>
            ))}
          </div>

          {/* Dimension markers (like igloo.inc measurement lines) */}
          <div className="ph-dims" aria-hidden="true" style={{ opacity: init }}>
            <div className="ph-dim ph-dim-h">
              <span className="ph-dim-tick" />
              <span className="ph-dim-val">55</span>
              <span className="ph-dim-tick" />
            </div>
            <div className="ph-dim ph-dim-v">
              <span className="ph-dim-tick" />
              <span className="ph-dim-val">34</span>
              <span className="ph-dim-tick" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom: scroll prompt ── */}
      <div className="ph-scroll-prompt" aria-hidden="true">
        <span>Scroll down to discover.</span>
      </div>
    </section>
  );
}
