"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function SystemSection() {
  return (
    <SectionWrapper className="bg-[var(--bg-surface)]/60">
      <Reveal className="text-center mb-16">
        <SectionLabel label="The System" className="mb-6" />
        <BlurText
          text="The Presence-to-Pipeline System™"
          delay={200}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] max-w-4xl mx-auto leading-tight"
        />
        <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
          A proven 6-step framework that transforms your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </Reveal>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {systemSteps.map((step, i) => (
          <Reveal key={step.step} delay={0.08 * i}>
            <div className="group relative gradient-border rounded-2xl bg-[var(--bg-surface)] p-8 transition-all duration-300 hover:bg-[var(--bg-elevated)]">
              {/* Step number */}
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-accent)] text-xs font-bold text-white" style={{ boxShadow: '0 0 15px rgba(127,95,255,0.4)' }}>
                {step.step}
              </div>

              <div className="text-3xl mb-4">{step.icon}</div>
              <BlurText
                text={step.title}
                delay={100}
                className="text-lg font-bold text-[var(--text-primary)] mb-2"
              />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
