"use client";

import { qualification, ctaCopy } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 8.5l3 3 5-5.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

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

const trustBadges = [
  { Icon: LightningIcon, text: "Response within 24 hours" },
  { Icon: LockIcon, text: "100% confidential" },
  { Icon: ClipboardIcon, text: "Limited spots per quarter" },
];

export default function QualificationCTA() {
  return (
    <section id="qualify" className="relative overflow-hidden bg-[#060D1F]">
      {/* Background treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(37,99,235,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #060D1F 0%, rgba(6,13,31,0.6) 50%, #060D1F 100%)",
        }}
        aria-hidden="true"
      />

      <SectionWrapper className="relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Qualification Grid */}
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 mb-16">
              {/* For You If */}
              <div className="rounded-2xl border border-[rgba(37,99,235,0.2)] bg-[#0F2049] p-7 md:p-8">
                <h3 className="text-[17px] font-bold text-white mb-5 flex items-center gap-2">
                  <CheckIcon />
                  This Is for You If…
                </h3>
                <ul className="space-y-3.5">
                  {qualification.forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#E8EDF5] leading-[1.6]">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For You If */}
              <div className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-[#0F2049] p-7 md:p-8">
                <h3 className="text-[17px] font-bold text-white mb-5 flex items-center gap-2">
                  <XIcon />
                  This Is Not for You If…
                </h3>
                <ul className="space-y-3.5">
                  {qualification.notForYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-[#8899BB] leading-[1.6]">
                      <XIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Final CTA Block */}
          <div className="text-center">
            <Reveal>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight mb-5">
                Your Pipeline Won&apos;t{" "}
                <span className="text-[#2563EB]">
                  Build Itself
                </span>
              </h2>
              <p className="text-[#E8EDF5] leading-relaxed mb-10 max-w-lg mx-auto text-[0.95rem]">
                Apply for a strategy call. I&apos;ll review your business,
                identify the highest-leverage growth opportunities, and determine
                if I&apos;m the right fit.
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

            {/* Micro-proof strip — SVG icons */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {trustBadges.map(({ Icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 text-xs text-[#8899BB]"
                  >
                    <Icon />
                    {text}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
