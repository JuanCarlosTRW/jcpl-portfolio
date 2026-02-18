"use client";

import { strategicGap } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function StrategicGap() {
  return (
    <SectionWrapper id="insight" variant="surface">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={strategicGap.label} className="mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {strategicGap.headline}
        </h2>
      </Reveal>

      <div className="max-w-3xl mx-auto space-y-6">
        {strategicGap.truths.map((truth, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="group relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] p-8 md:p-10 transition-all duration-400 hover:border-[rgba(127,95,255,0.15)] hover:bg-[var(--bg-elevated)]">
              {/* Subtle accent bar */}
              <div
                className="absolute top-0 left-8 right-8 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(127,95,255,0.2), transparent)",
                }}
                aria-hidden="true"
              />

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-snug">
                {truth.heading}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem]">
                {truth.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
