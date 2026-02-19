"use client";

import { qualification, ctaCopy } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

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
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="text-[#2563EB]">✓</span>
                  This Is for You If…
                </h3>
                <ul className="space-y-3.5">
                  {qualification.forYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#E8EDF5] leading-relaxed">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not For You If */}
              <div className="rounded-2xl border border-[rgba(239,68,68,0.2)] bg-[#0F2049] p-7 md:p-8">
                <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="text-[#EF4444]">✕</span>
                  This Is Not for You If…
                </h3>
                <ul className="space-y-3.5">
                  {qualification.notForYouIf.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#8899BB] leading-relaxed">
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
                Apply for a strategy call. We&apos;ll review your business,
                identify the highest-leverage growth opportunities, and determine
                if we&apos;re the right fit.
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

            {/* Micro-proof strip */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                {[
                  { icon: "⚡", text: "Response within 24 hours" },
                  { icon: "🔒", text: "100% confidential" },
                  { icon: "📋", text: "Limited spots per quarter" },
                ].map((item) => (
                  <span
                    key={item.text}
                    className="inline-flex items-center gap-1.5 text-xs text-[#8899BB]"
                  >
                    <span aria-hidden="true" className="text-[0.7rem] text-[#2563EB]">
                      {item.icon}
                    </span>
                    {item.text}
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
