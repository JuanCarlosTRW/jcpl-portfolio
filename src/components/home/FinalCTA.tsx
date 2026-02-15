"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import StarBorder from "@/components/ui/StarBorder";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function FinalCTA() {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <Reveal className="text-center">
        <StarBorder variant="alt" speed="10s" className="rounded-3xl">
          <div className="rounded-3xl bg-[var(--bg-surface)] py-14 px-6 md:py-20 md:px-12 relative overflow-hidden">
            {/* Ambient glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[400px] md:h-[400px] rounded-full blur-[120px] pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(127,95,255,0.15), transparent 70%)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <BlurText
                text="Ready to Build Your Growth System?"
                delay={200}
                className="heading-2 mb-4"
              />
              <p className="body-lg max-w-xl mx-auto mb-8">
                Let&apos;s talk about your business, your goals, and how a
                Presence-to-Pipeline System™ can fill your calendar with
                qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href={ctaCopy.href} size="lg" eventName="section_cta_click">
                  {ctaCopy.primary}
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
            </div>
          </div>
        </StarBorder>
      </Reveal>

      {/* Spacer before footer */}
      <div className="h-16 md:h-24" aria-hidden="true" />
    </SectionWrapper>
  );
}
