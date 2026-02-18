"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

/**
 * AboutCTA — Final CTA section for the About page.
 * Matches the home FinalCTA style with micro-proof trust row.
 */
export default function AboutCTA() {
  return (
    <section id="about-cta" className="relative overflow-hidden">
      {/* Background treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(127,95,255,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, var(--bg-base) 0%, rgba(10,16,32,0.6) 50%, var(--bg-base) 100%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5">
              Your Pipeline Won&apos;t{" "}
              <span className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-alt)] bg-clip-text text-transparent">
                Build Itself
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-10 max-w-lg mx-auto text-[0.95rem]">
              Apply for a strategy call. We&apos;ll review your business,
              identify the highest-leverage opportunities, and decide if
              we&apos;re a fit.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <CTAButton
                href={ctaCopy.href}
                size="lg"
                eventName="final_cta_primary_click"
              >
                {ctaCopy.primary}
              </CTAButton>
              <CTAButton
                href="/case-studies"
                variant="secondary"
                size="md"
                eventName="final_cta_secondary_click"
              >
                {ctaCopy.secondary}
              </CTAButton>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { icon: "\u26A1", text: "Response within 24 hours" },
                { icon: "\uD83D\uDD12", text: "100% confidential" },
                { icon: "\uD83D\uDCCB", text: "Limited spots per quarter" },
              ].map((item) => (
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
        </div>
      </SectionWrapper>
    </section>
  );
}
