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
            else setCurrent(target);
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

const ACTIVE_CLIENTS = [
  { alt: "Triple W Rentals",   src: "/images/logos/triplew.png" },
  { alt: "Culture Barbershop", src: "/images/logos/culture.png" },
  { alt: "Elite Barbershop",   src: "/images/logos/elite.png" },
  { alt: "Absolute Painting",  src: "/images/logos/absolute.png" },
  { alt: "Centre Dentaire",    src: "/images/logos/dentaire.png" },
];

const METRICS = [
  { value: 32,  prefix: "$", unit: "",      label: "Avg cost per qualified call"      },
  { value: 4,   prefix: "",  unit: "",      label: "Active client systems"            },
  { value: 10,  prefix: "",  unit: "days",  label: "Median time to first booked call" },
];

// ─── Beam presets — tuned per breakpoint ────────────────────────────────────
// glowAmount is the primary inner-light lever: it drives the tanh remapping
// scale in the shader (col = tanh(col * glowAmount / widthNorm)). Higher values
// push the core into tanh's steep zone → brighter highlights, richer centre.
// Outer haze stays in the linear zone and remains restrained.
const BEAM_PRESETS = {
  desktop: {
    topColor: "#D4AC50",
    intensity: 0.78,
    glowAmount: 0.0032,
    pillarWidth: 2.7,
    pillarHeight: 0.27,
    noiseIntensity: 0.07,
    containerWidth: "58%",
  },
  tablet: {
    topColor: "#CCA840",
    intensity: 0.68,
    glowAmount: 0.0028,
    pillarWidth: 2.4,
    pillarHeight: 0.27,
    noiseIntensity: 0.07,
    containerWidth: "60%",
  },
  mobile: {
    topColor: "#D4A840",
    intensity: 0.92,
    glowAmount: 0.0046,
    pillarWidth: 3.2,
    pillarHeight: 0.26,
    noiseIntensity: 0.07,
    containerWidth: "100%",
  },
};

type BeamPreset = {
  topColor: string;
  intensity: number;
  glowAmount: number;
  pillarWidth: number;
  pillarHeight: number;
  noiseIntensity: number;
  containerWidth: string;
};

