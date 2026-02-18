"use client";

import { aboutTimeline } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * WorkTimeline — vertical timeline with pill duration badges,
 * precise connector line, and staggered viewport reveals.
 * Mobile: left border + small nodes.
 */
export default function WorkTimeline() {
  return (
    <div className="max-w-2xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <SectionLabel label="Working Model" className="mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          How We Work Together
        </h2>
      </AnimatedSection>

      <div className="relative">
        {/* Vertical connector line */}
        <div
          className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--brand-accent)]/60 via-[var(--brand-accent)]/25 to-transparent"
          aria-hidden="true"
        />

        <div className="space-y-8">
          {aboutTimeline.map((step, i) => (
            <AnimatedSection key={step.title} delay={0.15 * i} direction="left">
              <div className="relative flex gap-6 md:gap-8">
                {/* Node */}
                <div className="relative shrink-0 flex flex-col items-center" aria-hidden="true">
                  <span
                    className="mt-1 h-10 w-10 flex items-center justify-center rounded-full border-2 border-[var(--brand-accent)] bg-[var(--bg-base)] text-[10px] font-bold text-[var(--brand-accent)] tabular-nums shadow-[0_0_14px_rgba(127,95,255,0.25)] z-10"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-6 md:p-7">
                  {/* Header: title + pill */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full border border-[var(--brand-alt)]/40 bg-[rgba(51,204,255,0.08)] px-3 py-0.5 text-xs font-semibold text-[var(--brand-alt)] tracking-wide">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
