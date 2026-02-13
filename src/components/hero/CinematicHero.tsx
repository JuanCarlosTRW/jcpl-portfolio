"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import { RotatingText, CountUpValue } from "@/components/motion";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import HeroBackground from "./HeroBackground";
import IntroBackground from "./IntroBackground";
import LogoWriteIntro from "./LogoWriteIntro";
import type { LogoWriteIntroHandle } from "./LogoWriteIntro";
import "./hero.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Scroll progress breakpoints (0–1) ──
 *
 * Adjust these to retune when each layer appears/disappears.
 * All values are fractions of total scroll distance.
 */

// Layer 1: Logo write-on + centered stage
const WRITE_START = 0; // clip-path begins
const WRITE_END = 0.15; // clip-path fully revealed
const LOGO_MOVE_START = 0.15; // logo begins moving to top-left
const LOGO_MOVE_END = 0.30; // logo arrives at top-left

// Background transitions
const INTRO_BG_FADE_START = 0.22; // intro backdrop begins fading
const INTRO_BG_FADE_END = 0.30; // intro backdrop fully gone
const AURORA_FADE_START = 0.20; // Aurora fades in
const AURORA_FADE_END = 0.30;

// Layer 2: Hook statement
const HOOK_FADE_IN_START = 0.28;
const HOOK_FADE_IN_END = 0.40;
const HOOK_FADE_OUT_START = 0.58;
const HOOK_FADE_OUT_END = 0.66;

// Layer 3: Full content
const CONTENT_SUB_IN_START = 0.63;
const CONTENT_SUB_IN_END = 0.73;
const CONTENT_CTA_IN_START = 0.68;
const CONTENT_CTA_IN_END = 0.78;
const CONTENT_STATS_IN_START = 0.73;
const CONTENT_STATS_IN_END = 0.83;

// Logo final scale + position (top-left)
const LOGO_FINAL_SCALE = 0.35;
const LOGO_FINAL_X = "-36vw"; // shift left from center
const LOGO_FINAL_Y = "-38vh"; // shift up from center

// Scrub damping (higher = smoother but laggier)
const SCRUB_SMOOTHING = 0.8;

/* ── Static fallback for reduced motion ── */

function StaticHero() {
  return (
    <section className="scroll-hero" style={{ height: "auto", minHeight: "100vh" }}>
      <div className="scroll-hero-viewport" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="hero-bg-layer" style={{ opacity: 1 }}>
          <HeroBackground />
        </div>
        <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />
        <div className="scroll-layer content-layer" style={{ opacity: 1, pointerEvents: "auto" }}>
          <ContentLayer />
        </div>
        <div className="hero-bottom-fade bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
      </div>
    </section>
  );
}

/* ── Layer 2: Hook statement ── */

function HookLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-2 mb-8">
        <span
          className="h-2 w-2 rounded-full bg-[var(--brand-accent)] animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <span className="text-sm text-[var(--text-muted)]">
          Building growth systems for
        </span>
        <RotatingText
          items={hero.rotatingNiches}
          className="text-sm font-semibold"
          style={{ animationDuration: "3s" }}
        />
      </div>
      <h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--text-primary)]"
        style={{ textShadow: "0 2px 18px rgba(0,0,0,0.25)" }}
      >
        {hero.headline}
      </h1>
    </div>
  );
}

/* ── Layer 3: Full content ── */

