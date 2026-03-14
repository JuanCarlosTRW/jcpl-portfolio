"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import LightPillar from "./LightPillar";

const ACTIVE_CLIENTS = [
  { alt: "Triple W Rentals",   src: "/images/logos/triplew.png" },
  { alt: "Culture Barbershop", src: "/images/logos/culture.png" },
  { alt: "Elite Barbershop",   src: "/images/logos/elite.png" },
  { alt: "Absolute Painting",  src: "/images/logos/absolute.png" },
  { alt: "Centre Dentaire",    src: "/images/logos/dentaire.png" },
];

// ─── Static proof blocks — verified, no zero-state, no animation ────────────
const METRICS = [
  { display: "$41,085", sublabel: "from $900 ad spend"          },
  { display: "$33",     sublabel: "avg cost per qualified call"  },
  { display: "11 days", sublabel: "median to first booked call" },
];

// ─── Beam presets — tuned per breakpoint ─────────────────────────────────────
// glowAmount drives tanh remapping: higher = richer core, restrained outer haze.
// desktop: text left / terminal right — gradient opened earlier to let pillar
//          atmosphere bleed through the semi-transparent card stack on the right.
// tablet:  same pattern, lighter overlay.
// mobile:  text stacks top; ray recomposed as focused core in centre-right lower
//          zone; vertical gradient protects text, permits ray in lower viewport.
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
    // Opened ~3% earlier on the right to let atmosphere bleed through card stack
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

// ─── Acquisition Terminal — right-side system visualization ──────────────────
// Three elements: status pill → proof card → connector → system card.
// All float in the LightPillar atmosphere. Semi-transparent glass backgrounds
// let the ambient gold from the pillar bleed through without card clutter.
// Desktop only — hidden on tablet/mobile where vertical layout takes over.

function ConnectorLine() {
  return (
    <div
      aria-hidden="true"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1px 0",
      }}
    >
      <div
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(212,168,83,0.22)",
          flexShrink: 0,
        }}
      />
      <div
        style={{
          width: 1,
          height: 22,
          background:
            "linear-gradient(to bottom, rgba(212,168,83,0.18), rgba(212,168,83,0.06))",
        }}
      />
      <div
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: "rgba(212,168,83,0.12)",
          flexShrink: 0,
        }}
      />
    </div>
  );
}

