"use client";

import { featuredCase } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, CountUpValue } from "@/components/motion";

export default function FeaturedCaseStudy() {
  return (
    <SectionWrapper id="proof" className="bg-[#060D1F]">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={featuredCase.label} className="mb-5 text-[#8899BB]" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {featuredCase.headline}
        </h2>
      </Reveal>

      {/* Featured Result Card */}
      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl border border-[rgba(37,99,235,0.15)] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #0F2049 0%, #0D1B3E 100%)",
            }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-32 pointer-events-none blur-[80px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative p-8 md:p-12 text-center">
              {/* Client label */}
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8899BB] mb-6">
                {featuredCase.client}
              </p>

              {/* Dominant metric */}
              <div className="mb-3">
                <span className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-white tabular-nums tracking-tight leading-none">
                  <CountUpValue to={20000} prefix="$" durationMs={1800} />
                </span>
              </div>
              <p className="text-base md:text-lg text-[#E8EDF5] mb-2">
                {featuredCase.resultLabel}
              </p>
              <p className="text-xs text-[#8899BB] uppercase tracking-[0.15em] mb-8">
                {featuredCase.timeframe} · {featuredCase.method}
              </p>

              {/* Divider */}
              <div
                className="h-px max-w-xs mx-auto mb-8"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(37,99,235,0.3), transparent)",
                }}
                aria-hidden="true"
              />

              {/* Supporting metrics */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
                {featuredCase.supporting.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl md:text-2xl font-bold text-[#2563EB] tabular-nums mb-1">
                      {item.metric}
                    </div>
                    <p className="text-xs text-[#8899BB]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white px-6 py-3 text-sm font-semibold transition-all"
              >
                {featuredCase.cta}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
