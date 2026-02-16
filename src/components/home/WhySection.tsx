"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icon";
import { Reveal } from "@/components/motion";

/* ─── Comparison Matrix Data ─── */
const COMPARISON_ROWS = [
  {
    label: "Ownership",
    fragmented: "5+ vendors, you coordinate",
    integrated: "One partner owns the pipeline",
  },
  {
    label: "Speed",
    fragmented: "8–12 weeks to launch",
    integrated: "2–4 weeks, unified execution",
  },
  {
    label: "Reporting",
    fragmented: "Scattered dashboards",
    integrated: "One report, end-to-end attribution",
  },
  {
    label: "Lead Quality",
    fragmented: "No feedback loop",
    integrated: "Built-in qualification",
  },
  {
    label: "Accountability",
    fragmented: "Everyone points fingers",
    integrated: "I own the outcome",
  },
];

export default function WhySection() {
  return (
    <SectionWrapper id="advantage" variant="surface">
      <Reveal className="text-center mb-16 md:mb-20">
        <SectionLabel label="The Advantage" className="mb-6" />
        <h2 className="heading-2 max-w-lg mx-auto">
          One Integrated Partner vs. Five Disconnected Freelancers
        </h2>
      </Reveal>

      {/* Desktop: Editorial comparison table with vertical divider */}
      <Reveal delay={0.12} className="hidden md:block">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-[1fr_1px_1fr] gap-0 mb-8">
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--text-muted)]">
                Fragmented Setup
              </span>
            </div>
            <div />
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--brand-alt)]">
                Integrated Partner
              </span>
            </div>
          </div>

          {/* Rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_1px_1fr] gap-0 items-center"
            >
              {/* Left — fragmented (muted) */}
              <div className="flex items-center justify-end gap-3 py-5 px-6 text-right">
                <span className="text-sm text-[var(--text-muted)]">{row.fragmented}</span>
                <Icon name="x" size={14} className="text-[var(--color-danger)] opacity-50 shrink-0" />
              </div>

              {/* Vertical divider */}
              <div className="h-full bg-[var(--border-soft)] relative">
                {/* Row label centered on divider */}
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--bg-surface)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--text-muted)] whitespace-nowrap">
                  {row.label}
                </span>
              </div>

              {/* Right — integrated (emphasized) */}
              <div className="flex items-center gap-3 py-5 px-6">
                <Icon name="check" size={14} className="text-[var(--brand-alt)] shrink-0" />
                <span className="text-sm text-[var(--text-primary)] font-medium">{row.integrated}</span>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobile: Clean stacked cards */}
      <div className="md:hidden space-y-3 max-w-sm mx-auto">
        {COMPARISON_ROWS.map((row, i) => (
          <Reveal key={row.label} delay={0.06 * i}>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border-soft)] rounded-[var(--radius-md)] p-5">
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--text-muted)] mb-3 block">
                {row.label}
              </span>
              <div className="space-y-2">
                <div className="flex items-start gap-2.5 text-sm">
                  <Icon name="x" size={13} className="text-[var(--color-danger)] opacity-50 mt-0.5 shrink-0" />
                  <span className="text-[var(--text-muted)]">{row.fragmented}</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm">
                  <Icon name="check" size={13} className="text-[var(--brand-alt)] mt-0.5 shrink-0" />
                  <span className="text-[var(--text-primary)]">{row.integrated}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
