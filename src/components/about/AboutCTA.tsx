"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { ctaCopy } from "@/lib/content";
import { Reveal } from "@/components/motion";

const nextSteps = [
  { step: "1", label: "Apply", description: "Short intake form — takes 2 min." },
  { step: "2", label: "I review fit", description: "Personally reviewed within 24 hours." },
  { step: "3", label: "Growth plan call", description: "Focused strategy session — no fluff." },
];

function LightningIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-[#2563EB]">
      <path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-[#2563EB]">
      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-[#2563EB]">
      <rect x="3" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 3V2h4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5.5 8h5M5.5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

const trustItems = [
  { Icon: LightningIcon, text: "Response within 24 hours" },
  { Icon: LockIcon, text: "100% confidential" },
  { Icon: ClipboardIcon, text: "Limited spots per quarter" },
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
          background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.12] tracking-tight mb-4">
              Your Pipeline Won&apos;t{" "}
              <span className="text-[#2563EB]">
                Build Itself
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-md mx-auto text-[0.92rem]">
              Apply for a strategy call. I&apos;ll review your business,
              identify the highest-leverage opportunities, and decide if
              I&apos;m a fit.
            </p>
            <p className="text-sm text-[#2563EB] font-medium mt-3 mb-8">
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
                      <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#2563EB] bg-[var(--bg-base)] text-xs font-bold text-[#2563EB] tabular-nums">
                        {item.step}
                      </span>
                      {/* Dashed connector */}
                      {i < nextSteps.length - 1 && (
                        <span className="absolute left-[calc(50%+20px)] right-[calc(-50%+20px)] top-1/2 h-px border-t border-dashed border-[rgba(37,99,235,0.2)]" aria-hidden="true" />
                      )}
                    </div>
                    <p className="text-[0.82rem] font-semibold text-white mb-0.5">{item.label}</p>
                    <p className="text-[0.72rem] text-[#8899BB] leading-snug px-2">{item.description}</p>
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
                className="hover:shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-300"
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
