"use client";

import RotatingText from "@/components/ui/RotatingText";

const ROTATING_PHRASES = [
  "Sites that convert.",
  "SEO that compounds.",
  "Ads tracked to cost per call.",
  "AI that captures every lead.",
  "One owner. Zero handoffs.",
];

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
        {/* Eyebrow */}
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

        {/* Main headline */}
        <h1
          className="mb-3"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#F5F0E8",
          }}
        >
          One acquisition system.
        </h1>

        {/* Rotating sub-headline */}
        <div
          className="mb-10 overflow-hidden"
          style={{
            fontSize: "clamp(1.6rem, 3.8vw, 3.4rem)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#D4A853",
            minHeight: "clamp(2rem, 4.5vw, 4rem)",
          }}
        >
          <RotatingText
            texts={ROTATING_PHRASES}
            splitBy="words"
            splitLevelClassName="mr-[0.28em]"
            rotationInterval={2800}
            staggerDuration={0.04}
            staggerFrom="first"
            transition={{ type: "spring", damping: 22, stiffness: 280 }}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
          />
        </div>

        {/* Divider */}
        <div
          className="mb-7"
          style={{
            width: "48px",
            height: "2px",
            background: "rgba(212,168,83,0.35)",
            borderRadius: "1px",
          }}
          aria-hidden
        />

        {/* Body copy */}
        <p
          className="mb-5"
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "#D2C9B8",
            maxWidth: "520px",
          }}
        >
          Conversion site. Local SEO. Google Ads with tracked cost per call.
          AI that qualifies leads after hours. Built as one connected system,
          run by one person. Live in 11 days.
        </p>

        <p
          className="mb-4"
          style={{
            fontSize: "17px",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "#D2C9B8",
            maxWidth: "520px",
          }}
        >
          Every layer feeds the next. The longer it runs, the less each call costs.
        </p>

        <p
          className="mb-10 text-sm font-medium"
          style={{ color: "#C8A05A" }}
        >
          Most recent result: 90 new clients in 90 days. Page 1 in under 60 days.
        </p>

        {/* CTAs */}
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

        {/* Trust row */}
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
