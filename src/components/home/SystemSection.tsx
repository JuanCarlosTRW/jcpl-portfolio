"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function SystemSection() {
  return (
    <SectionWrapper id="system" variant="surface">
      <Reveal className="text-center mb-16 md:mb-20">
        <SectionLabel label="The System" className="mb-6" />
        <h2 className="heading-2 max-w-lg mx-auto">
          The Presence-to-Pipeline System™
        </h2>
        <p className="mt-5 text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          A proven 6-step framework that transforms your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </Reveal>

      {/* Dominant element: structured pillar grid — no spotlight glow, no icons */}
      <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto border border-[var(--border-soft)] rounded-[var(--radius-lg)] overflow-hidden">
        {systemSteps.map((step, i) => (
          <Reveal key={step.step} delay={0.06 * i}>
            <div className="bg-[var(--bg-surface)] p-7 md:p-8 h-full flex flex-col">
              {/* Step number — restrained */}
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] mb-4">
                Step {step.step}
              </span>

              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
