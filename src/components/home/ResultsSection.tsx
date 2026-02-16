"use client";

import { resultsPreview } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import Icon from "@/components/ui/Icon";
import { Reveal, CountUpValue } from "@/components/motion";

export default function ResultsSection() {
  return (
    <SectionWrapper id="results">
      <Reveal className="text-center mb-16 md:mb-20">
        <SectionLabel label={resultsPreview.label} className="mb-6" />
        <h2 className="heading-2 max-w-lg mx-auto">
          {resultsPreview.headline}
        </h2>
      </Reveal>

      {/* Dominant element: Primary revenue metric — 2-3x larger than everything */}
      <Reveal delay={0.1}>
        <div className="text-center mb-16 md:mb-20">
          <div className="text-6xl md:text-8xl lg:text-[7rem] font-bold text-[var(--text-primary)] mb-3 tabular-nums tracking-tight leading-none">
            <CountUpValue to={20000} prefix="$" durationMs={1800} />
          </div>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-2">
            {resultsPreview.featured.context}
          </p>
          <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">
            {resultsPreview.featured.client} · {resultsPreview.featured.method}
          </p>
        </div>
      </Reveal>

      {/* Supporting metrics — small, structured, quiet */}
      <div className="grid gap-px md:grid-cols-3 max-w-3xl mx-auto border border-[var(--border-soft)] rounded-[var(--radius-lg)] overflow-hidden mb-12">
        {resultsPreview.highlights.map((item, i) => (
          <Reveal key={i} delay={0.08 * i}>
            <div className="bg-[var(--bg-surface)] p-6 md:p-7 text-center">
              <div className="text-2xl font-bold text-[var(--text-primary)] mb-1 tabular-nums">
                {item.metric}
              </div>
              <p className="text-xs text-[var(--text-muted)]">{item.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Restrained CTA */}
      <Reveal className="text-center" delay={0.3}>
        <CTAButton href="/case-studies" variant="secondary" size="md" eventName="case_card_click">
          View Case Studies
          <Icon name="arrow-right" size={14} className="ml-1.5" />
        </CTAButton>
      </Reveal>
    </SectionWrapper>
  );
}
