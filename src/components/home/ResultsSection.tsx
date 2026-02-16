"use client";

import { resultsPreview } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumFrame, { PremiumFrameGlow } from "@/components/ui/PremiumFrame";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal, CountUpValue } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

/* Icon mapping for metrics */
const metricIcons = ["monitor", "layers", "zap"] as const;

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

      {/* Featured result — hero card with glow */}
      <Reveal delay={0.1}>
        <PremiumFrame
          variant="elevated"
          radius="xl"
          padding="lg"
          hover={false}
          className="relative mb-10 md:mb-12 text-center max-w-2xl mx-auto"
        >
          <PremiumFrameGlow color="alt" position="top" />
          <div className="relative z-10">
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
              <CountUpValue to={20000} prefix="$" durationMs={2000} />
            </div>
            <p className="body-lg mb-1">
              {resultsPreview.featured.context}
            </p>
            <p className="text-sm text-[var(--text-muted)] flex items-center justify-center gap-2">
              <Icon name="calendar" size={14} className="opacity-60" />
              {resultsPreview.featured.client} • {resultsPreview.featured.method}
            </p>
          </div>
        </PremiumFrame>
      </Reveal>

      {/* 3 supporting metrics */}
      <div className="grid gap-5 md:grid-cols-3 mb-10 md:mb-12">
        {resultsPreview.highlights.map((item, i) => (
          <Reveal key={i} delay={0.08 * i}>
            <PremiumFrame
              variant="default"
              radius="lg"
              padding="md"
              className="text-center h-full flex flex-col justify-center min-h-[140px]"
            >
              <div className="mb-2 mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--brand-accent)]/10 text-[var(--brand-accent)]">
                <Icon name={metricIcons[i]} size={18} strokeWidth={1.75} />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-1 tabular-nums">
                {item.metric}
              </div>
              <p className="text-sm text-[var(--text-secondary)]">{item.label}</p>
            </PremiumFrame>
          </Reveal>
        ))}
      </div>

      {/* CTA to case studies */}
      <Reveal className="text-center" delay={0.3}>
        <CTAButton href="/case-studies" variant="secondary" size="lg" eventName="case_card_click">
          View Case Studies
          <Icon name="arrow-right" size={16} className="ml-1" />
        </CTAButton>
      </Reveal>
    </SectionWrapper>
  );
}
