"use client";

import { servicesHero } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

export default function ServicesHero() {
  const h = servicesHero;
  const beforeAccent = h.headline.replace(h.headlineAccent, "").trim();

  return (
    <SectionWrapper className="pt-32 md:pt-40 pb-0">
      <AnimatedSection className="text-center max-w-3xl mx-auto">
        <SectionLabel label={h.label} className="mb-6" />

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
          {beforeAccent}{" "}
          <span className="gradient-text">{h.headlineAccent}</span>
        </h1>

        <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
          {h.subheadline}
        </p>

        {/* Dual CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CTAButton
            href="/apply"
            size="lg"
            eventName="services_hero_primary_cta_click"
          >
            {h.primaryCTA}
          </CTAButton>
          <CTAButton
            href="#plans"
            variant="ghost"
            size="md"
            eventName="services_hero_secondary_cta_click"
          >
            {h.secondaryCTA} ↓
          </CTAButton>
        </div>

        {/* Trust micro-strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {h.trustItems.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="text-[var(--brand-accent)]">
                <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="0.8" />
                <path d="M3.8 6 L5.3 7.5 L8.2 4.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </AnimatedSection>
    </SectionWrapper>
  );
}
