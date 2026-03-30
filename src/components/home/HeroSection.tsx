"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import "./hero-responsive.css";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

const TICKER_ITEMS = [
  { stat: "46x ROAS", detail: "Triple W Rentals", sub: "$41K from $900 in 30 days" },
  { stat: "90 new clients", detail: "Elite Barbershop", sub: "90 days" },
  { stat: "Page 1 Google", detail: "Culture Barbershop", sub: "under 60 days" },
];

export default function HeroSection() {
  const isMobile = useIsMobile();

  const tickerContent = (
    <>
      {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap hero-ticker">
          <span
            className="inline-block w-1 h-1 rounded-full flex-shrink-0"
            style={{ background: "#D4A853" }}
          />
          <span>
            <span style={{ color: "#D4A853" }}>{item.stat}</span>
            <span style={{ color: "rgba(240,234,214,0.35)" }}>
              {" "}/{" "}{item.detail}{" "}/{" "}{item.sub}
            </span>
          </span>
        </span>
      ))}
    </>
  );

  return (
    <section
      className="hero-section relative overflow-hidden"
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        minHeight: "100svh",
        overflow: "hidden",
        background: "#0D0B09",
      }}
      aria-label="Hero"
    >
      {/* Layer 0: Globe — pushed to bottom 40% of viewport */}
      <div
        aria-hidden="true"
        className="hero-animation globe-container"
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120%",
          height: "80%",
          zIndex: 0,
        }}
      >
        {isMobile ? (
          <UnicornScene
            projectId="VhaHzIfQSlNqY2QWIadP"
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
            width="100%"
            height="100%"
            dpi={2}
            scale={1}
          />
        ) : (
          <UnicornScene
            jsonFilePath="/scenes/hero-planet.json"
            sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
            width="100%"
            height="100%"
            dpi={1.5}
            scale={1}
          />
        )}
      </div>

      {/* Layer 1: Dark overlay — protects text zone */}
      <div
        aria-hidden="true"
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, #0D0B09 0%, #0D0B09 35%, rgba(13,11,9,0.75) 55%, rgba(13,11,9,0.0) 80%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: Trust ticker — top */}
      <div
        className="hero-trust-ticker"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
          paddingTop: 88,
        }}
      >
        <span
          className="hero-ticker"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(212, 168, 83, 0.7)",
            textShadow: "0 1px 8px rgba(0,0,0,1)",
          }}
        >
          5 industries &middot; 3 countries &middot; verified results
        </span>
      </div>

      {/* Layer 3: Hero content — upper portion of viewport */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: 160,
          maxWidth: 800,
          margin: "0 auto",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        {/* Headline */}
        <h1
          className="hero-fadeup hero-headline"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FFF5E6",
            maxWidth: 700,
            margin: "0 auto",
            marginBottom: 16,
            textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.7)",
          }}
        >
          I build the system that{" "}
          <em style={{
            color: "#D4A853",
            fontStyle: "italic",
            textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 0 60px rgba(212,168,83,0.3)",
          }}>fills</em>{" "}
          your calendar.
        </h1>

        {/* Subheadline */}
        <p
          className="hero-enter hero-subhead"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
            lineHeight: 1.65,
            color: "rgba(255,245,230,0.85)",
            maxWidth: 540,
            margin: "0 auto",
            marginTop: 16,
            marginBottom: 32,
            animationDelay: "0.4s",
            textAlign: "center",
            textShadow: "0 2px 20px rgba(0,0,0,0.95)",
          }}
        >
          Websites, Google Ads, SEO, and AI. Built for service businesses that want more customers, not more agencies.
        </p>

        {/* CTA row */}
        <div
          className="hero-enter hero-cta-row"
          style={{
            animationDelay: "0.55s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
          }}
        >
          <Link
            href="/apply"
            aria-label="Work with me. Book a call."
            className="group inline-flex items-center justify-center transition-all hero-cta-primary"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background: "#D4A853",
              color: "#0D0B09",
              padding: "14px 32px",
              borderRadius: 0,
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = "brightness(1.1)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Work with me
          </Link>

          {/* Desktop: ghost button */}
          <Link
            href="/results"
            aria-label="See client case studies"
            className="hero-cta-secondary hero-cta-ghost"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(255,245,230,0.85)",
              textDecoration: "none",
              transition: "border-color 0.2s ease, color 0.2s ease",
              textShadow: "0 2px 12px rgba(0,0,0,1)",
              border: "1px solid rgba(255,245,230,0.35)",
              padding: "12px 24px",
              borderRadius: 4,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(212,168,83,0.6)";
              e.currentTarget.style.color = "#D4A853";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,245,230,0.35)";
              e.currentTarget.style.color = "rgba(255,245,230,0.85)";
            }}
          >
            See the Results &rarr;
          </Link>

          {/* Mobile: plain text link (replaces ghost button) */}
          <Link
            href="/results"
            aria-label="See client case studies"
            className="hero-cta-textlink"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#F5EDD6",
              textDecoration: "none",
              textShadow: "0 2px 12px rgba(0,0,0,1)",
              display: "none",
              marginTop: 12,
            }}
          >
            See the Results &rarr;
          </Link>
        </div>

        {/* Trust line */}
        <p
          className="hero-enter hero-trust-line"
          style={{
            animationDelay: "0.65s",
            fontSize: "0.85rem",
            color: "rgba(255,245,230,0.65)",
            textAlign: "center",
            marginTop: 14,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-dm-sans), sans-serif",
            textShadow: "0 1px 12px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)",
          }}
        >
          One call. No retainer until fit is confirmed. You own everything I build.
        </p>
      </div>

      {/* Layer 4: Results ticker — bottom */}
      <div
        role="marquee"
        aria-label="Client results ticker"
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          zIndex: 30,
          background: "rgba(13,11,9,0.6)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <div
          className="flex items-center gap-8 py-3 hero-ticker"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            animation: "ticker-scroll 20s linear infinite",
            width: "max-content",
            textShadow: "0 1px 8px rgba(0,0,0,1)",
          }}
        >
          {tickerContent}
        </div>
      </div>

      <style jsx global>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes hero-fadeup {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .hero-fadeup {
          opacity: 0;
          animation: hero-fadeup 0.6s ease 0.2s forwards;
        }

        /* Globe container — allow the scene to fill its bounds */
        .globe-container > div,
        .globe-container iframe,
        .globe-container canvas {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        /* Sharper canvas on mobile Retina */
        @media (max-width: 768px) {
          .globe-container,
          .globe-container canvas,
          .globe-container [data-us-project] {
            image-rendering: -webkit-optimize-contrast;
            image-rendering: crisp-edges;
            transform: translateZ(0);
            will-change: transform;
            backface-visibility: hidden;
          }
        }

        /* ── Mobile: max-width 768px ── */
        @media (max-width: 768px) {

          /* 1. DARK SCRIM — heavy at top for text, fades by midpoint */
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              #0D0B09 0%,
              rgba(13,11,9,0.65) 35%,
              rgba(13,11,9,0.1) 55%,
              transparent 70%
            ) !important;
          }

          /* Globe — full viewport */
          .globe-container {
            bottom: 0 !important;
            left: 0 !important;
            transform: none !important;
            width: 100% !important;
            height: 100% !important;
          }

          /* Section — flush, full viewport */
          .hero-section {
            height: 100dvh !important;
            min-height: 100dvh !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }

          /* Content — centered over scene, z-index above scrim */
          .hero-content {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 2 !important;
            padding-top: 0 !important;
            padding-bottom: 48px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            max-width: 100% !important;
          }

          /* 3. HEADLINE — proper sizing */
          .hero-headline {
            font-size: clamp(2.2rem, 8vw, 3rem) !important;
            line-height: 1.15 !important;
            color: #FFFFFF !important;
            text-shadow: 0 2px 30px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9) !important;
            text-align: center !important;
          }

          /* Subhead */
          .hero-subhead {
            color: rgba(255,245,230,0.95) !important;
            text-shadow: 0 2px 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.85) !important;
            font-size: clamp(0.9rem, 3.8vw, 1.1rem) !important;
          }

          /* Eyebrow ticker */
          .hero-trust-ticker {
            padding-top: 72px !important;
            z-index: 3 !important;
          }
          .hero-trust-ticker span {
            font-size: 9px !important;
            text-shadow: 0 1px 12px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,0.8) !important;
          }

          /* 4. CTAs — stacked column */
          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 0 !important;
            width: 100% !important;
            max-width: 420px !important;
          }

          /* Gold CTA — full width, proper padding */
          .hero-cta-primary {
            width: 100% !important;
            max-width: 420px !important;
            padding: 18px 24px !important;
            font-size: 13px !important;
            letter-spacing: 0.10em !important;
            text-align: center !important;
            border-radius: 8px !important;
          }

          /* 2. Hide ghost button, show text link */
          .hero-cta-ghost {
            display: none !important;
          }
          .hero-cta-textlink {
            display: inline-block !important;
            margin-top: 12px !important;
            text-align: center !important;
          }

          /* Trust line */
          .hero-trust-line {
            font-size: 11px !important;
            color: rgba(255,245,230,0.8) !important;
            margin-top: 14px !important;
            max-width: 300px !important;
            text-shadow: 0 1px 16px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.9) !important;
          }

          /* Ticker */
          [role="marquee"] {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 30 !important;
            background: rgba(13, 11, 9, 0.5) !important;
            overflow: hidden !important;
          }
          [role="marquee"] .hero-ticker {
            font-size: 0.78rem !important;
          }
          [role="marquee"] .flex {
            gap: 32px !important;
            padding: 10px 0 !important;
          }
        }

        /* ── Small phones: max-width 420px ── */
        @media (max-width: 420px) {
          .hero-headline {
            font-size: clamp(1.9rem, 9vw, 2.4rem) !important;
            line-height: 1.1 !important;
          }
        }
      `}</style>
    </section>
  );
}
