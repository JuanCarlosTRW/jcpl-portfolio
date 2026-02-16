"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import Icon from "@/components/ui/Icon";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function FinalCTA() {
  return (
    <SectionWrapper id="cta">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <h2 className="heading-2 mb-5">
            Ready to Build Your Growth System?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-10 max-w-md mx-auto">
            Let&apos;s talk about your business, your goals, and how the
            Presence-to-Pipeline System™ can fill your calendar with
            qualified leads.
          </p>
        </Reveal>

        {/* Dominant element: single CTA — restrained, no glow */}
        <Reveal delay={0.1}>
          <CTAButton href={ctaCopy.href} size="lg" eventName="section_cta_click">
            {ctaCopy.primary}
            <Icon name="arrow-right" size={14} className="ml-1.5" />
          </CTAButton>
        </Reveal>

        {/* Friction reducers — quiet, supportive */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <Icon name="clock" size={13} className="opacity-40" />
              2-min application
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="shield" size={13} className="opacity-40" />
              No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="zap" size={13} className="opacity-40" />
              Response within 24h
            </span>
          </div>
        </Reveal>
      </div>

      {/* Spacer before footer */}
      <div className="h-12 md:h-20" aria-hidden="true" />
    </SectionWrapper>
  );
}
