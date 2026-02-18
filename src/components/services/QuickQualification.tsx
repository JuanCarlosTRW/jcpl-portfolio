"use client";

import { servicesQualification } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
      <path d="M5 8l2 2 4-4" stroke="rgba(34,197,94,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="rgba(239,68,68,0.7)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function QuickQualification() {
  return (
    <SectionWrapper id="fit">
      <Reveal className="text-center mb-10">
        <SectionLabel label="Fit Check" className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Is This for You?
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        {/* Best For */}
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-[rgba(34,197,94,0.12)] bg-[var(--bg-surface)] p-7 md:p-8 h-full">
            <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="text-[rgba(34,197,94,0.8)]">✓</span>
              Best For
            </h3>
            <ul className="space-y-3.5">
              {servicesQualification.bestFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Not For */}
        <Reveal delay={0.1}>
          <div className="rounded-2xl border border-[rgba(239,68,68,0.08)] bg-[var(--bg-surface)] p-7 md:p-8 h-full">
            <h3 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="text-[rgba(239,68,68,0.7)]">✕</span>
              Not For
            </h3>
            <ul className="space-y-3.5">
              {servicesQualification.notFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  <XIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
