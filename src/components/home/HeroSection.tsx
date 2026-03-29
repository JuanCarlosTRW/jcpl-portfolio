"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";
const SCRIPT_ID = "unicornstudio-hero-sdk";

const TICKER_ITEMS = [
  { stat: "46x ROAS", detail: "Triple W Rentals", sub: "$41K from $900 in 30 days" },
  { stat: "90 new clients", detail: "Elite Barbershop", sub: "90 days" },
  { stat: "Page 1 Google", detail: "Culture Barbershop", sub: "under 60 days" },
];

export default function HeroSection() {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = embedRef.current;
    if (!el) return;
    if (el.querySelector("canvas")) return;

    const initUS = () => {
      const us = (window as any).UnicornStudio;
      if (us?.init) {
        us.init();
      }
    };

    if ((window as any).UnicornStudio?.init) {
      setTimeout(initUS, 50);
    } else if (document.getElementById(SCRIPT_ID)) {
      setTimeout(initUS, 400);
    } else {
      (window as any).UnicornStudio = { isInitialized: false };
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = SDK_URL;
      s.async = true;
      s.onload = () => setTimeout(initUS, 50);
      document.head.appendChild(s);
    }
  }, []);

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
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: "100svh", background: "#0D0B09" }}
      aria-label="Hero"
    >
      {/* ── Layer 0: Unicorn Studio planet animation ── */}
      <div
        ref={embedRef}
        data-us-project-src="/scenes/hero-planet.json"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* ── Layer 1: Minimal overlay — bottom fade only ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(13,11,9,0.0) 0%, rgba(13,11,9,0.0) 60%, rgba(13,11,9,0.7) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Layer 2: Backdrop blur text container ── */}
      <div
        className="hero-container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
          zIndex: 10,
          background: "rgba(13, 11, 9, 0.55)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(212, 168, 83, 0.12)",
          borderRadius: 16,
          padding: "48px 56px",
          maxWidth: 720,
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-enter"
          style={{
            animationDelay: "0.1s",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <div
            style={{
              width: 28,
              height: 1,
              background: "#D4A853",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#D4A853",
            }}
          >
            5 industries · 3 countries · verified results
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-fadeup"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(53px, 7.2vw, 94px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: "#F0EAD6",
            margin: 0,
            marginBottom: 20,
            textShadow: "0 2px 20px rgba(13,11,9,0.8)",
          }}
        >
          I build the system that{" "}
          <em style={{ color: "#D4A853", fontStyle: "italic" }}>fills</em>{" "}
          your calendar.
        </h1>

        {/* Subheadline */}
        <p
          className="hero-enter"
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
          {/* Primary CTA */}
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
              borderRadius: 6,
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

          {/* Secondary CTA */}
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
            See the Results →
          </Link>
        </div>

        {/* Risk reversal chip */}
        <p
          className="hero-enter"
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
          One call. No retainer until fit is confirmed. You own everything we build.
        </p>
      </div>

      {/* ── Layer 3: Proof ticker pinned to bottom ── */}
      <div
        role="marquee"
        aria-label="Client results ticker"
        className="absolute bottom-0 left-0 right-0 overflow-hidden"
        style={{
          zIndex: 10,
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

      {/* Keyframes + mobile responsive */}
      <style jsx>{`
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
        @media (max-width: 768px) {
          .hero-container {
            padding: 32px 24px !important;
            border-radius: 12px !important;
            width: 92% !important;
          }
          .hero-container h1 {
            font-size: clamp(2.2rem, 6vw, 3rem) !important;
          }
          .hero-container .hero-enter p {
            font-size: 15px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 16px !important;
          }
          .hero-cta-primary {
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
