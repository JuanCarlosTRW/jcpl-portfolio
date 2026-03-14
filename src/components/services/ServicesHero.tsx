"use client";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center px-6 overflow-hidden"
      style={{ background: "#0D0B09" }}
    >
      {/* Hero orb */}
      <div
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 orb-hero"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-4xl mx-auto pt-28 pb-14 md:pb-12">
        <p
          className="mb-6 section-label"
          style={{
            fontSize: "14px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#D4A853",
          }}
        >
          SERVICES
        </p>

        <h1
          className="mb-6"
          style={{
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#F5F0E8",
            maxWidth: "800px",
          }}
        >
          The System Behind $41,085 in 30 Days. Here Is Exactly How It Works.
        </h1>

        <p
          className="mb-4"
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#D2C9B8",
            maxWidth: "520px",
          }}
        >
          Conversion site. Local SEO. Google Ads with tracked cost per call. AI that qualifies leads after hours. One system. One person. Live in 11 days.
        </p>

        <p
          className="mb-4"
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: "#D2C9B8",
            maxWidth: "520px",
          }}
        >
          Every component is built to feed the next. The longer it runs, the less each call costs.
        </p>

        <p
          className="mb-10 text-sm font-medium"
          style={{ color: "#C8A05A" }}
        >
          Most recent result: 90 new clients in 90 days. Page 1 in under 60 days.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#apply"
            className="cta-primary inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold"
          >
            Book a Diagnostic Call →
          </a>
          <a
            href="#system"
            className="cta-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium"
          >
            See how the system works
          </a>
        </div>

        <div className="flex flex-wrap gap-6 mt-8">
          <span
            className="text-xs flex items-center gap-2 animate-fade-in"
            style={{ color: "#A69D8D", animationDelay: "0ms" }}
          >
            <span style={{ color: "#D4A853" }}>✓</span>
            Response within 24 hours
          </span>
          <span
            className="text-xs flex items-center gap-2 animate-fade-in"
            style={{ color: "#A69D8D", animationDelay: "100ms" }}
          >
            <span style={{ color: "#D4A853" }}>✓</span>
            No retainer until I confirm fit
          </span>
          <span
            className="flex items-center gap-2 text-emerald-400/80 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs">One spot currently open</span>
          </span>
        </div>
      </div>
    </section>
  );
}
