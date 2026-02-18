"use client";

import { aboutTimeline } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * WorkTimeline — vertical timeline with pill duration badges,
 * precise connector line + nodes, staggered viewport reveals.
 * Tighter spacing, consistent pill style.
 */
export default function WorkTimeline() {
  return (
    <div className="max-w-2xl mx-auto">
      <AnimatedSection className="text-center mb-10">
        <SectionLabel label="Working Model" className="mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          How We Work Together
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-[19px] md:left-[19px] top-5 bottom-5 w-px bg-gradient-to-b from-[var(--brand-accent)]/50 via-[var(--brand-accent)]/20 to-transparent"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {aboutTimeline.map((step, i) => (
            <AnimatedSection key={step.title} delay={0.12 * i} direction="left">
              <div className="relative flex gap-5 md:gap-6">
                {/* Node — consistent 38×38 */}
                <div className="relative shrink-0 flex flex-col items-center" aria-hidden="true">
                  <span
                    className="h-[38px] w-[38px] flex items-center justify-center rounded-full border-[1.5px] border-[var(--brand-accent)] bg-[var(--bg-base)] text-[10px] font-bold text-[var(--brand-accent)] tabular-nums shadow-[0_0_12px_rgba(127,95,255,0.20)] z-10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <h3 className="text-[0.95rem] md:text-base font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full border border-[var(--brand-alt)]/40 bg-[rgba(51,204,255,0.08)] px-2.5 py-0.5 text-[0.65rem] font-semibold text-[var(--brand-alt)] uppercase tracking-wider leading-none">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                  {step.deliverables && (
                    <p className="mt-2.5 text-[0.72rem] font-medium tracking-wide text-[var(--brand-alt)] leading-relaxed">
                      {step.deliverables}
                    </p>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
