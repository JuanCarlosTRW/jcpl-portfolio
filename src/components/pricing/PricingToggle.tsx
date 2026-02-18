"use client";

import { motion } from "framer-motion";
import type { BillingInterval } from "@/lib/pricing";
import { billingOptions } from "@/lib/pricing";

interface Props {
  value: BillingInterval;
  onChange: (v: BillingInterval) => void;
}

export default function PricingToggle({ value, onChange }: Props) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-[var(--border-soft)] bg-[var(--bg-surface)] p-1"
      role="radiogroup"
      aria-label="Billing interval"
    >
      {billingOptions.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            role="radio"
            aria-checked={isActive}
            tabIndex={0}
            onClick={() => onChange(opt.value)}
            className={`
              relative z-0 px-5 py-2 rounded-full text-sm font-medium
              transition-colors duration-200
              focus-visible:outline-2 focus-visible:outline-offset-2
              focus-visible:outline-[var(--brand-accent)]
              ${isActive ? "text-white" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"}
            `}
          >
            {isActive && (
              <motion.div
                layoutId="pricing-toggle-pill"
                className="absolute inset-0 rounded-full bg-[var(--brand-accent)]/12 border border-[var(--brand-accent)]/20"
                style={{ zIndex: -1 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {opt.label}
              {"discountLabel" in opt && opt.discountLabel && isActive && (
                <span className="text-[10px] font-semibold text-[var(--brand-alt)] bg-[var(--brand-alt)]/10 px-2 py-0.5 rounded-full">
                  {opt.discountLabel}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
