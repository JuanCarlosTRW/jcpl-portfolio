"use client";

import { comparisonSections, plans } from "@/lib/pricing";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="mx-auto"
      aria-label="Included"
    >
      <path
        d="M5 9.5 L7.5 12 L13 6"
        stroke="var(--brand-accent)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon() {
  return (
    <span className="text-[var(--text-muted)]/60" aria-label="Not included">
      —
    </span>
  );
}

export default function PricingComparisonTable() {
  return (
    <div className="mt-20">
      <Reveal>
        <div className="text-center mb-10">
          <SectionLabel label="Compare Plans" className="mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Full Feature Comparison
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="overflow-x-auto rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)]"
          role="region"
          aria-label="Feature comparison table"
          tabIndex={0}
        >
          <table className="w-full min-w-[680px] text-sm">
            {/* Sticky header with plan names + prices */}
            <thead>
              <tr className="border-b border-[var(--border-soft)]">
                <th className="sticky left-0 z-10 bg-[var(--bg-surface)] text-left px-6 py-5 font-semibold text-[var(--text-muted)] w-[240px] min-w-[200px]">
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    className="px-6 py-5 text-center min-w-[140px]"
                  >
                    <span className="block text-white font-semibold text-base">
                      {plan.name}
                    </span>
                    <span className="block text-[var(--text-muted)] text-xs mt-0.5">
                      ${plan.priceMonthly.toLocaleString()}/mo
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {comparisonSections.map((section) => (
                <SectionGroup key={section.section} section={section} />
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  );
}

/* ─── Section Group within the table ─── */
function SectionGroup({
  section,
}: {
  section: (typeof comparisonSections)[number];
}) {
  return (
    <>
      {/* Section header row */}
      <tr>
        <td
          colSpan={plans.length + 1}
          className="bg-[var(--bg-base)]/60 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] px-6 py-2.5"
        >
          {section.section}
        </td>
      </tr>

      {/* Feature rows */}
      {section.rows.map((row) => (
        <tr
          key={row.feature}
          className="border-b border-[var(--border-soft)]/40 transition-colors hover:bg-white/[0.02]"
        >
          <td className="sticky left-0 z-10 bg-[var(--bg-surface)] px-6 py-4 min-w-[200px]">
            <div className="font-medium text-[var(--text-primary)] text-[13px]">
              {row.feature}
            </div>
            <div className="text-[11px] text-[var(--text-muted)] mt-0.5">
              {row.descriptor}
            </div>
          </td>
          {row.values.map((val, k) => (
            <td key={k} className="px-6 py-4 text-center">
              {val === true ? (
                <CheckIcon />
              ) : val === false ? (
                <DashIcon />
              ) : (
                <span className="text-[var(--text-secondary)] text-[13px]">
                  {val}
                </span>
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
