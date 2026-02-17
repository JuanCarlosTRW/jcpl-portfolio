"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesComparison } from "@/lib/content";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { Info, ChevronDown } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const toggleRow = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
    if (expandedRow !== index) {
      trackEvent("services_compare_expand");
    }
  };

  const plans = servicesComparison.headers.slice(1); // ["Foundation", "Growth", "Scale"]

  return (
    <div>
      <Reveal>
        <div className="text-center mb-8">
          <SectionLabel label="Compare" className="mb-4" />
          <h2 className="heading-2">Quick Comparison</h2>
        </div>
      </Reveal>

      {/* Desktop: Traditional table */}
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
                  <th
                    key={i}
                    scope={i === 0 ? undefined : "col"}
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

      {/* Mobile: Accordion */}
      <Reveal delay={0.1}>
        <div className="comparison-accordion">
          {servicesComparison.rows.map((row, i) => (
            <div key={i} className="comparison-accordion__item">
              <button
                onClick={() => toggleRow(i)}
                className="comparison-accordion__trigger"
                aria-expanded={expandedRow === i}
              >
                <span className="comparison-accordion__label">{row.label}</span>
                <ChevronDown
                  size={18}
                  className={`comparison-accordion__icon ${
                    expandedRow === i ? "comparison-accordion__icon--open" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {expandedRow === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="comparison-accordion__content"
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
          ))}
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
