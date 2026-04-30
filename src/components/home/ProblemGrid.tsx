"use client";

import { Search, Globe, RefreshCw } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function ProblemGrid() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.problemGrid;

  const PROBLEMS = [
    { icon: Search, headline: t.problem1Title, description: t.problem1Desc },
    { icon: Globe, headline: t.problem2Title, description: t.problem2Desc },
    { icon: RefreshCw, headline: t.problem3Title, description: t.problem3Desc },
  ];
  return (
    <section id="reality" className="py-16 md:py-24">
      {/* Header */}
      <div className="text-center px-6">
        <span
          className="inline-block mb-5"
          style={{
            background: "rgba(212,168,83,0.1)",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "8px 20px",
            borderRadius: 20,
            border: "1px solid rgba(212,168,83,0.15)",
          }}
        >
          {t.eyebrow}
        </span>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            color: "#F0EAD6",
            lineHeight: 1.1,
            marginTop: 20,
          }}
        >
          {t.heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(18px, 3vw, 24px)",
            color: "#ffffff",
            fontStyle: "italic",
            marginTop: 8,
          }}
        >
          {t.subtitle}
        </p>
      </div>

      {/* Grid */}
      <div className="problem-grid">
        {PROBLEMS.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.headline} className="problem-card">
              <div className="problem-icon">
                <Icon size={24} stroke="#D4A853" strokeWidth={2} fill="none" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "#F0EAD6",
                  lineHeight: 1.3,
                  marginBottom: 12,
                }}
              >
                {p.headline}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  color: "rgba(240,234,214,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {p.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Closing line */}
      <p
        className="text-center px-6"
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 15,
          color: "rgba(240,234,214,0.55)",
          marginTop: 40,
        }}
      >
        {t.closingBefore}<span style={{ color: "#D4A853" }}>{t.closingAccent}</span>{t.closingAfter}
      </p>
    </section>
  );
}
