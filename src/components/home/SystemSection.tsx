"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";
import { Reveal } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function SystemSection() {
  return (
    <SectionWrapper id="system" variant="surface">
      <Reveal className="text-center mb-12 md:mb-16">
        <SectionLabel label="The System" className="mb-6" />
        <BlurText
          text="The Presence-to-Pipeline System™"
          delay={200}
          className="heading-2 max-w-4xl mx-auto"
        />
        <p className="mt-4 body-lg max-w-2xl mx-auto">
          A proven 6-step framework that transforms your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </Reveal>

      {/* 6 step cards with Input → Action → Output format */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {systemSteps.map((step, i) => (
          <Reveal key={step.step} delay={0.08 * i}>
            <StarBorder variant="accent" speed={`${10 + i}s`} className="rounded-2xl h-full">
              <div className="relative rounded-2xl bg-[var(--bg-surface)] p-6 md:p-8 h-full transition-colors hover:bg-[var(--bg-elevated)]">
                {/* Step number badge */}
                <div
                  className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--brand-accent)] text-xs font-bold text-white z-10"
                  style={{ boxShadow: "0 0 15px rgba(127,95,255,0.4)" }}
                >
                  {step.step}
                </div>

                <div className="text-3xl mb-4" role="img" aria-label={step.title}>
                  {step.icon}
                </div>
                <h3 className="heading-3 mb-2">{step.title}</h3>
                <p className="body-text text-sm">
                  {step.description}
                </p>
              </div>
            </StarBorder>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
