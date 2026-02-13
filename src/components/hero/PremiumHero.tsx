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
   COPY — conversion-optimized, outcome-driven
   ═══════════════════════════════════════════════════ */
const EYEBROW = "Engineered Growth Systems for Service Businesses";

/* Headline structured with a line break for max visual punch.
   First line = tension ("unpredictable lead flow").
   Second line = outcome ("controlled revenue growth"). */
const HEADLINE_L1 = "Turn unpredictable lead flow";
const HEADLINE_L2 = "into controlled revenue growth.";

const SUBHEADLINE =
  "I design acquisition, conversion and automation systems that increase revenue without increasing operational chaos.";

const CTA_PRIMARY = { label: "Book Strategy Call", href: "/apply" };
const CTA_SECONDARY = { label: "View Case Studies", href: "/case-studies" };

/* Proof metrics — inline separator format for density */
const PROOF_ITEMS = [
  "+31% Avg Conversion Lift",
  "–22–41% Cost Per Lead",
  "<60s Speed-to-Lead Systems",
] as const;

const AUTHORITY_LINE =
  "Selectively working with a limited number of service brands per quarter.";

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
  const proofRef = useRef<HTMLDivElement>(null);
  const authorityRef = useRef<HTMLParagraphElement>(null);

  /* intro sequence */
  useEffect(() => {
    const tl = heroIntroSequence({
      eyebrow: eyebrowRef.current,
      headline: headlineRef.current,
      subheadline: subRef.current,
      ctas: ctasRef.current,
      proof: proofRef.current,
      authority: authorityRef.current,
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
          amplitude={1.0}
          blend={0.5}
          speed={0.3}
        />
        <div className="ph-bg-vignette" />
        <div className="ph-bg-grain" />
      </div>

      {/* ── Content ── */}
      <div className="ph-content">
        <div className="ph-copy">
          {/* Eyebrow — positions the niche */}
          <div ref={eyebrowRef} className="ph-eyebrow" style={{ opacity: init }}>
            <span className="ph-eyebrow-dot" aria-hidden="true" />
            <span>{EYEBROW}</span>
          </div>

          {/* Headline — tension → outcome, two-line break */}
          <h1 ref={headlineRef} className="ph-headline" style={{ opacity: init }}>
            {HEADLINE_L1}
            <br />
            <span className="ph-headline-emphasis">{HEADLINE_L2}</span>
          </h1>

          {/* Subheadline — mechanism */}
          <p ref={subRef} className="ph-sub" style={{ opacity: init }}>
            {SUBHEADLINE}
          </p>

          {/* CTAs — clear hierarchy */}
          <div ref={ctasRef} className="ph-ctas" style={{ opacity: init }}>
            <PrimaryButton href={CTA_PRIMARY.href} variant="solid">
              {CTA_PRIMARY.label}
              <span className="ph-cta-arrow" aria-hidden="true">→</span>
            </PrimaryButton>
            <PrimaryButton href={CTA_SECONDARY.href} variant="outline">
              {CTA_SECONDARY.label}
            </PrimaryButton>
          </div>

          {/* Proof line — social proof above fold */}
          <div ref={proofRef} className="ph-proof" style={{ opacity: init }}>
            {PROOF_ITEMS.map((item, i) => (
              <span key={item} className="ph-proof-item" data-proof>
                {i > 0 && <span className="ph-proof-sep" aria-hidden="true">·</span>}
                {item}
              </span>
            ))}
          </div>

          {/* Authority micro-line — exclusivity trigger */}
          <p ref={authorityRef} className="ph-authority" style={{ opacity: init }}>
            {AUTHORITY_LINE}
          </p>
        </div>
      </div>
    </section>
  );
}
