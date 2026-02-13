"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import HeroBackground from "./HeroBackground";
import IntroBackground from "./IntroBackground";
import LogoIntro from "./LogoIntro";
import type { LogoIntroHandle } from "./LogoIntro";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

/* ══════════════════════════════════════════════════════════
   SCROLL PROGRESS BREAKPOINTS (0–1)
   Adjust to retune when each layer appears / disappears.
   ══════════════════════════════════════════════════════════ */

// Layer 1: Logo stays centered, then moves to top-left
const LOGO_MOVE_START = 0.0;
const LOGO_MOVE_END = 0.22;

// Logo final transform (top-left corner)
const LOGO_FINAL_SCALE = 0.32;
const LOGO_FINAL_X = "-36vw";
const LOGO_FINAL_Y = "-40vh";

// Background transitions
const INTRO_BG_FADE_START = 0.15;
const INTRO_BG_FADE_END = 0.28;
const AURORA_FADE_START = 0.18;
const AURORA_FADE_END = 0.28;

// Scroll indicator hides
const INDICATOR_HIDE = 0.04;

// Layer 2: Hook statement
const HOOK_FADE_IN_START = 0.20;
const HOOK_FADE_IN_END = 0.32;
const HOOK_FADE_OUT_START = 0.50;
const HOOK_FADE_OUT_END = 0.58;

// Layer 3: Services universe
const SERVICES_TITLE_IN_START = 0.55;
const SERVICES_TITLE_IN_END = 0.65;
const SERVICES_CARDS_IN_START = 0.60;
const SERVICES_CARDS_IN_END = 0.75;
const SERVICES_CTA_IN_START = 0.70;
const SERVICES_CTA_IN_END = 0.80;

// Scrub damping
const SCRUB_SMOOTHING = 0.6;

/* ══════════════════════════════════════════════════════════
   SERVICE DATA
   ══════════════════════════════════════════════════════════ */

const services = [
  {
    icon: "◆",
    title: "Growth Systems",
    desc: "Funnels, landing pages & conversion copy engineered to book calls.",
  },
  {
    icon: "◆",
    title: "Paid Acquisition",
    desc: "Google Ads campaigns built for ROI, not vanity metrics.",
  },
  {
    icon: "◆",
    title: "SEO & GEO",
    desc: "Organic visibility optimized for search engines and AI platforms.",
  },
  {
    icon: "◆",
    title: "AI Automation",
    desc: "Intelligent receptionist, chat & workflow systems that never sleep.",
  },
];

/* ══════════════════════════════════════════════════════════
   STATIC FALLBACK (reduced motion)
   ══════════════════════════════════════════════════════════ */

function StaticHero() {
  return (
    <section
      className="scroll-hero"
      style={{ height: "auto", minHeight: "100vh" }}
    >
      <div
        className="scroll-hero-viewport"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "6rem 1.5rem",
        }}
      >
        <div className="hero-bg-layer" style={{ opacity: 1 }}>
          <HeroBackground />
        </div>
        <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />
        <div
          className="scroll-layer content-layer"
          style={{ opacity: 1, pointerEvents: "auto", position: "relative" }}
        >
          <ServicesLayer />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════
   LAYER 2 — Hook Statement
   ══════════════════════════════════════════════════════════ */

function HookLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[var(--text-primary)]"
        style={{
          textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          letterSpacing: "-0.02em",
        }}
      >
        {hero.headline}
      </h1>
      <p
        className="mt-6 text-lg md:text-xl text-[rgba(255,255,255,0.5)] max-w-[640px] mx-auto leading-relaxed"
        style={{ letterSpacing: "0.01em" }}
      >
        {hero.subheadline}
      </p>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   LAYER 3 — Services Universe
   ══════════════════════════════════════════════════════════ */

function ServicesLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <p
        className="services-title text-xs font-medium tracking-[0.3em] uppercase text-[rgba(255,255,255,0.35)] mb-10"
      >
        What I Build
      </p>

      <div className="services-grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <span className="service-card-icon text-[rgba(255,255,255,0.2)]">
              {s.icon}
            </span>
            <h3 className="service-card-title">{s.title}</h3>
            <p className="service-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="services-cta mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={ctaCopy.href}
          onClick={() => trackEvent("hero_cta_click")}
          className="group inline-flex items-center gap-2 rounded-xl bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] px-8 py-4 text-base font-semibold text-[var(--text-primary)] transition-all duration-400 hover:bg-[rgba(255,255,255,0.14)] hover:border-[rgba(255,255,255,0.22)]"
        >
          {ctaCopy.primary}
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-[rgba(255,255,255,0.4)]">
            →
          </span>
        </Link>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-[rgba(255,255,255,0.4)] transition-colors duration-300 hover:text-[rgba(255,255,255,0.7)]"
        >
          View Case Studies
        </Link>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   INTRO ANIMATION — FIXED
   ══════════════════════════════════════════════════════════ */
