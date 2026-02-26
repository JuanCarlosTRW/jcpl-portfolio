"use client";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060912 0%, #070B14 100%)" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto pt-28 pb-24">
        <p
          className="mb-6"
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#1E3A5F",
          }}
        >
          CLIENT GROWTH / SERVICES
        </p>

        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            maxWidth: "800px",
          }}
        >
          The Growth Infrastructure<br />
          Built for Service Businesses.
        </h1>

        <p
          className="mb-10"
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#475569",
            maxWidth: "520px",
          }}
        >
          A conversion website. Local SEO. Google Ads with a tracked cost per call. AI lead capture that works after hours. One system. One person. Built in 2 to 4 weeks.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#apply"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150"
            style={{
              background: "linear-gradient(90deg, var(--brand-accent), #3B82F6)",
              color: "#FFFFFF",
              boxShadow: "0 4px 24px rgba(43, 90, 140, 0.35)",
            }}
          >
            Apply for a Partnership →
          </a>
          <a
            href="#tiers"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium transition-colors"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#94A3B8",
            }}
          >
            See the three tiers
          </a>
        </div>

        <div className="flex flex-wrap gap-6 mt-8">
          {[
            "Response within 24 hours",
            "No retainer until I confirm fit",
            "One spot currently open",
          ].map((item) => (
            <span
              key={item}
              className="text-xs flex items-center gap-2"
              style={{ color: "#3D5875" }}
            >
              <span style={{ color: "#1E3A5F" }}>✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
