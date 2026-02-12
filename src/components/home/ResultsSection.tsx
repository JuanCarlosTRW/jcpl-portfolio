"use client";

import { resultsPreview } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CountUp from "@/components/ui/CountUp";
import CTAButton from "@/components/ui/CTAButton";

export default function ResultsSection() {
  return (
    <SectionWrapper>
      <AnimatedSection className="text-center mb-16">
        <SectionLabel label={resultsPreview.label} className="mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)]">
          {resultsPreview.headline}
        </h2>
      </AnimatedSection>

      {/* Featured result */}
      <AnimatedSection delay={0.1}>
        <div className="gradient-border rounded-3xl bg-[var(--bg-surface)] p-10 md:p-14 text-center mb-12">
          <div className="text-5xl md:text-7xl font-bold gradient-text mb-2">
            $<CountUp end={20000} />
          </div>
          <p className="text-lg text-[var(--text-secondary)] mb-1">
            {resultsPreview.featured.context}
          </p>
          <p className="text-sm text-[var(--text-muted)]">
            {resultsPreview.featured.client} •{" "}
            {resultsPreview.featured.method}
          </p>
        </div>
      </AnimatedSection>

      {/* Highlights */}
      <div className="grid gap-6 md:grid-cols-3 mb-12">
        {resultsPreview.highlights.map((item, i) => (
          <AnimatedSection key={i} delay={0.15 * i}>
            <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-8 text-center transition-all duration-300 hover:border-[var(--brand-accent)]/30">
              <div className="text-3xl md:text-4xl font-bold text-[var(--brand-accent)] mb-2">
                {item.metric}
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{item.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection className="text-center" delay={0.3}>
        <CTAButton href="/case-studies" variant="secondary" size="lg">
          View Case Studies
        </CTAButton>
      </AnimatedSection>
    </SectionWrapper>
  );
}
