"use client";

import { servicesComparison } from "@/lib/content";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { Info } from "lucide-react";

export default function ComparisonTable() {
  return (
    <div>
      <Reveal>
        <div className="text-center mb-8">
          <SectionLabel label="Compare" className="mb-4" />
          <h2 className="heading-2">Quick Comparison</h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="overflow-x-auto rounded-2xl border border-[var(--border-soft)]"
          role="region"
          aria-label="Service tier comparison table"
          tabIndex={0}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                {servicesComparison.headers.map((h, i) => (
                  <th
                    key={i}
                    scope={i === 0 ? undefined : "col"}
                    className={i === 0 ? "" : ""}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {servicesComparison.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* How to choose helper */}
      <Reveal delay={0.15}>
        <div className="how-to-choose">
          <div className="flex items-start gap-3">
            <Info
              size={18}
              className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              <span className="font-semibold text-white">How to choose: </span>
              {servicesComparison.helperText}
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
