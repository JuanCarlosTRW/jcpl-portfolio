"use client";

import { systemSteps } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function SystemSection() {
  return (
    <SectionWrapper className="bg-[#0c0c10]/50">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel label="The System" className="mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight">
          The{" "}
          <span className="gradient-text">Presence-to-Pipeline System™</span>
        </h2>
        <p className="mt-4 text-lg text-[#9a9ab0] max-w-2xl mx-auto">
          A proven 6-step framework that transforms your online presence into a
          predictable pipeline of qualified booked calls.
        </p>
      </AnimatedSection>

      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {systemSteps.map((step, i) => (
          <AnimatedSection key={step.step} delay={0.08 * i}>
            <div className="group relative gradient-border rounded-2xl bg-[#0c0c10] p-8 transition-all duration-300 hover:bg-[#141418]">
              {/* Step number */}
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-xs font-bold text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                {step.step}
              </div>

              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-[#9a9ab0] leading-relaxed">
                {step.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
