"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import PremiumFrame, { PremiumFrameGlow } from "@/components/ui/PremiumFrame";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function FinalCTA() {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <Reveal className="text-center">
        <PremiumFrame
          variant="elevated"
          radius="xl"
          padding="lg"
          hover={false}
          className="relative py-12 md:py-16 lg:py-20 max-w-3xl mx-auto"
        >
          <PremiumFrameGlow color="accent" position="center" />

          <div className="relative z-10">
            <BlurText
              text="Ready to Build Your Growth System?"
              delay={200}
              className="section-title heading-2 mb-4"
            />
            <p className="body-lg max-w-xl mx-auto mb-8">
              Let&apos;s talk about your business, your goals, and how a
              Presence-to-Pipeline System™ can fill your calendar with
              qualified leads.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <CTAButton href={ctaCopy.href} size="lg" eventName="section_cta_click">
                {ctaCopy.primary}
                <Icon name="arrow-right" size={16} className="ml-1" />
              </CTAButton>
              <CTAButton
                href="/case-studies"
                variant="secondary"
                size="lg"
                eventName="section_cta_click"
              >
                {ctaCopy.secondary}
              </CTAButton>
            </div>

            {/* Friction reducers */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[var(--text-muted)]">
              <span className="flex items-center gap-1.5">
                <Icon name="clock" size={14} className="opacity-60" />
                2-min application
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="shield" size={14} className="opacity-60" />
                No obligation
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="zap" size={14} className="opacity-60" />
                Response within 24h
              </span>
            </div>
          </div>
        </PremiumFrame>
      </Reveal>

      {/* Spacer before footer */}
      <div className="h-12 md:h-20" aria-hidden="true" />
    </SectionWrapper>
  );
}
