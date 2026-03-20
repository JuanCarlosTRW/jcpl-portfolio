"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LightPillar from "./LightPillar";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const ACTIVE_CLIENTS = [
  { alt: "Triple W Rentals",   src: "/images/logos/triplew.png" },
  { alt: "Culture Barbershop", src: "/images/logos/culture.png" },
  { alt: "Elite Barbershop",   src: "/images/logos/elite.png" },
  { alt: "Absolute Painting",  src: "/images/logos/absolute.png" },
  { alt: "Centre Dentaire",    src: "/images/logos/dentaire.png" },
];

// ─── Beam presets — tuned per breakpoint ─────────────────────────────────────
const BEAM_PRESETS = {
  desktop: {
    topColor: "#D4A853",
    intensity: 0.57,
    glowAmount: 0.0028,
    pillarWidth: 2.7,
    pillarHeight: 0.30,
    noiseIntensity: 0.045,
    pillarRotation: 9,
    containerWidth: "60%",
    fadeGradient:
      "linear-gradient(to right, #0D0B09 0%, #0D0B09 30%, rgba(13,11,9,0.92) 41%, rgba(13,11,9,0.30) 53%, rgba(13,11,9,0.07) 64%, transparent 72%)",
    overlayStyle: "rgba(13,11,9,0.00)",
  },
  tablet: {
    topColor: "#D4A853",
    intensity: 0.48,
    glowAmount: 0.0024,
    pillarWidth: 2.4,
    pillarHeight: 0.30,
    noiseIntensity: 0.045,
    pillarRotation: 9,
    containerWidth: "60%",
    fadeGradient:
      "linear-gradient(to right, #0D0B09 0%, #0D0B09 30%, rgba(13,11,9,0.88) 43%, rgba(13,11,9,0.26) 56%, rgba(13,11,9,0.07) 67%, transparent 76%)",
    overlayStyle: "rgba(13,11,9,0.28)",
  },
  mobile: {
    topColor: "#D4A853",
    intensity: 0.40,
    glowAmount: 0.0022,
    pillarWidth: 1.8,
    pillarHeight: 0.34,
    noiseIntensity: 0.025,
    pillarRotation: 14,
    containerWidth: "100%",
    fadeGradient:
      "linear-gradient(to right, #0D0B09 0%, #0D0B09 28%, rgba(13,11,9,0.82) 42%, rgba(13,11,9,0.22) 58%, rgba(13,11,9,0.05) 74%, transparent 85%)",
    overlayStyle:
      "linear-gradient(to bottom, rgba(13,11,9,0.72) 0%, rgba(13,11,9,0.48) 30%, rgba(13,11,9,0.16) 62%, rgba(13,11,9,0.05) 82%, transparent 100%)",
  },
};

type BeamPreset = {
  topColor: string;
  intensity: number;
  glowAmount: number;
  pillarWidth: number;
  pillarHeight: number;
  noiseIntensity: number;
  pillarRotation: number;
  containerWidth: string;
  fadeGradient: string;
  overlayStyle: string;
};

