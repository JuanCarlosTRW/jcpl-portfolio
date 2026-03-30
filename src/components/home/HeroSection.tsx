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
        <span key={i} className="inline-flex items-center gap-3 whitespace-nowrap">
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
      {/* Layer 0: Unicorn Studio planet animation — edge-to-edge, no padding */}
      <div
        aria-hidden="true"
        className="hero-animation"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <UnicornScene
          jsonFilePath="/scenes/hero-planet.json"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.5/dist/unicornStudio.umd.js"
          width="100vw"
          height="100svh"
          dpi={1.5}
          scale={1}
        />
      </div>

      {/* Layer 1: Subtle bottom fade for text legibility */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(13,11,9,0.0) 0%, rgba(13,11,9,0.0) 55%, rgba(13,11,9,0.65) 100%)",
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
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(212, 168, 83, 0.7)",
          }}
        >
          5 industries &middot; 3 countries &middot; verified results
        </span>
      </div>

      {/* Layer 3: Hero content */}
      <div
        className="hero-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          width: "90%",
          maxWidth: 640,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Headline */}
        <h1
          className="hero-fadeup"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#F0EAD6",
            maxWidth: 560,
            margin: "0 auto",
            marginBottom: 20,
            textShadow: "0 2px 24px rgba(13,11,9,0.9)",
          }}
        >
          I build the system that{" "}
          <em style={{ color: "#D4A853", fontStyle: "italic" }}>fills</em>{" "}
          your calendar.
        </h1>

        {/* Subheadline */}
        <p
          className="hero-enter hero-sub"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 17,
            lineHeight: 1.65,
            color: "rgba(240,234,214,0.85)",
            maxWidth: 520,
            margin: "0 auto",
            marginBottom: 32,
            animationDelay: "0.4s",
            textAlign: "center",
            textShadow: "0 1px 12px rgba(13,11,9,0.7)",
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

          <Link
            href="/results"
            aria-label="See client case studies"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(240,234,214,0.6)",
              textDecoration: "none",
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(240,234,214,0.9)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(240,234,214,0.6)";
            }}
          >
            See the Results &rarr;
          </Link>
        </div>

        {/* Trust line */}
        <p
          className="hero-enter hero-risk"
          style={{
            animationDelay: "0.65s",
            fontSize: 12,
            color: "rgba(240, 234, 214, 0.4)",
            textAlign: "center",
            marginTop: 16,
            letterSpacing: "0.02em",
            fontFamily: "var(--font-dm-sans), sans-serif",
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
          className="flex items-center gap-8 py-3"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            animation: "ticker-scroll 20s linear infinite",
            width: "max-content",
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

        /* Unicorn Studio: edge-to-edge fill */
        .hero-animation {
          position: absolute !important;
          inset: 0 !important;
          overflow: hidden !important;
        }
        .hero-animation > div,
        .hero-animation iframe,
        .hero-animation canvas {
          position: absolute !important;
          inset: 0 !important;
          width: 100% !important;
          height: 100% !important;
        }

        @media (max-width: 768px) {
          .hero-trust-ticker {
            padding-top: 72px !important;
          }
          .hero-trust-ticker span {
            font-size: 9px !important;
          }
          .hero-container {
            position: absolute !important;
            top: 46% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            width: 92vw !important;
            max-width: 400px !important;
            z-index: 20 !important;
          }
          .hero-container h1 {
            font-size: clamp(1.75rem, 6vw, 2.1rem) !important;
            line-height: 1.18 !important;
            text-align: center !important;
            margin-bottom: 12px !important;
          }
          .hero-sub {
            font-size: 13px !important;
            line-height: 1.5 !important;
            max-width: 280px !important;
            margin: 0 auto 20px auto !important;
            text-align: center !important;
            color: rgba(240,234,214,0.8) !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            width: 100% !important;
          }
          .hero-cta-primary {
            width: 100% !important;
            padding: 15px 0 !important;
            font-size: 13px !important;
            letter-spacing: 0.10em !important;
            text-align: center !important;
          }
          .hero-cta-row a:not(.hero-cta-primary) {
            display: block !important;
            text-align: center !important;
            font-size: 12px !important;
            color: rgba(240,234,214,0.6) !important;
            letter-spacing: 0.08em !important;
            padding: 4px 0 !important;
          }
          .hero-risk {
            font-size: 11px !important;
            color: rgba(240,234,214,0.35) !important;
            text-align: center !important;
            margin-top: 14px !important;
            line-height: 1.5 !important;
            max-width: 270px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          [role="marquee"] {
            position: absolute !important;
            bottom: 0 !important;
            left: 0 !important;
            width: 100% !important;
            z-index: 30 !important;
            background: rgba(13, 11, 9, 0.5) !important;
          }
        }
      `}</style>
    </section>
  );
}
