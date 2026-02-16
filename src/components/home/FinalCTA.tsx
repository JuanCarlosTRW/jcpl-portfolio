"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function FinalCTA() {
  return (
    <SectionWrapper id="cta">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <h2 className="heading-2 mb-4">
            Ready to Build Your Growth System?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-10 max-w-md mx-auto text-[0.95rem]">
            Apply for a strategy call. We&apos;ll review your business, identify
            the highest-leverage growth opportunities, and determine if
            we&apos;re a fit.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <CTAButton href={ctaCopy.href} size="lg" eventName="section_cta_click">
            {ctaCopy.primary}
          </CTAButton>
        </Reveal>

        {/* Single quiet note — not a laundry list */}
        <Reveal delay={0.15}>
          <p className="mt-6 text-xs text-[var(--text-muted)]">
            Limited availability · Response within 24 hours
          </p>
        </Reveal>
      </div>

      {/* Spacer before footer */}
      <div className="h-10 md:h-16" aria-hidden="true" />
    </SectionWrapper>
  );
}