// ═══════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
  const [beam, setBeam] = useState<BeamPreset>(BEAM_PRESETS.desktop);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBeam(w < 640 ? BEAM_PRESETS.mobile : w < 1024 ? BEAM_PRESETS.tablet : BEAM_PRESETS.desktop);
    };
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className="relative flex flex-col bg-[#0D0B09] overflow-hidden"
      style={{ minHeight: "100svh" }}
      aria-label="Hero"
    >

      {/* ── LightPillar background — right-side visual zone ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: beam.containerWidth,
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <LightPillar
          topColor={beam.topColor}
          bottomColor="#1C2535"
          intensity={beam.intensity}
          rotationSpeed={0.16}
          glowAmount={beam.glowAmount}
          pillarWidth={beam.pillarWidth}
          pillarHeight={beam.pillarHeight}
          noiseIntensity={beam.noiseIntensity}
          pillarRotation={9}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Left fade — softened multi-stop curve for organic beam integration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(to right, #0D0B09 0%, #0D0B09 32%, rgba(13,11,9,0.93) 46%, rgba(13,11,9,0.30) 60%, rgba(13,11,9,0.08) 70%, transparent 78%)",
        }}
      />

      {/* Mobile overlay — text always on dark, lowered to let beam glow through */}
      <div
        aria-hidden="true"
        className="lg:hidden"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          background: "rgba(13,11,9,0.28)",
        }}
      />

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div
        className="relative flex-1 flex flex-col justify-center"
        style={{ zIndex: 10, paddingTop: "var(--nav-h, 72px)" }}
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row lg:items-center">

          {/* LEFT: All text content — max 560px, sits on pure dark */}
          <div className="flex flex-col w-full lg:max-w-[560px] xl:max-w-[580px] py-16 lg:py-24">

            {/* Eyebrow */}
            <div
              className="hero-enter flex items-center gap-3"
              style={{ marginBottom: "1.5rem", animationDelay: "0.1s" }}
            >
              <div
                className="h-px w-5 flex-shrink-0"
                style={{ background: "rgba(212,168,83,0.5)" }}
              />
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.26em",
                  textTransform: "uppercase",
                  color: "#8A7E74",
                }}
              >
                Growth Infrastructure&nbsp;•&nbsp;Service Businesses
              </span>
            </div>

            {/* H1 */}
            <h1
              className="hero-enter font-bold text-[#F5F0E8]"
              style={{
                fontSize: "clamp(2.65rem, 4.6vw, 4.35rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.038em",
                marginBottom: "1.5rem",
                animationDelay: "0.22s",
              }}
            >
              Growth Infrastructure Behind More Qualified Calls
            </h1>

            {/* Proof line — left bar frames it as an evidence moment */}
            <p
              className="hero-enter"
              style={{
                fontSize: "1rem",
                lineHeight: 1.6,
                letterSpacing: "-0.012em",
                color: "#A69D8D",
                marginBottom: "1rem",
                paddingLeft: "0.875rem",
                borderLeft: "2px solid rgba(212,168,83,0.28)",
                animationDelay: "0.36s",
              }}
            >
              <span style={{ color: "#D4A853", fontWeight: 700 }}>$41,085</span>
              {" "}generated from{" "}
              <span style={{ color: "#C8A05A", fontWeight: 500 }}>$900</span>
              {" "}in ad spend — within 30 days.
            </p>

            {/* Mechanism line — closes the conceptual gap between headline and proof */}
            <p
              className="hero-enter"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.58,
                letterSpacing: "-0.01em",
                color: "#756D63",
                marginBottom: "2.5rem",
                animationDelay: "0.46s",
              }}
            >
              Web, search, ads, and follow-up — built into one client acquisition system.
            </p>

            {/* CTA cluster */}
            <div
              className="hero-enter flex flex-col items-start gap-2.5"
              style={{ animationDelay: "0.56s" }}
            >
              <a
                href="#book-call"
                className="group inline-flex items-center gap-2.5 rounded-[0.6rem] font-semibold transition-colors duration-150 bg-[#F0EBE0] hover:bg-[#EAE4D8] text-[#0D0B09]"
                style={{
                  fontSize: "0.975rem",
                  padding: "0.85rem 1.75rem",
                  letterSpacing: "-0.012em",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.09), 0 1px 0 0 rgba(212,168,83,0.10)",
                }}
              >
                See If Your Business Qualifies
                <svg
                  className="w-[15px] h-[15px] transition-transform duration-150 group-hover:translate-x-[2px]"
                  style={{ opacity: 0.52 }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <span
                style={{
                  fontSize: "0.84rem",
                  color: "#8A7E74",
                  letterSpacing: "-0.008em",
                }}
              >
                Fast diagnosis. Clear next step. No pressure.
              </span>
            </div>
          </div>

          {/*
           * RIGHT: Visual receiving zone (flex-1)
           * ─────────────────────────────────────────────────────────────
           * This column holds no DOM content — the LightPillar in LAYER 2
           * provides all visual energy here. Its absolute positioning
           * means it renders behind this flex row, in the right zone.
           *
           * If you want to add foreground elements on the right (a floating
           * card, a data readout, a badge), place them inside this div.
           * They will appear above the WebGL background (z-10 context).
           * ─────────────────────────────────────────────────────────────
           */}
          <div className="hidden lg:block flex-1 min-w-0" aria-hidden="true" />
        </div>
      </div>

      {/*
       * ─────────────────────────────────────────────────────────────────
       * CONFIDENCE RAIL
       *
       * Solid bg-[#0D0B09] with hairline border-t.
       * Anchored to the bottom of the flex column.
       * Sits above the WebGL layer (z-10) — no background bleed possible.
       * ─────────────────────────────────────────────────────────────────
       */}
      <div
        className="relative w-full"
        style={{
          zIndex: 10,
          background: "#0D0B09",
          borderTop: "1px solid rgba(255,255,255,0.065)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 sm:gap-0"
            style={{ padding: "1.625rem 0" }}
          >

            {/* Metrics — gap-5 provides mobile spacing; sm:gap-0 lets dividers take over */}
            <div className="flex items-center gap-5 sm:gap-0">
              {METRICS.map((m, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && (
                    <div
                      className="hidden sm:block flex-shrink-0"
                      style={{
                        width: 1,
                        height: 30,
                        background: "rgba(255,255,255,0.07)",
                        margin: "0 1.75rem",
                      }}
                    />
                  )}
                  <div>
                    <div
                      className="font-semibold text-[#F5F0E8] leading-none flex items-baseline gap-1.5"
                      style={{
                        fontSize: "clamp(1.38rem, 2.1vw, 1.72rem)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      <AnimatedNumber
                        target={m.value}
                        prefix={m.prefix}
                        suffix=""
                      />
                      {m.unit && (
                        <span style={{
                          fontSize: "0.55em",
                          fontWeight: 400,
                          color: "#8A7E74",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                        }}>
                          {m.unit}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "0.68rem",
                        color: "#756D63",
                        letterSpacing: "0.055em",
                        textTransform: "uppercase",
                        marginTop: "0.375rem",
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rail divider */}
            <div
              className="hidden sm:block flex-shrink-0"
              style={{
                width: 1,
                height: 40,
                background: "rgba(255,255,255,0.07)",
                margin: "0 1.75rem",
              }}
            />

            {/* Active clients */}
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
                Active Clients
              </span>

              <div className="flex items-center">
                {ACTIVE_CLIENTS.map((logo, i) => (
                  <div
                    key={i}
                    className="relative rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                    title={logo.alt}
                    style={{
                      width: 26,
                      height: 26,
                      background: "#181410",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                      marginLeft: i > 0 ? -8 : 0,
                      zIndex: ACTIVE_CLIENTS.length - i,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{
                        width: 15,
                        height: 15,
                        objectFit: "contain",
                        opacity: 0.76,
                      }}
                    />
                  </div>
                ))}
              </div>

              <span
                style={{
                  fontSize: "0.65rem",
                  color: "#5A5452",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                +2 in build
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