// ─── Clean Proof Badge ──────────────────────────────────────────────────────
function ProofCard({ vc }: { vc: typeof translations["en"]["homepage"]["verifiedCard"] }) {
  const stats = [
    { num: "46×", label: vc.returnOnAd },
    { num: "$33", label: vc.perQualifiedCall },
    { num: "11 days", label: vc.toFirstBookedCall },
  ];
  return (
    <div
      className="hero-enter"
      style={{
        background: "#151210",
        border: "1px solid rgba(212,168,83,0.20)",
        borderRadius: 12,
        padding: "28px 32px",
        maxWidth: 360,
        width: "100%",
        animationDelay: "0.62s",
      }}
    >
      <p
        style={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#D4A853",
          marginBottom: "16px",
        }}
      >
        {vc.title}
      </p>
      <div
        style={{
          fontSize: "clamp(2.2rem, 3.5vw, 2.75rem)",
          fontWeight: 700,
          letterSpacing: "-0.048em",
          color: "#F5F0E8",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
          marginBottom: "2px",
        }}
      >
        $41,085
      </div>
      <div style={{ fontSize: "0.75rem", color: "#756D63", marginBottom: "10px" }}>
        {vc.revenue}
      </div>
      <div style={{ fontSize: "0.8125rem", color: "#A69D8D", marginBottom: "4px" }}>
        {vc.fromAdSpend}
      </div>
      <div
        style={{
          display: "inline-block",
          fontSize: "0.675rem",
          color: "#5E5650",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}
      >
        {vc.location}
      </div>
      {/* Screenshot — live Google Ads dashboard */}
      <div
        style={{
          position: "relative",
          borderRadius: 7,
          overflow: "hidden",
          marginBottom: "12px",
        }}
      >
        <img
          src="https://static.wixstatic.com/media/62f926_492fa3904b904883bd7ff2023e2c28a9~mv2.png"
          alt="Google Ads account dashboard showing $41,085 in revenue"
          style={{ width: "100%", display: "block", borderRadius: 7 }}
          loading="lazy"
        />
        {/* Dark overlay so text beneath stays legible */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(13,11,9,0.52)",
            borderRadius: 7,
          }}
        />
      </div>
      <p
        style={{
          fontSize: "0.6rem",
          color: "#4A4540",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          marginBottom: "14px",
          lineHeight: 1.5,
        }}
      >
        {vc.screenshotLabel}
      </p>

      <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: "16px" }} />
      {stats.map(({ num, label }) => (
        <div
          key={num}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "10px",
          }}
        >
          <span
            style={{
              fontSize: "0.925rem",
              fontWeight: 600,
              color: "#F5F0E8",
              letterSpacing: "-0.018em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {num}
          </span>
          <span style={{ fontSize: "0.725rem", color: "#756D63", letterSpacing: "-0.004em" }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
  const { locale, lp } = useLocale();
  const t = translations[locale];
  const hero = t.homepage.hero;
  const vc = t.homepage.verifiedCard;
  const sb = t.homepage.statsBar;

  const METRICS = [
    { display: "$41,085", sublabel: sb.revenueLabel },
    { display: "$33",     sublabel: sb.costPerCall  },
    { display: "11 days", sublabel: sb.medianDays   },
  ];

  const [beam, setBeam] = useState<BeamPreset>(BEAM_PRESETS.desktop);
  const [ctaHover, setCtaHover] = useState(false);
  const [ctaPressed, setCtaPressed] = useState(false);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setBeam(
        w < 640
          ? BEAM_PRESETS.mobile
          : w < 1024
          ? BEAM_PRESETS.tablet
          : BEAM_PRESETS.desktop
      );
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
      {/* ── LightPillar background ── */}
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
          bottomColor="#0D0B09"
          intensity={beam.intensity}
          rotationSpeed={0.16}
          glowAmount={beam.glowAmount}
          pillarWidth={beam.pillarWidth}
          pillarHeight={beam.pillarHeight}
          noiseIntensity={beam.noiseIntensity}
          pillarRotation={beam.pillarRotation}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* Horizontal fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background: beam.fadeGradient,
        }}
      />

      {/* Sub-desktop overlay */}
      <div
        aria-hidden="true"
        className="lg:hidden"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          pointerEvents: "none",
          background: beam.overlayStyle,
        }}
      />

      {/* ─── MAIN CONTENT ── */}
      <div
        className="relative flex-1 flex flex-col justify-center"
        style={{ zIndex: 10, paddingTop: "var(--nav-h, 72px)" }}
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row lg:items-center">

          {/* LEFT: Text content */}
          <div className="flex flex-col w-full lg:max-w-[520px] xl:max-w-[540px] pt-10 pb-8 sm:pt-12 sm:pb-10 lg:py-24">

            {/* Eyebrow */}
            <div
              className="hero-enter flex items-center gap-3"
              style={{ marginBottom: "1.375rem", animationDelay: "0.1s" }}
            >
              <div
                className="h-px w-5 flex-shrink-0"
                style={{ background: "rgba(212,168,83,0.42)" }}
              />
              <span
                style={{
                  fontSize: "9.5px",
                  fontWeight: 600,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#7A7066",
                }}
              >
                {hero.eyebrow}
              </span>
            </div>

            {/* H1 */}
            <h1
              className="hero-enter font-bold"
              style={{ marginBottom: "1.375rem", animationDelay: "0.22s" }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.4rem, 4.2vw, 4rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.040em",
                  color: "#F5F0E8",
                  marginBottom: "0.18em",
                }}
              >
                {hero.h1Line1}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.0rem, 3.2vw, 3.2rem)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.036em",
                  color: "rgba(245,240,232,0.72)",
                }}
              >
                {hero.h1Line2}
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="hero-enter"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.55,
                letterSpacing: "-0.012em",
                color: "#D2C9B8",
                fontWeight: 700,
                marginBottom: "0.75rem",
                animationDelay: "0.36s",
              }}
            >
              {hero.subHeadline}
            </p>

            {/* Body text */}
            <p
              className="hero-enter"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.58,
                letterSpacing: "-0.01em",
                color: "#756D63",
                paddingLeft: "0.875rem",
                borderLeft: "2px solid rgba(212,168,83,0.18)",
                marginBottom: "2.25rem",
                animationDelay: "0.46s",
              }}
            >
              {hero.body}
            </p>

            {/* CTA cluster */}
            <div
              className="hero-enter flex flex-col items-start gap-3"
              style={{ animationDelay: "0.56s" }}
            >
              {/* Primary CTA */}
              <a
                href="#book-call"
                className="inline-flex items-center gap-2.5 rounded-[0.6rem] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(212,168,83,0.50)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B09]"
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => { setCtaHover(false); setCtaPressed(false); }}
                onMouseDown={() => setCtaPressed(true)}
                onMouseUp={() => setCtaPressed(false)}
                style={{
                  fontSize: "0.9375rem",
                  padding: "0.875rem 1.75rem",
                  letterSpacing: "-0.012em",
                  backgroundColor: ctaPressed ? "#B08820" : ctaHover ? "#C49A2A" : "#D4A853",
                  color: "#0D0B09",
                  boxShadow: ctaPressed
                    ? "0 1px 2px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,168,83,0.22), inset 0 1px 3px rgba(0,0,0,0.10)"
                    : ctaHover
                    ? "0 2px 18px rgba(212,168,83,0.30), 0 0 0 1px rgba(212,168,83,0.24), 0 6px 28px rgba(0,0,0,0.30)"
                    : "0 1px 4px rgba(0,0,0,0.50), 0 0 0 1px rgba(212,168,83,0.16), 0 0 22px rgba(212,168,83,0.10)",
                  transform: ctaPressed ? "translateY(1px)" : "translateY(0)",
                  transition: "background-color 150ms ease, box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 100ms ease",
                }}
              >
                {hero.cta}
                <svg
                  className="w-[14px] h-[14px]"
                  style={{
                    opacity: 0.75,
                    transform: ctaHover ? "translateX(3px)" : "translateX(0)",
                    transition: "transform 220ms ease",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Secondary row */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#6B6360",
                    letterSpacing: "-0.008em",
                  }}
                >
                  {hero.microCopy}
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    width: 1,
                    height: 12,
                    background: "rgba(255,255,255,0.08)",
                    flexShrink: 0,
                  }}
                />
                <Link
                  href={lp("/results")}
                  style={{
                    fontSize: "0.8rem",
                    color: "#6B6360",
                    letterSpacing: "-0.006em",
                    textDecoration: "none",
                    transition: "color 180ms ease",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.color = "#A69D8D"; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = "#6B6360"; }}
                >
                  {hero.seeResults}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Proof card (desktop only) */}
          <div className="hidden lg:flex flex-1 min-w-0 items-center justify-end">
            <div style={{ paddingRight: "1.5rem" }}>
              <ProofCard vc={vc} />
            </div>
          </div>

        </div>
      </div>

      {/* CONFIDENCE RAIL */}
      <div
        className="relative w-full"
        style={{
          zIndex: 10,
          background: "#0D0B09",
          borderTop: "1px solid rgba(255,255,255,0.062)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-0"
            style={{ padding: "1.5rem 0" }}
          >
            {/* Metrics */}
            <div className="flex items-center gap-5 sm:gap-0 flex-wrap hero-rail-metrics">
              {METRICS.map((m, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && (
                    <div
                      className="hidden sm:block flex-shrink-0"
                      style={{
                        width: 1,
                        height: 28,
                        background: "rgba(255,255,255,0.07)",
                        margin: "0 1.625rem",
                      }}
                    />
                  )}
                  <div>
                    <div
                      className="font-semibold text-[#F5F0E8] leading-none"
                      style={{
                        fontSize: "clamp(1.35rem, 2.0vw, 1.68rem)",
                        letterSpacing: "-0.032em",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {m.display}
                    </div>
                    <div
                      style={{
                        fontSize: "0.65rem",
                        color: "#756D63",
                        letterSpacing: "0.055em",
                        textTransform: "uppercase",
                        marginTop: "0.35rem",
                      }}
                    >
                      {m.sublabel}
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
                height: 36,
                background: "rgba(255,255,255,0.07)",
                margin: "0 1.625rem",
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
                {sb.activeClients}
              </span>
              <div className="flex items-center">
                {ACTIVE_CLIENTS.map((logo, i) => (
                  <div
                    key={i}
                    className="relative rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                    title={logo.alt}
                    style={{
                      width: 28,
                      height: 28,
                      background: "#181410",
                      border: "1.5px solid rgba(255,255,255,0.08)",
                      marginLeft: i > 0 ? -8 : 0,
                      zIndex: ACTIVE_CLIENTS.length - i,
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      style={{ width: 16, height: 16, objectFit: "contain", opacity: 0.70 }}
                    />
                  </div>
                ))}
              </div>
              <span
                style={{
                  fontSize: "0.65rem",
                  color: "#6B6360",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {sb.inBuild}
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