const INTRO_ANIMATION = {
  opacity: 0,
  scale: 0.985,
  filter: "blur(2px)",
};
const INTRO_ANIMATION_FINAL = {
  opacity: 1,
  scale: 1,
  filter: "blur(0px)",
  duration: 0.8,
  ease: "power3.out",
};

const STARLIGHT_EFFECT = {
  particleDensity: 0.02,
  radialGlow: true,
};

const LIGHT_SWEEP = {
  duration: 1.2,
  gradient: "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
};

/* ══════════════════════════════════════════════════════════
   MAIN SCROLL-DRIVEN COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function CinematicHero() {
  const reduced = usePrefersReducedMotionSafe();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<LogoIntroHandle>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const auroraBgRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const containerEl = logoRef.current?.containerEl;

    if (!section || !viewport || !containerEl) return;

    // Intro animation
    gsap.fromTo(
      containerEl,
      INTRO_ANIMATION,
      {
        ...INTRO_ANIMATION_FINAL,
        onComplete: () => {
          // Add starlight effect
          gsap.to(containerEl, {
            ...STARLIGHT_EFFECT,
            duration: 1.5,
          });

          // Add light sweep
          gsap.to(containerEl, {
            backgroundImage: LIGHT_SWEEP.gradient,
            duration: LIGHT_SWEEP.duration,
            onComplete: () => {
              gsap.set(containerEl, { backgroundImage: "none" });
            },
          });
        },
      }
    );

    // Scroll narrative
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: viewport,
        scrub: SCRUB_SMOOTHING,
      },
    });

    // Layer 1: Logo moves to top-left
    tl.fromTo(
      containerEl,
      { scale: 1, x: 0, y: 0 },
      {
        scale: LOGO_FINAL_SCALE,
        x: LOGO_FINAL_X,
        y: LOGO_FINAL_Y,
        ease: "power4.out",
      },
      LOGO_MOVE_START
    );

    // Layer 2: Hook statement
    if (hookRef.current) {
      tl.fromTo(
        hookRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out" },
        HOOK_FADE_IN_START
      );
      tl.to(
        hookRef.current,
        { opacity: 0, y: -20, ease: "power2.in" },
        HOOK_FADE_OUT_START
      );
    }

    // Layer 3: Services universe
    if (contentRef.current) {
      const title = contentRef.current.querySelector(".services-title");
      const cards = contentRef.current.querySelectorAll(".service-card");
      const cta = contentRef.current.querySelector(".services-cta");

      if (title) {
        tl.fromTo(
          title,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, ease: "power2.out" },
          SERVICES_TITLE_IN_START
        );
      }

      if (cards.length) {
        cards.forEach((card, i) => {
          const stagger = i * 0.02;
          tl.fromTo(
            card,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, ease: "power2.out" },
            SERVICES_CARDS_IN_START + stagger
          );
        });
      }

      if (cta) {
        tl.fromTo(
          cta,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, ease: "power2.out" },
          SERVICES_CTA_IN_START
        );
      }
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [reduced]);

  if (reduced) return <StaticHero />;

  return (
    <section ref={sectionRef} className="scroll-hero">
      <div ref={viewportRef} className="scroll-hero-viewport">
        {/* Layer 0: Backgrounds */}
        <IntroBackground ref={introRef} />
        <div ref={auroraBgRef} className="hero-bg-layer">
          <HeroBackground />
        </div>
        <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />

        {/* Persistent logo — starts centered, scrolls to top-left */}
        <LogoIntro ref={logoRef} />

        {/* Scroll indicator */}
        <div ref={scrollIndicatorRef} className="scroll-indicator">
          <span className="scroll-indicator-text">Scroll</span>
          <div className="scroll-indicator-line" />
          <div className="scroll-indicator-chevron" />
        </div>

        {/* Layer 2: Hook statement */}
        <div
          ref={hookRef}
          className="scroll-layer hook-layer"
          style={{ opacity: 0 }}
        >
          <HookLayer />
        </div>

        {/* Layer 3: Services universe */}
        <div
          ref={contentRef}
          className="scroll-layer content-layer"
          style={{ opacity: 0 }}
        >
          <ServicesLayer />
        </div>

        {/* Bottom vignette */}
        <div className="hero-bottom-fade bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
      </div>
    </section>
  );
}
