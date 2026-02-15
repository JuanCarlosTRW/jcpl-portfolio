"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";
import { Reveal } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

/* ─── Comparison Matrix Data ─── */
const COMPARISON_ROWS = [
  {
    label: "Ownership",
    fragmented: "5+ vendors, you coordinate",
    integrated: "One partner owns the entire pipeline",
  },
  {
    label: "Speed to Launch",
    fragmented: "8–12 weeks (handoffs, miscommunication)",
    integrated: "2–4 weeks (unified execution)",
  },
  {
    label: "Reporting",
    fragmented: "Scattered dashboards, no single source",
    integrated: "One report, end-to-end attribution",
  },
  {
    label: "Lead Quality",
    fragmented: "No feedback loop, wasted spend",
    integrated: "Built-in qualification, only serious leads",
  },
  {
    label: "Accountability",
    fragmented: "Everyone points fingers",
    integrated: "I own the outcome — booked calls",
  },
];

export default function WhySection() {
  return (
    <SectionWrapper id="advantage" variant="elevated">
      <Reveal className="text-center mb-12 md:mb-16">
        <SectionLabel label="The Advantage" className="mb-6" />
        <BlurText
          text="One Integrated Partner Beats Five Disconnected Freelancers"
          delay={200}
          className="heading-2 max-w-3xl mx-auto"
        />
      </Reveal>

      {/* Comparison Matrix */}
      <Reveal delay={0.15}>
        <StarBorder variant="accent" speed="14s" className="rounded-2xl">
          <div className="rounded-2xl bg-[var(--bg-surface)] overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-4 p-4 md:p-6 border-b border-[var(--border-soft)] bg-[var(--bg-elevated)]/50">
              <div className="hidden md:block" />
              <div className="col-span-1 text-center">
                <span className="caption-text uppercase tracking-wider text-[var(--text-muted)]">
                  Fragmented Setup
                </span>
              </div>
              <div className="col-span-1 text-center">
                <span className="caption-text uppercase tracking-wider text-[var(--brand-alt)]">
                  Integrated Partner
                </span>
              </div>
            </div>

            {/* Data rows */}
            {COMPARISON_ROWS.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-6 ${
                  i < COMPARISON_ROWS.length - 1 ? "border-b border-[var(--border-soft)]" : ""
                }`}
              >
                {/* Label */}
                <div className="font-semibold text-[var(--text-primary)] text-sm md:text-base mb-2 md:mb-0">
                  {row.label}
                </div>

                {/* Fragmented */}
                <div className="text-[var(--text-muted)] text-sm md:text-center flex items-start md:items-center gap-2">
                  <span className="text-[var(--color-danger)] md:hidden">✕</span>
                  <span className="hidden md:inline text-[var(--color-danger)]">✕</span>
                  <span>{row.fragmented}</span>
                </div>

                {/* Integrated */}
                <div className="text-[var(--text-secondary)] text-sm md:text-center flex items-start md:items-center gap-2">
                  <span className="text-[var(--color-success)] md:hidden">✓</span>
                  <span className="hidden md:inline text-[var(--color-success)]">✓</span>
                  <span>{row.integrated}</span>
                </div>
              </div>
            ))}
          </div>
        </StarBorder>
      </Reveal>
    </SectionWrapper>
  );
}
