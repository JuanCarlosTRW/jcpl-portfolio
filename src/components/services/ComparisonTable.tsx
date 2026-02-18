"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesComparison } from "@/lib/content";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-[var(--text-muted)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const plans = servicesComparison.headers.slice(1);

  return (
    <div>
      <Reveal>
        <div className="text-center mb-8">
          <SectionLabel label="Compare" className="mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Quick Comparison
          </h2>
        </div>
      </Reveal>

      {/* Desktop Table */}
      <Reveal delay={0.1}>
        <div
          className="comparison-table-desktop overflow-x-auto rounded-2xl border border-[var(--border-soft)]"
          role="region"
          aria-label="Service tier comparison table"
          tabIndex={0}
        >
          <table className="comparison-table">
            <thead>
              <tr>
                {servicesComparison.headers.map((h, i) => (
                  <th key={i} scope={i === 0 ? undefined : "col"}>
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

      {/* Mobile Accordion */}
      <Reveal delay={0.1}>
        <div className="comparison-accordion">
          {servicesComparison.rows.map((row, i) => {
            const isOpen = expandedRow === i;
            return (
              <div key={i} className="comparison-accordion__item">
                <button
                  type="button"
                  onClick={() => setExpandedRow(isOpen ? null : i)}
                  className="comparison-accordion__trigger"
                  aria-expanded={isOpen}
                >
                  <span className="comparison-accordion__label">{row.label}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="comparison-accordion__grid">
                        {plans.map((plan, j) => (
                          <div key={j} className="comparison-accordion__cell">
                            <span className="comparison-accordion__plan">{plan}</span>
                            <span className="comparison-accordion__value">{row.values[j]}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
