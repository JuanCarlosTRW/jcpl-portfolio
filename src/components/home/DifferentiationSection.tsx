"use client";

import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function DifferentiationSection() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.differentiationSection;

  const LEFT_ITEMS = [t.leftItem1, t.leftItem2, t.leftItem3];
  const RIGHT_ITEMS = [t.rightItem1, t.rightItem2, t.rightItem3];
  return (
    <section id="different" className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      <div className="max-w-[960px] mx-auto px-6">
        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#D4A853",
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          {t.eyebrow}
        </p>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 300,
            color: "#F0EAD6",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 48,
          }}
        >
          {t.heading}
        </h2>

        {/* Two columns */}
        <div
          className="differentiation-columns"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          <style>{`@media (max-width: 767px) { .differentiation-columns { grid-template-columns: 1fr !important; } }`}</style>

          {/* Left block */}
          <div
            style={{
              padding: "28px 24px",
              borderRadius: 12,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(240,234,214,0.06)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(240,234,214,0.4)",
                marginBottom: 20,
              }}
            >
              {t.leftHeader}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {LEFT_ITEMS.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 15,
                    color: "rgba(240,234,214,0.6)",
                    lineHeight: 1.6,
                    padding: "8px 0",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: "#EF4444",
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &#10005;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right block */}
          <div
            style={{
              padding: "28px 24px",
              borderRadius: 12,
              background: "rgba(212,168,83,0.03)",
              border: "1px solid rgba(212,168,83,0.12)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#D4A853",
                marginBottom: 20,
              }}
            >
              {t.rightHeader}
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {RIGHT_ITEMS.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 15,
                    color: "rgba(240,234,214,0.8)",
                    lineHeight: 1.6,
                    padding: "8px 0",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                  }}
                >
                  <span
                    style={{
                      color: "#D4A853",
                      fontSize: 14,
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  >
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <p
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 15,
            color: "rgba(240,234,214,0.55)",
            textAlign: "center",
            marginTop: 40,
          }}
        >
          {t.closingLine}
        </p>
      </div>
    </section>
  );
}
