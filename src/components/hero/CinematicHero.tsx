"use client";

import {
  useRef,
  useState,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { hero, ctaCopy } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import {
  DecryptText,
  RotatingText,
  CountUpValue,
  Reveal,
} from "@/components/motion";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import BlurText from "@/components/ui/BlurText";
import HeroBackground from "./HeroBackground";
import IntroBackground from "./IntroBackground";
import LogoWriteIntro from "./LogoWriteIntro";
import type { LogoWriteIntroHandle } from "./LogoWriteIntro";
import "./hero.css";

// Lazy-load R3F canvas — keeps Three.js out of critical path
const Logo3D = lazy(() => import("./Logo3D"));

/* ── Timing constants (seconds) ──
 * Adjust these to change intro pacing quickly.
 */
const T_WRITE_START = 0.2;
const T_WRITE_DURATION = 1.3;
const T_BG_START = 0.6;
const T_BG_DURATION = 1.0;
const T_CROSSFADE_START = 1.6;
const T_SVG_FADEOUT_DELAY = 0.2;
const T_SVG_FADEOUT_DURATION = 0.5;
const T_BG_FADEOUT_DELAY = 0.3;
const T_BG_FADEOUT_DURATION = 0.7;
const T_3D_FADEIN_DELAY = 0.4;
const T_3D_FADEIN_DURATION = 0.7;
const T_CONTENT_START = 2.3;
const T_CONTENT_DURATION = 0.5;
const T_LOGO_SETTLE_DURATION = 0.8;

// Mobile: shortened timings
const T_MOBILE_WRITE_DURATION = 0.8;
const T_MOBILE_CONTENT_START = 1.4;

// Breakpoint for mobile behavior (no 3D)
const MOBILE_BREAKPOINT = 768;

/* ── Hero content (shared between intro and static render) ── */

function HeroContent() {
  return (
    <>
      <Reveal>
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
      </Reveal>

      <BlurText
        text={hero.headline}
        delay={200}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--text-primary)]"
        style={{ textShadow: "0 2px 18px rgba(0,0,0,0.25)" }}
      />

      <Reveal
        delay={0.6}
        className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-[720px] mx-auto leading-[1.5]"
      >
        <DecryptText
          text={hero.subheadline}
          delayMs={600}
          durationMs={1000}
        />
      </Reveal>

      <Reveal
        delay={0.9}
        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
      >
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
      </Reveal>

      <Reveal
        delay={1.2}
        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-[var(--text-muted)]"
      >
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
      </Reveal>
    </>
  );
}

/* ── Main component ── */

