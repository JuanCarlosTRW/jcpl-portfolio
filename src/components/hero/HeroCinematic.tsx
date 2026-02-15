"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { trackEvent } from "@/lib/track-event";
import PremiumPanel from "./PremiumPanel";
import LaserFlow from "./LaserFlow";
import "./hero-cinematic.css";

/* ── Tuning Parameters ── */
const TUNING = {
  beamIntensity: 1.0,      // 0.5–1.5 (beam brightness multiplier)
  glowRadius: 180,         // 100–250 (glow spread in pixels)
  hazeOpacity: 0.15,       // 0.1–0.3 (nebula visibility)
  headlineScale: 1.0,      // 0.9–1.1 (text size multiplier)
} as const;

/* ── Component ── */
export default function HeroCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotionSafe();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  useEffect(() => {
    trackEvent("hero_visible");
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="hero-cinematic"
      style={{ opacity, scale }}
      aria-label="Hero Section"
    >
      {/* Layer A: Deep space gradient base */}
      <div className="hero-layer hero-base-gradient" aria-hidden="true" />

      {/* Layer B: Volumetric haze/nebula */}
      <div className="hero-layer hero-nebula" style={{ opacity: TUNING.hazeOpacity }}>
        <motion.div
          className="nebula-blob nebula-1"
          animate={
            reducedMotion
              ? {}
              : {
                  x: [0, 30, -20, 0],
                  y: [0, -40, 30, 0],
                  scale: [1, 1.05, 0.98, 1],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="nebula-blob nebula-2"
          animate={
            reducedMotion
              ? {}
              : {
                  x: [0, -25, 35, 0],
                  y: [0, 30, -25, 0],
                  scale: [1, 0.95, 1.08, 1],
                }
          }
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
      </div>

      {/* Layer C: Grain texture */}
      <div className="hero-layer hero-grain" aria-hidden="true" />

      {/* Laser shader background - centered beam */}
      <div className="hero-layer hero-laser-wrapper" style={{ zIndex: 3 }} aria-hidden="true">
        <LaserFlow
          className="hero-laser-centered"
          horizontalBeamOffset={0.5}
          verticalBeamOffset={0.0}
          wispDensity={1}
          wispIntensity={5}
          wispSpeed={14}
          color="#FF9E6B"
        />
      </div>

      {/* (legacy CinematicBeam removed — LaserFlow used for centered laser background) */}

      {/* Layer F: Bottom premium panel */}
      <PremiumPanel />

      {/* Layer G: Content block */}
      <div className="hero-content">
        <div className="hero-content-inner">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="eyebrow-dot" />
            ENGINEERED GROWTH SYSTEMS
          </motion.div>

          <motion.h1
            className="hero-headline"
            style={{ fontSize: `calc(3.5rem * ${TUNING.headlineScale})` }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Turn unpredictable lead flow
            <br />
            <span className="headline-emphasis">
              into controlled revenue growth
            </span>
          </motion.h1>

          <motion.p
            className="hero-body"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I design acquisition, conversion and automation systems that
            increase revenue without increasing operational chaos.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/apply"
              className="cta-primary"
              onClick={() => trackEvent("hero_primary_cta_click")}
            >
              Book Strategy Call
              <span className="cta-arrow">→</span>
            </Link>
            <Link
              href="/case-studies"
              className="cta-secondary"
              onClick={() => trackEvent("hero_secondary_cta_click")}
            >
              View Case Studies
            </Link>
          </motion.div>

          <motion.div
            className="hero-proof"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <span>+31% Avg Conversion Lift</span>
            <span className="proof-sep">·</span>
            <span>–22–41% Cost Per Lead</span>
            <span className="proof-sep">·</span>
            <span>&lt;60s Speed-to-Lead</span>
          </motion.div>
        </div>
      </div>

      {/* Edge vignette */}
      <div className="hero-layer hero-vignette" aria-hidden="true" />
    </motion.section>
  );
}
