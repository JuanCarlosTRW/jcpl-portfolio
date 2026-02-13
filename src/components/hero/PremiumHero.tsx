"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  heroIntroSequence,
  prefersReducedMotion,
} from "@/lib/motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import "./premium-hero.css";

const Aurora = dynamic(() => import("@/components/motion/Aurora"), {
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

/* Aurora color scheme — moody emerald / teal to match brand */
const AURORA_COLORS = ["#0B3D2E", "#8FAE9D", "#0B3D2E"];

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

  /* intro sequence */
  useEffect(() => {
    const tl = heroIntroSequence({
      eyebrow: eyebrowRef.current,
      headline: headlineRef.current,
      subheadline: subRef.current,
      ctas: ctasRef.current,
      metrics: metricsRef.current,
    });

    return () => {
      tl?.kill();
    };
  }, []);

  return (
    <section className="ph" aria-label="Hero — Growth Systems">
      {/* ── Aurora WebGL background ── */}
      <div className="ph-bg" aria-hidden="true">
        <Aurora
          colorStops={AURORA_COLORS}
          amplitude={1.2}
          blend={0.6}
          speed={0.4}
        />
        <div className="ph-bg-vignette" />
        <div className="ph-bg-grain" />
      </div>

      {/* ── Content ── */}
      <div className="ph-content">
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
      </div>

      {/* ── Bottom: scroll prompt ── */}
      <div className="ph-scroll-prompt" aria-hidden="true">
        <span>Scroll down to discover.</span>
      </div>
    </section>
  );
}
