"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function SystemSection() {
  return (
    <SectionWrapper id="system" variant="surface">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="How It Works" className="mb-5" />
        <h2 className="heading-2 max-w-lg mx-auto">
          The Presence-to-Pipeline System™
        </h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed text-[0.95rem]">
          Six engineered phases that transform your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </Reveal>

      {/* Structured pillar grid — numbered, no icons, no glow */}
      <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto border border-[var(--border-soft)] rounded-[var(--radius-md)] overflow-hidden">
        {systemSteps.map((step, i) => (
          <Reveal key={step.step} delay={0.05 * i}>
            <div className="bg-[var(--bg-surface)] p-7 md:p-8 h-full flex flex-col">
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--text-muted)] mb-4">
                Phase {String(step.step).padStart(2, "0")}
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
