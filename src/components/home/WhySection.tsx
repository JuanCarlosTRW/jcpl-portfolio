"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Comparison Rows ─── */
const ROWS = [
  {
    label: "Ownership",
    fragmented: "5+ vendors — you coordinate everything",
    integrated: "One partner owns the entire pipeline",
  },
  {
    label: "Launch Speed",
    fragmented: "8–12 weeks, stalled handoffs",
    integrated: "2–4 weeks, unified execution",
  },
  {
    label: "Reporting",
    fragmented: "Scattered dashboards, no attribution",
    integrated: "Single report, full-funnel visibility",
  },
  {
    label: "Lead Quality",
    fragmented: "No feedback loop between channels",
    integrated: "Built-in qualification and scoring",
  },
  {
    label: "Accountability",
    fragmented: "Everyone points elsewhere",
    integrated: "One owner, one outcome metric",
  },
  {
    label: "Cost of Delay",
    fragmented: "Months lost to misalignment",
    integrated: "Compounding returns from week one",
  },
];

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

export default function WhySection() {
  return (
    <SectionWrapper id="advantage" variant="surface">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label="The Advantage" className="mb-5" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          One Integrated Partner vs.{" "}
          <span className="bg-gradient-to-r from-[#ef4444]/80 to-[#ef4444]/50 bg-clip-text text-transparent">
            Five Disconnected Freelancers
          </span>
        </h2>
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
            <div className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-[rgba(255,255,255,0.06)]">
              <div className="p-5" />
              <div className="p-5 text-center border-l border-[rgba(255,255,255,0.06)]">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgba(239,68,68,0.7)]">
                  Fragmented Setup
                </span>
              </div>
              <div className="p-5 text-center border-l border-[rgba(255,255,255,0.06)] bg-[rgba(37,99,235,0.03)]">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-alt)]">
                  Integrated Partner
                </span>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1.2fr_1fr_1fr] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.015)] ${
                  i < ROWS.length - 1
                    ? "border-b border-[rgba(255,255,255,0.04)]"
                    : ""
                }`}
              >
                {/* Label */}
                <div className="p-5 flex items-center">
                  <span className="text-sm font-semibold text-[var(--text-secondary)]">
                    {row.label}
                  </span>
                </div>

                {/* Fragmented */}
                <div className="p-5 flex items-center gap-3 border-l border-[rgba(255,255,255,0.04)]">
                  <XIcon />
                  <span className="text-sm text-[var(--text-muted)] leading-snug">
                    {row.fragmented}
                  </span>
                </div>

                {/* Integrated */}
                <div className="p-5 flex items-center gap-3 border-l border-[rgba(255,255,255,0.04)] bg-[rgba(37,99,235,0.02)]">
                  <CheckIcon />
                  <span className="text-sm text-white font-medium leading-snug">
                    {row.integrated}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Mobile Cards ── */}
      <div className="md:hidden space-y-4 max-w-sm mx-auto">
        {ROWS.map((row, i) => (
          <Reveal key={row.label} delay={0.06 * i}>
            <div className="rounded-xl border border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] p-5">
              <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-[var(--text-muted)] block mb-3">
                {row.label}
              </span>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-sm">
                  <XIcon />
                  <span className="text-[var(--text-muted)] leading-snug">
                    {row.fragmented}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <CheckIcon />
                  <span className="text-white font-medium leading-snug">
                    {row.integrated}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* ── Warning Line ── */}
      <Reveal delay={0.3}>
        <div className="mt-10 md:mt-14 max-w-3xl mx-auto">
          <div
            className="rounded-xl border border-[rgba(239,68,68,0.12)] p-5 md:p-6 text-center"
            style={{
              background:
                "linear-gradient(135deg, rgba(239,68,68,0.04) 0%, rgba(239,68,68,0.01) 100%)",
            }}
          >
            <p className="text-sm md:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-[rgba(239,68,68,0.85)]">
                Every month with a fragmented setup
              </span>{" "}
              costs you 20–40% more per lead, 2–3x longer launch times, and zero
              compounding.{" "}
              <span className="text-white font-medium">
                The gap widens every quarter you wait.
              </span>
            </p>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
