"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Icon, { systemStepIcons } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function SystemSection() {
  return (
    <SectionWrapper id="system" variant="surface">
      {/* Section header — fully centered */}
      <Reveal className="text-center mb-12 md:mb-16">
        <SectionLabel label="The System" className="mb-6" />
        <BlurText
          text="The Presence-to-Pipeline System™"
          delay={200}
          className="section-title heading-2 text-center"
        />
        <p className="mt-4 body-lg max-w-2xl mx-auto">
          A proven 6-step framework that transforms your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </Reveal>

      {/* 6 step cards — SpotlightCard with interactive mouse glow */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {systemSteps.map((step, i) => (
          <Reveal key={step.step} delay={0.06 * i}>
            <SpotlightCard
              spotlightColor="rgba(127, 95, 255, 0.08)"
              className="h-full p-6 md:p-7 flex flex-col"
            >
              {/* Icon container */}
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                <Icon name={systemStepIcons[step.step]} size={22} strokeWidth={1.75} />
              </div>

              {/* Step label */}
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-2">
                Step {step.step}
              </span>

              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
