"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumFrame from "@/components/ui/PremiumFrame";
import Icon from "@/components/ui/Icon";
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
          className="section-title heading-2"
        />
      </Reveal>

      {/* Desktop: Premium table */}
      <Reveal delay={0.15} className="hidden md:block">
        <PremiumFrame variant="elevated" radius="xl" padding="none" hover={false}>
          {/* Header row */}
          <div className="grid grid-cols-3 gap-4 p-5 border-b border-[var(--border-soft)] bg-[var(--bg-elevated)]/30">
            <div />
            <div className="text-center">
              <span className="text-xs uppercase tracking-wider font-medium text-[var(--text-muted)]">
                Fragmented Setup
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs uppercase tracking-wider font-medium text-[var(--brand-alt)]">
                Integrated Partner
              </span>
            </div>
          </div>

          {/* Data rows */}
          {COMPARISON_ROWS.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 gap-4 p-5 items-center ${
                i < COMPARISON_ROWS.length - 1 ? "border-b border-[var(--border-soft)]" : ""
              }`}
            >
              <div className="font-medium text-[var(--text-primary)] text-sm">
                {row.label}
              </div>
              <div className="text-sm text-[var(--text-muted)] text-center flex items-center justify-center gap-2">
                <Icon name="x" size={14} className="text-[var(--color-danger)]" />
                <span>{row.fragmented}</span>
              </div>
              <div className="text-sm text-[var(--text-secondary)] text-center flex items-center justify-center gap-2">
                <Icon name="check" size={14} className="text-[var(--color-success)]" />
                <span>{row.integrated}</span>
              </div>
            </div>
          ))}
        </PremiumFrame>
      </Reveal>

      {/* Mobile: Stacked cards */}
      <div className="md:hidden space-y-4">
        {COMPARISON_ROWS.map((row, i) => (
          <Reveal key={row.label} delay={0.08 * i}>
            <PremiumFrame variant="default" radius="lg" padding="sm">
              <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-3">
                {row.label}
              </h4>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <Icon name="x" size={14} className="text-[var(--color-danger)] mt-0.5 shrink-0" />
                  <span className="text-[var(--text-muted)]">{row.fragmented}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Icon name="check" size={14} className="text-[var(--color-success)] mt-0.5 shrink-0" />
                  <span className="text-[var(--text-secondary)]">{row.integrated}</span>
                </div>
              </div>
            </PremiumFrame>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
