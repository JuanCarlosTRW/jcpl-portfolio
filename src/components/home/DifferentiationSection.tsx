"use client";

const LEFT_ITEMS = [
  "A junior account manager you never chose",
  "Recycled templates adapted to your logo",
  "A retainer that runs whether it works or not",
  "You rent the results. Leave and you start from zero.",
];

const RIGHT_ITEMS = [
  "One operator. I build the system myself.",
  "Custom coded. Your site, your ads account, your data.",
  "No payment before fit. Refund if the phone does not ring.",
  "You own everything. If you leave, it all goes with you.",
];

export default function DifferentiationSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
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
          WHY THIS IS DIFFERENT
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
          This is not another agency.
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
              What most agencies sell you
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
                      color: "rgba(240,234,214,0.25)",
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
              What I build
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
          No junior team. No outsourced work. Every system built personally.
        </p>
      </div>
    </section>
  );
}