function ContentLayer() {
  return (
    <div className="max-w-5xl mx-auto px-6 text-center">
      <div className="content-sub mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-[720px] mx-auto leading-[1.5]">
        {hero.subheadline}
      </div>

      <div className="content-cta mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href={ctaCopy.href}
          onClick={() => trackEvent("hero_cta_click")}
          className="group inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-8 py-4 text-base font-semibold text-[var(--bg-base)] transition-all duration-300 hover:bg-[var(--brand-strong)] hover:scale-[1.02]"
          style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
        >
          {ctaCopy.primary}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 rounded-xl border border-[rgba(217,230,218,0.28)] bg-[rgba(255,255,255,0.03)] px-8 py-4 text-base font-semibold text-[var(--text-primary)] transition-all duration-300 hover:border-[rgba(80,200,120,0.45)] hover:bg-[rgba(80,200,120,0.08)]"
        >
          See Results
        </Link>
      </div>

      <div className="content-stats mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[var(--brand-accent)] text-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
            <CountUpValue to={20000} prefix="$" suffix="K+" />
          </span>
          <span className="text-[rgba(217,230,218,0.78)] ml-2">
            generated for clients
          </span>
        </div>
        <div className="h-4 w-px bg-[var(--border-soft)]" />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[var(--brand-accent)] text-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
            <CountUpValue to={3} suffix="+" />
          </span>
          <span className="text-[rgba(217,230,218,0.78)] ml-2">
            active growth systems
          </span>
        </div>
        <div className="h-4 w-px bg-[var(--border-soft)] hidden sm:block" />
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[var(--brand-accent)] text-shadow-[0_1px_8px_rgba(0,0,0,0.28)]">
            <CountUpValue to={30} prefix="<" />
          </span>
          <span className="text-[rgba(217,230,218,0.78)] ml-2">
            days to first leads
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Main scroll-driven component ── */

export default function CinematicHero() {
  const reduced = usePrefersReducedMotionSafe();

  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<LogoWriteIntroHandle>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const auroraBgRef = useRef<HTMLDivElement>(null);
  const hookRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const imgEl = logoRef.current?.imgEl;
    const containerEl = logoRef.current?.containerEl;
    const intro = introRef.current;
    const aurora = auroraBgRef.current;
    const hook = hookRef.current;
    const content = contentRef.current;

    if (!section || !viewport || !imgEl || !containerEl) return;

    /* ── Scroll indicator: fade in after logo write-on completes ── */
    const indicator = scrollIndicatorRef.current;
    let indicatorTween: gsap.core.Tween | null = null;
    if (indicator) {
      // Show indicator after a short delay (logo is done writing at WRITE_END of scroll)
      // But we want it visible BEFORE any scroll, so use a time-based entrance
      indicatorTween = gsap.fromTo(
        indicator,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, delay: 1.8, ease: "power2.out" }
      );
    }

    // Build a scrubbed timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        pin: viewport,
        scrub: SCRUB_SMOOTHING,
        pinSpacing: false, // section already has height: 300vh
      },
    });

    /* ── Layer 1: Logo write-on ── */

    // Scroll indicator fades out as user starts scrolling
    if (indicator) {
      tl.to(
        indicator,
        { opacity: 0, y: -10, ease: "power1.in" },
        0.02 // almost immediately on scroll
      );
    }

    // SVG clip-path reveal (left → right)
    tl.fromTo(
      imgEl,
      { clipPath: "inset(0 100% 0 0)" },
      { clipPath: "inset(0 0% 0 0)", ease: "power2.inOut" },
      WRITE_START
    );

    // Logo scales down + translates to top-left
    tl.fromTo(
      containerEl,
      { scale: 1, x: 0, y: 0 },
      {
        scale: LOGO_FINAL_SCALE,
        x: LOGO_FINAL_X,
        y: LOGO_FINAL_Y,
        ease: "power3.inOut",
      },
      LOGO_MOVE_START
    );

    /* ── Background transitions ── */

    // Intro backdrop fades out
    if (intro) {
      tl.fromTo(
        intro,
        { opacity: 1 },
        { opacity: 0, ease: "power1.inOut" },
        INTRO_BG_FADE_START
      );
    }

    // Aurora background fades in
    if (aurora) {
      tl.fromTo(
        aurora,
        { opacity: 0 },
        { opacity: 1, ease: "power1.inOut" },
        AURORA_FADE_START
      );
    }

    /* ── Layer 2: Hook statement ── */

    if (hook) {
      // Fade in with slight upward motion
      tl.fromTo(
        hook,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, ease: "power2.out" },
        HOOK_FADE_IN_START
      );

      // Fade out
      tl.to(
        hook,
        { opacity: 0, y: -20, ease: "power2.in" },
        HOOK_FADE_OUT_START
      );
    }

    /* ── Layer 3: Full content (staggered) ── */

    if (content) {
      const sub = content.querySelector(".content-sub");
      const cta = content.querySelector(".content-cta");
      const stats = content.querySelector(".content-stats");

      if (sub) {
        tl.fromTo(
          sub,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, ease: "power2.out" },
          CONTENT_SUB_IN_START
        );
      }

      if (cta) {
        tl.fromTo(
          cta,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, ease: "power2.out" },
          CONTENT_CTA_IN_START
        );
      }

      if (stats) {
        tl.fromTo(
          stats,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, ease: "power2.out" },
          CONTENT_STATS_IN_START
        );
      }
    }

    return () => {
      indicatorTween?.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [reduced]);

  // Reduced motion: show static final state
  if (reduced) {
    return <StaticHero />;
  }

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
        <LogoWriteIntro ref={logoRef} />

        {/* Scroll-down indicator — appears after logo write-on, fades on scroll */}
        <div ref={scrollIndicatorRef} className="scroll-indicator">
          <span className="scroll-indicator-text">Scroll to explore</span>
          <div className="scroll-indicator-line" />
          <div className="scroll-indicator-chevron" />
        </div>

        {/* Layer 2: Hook statement */}
        <div ref={hookRef} className="scroll-layer hook-layer" style={{ opacity: 0 }}>
          <HookLayer />
        </div>

        {/* Layer 3: Full content */}
        <div ref={contentRef} className="scroll-layer content-layer" style={{ opacity: 0 }}>
          <ContentLayer />
        </div>

        {/* Bottom vignette */}
        <div className="hero-bottom-fade bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
      </div>
    </section>
  );
}
