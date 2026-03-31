"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import "./hero-responsive.css";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

const TICKER_ITEMS = [
  { stat: "46x ROAS", detail: "Triple W Rentals", sub: "$41K from $900 in 30 days" },
  { stat: "90 new clients", detail: "Elite Barbershop", sub: "90 days" },
  { stat: "Page 1 Google", detail: "Culture Barbershop", sub: "under 60 days" },
];

export default function HeroSection() {
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
      {/* Layer 0: Alcove Hero background — covers full viewport */}
      <div
        aria-hidden="true"
        className="hero-animation globe-container"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <UnicornScene
          jsonFilePath="/scenes/hero-planet.json"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          dpi={1.5}
          scale={1}
        />
      </div>

      {/* Layer 1: Dark overlay — protects text zone */}
      <div
        aria-hidden="true"
        className="hero-overlay"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(13,11,9,0.85) 0%, rgba(13,11,9,0.5) 30%, rgba(13,11,9,0.15) 55%, transparent 75%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Layer 2: Hero content */}
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

        {/* Subheadline — Fix 3 */}
        <p
          className="hero-enter hero-subhead"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.125rem)",
            lineHeight: 1.65,
            color: "rgba(255,245,230,0.85)",
            maxWidth: 520,
            margin: "0 auto",
            marginTop: 16,
            marginBottom: 32,
            animationDelay: "0.4s",
            textAlign: "center",
            textShadow: "0 2px 20px rgba(0,0,0,0.95)",
          }}
        >
          Your competitors are not better than you. They just get found first. I fix that.
        </p>

        {/* CTA row */}
        <div
          className="hero-enter hero-cta-row"
          style={{
            animationDelay: "0.55s",
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
            gap: 16,
          }}
        >
          <Link href="/apply" className="primary-cta">
            BOOK A DIAGNOSTIC CALL
          </Link>

          <Link href="/results" className="secondary-cta">
            SEE THE RESULTS &rarr;
          </Link>
        </div>

        {/* Fix 4: Trust micro-line */}
        <p
          className="hero-enter hero-trust-line"
          style={{
            animationDelay: "0.65s",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 13,
            color: "rgba(255,245,230,0.6)",
            textAlign: "center",
            marginTop: 20,
            letterSpacing: "0.02em",
            textShadow: "0 1px 12px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,0.8)",
          }}
        >
          One call. No retainer until fit is confirmed. You own everything I build.
        </p>
      </div>

      {/* Layer 3: Results ticker — bottom */}
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

        /* Scene container — allow the scene to fill its bounds */
        .globe-container > div,
        .globe-container iframe,
        .globe-container canvas {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        /* ── Primary CTA — gold with white shimmer sweep ── */
        .primary-cta {
          background: #D4A853;
          color: #0D0B09;
          border: none;
          border-radius: 6px;
          padding: 16px 40px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          min-width: 220px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .primary-cta:hover {
          transform: scale(1.02);
        }
        .primary-cta::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.25) 50%,
            rgba(255,255,255,0) 100%
          );
          transform: skewX(-20deg);
          animation: shimmer-sweep 3s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes shimmer-sweep {
          0% { left: -75%; }
          100% { left: 125%; }
        }

        /* ── Secondary CTA — dark with gold shimmer sweep ── */
        .secondary-cta {
          background: rgba(26, 21, 16, 0.8);
          color: #F5F0E8;
          border: 1px solid rgba(212, 168, 83, 0.5);
          border-radius: 6px;
          padding: 16px 40px;
          font-family: var(--font-dm-sans), 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          min-width: 220px;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s ease, transform 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .secondary-cta:hover {
          border-color: rgba(212, 168, 83, 0.9);
          transform: scale(1.02);
        }
        .secondary-cta::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(212,168,83,0) 0%,
            rgba(212,168,83,0.15) 50%,
            rgba(212,168,83,0) 100%
          );
          transform: skewX(-20deg);
          animation: shimmer-sweep-gold 3s ease-in-out infinite;
          animation-delay: 1.5s;
          pointer-events: none;
        }

        @keyframes shimmer-sweep-gold {
          0% { left: -75%; }
          100% { left: 125%; }
        }

        /* ── Mobile: max-width 768px ── */
        @media (max-width: 768px) {

          /* Overlay — dark at top for text, clear below for wisps */
          .hero-overlay {
            background: linear-gradient(
              to bottom,
              rgba(13,11,9,0.75) 0%,
              rgba(13,11,9,0.3) 25%,
              transparent 45%
            ) !important;
          }

          /* Section — flush, full viewport */
          .hero-section {
            height: 100dvh !important;
            min-height: 100dvh !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }

          .hero-content {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            z-index: 2 !important;
            padding-top: 170px !important;
            padding-bottom: 0 !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: flex-start !important;
            max-width: 100% !important;
          }

          .hero-headline {
            font-size: clamp(2.2rem, 8vw, 3rem) !important;
            line-height: 1.15 !important;
            color: #FFFFFF !important;
            text-shadow: 0 2px 30px rgba(0,0,0,1), 0 0 60px rgba(0,0,0,0.9) !important;
            text-align: center !important;
            margin-bottom: 12px !important;
          }

          .hero-subhead {
            color: rgba(255,245,230,0.95) !important;
            text-shadow: 0 2px 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.85) !important;
            font-size: 16px !important;
            line-height: 1.6 !important;
            max-width: 340px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 24px !important;
          }

          /* CTA row — stack vertically on mobile */
          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100% !important;
            max-width: 360px !important;
          }

          .primary-cta,
          .secondary-cta {
            width: 100% !important;
            min-width: unset !important;
          }

          .hero-trust-line {
            font-size: 13px !important;
            margin-top: 16px !important;
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
          .hero-subhead {
            font-size: 14px !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
