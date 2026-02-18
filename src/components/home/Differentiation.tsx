"use client";

import { differentiation } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Inline SVG Icons ─── */
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="8" cy="8" r="7" stroke="rgba(239,68,68,0.3)" strokeWidth="1" />
      <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="rgba(239,68,68,0.8)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="8" cy="8" r="7" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
      <path d="M5 8l2 2 4-4" stroke="rgba(34,197,94,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Differentiation() {
  return (
    <SectionWrapper id="difference" variant="surface">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label={differentiation.label} className="mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {differentiation.headline}
        </h2>
        <p className="mt-5 text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          {differentiation.subheadline}
        </p>
      </Reveal>

      {/* ── Desktop Comparison Table ── */}
      <Reveal delay={0.1} className="hidden md:block">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl border border-[rgba(255,255,255,0.06)] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)",
            }}
          >
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[rgba(255,255,255,0.06)]">
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)]">
                Dimension
              </div>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(239,68,68,0.7)] text-center">
                Typical Approach
              </div>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-[rgba(34,197,94,0.8)] text-center">
                Growth Architecture™
              </div>
            </div>

            {/* Rows */}
            {differentiation.comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr] ${
                  i < differentiation.comparisons.length - 1
                    ? "border-b border-[rgba(255,255,255,0.04)]"
                    : ""
                } hover:bg-[rgba(255,255,255,0.02)] transition-colors duration-200`}
              >
                <div className="p-5 text-sm font-medium text-[var(--text-secondary)]">
                  {row.dimension}
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center">
                  <XIcon />
                  <span className="text-sm text-[var(--text-muted)]">
                    {row.them}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center">
                  <CheckIcon />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Mobile Cards ── */}
      <div className="md:hidden space-y-4 max-w-sm mx-auto">
        {differentiation.comparisons.map((row, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-3">
                {row.dimension}
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <XIcon />
                  <span className="text-sm text-[var(--text-muted)]">
                    {row.them}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {row.us}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
