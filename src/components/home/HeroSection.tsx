"use client";

import { useEffect, useRef, useState } from "react";
import LightPillar from "./LightPillar";

// ─── Animated counter (intersection-triggered) ─────────────────────────────
function AnimatedNumber({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCurrent(Math.floor(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {current.toLocaleString()}
      {suffix}
    </span>
  );
}

// ─── Client logo data ──────────────────────────────────────────────────────
const ACTIVE_CLIENTS = [
  { alt: "Triple W Rentals",   src: "/images/logos/triplew.png" },
  { alt: "Culture Barbershop", src: "/images/logos/culture.png" },
  { alt: "Elite Barbershop",   src: "/images/logos/elite.png" },
  { alt: "Absolute Painting",  src: "/images/logos/absolute.png" },
  { alt: "Centre Dentaire",    src: "/images/logos/dentaire.png" },
];

// ─── Confidence metrics ────────────────────────────────────────────────────
const METRICS = [
  { value: 32,  prefix: "$",  suffix: "",     label: "Avg cost per qualified call" },
  { value: 4,   prefix: "",   suffix: "",     label: "Active client systems"       },
  { value: 10,  prefix: "",   suffix: " days", label: "Median time to first booked call" },
];

// ═══════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col bg-[#0D0B09] overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
    >

      {/*
       * ══════════════════════════════════════════════════════
       * BACKGROUND ZONE — INSERT YOUR BACKGROUND CODE HERE
       *
       * This container is anchored to the right side of the hero.
       * On desktop (lg+) it covers ~68% width, right-aligned.
       * On mobile it is full-width with a dark top overlay.
       *
       * The CSS mask-image creates a hard-to-soft left edge so
       * the visual fades into the pure-dark left text column.
       * No gradient bleed reaches the text.
       *
       * To swap the background:
       *   1. Replace <LightPillar … /> below with your component
       *   2. Adjust maskImage stop percentages if needed
       * ══════════════════════════════════════════════════════
       */}
      <div
        className="absolute inset-y-0 right-0 z-0 pointer-events-none w-full lg:w-[68%]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 18%, black 38%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 18%, black 38%, black 100%)",
        }}
      >
        <LightPillar
          topColor="#2EE6A6"
          bottomColor="#1D4ED8"
          intensity={0.18}
          rotationSpeed={0.09}
          interactive={false}
          glowAmount={0.0018}
          pillarWidth={2.6}
          pillarHeight={0.36}
          noiseIntensity={0.09}
          mixBlendMode="screen"
          pillarRotation={-18}
          quality="medium"
        />
      </div>

      {/* Mobile dark overlay — text stays readable on small screens */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none lg:hidden"
        style={{ background: "rgba(13,11,9,0.72)" }}
      />

      {/*
       * ══════════════════════════════════════════════════════
       * CONTENT SAFE ZONE — left column always on pure dark
       * This soft reinforcer prevents any visual bleed into text.
       * ══════════════════════════════════════════════════════
       */}
      <div
        className="absolute inset-y-0 left-0 z-[2] pointer-events-none hidden lg:block"
        style={{
          width: "42%",
          background: "linear-gradient(to right, #0D0B09 82%, transparent 100%)",
        }}
      />

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div
        className="relative z-10 flex-1 flex flex-col justify-center"
        style={{ paddingTop: "var(--nav-h, 72px)" }}
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row lg:items-center">

          {/* LEFT: All text content */}
          <div className="flex flex-col w-full lg:max-w-[560px] xl:max-w-[580px] py-16 lg:py-24">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div
                className="h-px w-5 flex-shrink-0"
                style={{ background: "rgba(212,168,83,0.55)" }}
              />
              <span
                className="text-[10px] font-semibold uppercase"
                style={{
                  color: "#756D63",
                  letterSpacing: "0.26em",
                }}
              >
                Growth Infrastructure · Service Businesses
              </span>
            </div>

            {/* H1 — dominant, no subheadline on desktop */}
            <h1
              className="font-bold text-[#F5F0E8] mb-6"
              style={{
                fontSize: "clamp(2.65rem, 4.6vw, 4.35rem)",
                lineHeight: 1.045,
                letterSpacing: "-0.038em",
                maxWidth: "14ch",
              }}
            >
              Growth Infrastructure Behind More Qualified Calls
            </h1>

            {/* Proof line — editorial, grounded, no glow */}
            <p
              className="mb-10"
              style={{
                fontSize: "1.0rem",
                lineHeight: 1.6,
                letterSpacing: "-0.012em",
                color: "#A69D8D",
              }}
            >
              <span style={{ color: "#D4A853", fontWeight: 600 }}>$41,085</span>
              {" "}generated from{" "}
              <span style={{ color: "#D4A853", fontWeight: 600 }}>$900</span>
              {" "}in ad spend — within 30 days.
            </p>

            {/* CTA cluster */}
            <div className="flex flex-col items-start gap-3">
              <a
                href="#book-call"
                className="group inline-flex items-center gap-2.5 rounded-[0.6rem] font-semibold transition-colors duration-150 bg-[#F0EBE0] hover:bg-[#E7E1D5] text-[#0D0B09]"
                style={{
                  fontSize: "0.975rem",
                  padding: "0.85rem 1.75rem",
                  letterSpacing: "-0.012em",
                  boxShadow:
                    "0 1px 2px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)",
                }}
              >
                See If Your Business Qualifies
                <svg
                  className="w-[15px] h-[15px] transition-transform duration-150 group-hover:translate-x-[2px]"
                  style={{ opacity: 0.5 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Reassurance */}
              <span
                style={{
                  fontSize: "0.84rem",
                  color: "#756D63",
                  letterSpacing: "-0.008em",
                }}
              >
                Fast diagnosis. Clear next step. No pressure.
              </span>
            </div>
          </div>

          {/*
           * RIGHT: Visual area placeholder
           * ─────────────────────────────────────────────────────
           * This flex-1 column is intentionally empty on the DOM.
           * The LightPillar (above in z-0) provides all visual
           * energy in this zone. Any foreground elements you want
           * overlaid on the right — a floating card, a badge, a
           * metric callout — can go here inside this div.
           * ─────────────────────────────────────────────────────
           */}
          <div
            className="hidden lg:block flex-1 min-w-0"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* ─── CONFIDENCE RAIL ───────────────────────────────────────────── */}
      {/*
       * Anchored to the bottom of the hero.
       * bg-[#0D0B09] ensures it always reads on pure dark — no pillar bleed.
       * border-t provides the hairline separation from hero content.
       */}
      <div
        className="relative z-10 w-full bg-[#0D0B09]"
        style={{ borderTop: "1px solid rgba(255,255,255,0.055)" }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0 py-5">

            {/* Metrics row */}
            <div className="flex items-center gap-0">
              {METRICS.map((m, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && (
                    <div
                      className="hidden sm:block w-px h-8 mx-7 lg:mx-9 flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    />
                  )}
                  <div>
                    <div
                      className="font-semibold text-[#F5F0E8] leading-none"
                      style={{
                        fontSize: "clamp(1.35rem, 2vw, 1.65rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      <AnimatedNumber
                        target={m.value}
                        prefix={m.prefix}
                        suffix={m.suffix}
                      />
                    </div>
                    <div
                      className="mt-1.5"
                      style={{
                        fontSize: "0.69rem",
                        color: "#756D63",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical divider (desktop) */}
            <div
              className="hidden sm:block w-px h-9 flex-shrink-0 mx-8 lg:mx-10"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />

            {/* Active clients row */}
            <div className="flex items-center gap-3">
              <span
                style={{
                  fontSize: "0.62rem",
                  color: "#756D63",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  flexShrink: 0,
                }}
              >
                Active clients
              </span>

              {/* Avatar stack */}
              <div className="flex items-center" style={{ gap: "-1px" }}>
                {ACTIVE_CLIENTS.map((logo, i) => (
                  <div
                    key={i}
                    className="relative rounded-full overflow-hidden flex items-center justify-center"
                    title={logo.alt}
                    style={{
                      width: 26,
                      height: 26,
                      background: "#181410",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                      marginLeft: i > 0 ? -7 : 0,
                      zIndex: ACTIVE_CLIENTS.length - i,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{
                        width: 16,
                        height: 16,
                        objectFit: "contain",
                        opacity: 0.72,
                      }}
                    />
                  </div>
                ))}
              </div>

              <span
                style={{
                  fontSize: "0.72rem",
                  color: "#756D63",
                  letterSpacing: "-0.005em",
                }}
              >
                +2 active builds
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
