"use client";

import { whySection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhySection() {
  return (
    <SectionWrapper className="bg-[#0c0c10]/50">
      <AnimatedSection className="text-center mb-16">
        <SectionLabel label={whySection.label} className="mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
          {whySection.headline}
        </h2>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        {whySection.points.map((point, i) => (
          <AnimatedSection
            key={i}
            delay={0.1 * i}
            direction={i % 2 === 0 ? "left" : "right"}
          >
            <div className="gradient-border rounded-2xl bg-[#0c0c10] p-8 h-full transition-all duration-300 hover:bg-[#141418]">
              <h3 className="text-xl font-bold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-[#9a9ab0] leading-relaxed">
                {point.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </SectionWrapper>
  );
}