function AcquisitionTerminal() {
  const CARD_BASE = {
    background: "rgba(13, 11, 9, 0.80)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.062)",
    borderRadius: 10,
    padding: "20px 24px",
    width: "100%",
  } as const;

  const LABEL = {
    fontSize: "9px",
    fontWeight: 600,
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "rgba(212,168,83,0.50)",
    display: "block",
    marginBottom: "14px",
  } as const;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        width: 296,
      }}
    >
      {/* Status pill — signals live, not hypothetical */}
      <div
        className="hero-enter"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 7,
          marginBottom: 13,
          alignSelf: "flex-start",
          animationDelay: "0.62s",
        }}
      >
        {/* Pulsing active indicator */}
        <span
          aria-hidden="true"
          style={{
            position: "relative",
            display: "inline-flex",
            width: 7,
            height: 7,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: "rgba(45,107,79,0.35)",
              animation: "availability-pulse 2.4s cubic-bezier(0,0,0.2,1) infinite",
            }}
          />
          <span
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: "#2D6B4F",
            }}
          />
        </span>
        <span
          style={{
            fontSize: "9.5px",
            letterSpacing: "0.20em",
            textTransform: "uppercase",
            color: "#756D63",
            fontWeight: 500,
          }}
        >
          Infrastructure Active
        </span>
      </div>

      {/* Primary proof card — the commercial anchor */}
      <div
        className="hero-enter"
        style={{
          ...CARD_BASE,
          borderColor: "rgba(212,168,83,0.13)",
          boxShadow:
            "0 0 32px rgba(212,168,83,0.045), 0 2px 14px rgba(0,0,0,0.55)",
          animationDelay: "0.72s",
        }}
      >
        <span style={LABEL}>Verified Result — 30 Days</span>

        <div
          style={{
            fontSize: "2.55rem",
            fontWeight: 700,
            letterSpacing: "-0.048em",
            color: "#F5F0E8",
            lineHeight: 1,
            fontVariantNumeric: "tabular-nums",
            marginBottom: 3,
          }}
        >
          $41,085
        </div>

        <div
          style={{
            fontSize: "0.73rem",
            color: "#756D63",
            letterSpacing: "-0.007em",
            marginBottom: 15,
          }}
        >
          generated
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.052)",
            marginBottom: 13,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.78rem",
              color: "#A69D8D",
              letterSpacing: "-0.010em",
            }}
          >
            from{" "}
            <span style={{ color: "#D4A853", fontWeight: 600 }}>$900</span>{" "}
            ad spend
          </span>
          <span
            style={{
              fontSize: "0.62rem",
              color: "#5E5650",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            HVAC · Local
          </span>
        </div>
      </div>

      {/* Connector — signals these are sequential, not isolated cards */}
      <div style={{ paddingLeft: 18 }}>
        <ConnectorLine />
      </div>

      {/* System architecture card — the infrastructure claim made tangible */}
      <div
        className="hero-enter"
        style={{
          ...CARD_BASE,
          animationDelay: "0.86s",
        }}
      >
        <span style={LABEL}>Growth System</span>

        <div
          style={{
            display: "flex",
            gap: 5,
            alignItems: "center",
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          {["Google Ads", "Local SEO", "Conversion Web"].map((layer, i) => (
            <span
              key={i}
              style={{
                fontSize: "0.675rem",
                color: "#8A7E74",
                background: "rgba(255,255,255,0.040)",
                border: "1px solid rgba(255,255,255,0.058)",
                borderRadius: 4,
                padding: "3px 8px",
                letterSpacing: "-0.005em",
                whiteSpace: "nowrap",
              }}
            >
              {layer}
            </span>
          ))}
        </div>

        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.042)",
            marginBottom: 11,
          }}
        />

        <div
          style={{
            fontSize: "0.725rem",
            color: "#756D63",
            letterSpacing: "-0.006em",
          }}
        >
          One owner.{" "}
          <span style={{ color: "#A69D8D" }}>No handoffs.</span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
export default function HeroSection() {
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

      {/* ── LightPillar background — right-side atmosphere ── */}
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

      {/* Horizontal fade — protects left text column, opens toward right card zone */}
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

      {/* Sub-desktop overlay — vertical (mobile) or flat (tablet) */}
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

      {/* ─── MAIN CONTENT ──────────────────────────────────────────────── */}
      <div
        className="relative flex-1 flex flex-col justify-center"
        style={{ zIndex: 10, paddingTop: "var(--nav-h, 72px)" }}
      >
        <div className="max-w-[1280px] mx-auto w-full px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row lg:items-center">

          {/* LEFT: All text content — max 520px, sits on pure dark */}
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
                Growth Infrastructure&nbsp;•&nbsp;Service Businesses
              </span>
            </div>

            {/* H1 — two visual beats: outcome (dominant) → mechanism (secondary) */}
            <h1
              className="hero-enter font-bold"
              style={{
                marginBottom: "1.375rem",
                animationDelay: "0.22s",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.8rem, 4.8vw, 4.5rem)",
                  lineHeight: 1.04,
                  letterSpacing: "-0.040em",
                  color: "#F5F0E8",
                  marginBottom: "0.18em",
                }}
              >
                More Qualified Calls.
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(2.25rem, 3.8vw, 3.65rem)",
                  lineHeight: 1.07,
                  letterSpacing: "-0.036em",
                  color: "rgba(245,240,232,0.68)",
                }}
              >
                Built as Infrastructure.
              </span>
            </h1>

            {/* Proof line — left bar frames it as an evidence moment */}
            <p
              className="hero-enter"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                letterSpacing: "-0.012em",
                color: "#A69D8D",
                marginBottom: "0.875rem",
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

            {/* Mechanism line — tightened: ownership signal replaces vendor-list framing */}
            <p
              className="hero-enter"
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.58,
                letterSpacing: "-0.01em",
                color: "#756D63",
                paddingLeft: "0.875rem",
                marginBottom: "2.25rem",
                animationDelay: "0.46s",
              }}
            >
              Google Ads, SEO, and conversion websites — one system, one owner, zero handoffs.
            </p>

            {/* CTA cluster */}
            <div
              className="hero-enter flex flex-col items-start gap-3"
              style={{ animationDelay: "0.56s" }}
            >
              {/* Primary CTA — gold, confident, not cream */}
              <a
                href="#book-call"
                className="inline-flex items-center gap-2.5 rounded-[0.6rem] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(212,168,83,0.50)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B09]"
                onMouseEnter={() => setCtaHover(true)}
                onMouseLeave={() => {
                  setCtaHover(false);
                  setCtaPressed(false);
                }}
                onMouseDown={() => setCtaPressed(true)}
                onMouseUp={() => setCtaPressed(false)}
                style={{
                  fontSize: "0.9375rem",
                  padding: "0.875rem 1.75rem",
                  letterSpacing: "-0.012em",
                  backgroundColor: ctaPressed
                    ? "#B08820"
                    : ctaHover
                    ? "#C49A2A"
                    : "#D4A853",
                  color: "#0D0B09",
                  boxShadow: ctaPressed
                    ? "0 1px 2px rgba(0,0,0,0.55), 0 0 0 1px rgba(212,168,83,0.22), inset 0 1px 3px rgba(0,0,0,0.10)"
                    : ctaHover
                    ? "0 2px 18px rgba(212,168,83,0.30), 0 0 0 1px rgba(212,168,83,0.24), 0 6px 28px rgba(0,0,0,0.30)"
                    : "0 1px 4px rgba(0,0,0,0.50), 0 0 0 1px rgba(212,168,83,0.16), 0 0 22px rgba(212,168,83,0.10)",
                  transform: ctaPressed ? "translateY(1px)" : "translateY(0)",
                  transition:
                    "background-color 150ms ease, box-shadow 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 100ms ease",
                }}
              >
                See If Your Business Qualifies
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              {/* Secondary row — confident, not apologetic */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#6B6360",
                    letterSpacing: "-0.008em",
                  }}
                >
                  One call. Clear next step.
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
                  href="/results"
                  style={{
                    fontSize: "0.8rem",
                    color: "#6B6360",
                    letterSpacing: "-0.006em",
                    textDecoration: "none",
                    transition: "color 180ms ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#A69D8D";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#6B6360";
                  }}
                >
                  See results →
                </Link>
              </div>
            </div>
          </div>

          {/*
           * RIGHT: Acquisition Terminal
           * ─────────────────────────────────────────────────────────────
           * Desktop only. Floats in the LightPillar atmosphere zone.
           * Three connected elements: status signal → proof card → system card.
           * Semi-transparent glass backgrounds let the amber atmosphere from
           * the WebGL pillar read through, softly grounding the cards in the
           * same cinematic space rather than fighting for contrast against it.
           * ─────────────────────────────────────────────────────────────
           */}
          <div
            className="hidden lg:flex flex-1 min-w-0 items-center justify-end"
          >
            <div style={{ paddingRight: "1.5rem" }}>
              <AcquisitionTerminal />
            </div>
          </div>

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
          borderTop: "1px solid rgba(255,255,255,0.062)",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-0"
            style={{ padding: "1.5rem 0" }}
          >

            {/* Metrics — static verified proof blocks */}
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
                Active Clients
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
                      style={{
                        width: 16,
                        height: 16,
                        objectFit: "contain",
                        opacity: 0.70,
                      }}
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
                +2 in build
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
