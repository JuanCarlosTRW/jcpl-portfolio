"use client";

import { useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  heroIntroSequence,
  prefersReducedMotion,
} from "@/lib/motion";
import PrimaryButton from "@/components/ui/PrimaryButton";
import LaserFlow from "@/components/hero/LaserFlow";
import "./premium-hero.css";

const Aurora = dynamic(() => import("@/components/motion/Aurora"), {
  ssr: false,
});

/* ═══════════════════════════════════════════════════
   COPY — conversion-optimized, outcome-driven
   ═══════════════════════════════════════════════════ */
const EYEBROW = "Engineered Growth Systems for Service Businesses";
const HEADLINE_L1 = "Turn unpredictable lead flow";
const HEADLINE_L2 = "into controlled revenue growth.";
const SUBHEADLINE =
  "I design acquisition, conversion and automation systems that increase revenue without increasing operational chaos.";

const CTA_PRIMARY = { label: "Book Strategy Call", href: "/apply" };
const CTA_SECONDARY = { label: "View Case Studies", href: "/case-studies" };

const PROOF_ITEMS = [
  "+31% Avg Conversion Lift",
  "–22–41% Cost Per Lead",
  "<60s Speed-to-Lead Systems",
] as const;

const AUTHORITY_LINE =
  "Selectively working with a limited number of service brands per quarter.";

/* Aurora color scheme — deep moody emerald/teal, kept very subtle */
const AURORA_COLORS = ["#0B3D2E", "#8FAE9D", "#0B3D2E"];

/* Framer Motion entrance variants for cinematic reveal */
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: {
    duration: 0.9,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  },
});

/* ═══════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════ */
export default function PremiumHero() {
  const reduced = prefersReducedMotion();
  const init = reduced ? 1 : 0;

  /* refs for GSAP intro sequence */
  const sectionRef = useRef<HTMLElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const authorityRef = useRef<HTMLParagraphElement>(null);

  /* scroll-driven laser fade — directly via DOM for zero conflicts */
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const laser = laserRef.current;
    if (!section || !laser) return;
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;
    /* Laser is fully visible while hero bottom is below the viewport */
    /* Starts fading when hero bottom enters the lower 60% of viewport */
    /* Fully gone when hero bottom reaches top of viewport */
    if (rect.bottom >= vh) {
      laser.style.opacity = "1";
    } else if (rect.bottom <= 0) {
      laser.style.opacity = "0";
    } else {
      const progress = rect.bottom / (vh * 0.6);
      laser.style.opacity = String(Math.max(0, Math.min(1, progress)));
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

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
    <section ref={sectionRef} className="ph" aria-label="Hero — Growth Systems">
      {/* ═══════════════════════════════════════════
          LAYER 0 — Deep space base (pure CSS gradient)
          z-index: 0
          ═══════════════════════════════════════════ */}
      <div className="ph-layer ph-base" aria-hidden="true" />

      {/* ═══════════════════════════════════════════
          LAYER 1 — Aurora WebGL background (subtle, moody)
          z-index: 1
          ═══════════════════════════════════════════ */}
      <div className="ph-layer ph-aurora" aria-hidden="true">
        <Aurora
          colorStops={AURORA_COLORS}
          amplitude={0.8}
          blend={0.45}
          speed={0.2}
        />
      </div>

      {/* ═══════════════════════════════════════════
          LAYER 2 — Cinematic vignette (darkens edges)
          z-index: 2
          ═══════════════════════════════════════════ */}
      <div className="ph-layer ph-vignette" aria-hidden="true" />

      {/* ═══════════════════════════════════════════
          LAYER 3 — LASER FLOW (dominant focal point)
          z-index: 3  — centered, extends into section 2
          ═══════════════════════════════════════════ */}
      <div
        ref={laserRef}
        className="ph-laser"
        aria-hidden="true"
      >
        <LaserFlow
          className="ph-laser-canvas"
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.15}
          wispDensity={1}
          wispIntensity={5}
          wispSpeed={15}
          flowSpeed={0.35}
          fogIntensity={0.45}
          fogScale={0.3}
          decay={1.1}
          falloffStart={1.2}
          verticalSizing={6.0}
          horizontalSizing={0.5}
          color="#FF79C6"
        />
      </div>

      {/* ═══════════════════════════════════════════
          LAYER 4 — Laser glow bloom (CSS radial overlay)
          z-index: 4  — adds depth-of-field glow around beam
          ═══════════════════════════════════════════ */}
      <div className="ph-layer ph-bloom" aria-hidden="true" />

      {/* ═══════════════════════════════════════════
          LAYER 5 — Film grain texture
          z-index: 5
          ═══════════════════════════════════════════ */}
      <div className="ph-layer ph-grain" aria-hidden="true" />

      {/* ═══════════════════════════════════════════
          LAYER 6 — Bottom gradient fade (seamless transition
          to the next section)
          z-index: 6
          ═══════════════════════════════════════════ */}
      <div className="ph-layer ph-bottom-fade" aria-hidden="true" />

      {/* ═══════════════════════════════════════════
          LAYER 7 — Content overlay
          z-index: 10
          ═══════════════════════════════════════════ */}
      <div className="ph-content">
        <div className="ph-copy">
          {/* Eyebrow */}
          <motion.div
            ref={eyebrowRef}
            className="ph-eyebrow"
            style={{ opacity: init }}
            {...(reduced ? {} : fadeUp(0.6))}
          >
            <span className="ph-eyebrow-dot" aria-hidden="true" />
            <span>{EYEBROW}</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            ref={headlineRef}
            className="ph-headline"
            style={{ opacity: init }}
            {...(reduced ? {} : fadeUp(0.8))}
          >
            {HEADLINE_L1}
            <br />
            <span className="ph-headline-emphasis">{HEADLINE_L2}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            ref={subRef}
            className="ph-sub"
            style={{ opacity: init }}
            {...(reduced ? {} : fadeUp(1.0))}
          >
            {SUBHEADLINE}
          </motion.p>

          {/* CTAs */}
          <motion.div
            ref={ctasRef}
            className="ph-ctas"
            style={{ opacity: init }}
            {...(reduced ? {} : fadeUp(1.2))}
          >
            <PrimaryButton href={CTA_PRIMARY.href} variant="solid">
              {CTA_PRIMARY.label}
              <span className="ph-cta-arrow" aria-hidden="true">
                →
              </span>
            </PrimaryButton>
            <PrimaryButton href={CTA_SECONDARY.href} variant="outline">
              {CTA_SECONDARY.label}
            </PrimaryButton>
          </motion.div>

          {/* Proof metrics */}
          <motion.div
            ref={proofRef}
            className="ph-proof"
            style={{ opacity: init }}
            {...(reduced ? {} : fadeUp(1.4))}
          >
            {PROOF_ITEMS.map((item, i) => (
              <span key={item} className="ph-proof-item">
                {i > 0 && (
                  <span className="ph-proof-sep" aria-hidden="true">
                    ·
                  </span>
                )}
                {item}
              </span>
            ))}
          </motion.div>

          {/* Authority micro-line */}
          <motion.p
            ref={authorityRef}
            className="ph-authority"
            style={{ opacity: init }}
            {...(reduced ? {} : fadeUp(1.6))}
          >
            {AUTHORITY_LINE}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
