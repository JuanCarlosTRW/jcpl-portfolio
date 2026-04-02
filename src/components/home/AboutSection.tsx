"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function AboutSection() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.about;

  return (
    <section
      id="about"
      className="about-section"
      style={{ background: "#0D0B09" }}
    >
      <div
        className="about-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "45% 55%",
          gap: 48,
          alignItems: "center",
        }}
      >
        {/* Left column — Unicorn Studio animation (same as hero) */}
        <div
          className="about-animation"
          style={{
            maxWidth: 480,
            borderRadius: 12,
            overflow: "hidden",
            height: 400,
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

        {/* Right column — text content */}
        <div>
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#D4A853",
              marginBottom: 20,
            }}
          >
            {t.label}
          </p>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(32px, 4vw, 42px)",
              fontWeight: 300,
              color: "#F0EAD6",
              lineHeight: 1.15,
              marginBottom: 32,
            }}
          >
            {t.headline}
          </h2>

          {/* Paragraphs */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: "rgba(240,234,214,0.85)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {t.p1}
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: "rgba(240,234,214,0.85)",
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            {t.p2}
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 15,
              color: "rgba(240,234,214,0.85)",
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            {t.p3}
          </p>

          {/* Stat bar */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 13,
              color: "#D4A853",
              letterSpacing: "0.08em",
            }}
          >
            {t.stats}
          </p>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 120px 0;
        }
        @media (max-width: 767px) {
          .about-section {
            padding: 80px 0;
          }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-animation {
            width: 100% !important;
            max-width: 100% !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
