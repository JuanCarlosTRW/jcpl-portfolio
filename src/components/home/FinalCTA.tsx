"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

export default function FinalCTA() {
  return (
    <SectionWrapper>
      <Reveal className="text-center">
        <div className="gradient-border rounded-3xl bg-[var(--bg-surface)] py-16 px-8 md:py-24 md:px-16 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--brand-accent)]/10 rounded-full blur-[120px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Ready to Build Your{" "}
              <span className="gradient-text">Growth System</span>?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
              Let&apos;s talk about your business, your goals, and how a
              Presence-to-Pipeline System™ can fill your calendar with
              qualified leads.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href={ctaCopy.href} size="lg">
                {ctaCopy.primary}
              </CTAButton>
              <CTAButton
                href={ctaCopy.href}
                variant="secondary"
                size="lg"
              >
                {ctaCopy.secondary}
              </CTAButton>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
