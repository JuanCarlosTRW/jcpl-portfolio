"use client";

import { useRef, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";
import { heroIntroSequence, objectFloatAnimation, prefersReducedMotion } from "@/lib/motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import "./premium-hero.css";

const ProceduralIceObject = dynamic(
  () => import("./ProceduralIceObject"),
  { ssr: false }
);

/* ═══════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════ */
const METRICS = [
  { value: "$2.4M+", label: "Revenue Generated" },
  { value: "340%", label: "Avg. ROAS" },
  { value: "47", label: "Clients Scaled" },
];

const HUD_LABELS = [
  { text: "Acquisition", position: "top-right" },
  { text: "Conversion", position: "right" },
  { text: "Automation", position: "bottom-right" },
];

/* ═══════════════════════════════════════════════════
   PREMIUM HERO COMPONENT
   ═══════════════════════════════════════════════════ */
export default function PremiumHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const hudRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = heroIntroSequence({
      logo: logoRef.current,
      headline: headlineRef.current,
      subheadline: subheadlineRef.current,
      ctas: ctasRef.current,
      metrics: metricsRef.current,
      hud: hudRef.current,
      object: objectRef.current,
    });

    const float = objectFloatAnimation(objectRef.current, 6);

    return () => {
      tl?.kill();
      float?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="premium-hero"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="premium-hero-bg" aria-hidden="true">
        <div className="premium-hero-gradient" />
        <div className="premium-hero-radial" />
        <div className="premium-hero-vignette" />
        <div className="premium-hero-grain" />
      </div>

      {/* Content grid */}
      <div className="premium-hero-content">
        {/* Left column: Copy */}
        <div className="premium-hero-copy">
          {/* Eyebrow */}
          <div
            ref={logoRef}
            className="premium-hero-eyebrow"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            <span className="eyebrow-dot" aria-hidden="true" />
            <span>Growth Systems Architect</span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="premium-hero-headline"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            I engineer growth systems that turn demand into predictable revenue.
          </h1>

          {/* Subheadline */}
          <p
            ref={subheadlineRef}
            className="premium-hero-subheadline"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            Acquisition funnels, conversion systems, and AI automation—built to
            scale your business without scaling your headcount.
          </p>

          {/* CTAs */}
          <div
            ref={ctasRef}
            className="premium-hero-ctas"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            <PrimaryButton href="/apply" variant="solid">
              Book Strategy Call
              <span className="cta-arrow" aria-hidden="true">→</span>
            </PrimaryButton>
            <PrimaryButton href="/case-studies" variant="outline">
              View Case Studies
            </PrimaryButton>
          </div>

          {/* Metrics */}
          <div
            ref={metricsRef}
            className="premium-hero-metrics"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            {METRICS.map((metric) => (
              <div key={metric.label} className="metric-item" data-metric>
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: 3D Object + HUD */}
        <div className="premium-hero-visual">
          {/* Circular rings */}
          <div className="visual-rings" aria-hidden="true">
            <div className="ring ring-1" />
            <div className="ring ring-2" />
            <div className="ring ring-3" />
          </div>

          {/* Glow */}
          <div className="visual-glow" aria-hidden="true" />

          {/* 3D Object */}
          <div
            ref={objectRef}
            className="visual-object"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            <Canvas
              camera={{ position: [0, 0, 5], fov: 45 }}
              dpr={[1, 1.5]}
              gl={{ antialias: true, alpha: true }}
            >
              <Suspense fallback={null}>
                <ProceduralIceObject scale={1.2} />
              </Suspense>
            </Canvas>
          </div>

          {/* HUD labels */}
          <div
            ref={hudRef}
            className="visual-hud"
            style={{ opacity: prefersReducedMotion() ? 1 : 0 }}
          >
            {HUD_LABELS.map((label) => (
              <div
                key={label.text}
                className={`hud-label hud-${label.position}`}
                data-hud
              >
                <span className="hud-dot" aria-hidden="true" />
                <span className="hud-text">{label.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
