"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { servicesFinalCTA } from "@/lib/content";
import { Reveal } from "@/components/motion";
import GuaranteesStrip from "./GuaranteesStrip";
import PaymentTrustRow from "./PaymentTrustRow";

function TrustIcon({ icon }: { icon: string }) {
  if (icon === "lightning") {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent">
        <path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "lock") {
    return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent">
        <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
        <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
        <circle cx="8" cy="11" r="1" fill="currentColor"/>
      </svg>
    );
  }
  // clipboard
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent">
      <rect x="3" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 3V2h4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5.5 8h5M5.5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

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
        {/* Unified Risk Reversal — Guarantees */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-xs uppercase tracking-[0.15em] text-cg-secondary font-medium mb-3">
                MY STANDARDS
              </p>
              <h2 className="heading-3">What I Guarantee Before You Pay a Dollar.</h2>
            </div>
          </Reveal>
          <GuaranteesStrip />
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16" aria-hidden="true">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/30 to-transparent" />
        </div>

        {/* Main CTA Endcap */}
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2
              id="services-cta-headline"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5"
            >
            Ready to Build a Real<br />Acquisition System?
            </h2>
            <p className="text-cg-body leading-relaxed mb-10 max-w-lg mx-auto text-[0.95rem]">
            Short application. If I think I can help, you will receive a call link within 24 hours. If I do not, I will tell you that too.
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CTAButton
                href="/apply"
                size="lg"
                eventName="services_final_cta_click"
              >
                Apply (2 min) →
              </CTAButton>
              <CTAButton
                href="/case-studies"
                variant="secondary"
                size="md"
                eventName="services_final_cta_click"
              >
                View Results
              </CTAButton>
            </div>
          </Reveal>

          {/* Micro-trust badges */}
          <Reveal delay={0.15}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-10">
              {[
                { icon: "lightning", text: "Response within 24 hours" },
                { icon: "lock", text: "100% confidential" },
                { icon: "clipboard", text: "Limited spots per quarter" },
              ].map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 text-[14px] text-cg-secondary"
                >
                  <TrustIcon icon={item.icon} />
                  {item.text}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Payment trust row */}
          {/* Remove PaymentTrustRow and add invoice billing text below Apply button */}
          <p className="text-sm text-slate-400 mt-4 text-center">
            Invoice-based billing. CAD and USD accepted. No retainer required until we confirm fit.
          </p>
        </div>

        <div className="h-10 md:h-16" aria-hidden="true" />
      </SectionWrapper>
    </section>
  );
}
