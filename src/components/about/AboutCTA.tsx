"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

const nextSteps = [
  { step: "1", label: "Apply", description: "Short intake form — takes 2 min." },
  { step: "2", label: "We review fit", description: "Personally reviewed within 24 hours." },
  { step: "3", label: "Growth plan call", description: "Focused strategy session — no fluff." },
];

const trustItems = [
  { icon: "⚡", text: "Response within 24 hours" },
  { icon: "🔒", text: "100% confidential" },
  { icon: "📋", text: "Limited spots per quarter" },
];

/**
 * AboutCTA — Final CTA with 3-step "what happens next", refined hovers,
 * trust row with improved legibility, and subtle divider above footer.
 */
export default function AboutCTA() {
  return (
    <section id="about-cta" className="relative overflow-hidden">
      {/* Background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(127,95,255,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] tracking-tight mb-4">
              Your Pipeline Won&apos;t{" "}
              <span className="bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-alt)] bg-clip-text text-transparent">
                Build Itself
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto text-[0.92rem]">
              Apply for a strategy call. We&apos;ll review your business,
              identify the highest-leverage opportunities, and decide if
              we&apos;re a fit.
            </p>
            <p className="text-sm text-[var(--brand-accent)] font-medium mt-3 mb-8">
              If I don&apos;t see a clear path to ROI, I&apos;ll tell you.
            </p>
          </Reveal>

          {/* What happens next — tighter, scannable */}
          <Reveal delay={0.08}>
            <div className="mb-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-5">
                What happens next
              </p>
              <div className="flex items-start justify-center gap-0">
                {nextSteps.map((item, i) => (
                  <div key={item.step} className="flex flex-col items-center flex-1 max-w-[180px]">
                    {/* Step badge + connector */}
                    <div className="relative flex items-center w-full justify-center mb-3">
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[var(--brand-accent)] bg-[var(--bg-base)] text-xs font-bold text-[var(--brand-accent)] tabular-nums">
                        {item.step}
                      </span>
                      {/* Dashed connector */}
                      {i < nextSteps.length - 1 && (
                        <span className="absolute left-[calc(50%+20px)] right-[calc(-50%+20px)] top-1/2 h-px border-t border-dashed border-[var(--border-soft)]" aria-hidden="true" />
                      )}
                    </div>
                    <p className="text-[0.82rem] font-semibold text-white mb-0.5">{item.label}</p>
                    <p className="text-[0.72rem] text-[var(--text-muted)] leading-snug px-2">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Buttons with refined hover */}
          <Reveal delay={0.12}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7">
              <CTAButton
                href={ctaCopy.href}
                size="lg"
                eventName="final_cta_primary_click"
                className="hover:shadow-[0_4px_20px_rgba(127,95,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {ctaCopy.primary}
              </CTAButton>
              <CTAButton
                href="/case-studies"
                variant="secondary"
                size="md"
                eventName="final_cta_secondary_click"
                className="hover:-translate-y-0.5 transition-all duration-300"
              >
                {ctaCopy.secondary}
              </CTAButton>
            </div>
          </Reveal>

          {/* Trust row — improved legibility */}
          <Reveal delay={0.16}>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-2">
              {trustItems.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 text-[0.72rem] text-[var(--text-secondary)] tracking-wide"
                >
                  <span aria-hidden="true" className="text-[0.65rem]">{item.icon}</span>
                  {item.text}
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
