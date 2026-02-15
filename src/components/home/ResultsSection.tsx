"use client";

import { resultsPreview } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal, CountUpValue } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function ResultsSection() {
  return (
    <SectionWrapper id="results">
      <Reveal className="text-center mb-12 md:mb-16">
        <SectionLabel label={resultsPreview.label} className="mb-6" />
        <BlurText
          text={resultsPreview.headline}
          delay={200}
          className="heading-2"
        />
      </Reveal>

      {/* Featured result — 1 big card */}
      <Reveal delay={0.1}>
        <StarBorder variant="alt" speed="8s" className="rounded-3xl mb-10 md:mb-12">
          <div className="rounded-3xl bg-[var(--bg-surface)] p-8 md:p-14 text-center">
            <div className="text-5xl md:text-7xl font-bold gradient-text mb-3">
              <CountUpValue to={20} prefix="$" suffix="K" durationMs={1600} />
            </div>
            <p className="body-lg mb-1">
              {resultsPreview.featured.context}
            </p>
            <p className="caption-text">
              {resultsPreview.featured.client} •{" "}
              {resultsPreview.featured.method}
            </p>
          </div>
        </StarBorder>
      </Reveal>

      {/* 3 supporting metrics with context */}
      <div className="grid gap-6 md:grid-cols-3 mb-10 md:mb-12">
        {resultsPreview.highlights.map((item, i) => (
          <Reveal key={i} delay={0.15 * i}>
            <StarBorder variant="accent" speed="12s" className="rounded-2xl h-full">
              <div className="rounded-2xl bg-[var(--bg-surface)] p-6 md:p-8 text-center h-full flex flex-col justify-center min-h-[140px]">
                <div className="text-3xl md:text-4xl font-bold text-[var(--brand-accent)] mb-2 tabular-nums">
                  {item.metric}
                </div>
                <p className="body-text text-sm">{item.label}</p>
              </div>
            </StarBorder>
          </Reveal>
        ))}
      </div>

      {/* CTA to case studies */}
      <Reveal className="text-center" delay={0.3}>
        <CTAButton href="/case-studies" variant="secondary" size="lg" eventName="case_card_click">
          View Case Studies →
        </CTAButton>
      </Reveal>
    </SectionWrapper>
  );
}
