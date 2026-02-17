"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { servicesFinalCTA, ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";
import PaymentTrustRow from "./PaymentTrustRow";
import RiskReversal from "./RiskReversal";

export default function ServicesFinalCTA() {
  return (
    <section
      id="services-cta"
      className="services-cta-section"
      aria-labelledby="services-cta-headline"
    >
      {/* Background */}
      <div className="services-cta-bg" aria-hidden="true" />

      <SectionWrapper className="relative z-10">
        {/* Guarantees strip */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] font-medium mb-3">
                Our Commitments
              </p>
              <h2 className="heading-3">Built on Transparency</h2>
            </div>
          </Reveal>
          <GuaranteesStrip />
        </div>

        {/* Risk Reversal */}
        <div className="max-w-3xl mx-auto mb-16">
          <RiskReversal />
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16" aria-hidden="true">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/30 to-transparent" />
        </div>

        {/* Main CTA */}
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2
              id="services-cta-headline"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5"
            >
              {servicesFinalCTA.headline.split("Build Itself")[0]}
              <span className="bg-gradient-to-r from-[#7f5fff] to-[#33ccff] bg-clip-text text-transparent">
                Build Itself
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10 max-w-lg mx-auto text-[0.95rem]">
              {servicesFinalCTA.subheadline}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CTAButton
                href={ctaCopy.href}
                size="lg"
                eventName="services_final_cta_click"
              >
                {servicesFinalCTA.primary}
              </CTAButton>
              <CTAButton
                href="/case-studies"
                variant="secondary"
                size="md"
                eventName="services_final_cta_click"
              >
                {servicesFinalCTA.secondary}
              </CTAButton>
            </div>
          </Reveal>

          {/* Micro-trust badges */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
              {servicesFinalCTA.trustBadges.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]"
                >
                  <span aria-hidden="true" className="text-[0.7rem]">
                    {item.icon}
                  </span>
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Payment trust row */}
          <div className="mb-8">
            <PaymentTrustRow />
          </div>
        </div>

        {/* Spacer before footer */}
        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
