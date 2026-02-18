"use client";

import { howWeWork } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function HowWeWork() {
  return (
    <SectionWrapper id="process">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={howWeWork.label} className="mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {howWeWork.headline}
        </h2>
        <p className="mt-5 text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          {howWeWork.subheadline}
        </p>
      </Reveal>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical connecting line (desktop) */}
        <div
          className="hidden md:block absolute left-[39px] top-8 bottom-8 w-px"
          style={{
            background:
              "linear-gradient(180deg, rgba(127,95,255,0.3) 0%, rgba(51,204,255,0.3) 50%, rgba(127,95,255,0.1) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="space-y-6">
          {howWeWork.steps.map((step, i) => {
            return (
              <Reveal key={step.number} delay={0.1 * i}>
                <div className="group relative flex gap-6 md:gap-8">
                  {/* Step number badge */}
                  <div className="relative shrink-0">
                    <div
                      className="flex h-[78px] w-[78px] items-center justify-center rounded-2xl border transition-all duration-400 group-hover:border-[rgba(127,95,255,0.3)]"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--bg-surface), var(--bg-elevated))",
                        borderColor: "rgba(255,255,255,0.08)",
                      }}
                    >
                      <span className="text-2xl font-bold text-[var(--brand-accent)] tabular-nums">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--brand-alt)] bg-[rgba(51,204,255,0.08)] px-2.5 py-1 rounded-full border border-[rgba(51,204,255,0.12)]">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
