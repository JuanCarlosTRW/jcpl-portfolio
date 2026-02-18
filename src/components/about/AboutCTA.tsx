"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

const nextSteps = [
  { step: "1", label: "Apply", description: "Fill out a short intake form." },
  { step: "2", label: "We review fit", description: "I personally review your business within 24 hours." },
  { step: "3", label: "Growth plan call", description: "You get a focused strategy session — no fluff." },
];

const trustItems = [
  { icon: "⚡", text: "Response within 24 hours" },
  { icon: "🔒", text: "100% confidential" },
  { icon: "📋", text: "Limited spots per quarter" },
];

/**
 * AboutCTA — Final CTA with 3-step "what happens next" and trust row.
 */
export default function AboutCTA() {
  return (
    <section id="about-cta" className="relative overflow-hidden">
      {/* Background */}
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

          {/* What happens next */}
          <Reveal delay={0.1}>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-6">
                What happens next
              </p>
              <div className="flex flex-col sm:flex-row items-start justify-center gap-0">
                {nextSteps.map((item, i) => (
                  <div key={item.step} className="flex flex-row sm:flex-col items-start sm:items-center gap-4 sm:gap-2 flex-1">
                    {/* Step */}
                    <div className="flex sm:flex-row items-center gap-3 sm:gap-0 w-full sm:w-auto sm:justify-center">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--brand-accent)] text-xs font-bold text-[var(--brand-accent)]">
                        {item.step}
                      </span>
                      {/* Connector arrow — only between items */}
                      {i < nextSteps.length - 1 && (
                        <span className="hidden sm:block flex-1 h-px border-t border-dashed border-[var(--border-soft)] w-full mx-2" aria-hidden="true" />
                      )}
                    </div>
                    <div className="text-left sm:text-center pb-4 sm:pb-0 sm:px-2">
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-snug">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
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
              {trustItems.map((item) => (
                <span
                  key={item.text}
                  className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]"
                >
                  <span aria-hidden="true" className="text-[0.7rem]">{item.icon}</span>
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
