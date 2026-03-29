"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const Prism = dynamic(() => import("@/components/home/Prism"), { ssr: false });

export default function ServicesHero() {
  const { locale } = useLocale();
  const hero = translations[locale].services.hero;

  return (
    <section
      className="relative w-full min-h-[75vh] flex items-center px-5 sm:px-6 overflow-hidden"
      style={{ background: "#0D0B09" }}
    >
      {/* Prism WebGL background */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, opacity: 0.18, pointerEvents: "none", zIndex: 0 }}
      >
        <Prism
          animationType="rotate"
          timeScale={0.4}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1}
          bloom={1}
          transparent
          suspendWhenOffscreen
        />
      </div>

      {/* Hero orb */}
      <div
        className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0 orb-hero"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.04) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        aria-hidden
      />
      {/* Radial gold glow behind headline */}
      <div
        className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.06) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto pt-28 pb-14 md:pb-12 w-full">
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
          {hero.eyebrow}
        </p>

        {/* Main headline */}
        <h1
          className="mb-8"
          style={{
            fontSize: "clamp(2.0rem, 5.5vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#F5F0E8",
          }}
        >
          {hero.h1}
        </h1>

        {/* Static subtitle */}
        <p
          className="mb-4"
          style={{
            fontSize: "clamp(15px, 1.6vw, 17px)",
            fontWeight: 400,
            lineHeight: 1.75,
            color: "#D2C9B8",
            maxWidth: "520px",
          }}
        >
          {hero.body1}
        </p>

        {/* Gold accent line */}
        <p
          className="mb-10"
          style={{
            fontSize: "0.9rem",
            fontWeight: 500,
            lineHeight: 1.6,
            color: "#D4A853",
            maxWidth: "520px",
          }}
        >
          {hero.body2}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#apply"
            className="cta-primary inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold min-h-[48px]"
          >
            {hero.cta1}
          </a>
          <a
            href="#system"
            className="cta-secondary inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-medium min-h-[48px]"
          >
            {hero.cta2}
          </a>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap gap-4 sm:gap-6 mt-8">
          <span
            className="text-xs flex items-center gap-2 animate-fade-in"
            style={{ color: "#A69D8D", animationDelay: "0ms" }}
          >
            <span style={{ color: "#D4A853" }}>✓</span>
            {hero.trust1}
          </span>
          <span
            className="text-xs flex items-center gap-2 animate-fade-in"
            style={{ color: "#A69D8D", animationDelay: "100ms" }}
          >
            <span style={{ color: "#D4A853" }}>✓</span>
            {hero.trust2}
          </span>
          <span
            className="flex items-center gap-2 text-emerald-400/80 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs">{hero.trust3}</span>
          </span>
        </div>
      </div>
    </section>
  );
}
