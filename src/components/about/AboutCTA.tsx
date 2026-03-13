"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

function LightningIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-sv-primary">
      <path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-sv-primary">
      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
}

const trustItems = [
  { Icon: LightningIcon, text: "Response within 24 hours" },
  { Icon: LockIcon, text: "100% confidential" },
];

export default function AboutCTA() {
  return (
    <section id="about-cta" className="relative overflow-hidden">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(212,168,83,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] tracking-tight mb-4">
              One application.{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--brand-accent)" }}
              >
                One honest answer.
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto text-[0.92rem]">
              I review your market and current positioning personally before we speak. If there is a clear path to more qualified calls, you will hear from me within 24 hours. If there is not, I will tell you that directly — before you spend anything.
            </p>
            <p className="text-sm font-medium mt-3 mb-10" style={{ color: "var(--brand-accent)" }}>
              No retainer until I confirm fit.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7">
              <CTAButton
                href={ctaCopy.href}
                size="lg"
                eventName="about_cta_primary_click"
                className="hover:-translate-y-0.5 transition-all duration-300"
              >
                {ctaCopy.primary}
              </CTAButton>
              <CTAButton
                href="/results"
                variant="secondary"
                size="md"
                eventName="about_cta_secondary_click"
                className="hover:-translate-y-0.5 transition-all duration-300"
              >
                {ctaCopy.secondary}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-2">
              {trustItems.map(({ Icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-1.5 text-[0.72rem] text-[var(--text-secondary)] tracking-wide"
                >
                  <Icon />
                  {text}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Subtle divider above footer */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent" aria-hidden="true" />
    </section>
  );
}
