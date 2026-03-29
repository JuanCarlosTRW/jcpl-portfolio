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
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const el = embedRef.current;
    if (!el) return;

    let destroyed = false;

    const initScene = () => {
      if (destroyed || sceneRef.current) return;
      const us = (window as any).UnicornStudio;
      if (us?.addScene) {
        us.addScene({
          elementId: el.id,
          fps: 60,
          scale: 1,
          dpi: 1.5,
          projectFile: "/scenes/hero-planet.json",
          interElement: el,
          lazyLoad: false,
        }).then((scene: any) => {
          if (!destroyed) {
            sceneRef.current = scene;
          } else {
            scene?.destroy?.();
          }
        }).catch(() => {});
      }
    };

    if ((window as any).UnicornStudio?.addScene) {
      setTimeout(initScene, 50);
    } else if (document.getElementById(SCRIPT_ID)) {
      setTimeout(initScene, 400);
    } else {
      (window as any).UnicornStudio = { isInitialized: false };
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = SDK_URL;
      s.async = true;
      s.onload = () => setTimeout(initScene, 50);
      document.head.appendChild(s);
    }

    return () => {
      destroyed = true;
      sceneRef.current?.destroy?.();
      sceneRef.current = null;
    };
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
        id="hero-planet-scene"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* ── Layer 1: Dark overlay for text readability ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(13,11,9,0.45) 0%, rgba(13,11,9,0.65) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* ── Layer 2: Hero content, top-aligned above the planet ── */}
      <div
        className="relative flex flex-col items-center text-center px-6"
        style={{
          zIndex: 10,
          height: "100%",
          paddingTop: "18vh",
          justifyContent: "flex-start",
        }}
      >
        {/* Eyebrow */}
        <div
          className="hero-enter flex items-center gap-3"
          style={{ animationDelay: "0.1s", marginBottom: 20 }}
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
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D4A853",
              opacity: 1,
            }}
          >
            Local Business Growth / Worldwide
          </span>
        </div>

        {/* Headline — fade up animation */}
        <h1
          className="hero-fadeup"
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(44px, 6vw, 78px)",
            fontWeight: 300,
            lineHeight: 1.0,
            color: "#F0EAD6",
            margin: 0,
            marginBottom: 20,
          }}
        >
          Your city. My{" "}
          <em style={{ color: "#D4A853", fontStyle: "italic" }}>results.</em>
        </h1>

        {/* Subheadline */}
        <p
          className="hero-enter"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            lineHeight: 1.7,
            color: "rgba(240,234,214,0.70)",
            maxWidth: 480,
            margin: 0,
            marginBottom: 36,
            animationDelay: "0.4s",
            textShadow: "0 2px 20px rgba(0,0,0,0.8)",
          }}
        >
          Websites, Google Ads, SEO, and AI. Built for service businesses that want more customers, not more agencies.
        </p>

        {/* CTAs */}
        <div
          className="hero-enter flex items-center gap-5"
          style={{ animationDelay: "0.55s" }}
        >
          {/* Primary CTA */}
          <Link
            href="/apply"
            aria-label="Work with me — book a call"
            className="group inline-flex items-center justify-center transition-all"
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: "#D4A853",
              color: "#0D0B09",
              padding: "13px 32px",
              borderRadius: 0,
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
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(240,234,214,0.45)",
              textDecoration: "none",
              transition: "color 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(240,234,214,0.9)";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(240,234,214,0.45)";
              e.currentTarget.style.textDecoration = "none";
            }}
          >
            See the results
          </Link>
        </div>
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

      {/* Animation keyframes */}
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
      `}</style>
    </section>
  );
}
