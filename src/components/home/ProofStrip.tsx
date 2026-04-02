"use client";

const STATS = [
  { value: "$41,085", label: "revenue in 30 days", sub: "Triple W Rentals" },
  { value: "11 days", label: "to your first booked call", sub: "" },
  { value: "$60K+", label: "tracked revenue", sub: "active accounts" },
];

export default function ProofStrip() {
  return (
    <section className="py-12 md:py-16" style={{ background: "#0D0B09" }}>
      <style>{`@media (max-width: 767px) { .proof-strip-grid { grid-template-columns: 1fr 1fr !important; } }`}</style>
      <div
        className="proof-strip-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px 16px",
          maxWidth: 900,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', var(--font-cormorant), Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                fontStyle: "normal",
                letterSpacing: "-0.02em",
                color: "#D4A853",
                lineHeight: 1,
                margin: 0,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: "clamp(0.8rem, 1.5vw, 0.9rem)",
                color: "rgba(240,234,214,0.5)",
                marginTop: 6,
                marginBottom: 0,
              }}
            >
              {stat.label}
            </p>
            {stat.sub && (
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(240,234,214,0.3)",
                  marginTop: 2,
                  marginBottom: 0,
                }}
              >
                {stat.sub}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
