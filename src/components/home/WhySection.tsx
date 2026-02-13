"use client";

import { whySection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function WhySection() {
  return (
    <SectionWrapper className="bg-[var(--bg-soft)]/40">
      <Reveal className="text-center mb-16">
        <SectionLabel label={whySection.label} className="mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] max-w-3xl mx-auto leading-tight">
          {whySection.headline}
        </h2>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {whySection.points.map((point, i) => (
          <Reveal
            key={i}
            delay={0.1 * i}
            y={i % 2 === 0 ? 14 : -14}
          >
            <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-8 h-full transition-all duration-300 hover:bg-[var(--bg-elevated)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                {point.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {point.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
