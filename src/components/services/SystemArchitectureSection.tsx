"use client";

import { Reveal } from "@/components/motion";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

function CoreItem({ title, copy }: { title: string; copy: string }) {
  return (
    <div
      className="p-6 rounded-xl"
      style={{
        background: "#1E1A14",
        border: "1px solid #2A2318",
        borderLeft: "3px solid #D4A853",
      }}
    >
      <p className="text-sm font-semibold mb-2" style={{ color: "#F5F0E8" }}>
        {title}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#A69D8D" }}>
        {copy}
      </p>
    </div>
  );
}

export default function SystemArchitectureSection() {
  const { locale } = useLocale();
  const arch = translations[locale].services.architecture;

  return (
    <section
      id="system"
      className="w-full py-20 md:py-28 relative overflow-hidden"
      style={{ background: "#131009" }}
    >
      {/* Background orb */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.03) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">

        {/* ── Section header ── */}
        <Reveal>
          <p
            className="section-label mb-5"
            style={{ fontSize: "14px", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853" }}
          >
            {arch.sectionLabel}
          </p>
          <h2
            className="text-[clamp(2rem,4.5vw,3.25rem)] font-semibold text-white leading-[1.1] tracking-tight mb-6"
            style={{ maxWidth: "700px" }}
          >
            {arch.heading}
          </h2>
          <p
            className="text-[17px] leading-[1.75] mb-4"
            style={{ color: "#D2C9B8", maxWidth: "600px" }}
          >
            {arch.body1}
          </p>
          <p
            className="text-[15px] leading-relaxed"
            style={{ color: "#756D63", maxWidth: "580px" }}
          >
            {arch.body2}
          </p>
        </Reveal>

        {/* ── Divider ── */}
        <div className="my-14 md:my-16 h-px w-full" style={{ background: "rgba(212,168,83,0.15)" }} aria-hidden />

        {/* ── Core system ── */}
        <Reveal>
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-3"
            style={{ color: "#D4A853" }}
          >
            {arch.coreLabel}
          </p>
          <h3
            className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2"
          >
            {arch.coreHeading}
          </h3>
          <p className="text-sm mb-10" style={{ color: "#756D63" }}>
            {arch.coreSub}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            {arch.core.map((item) => (
              <CoreItem key={item.title} title={item.title} copy={item.copy} />
            ))}
          </div>
        </Reveal>


      </div>
    </section>
  );
}
