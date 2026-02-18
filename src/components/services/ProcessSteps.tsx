"use client";

import { servicesProcess } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

export default function ProcessSteps() {
  return (
    <SectionWrapper id="process" variant="surface">
      <Reveal className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {servicesProcess.headline}
        </h2>
      </Reveal>

      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden md:block absolute left-[39px] top-6 bottom-6 w-px"
            style={{
              background: "linear-gradient(180deg, rgba(127,95,255,0.3) 0%, rgba(51,204,255,0.3) 50%, rgba(127,95,255,0.1) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="space-y-6">
            {servicesProcess.steps.map((step, i) => (
              <Reveal key={step.number} delay={0.1 * i}>
                <div className="group flex gap-6 md:gap-8">
                  {/* Number badge */}
                  <div className="relative shrink-0">
                    <div className="flex h-[78px] w-[78px] items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] transition-all duration-400 group-hover:border-[rgba(127,95,255,0.3)]" style={{ background: "linear-gradient(135deg, var(--bg-surface), var(--bg-elevated))" }}>
                      <span className="text-2xl font-bold text-[var(--brand-accent)] tabular-nums">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
