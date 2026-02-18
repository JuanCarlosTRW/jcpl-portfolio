"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { Plan, BillingInterval } from "@/lib/pricing";
import { Reveal } from "@/components/motion";
import CTAButton from "@/components/ui/CTAButton";

interface Props {
  plan: Plan;
  billing: BillingInterval;
  index: number;
}

export default function PlanCard({ plan, billing, index }: Props) {
  const price = billing === "annual" ? plan.priceAnnual : plan.priceMonthly;
  const isFeatured = plan.recommended;

  return (
    <Reveal delay={0.06 * index}>
      <div
        className={`
          group relative flex flex-col h-full rounded-2xl border p-7 md:p-8
          transition-all duration-300
          focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)]
          focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]
          hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]
          ${isFeatured
            ? "border-[rgba(127,95,255,0.35)] bg-[var(--bg-elevated)] shadow-[0_0_60px_rgba(127,95,255,0.08)] hover:border-[rgba(127,95,255,0.5)]"
            : "border-[var(--border-soft)] bg-[var(--bg-surface)] hover:border-[var(--border-strong)]"
          }
        `}
        tabIndex={0}
        aria-label={`${plan.name} plan — $${price} per month`}
      >
        {/* Featured gradient top border */}
        {isFeatured && (
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(127,95,255,0.4), rgba(51,204,255,0.2), transparent)",
            }}
            aria-hidden="true"
          />
        )}

        {/* Recommended badge */}
        {isFeatured && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-deep)] text-white text-[0.65rem] font-semibold uppercase tracking-[0.08em] px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_20px_rgba(127,95,255,0.35)]">
            Recommended
          </span>
        )}

        {/* Plan name + tagline */}
        <div className="mb-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            {plan.annualOnly && billing === "annual" && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Annual only
              </span>
            )}
          </div>
          <p className="text-sm text-[var(--brand-alt)] font-medium mt-1">
            {plan.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-end gap-2 mb-6">
          <AnimatePresence mode="wait">
            <motion.span
              key={`${plan.name}-${price}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold text-white tracking-tight tabular-nums"
            >
              ${price.toLocaleString()}
            </motion.span>
          </AnimatePresence>
          <span className="text-[var(--text-muted)] text-sm mb-1">per month</span>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-[var(--border-soft)] mb-6" />

        {/* Features */}
        <ul className="space-y-3 mb-8 flex-1" role="list">
          {plan.features.map((feature, j) => (
            <li
              key={j}
              className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="6.5"
                  stroke="rgba(127,95,255,0.35)"
                  strokeWidth="0.8"
                />
                <path
                  d="M4.5 7 L6.2 8.7 L9.5 5.3"
                  stroke="var(--brand-accent)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              {feature.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div>
          <CTAButton
            href={plan.ctaHref}
            variant={isFeatured ? "primary" : "secondary"}
            size="lg"
            className="w-full text-center"
            eventName={
              `services_plan_cta_click_${plan.name.toLowerCase()}` as
                | "services_plan_cta_click_foundation"
                | "services_plan_cta_click_growth"
                | "services_plan_cta_click_scale"
            }
          >
            {plan.ctaLabel}
          </CTAButton>
          {plan.helperText && (
            <p className="mt-2.5 text-[11px] text-[var(--text-muted)] text-center">
              {plan.helperText}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}