export default function CinematicHero() {
  const reduced = usePrefersReducedMotionSafe();
  const [introComplete, setIntroComplete] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);
  const [mount3D, setMount3D] = useState(false);
  const [animate3DIn, setAnimate3DIn] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Refs for GSAP targets
  const logoWriteRef = useRef<LogoWriteIntroHandle>(null);
  const introBackdropRef = useRef<HTMLDivElement>(null);
  const logo3DRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Session check + mobile detection on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("heroIntroSeen")) {
      setSkipIntro(true);
      setIntroComplete(true);
    }
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
  }, []);

  // GSAP timeline
  useEffect(() => {
    if (reduced || skipIntro || introComplete) return;

    // Wait one tick for refs to populate
    const raf = requestAnimationFrame(() => {
      const imgEl = logoWriteRef.current?.imgEl;
      const glowEl = logoWriteRef.current?.glowEl;
      const containerEl = logoWriteRef.current?.containerEl;
      const backdrop = introBackdropRef.current;
      const content = contentRef.current;

      if (!imgEl || !containerEl) return;

      const mobile = window.innerWidth < MOBILE_BREAKPOINT;
      const writeDuration = mobile
        ? T_MOBILE_WRITE_DURATION
        : T_WRITE_DURATION;
      const contentStart = mobile
        ? T_MOBILE_CONTENT_START
        : T_CONTENT_START;

      const tl = gsap.timeline({
        onComplete: () => {
          setIntroComplete(true);
          try {
            sessionStorage.setItem("heroIntroSeen", "true");
          } catch {}
          tl.kill();
        },
      });
      timelineRef.current = tl;

      /* ── Phase B: SVG Write-On ── */
      tl.addLabel("write", T_WRITE_START);

      // Clip-path reveal: left → right
      tl.fromTo(
        imgEl,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: writeDuration,
          ease: "power2.inOut",
        },
        "write"
      );

      // Glow bar follows clip edge
      if (glowEl) {
        tl.fromTo(
          glowEl,
          { opacity: 0, left: "0%" },
          {
            opacity: 0.8,
            left: "50%",
            duration: writeDuration * 0.6,
            ease: "power1.in",
          },
          "write"
        );
        tl.to(
          glowEl,
          {
            opacity: 0,
            left: "100%",
            duration: writeDuration * 0.4,
            ease: "power1.out",
          },
          `write+=${writeDuration * 0.6}`
        );
      }

      /* ── Phase C: Intro Background ── */
      if (backdrop && !mobile) {
        tl.addLabel("background", T_BG_START);
        tl.to(
          backdrop,
          {
            opacity: 1,
            duration: T_BG_DURATION,
            ease: "power1.inOut",
          },
          "background"
        );
      }

      /* ── Phase D: Crossfade SVG → 3D ── */
      if (!mobile) {
        tl.addLabel("crossfade", T_CROSSFADE_START);

        // Mount the R3F Canvas
        tl.call(
          () => {
            setMount3D(true);
          },
          [],
          "crossfade"
        );

        // Fade out SVG write container
        tl.to(
          containerEl,
          {
            opacity: 0,
            duration: T_SVG_FADEOUT_DURATION,
            ease: "power1.inOut",
          },
          `crossfade+=${T_SVG_FADEOUT_DELAY}`
        );

        // Fade out intro backdrop
        if (backdrop) {
          tl.to(
            backdrop,
            {
              opacity: 0,
              duration: T_BG_FADEOUT_DURATION,
              ease: "power1.inOut",
            },
            `crossfade+=${T_BG_FADEOUT_DELAY}`
          );
        }

        // Trigger 3D animation + fade in
        tl.call(
          () => {
            setAnimate3DIn(true);
          },
          [],
          `crossfade+=${T_3D_FADEIN_DELAY}`
        );

        // Fade in 3D canvas (use a function target since ref may mount late)
        tl.to(
          () => logo3DRef.current,
          {
            opacity: 1,
            duration: T_3D_FADEIN_DURATION,
            ease: "power1.out",
          },
          `crossfade+=${T_3D_FADEIN_DELAY}`
        );
      } else {
        // Mobile: just fade out the SVG write
        tl.to(
          containerEl,
          {
            opacity: 0,
            duration: 0.4,
            ease: "power1.inOut",
          },
          `${T_WRITE_START + writeDuration}`
        );
      }

      /* ── Phase E: Content Reveal ── */
      tl.addLabel("content", contentStart);

      if (content) {
        tl.to(
          content,
          {
            opacity: 1,
            duration: T_CONTENT_DURATION,
            ease: "power1.out",
          },
          "content"
        );
      }

      // 3D logo settles: subtle scale-down and shift up
      if (!mobile) {
        tl.to(
          () => logo3DRef.current,
          {
            scale: 0.85,
            y: "-10%",
            duration: T_LOGO_SETTLE_DURATION,
            ease: "power2.out",
          },
          "content"
        );
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };
  }, [reduced, skipIntro, introComplete]);

  // Handle Logo3D ready callback
  const onLogo3DReady = useCallback(() => {
    // Logo geometry loaded — 3D fade-in is handled by GSAP timeline
  }, []);

  // Determine if we should show the static final state
  const showStatic = reduced || skipIntro || introComplete;

  return (
    <section className="cinematic-hero pt-20">
      {/* ── Intro layers (only during intro) ── */}
      {!showStatic && (
        <>
          <LogoWriteIntro ref={logoWriteRef} />
          <IntroBackground ref={introBackdropRef} />
        </>
      )}

      {/* ── 3D Logo (lazy-loaded, desktop only) ── */}
      {mount3D && !isMobile && (
        <Suspense fallback={null}>
          <Logo3D
            ref={logo3DRef}
            animateIn={animate3DIn}
            onReady={onLogo3DReady}
          />
        </Suspense>
      )}

      {/* ── Post-intro Aurora background ── */}
      <div className="hero-bg-layer">
        <HeroBackground />
      </div>

      {/* ── Overlay gradient ── */}
      <div className="hero-overlay bg-[linear-gradient(180deg,rgba(6,10,8,0.28)_0%,rgba(6,10,8,0.42)_52%,rgba(6,10,8,0.58)_100%)]" />

      {/* ── Hero content ── */}
      <div
        ref={contentRef}
        className={`mx-auto max-w-5xl px-6 text-center ${
          showStatic ? "hero-content-wrapper visible" : "hero-content-wrapper"
        }`}
      >
        <HeroContent />
      </div>

      {/* ── Bottom vignette ── */}
      <div className="hero-bottom-fade bg-[linear-gradient(180deg,rgba(8,14,12,0)_0%,rgba(8,14,12,0.26)_60%,rgba(8,14,12,0.40)_100%)]" />
    </section>
  );
}
