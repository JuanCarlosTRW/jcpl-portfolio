"use client";

import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";

interface Tier {
  name: string;
  icon: string;
  tagline: string;
  outcome: string;
  bestFor: string;
  deliverables: string[];
  timeline: string;
  firstWin: string;
  planCTA: string;
  featured?: boolean;
}

interface Props {
  tier: Tier;
  index: number;
  selected: boolean;
  onSelect: (name: string) => void;
}

export default function PlanCard({ tier, index, selected, onSelect }: Props) {
  const isFeatured = tier.featured;
  const isActive = selected;

  return (
    <Reveal delay={0.08 * index}>
      <div
        role="button"
        tabIndex={0}
        aria-pressed={isActive}
        aria-label={`Select ${tier.name} plan`}
        onClick={() => onSelect(tier.name)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onSelect(tier.name);
          }
        }}
        className={`
          group relative rounded-2xl border p-7 md:p-8 h-full flex flex-col
          cursor-pointer transition-all duration-400 outline-none
          focus-visible:ring-2 focus-visible:ring-[var(--brand-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]
          ${isActive
            ? "border-[rgba(127,95,255,0.4)] bg-[var(--bg-elevated)] shadow-[0_0_60px_rgba(127,95,255,0.08)]"
            : isFeatured
              ? "border-[rgba(127,95,255,0.2)] bg-[var(--bg-surface)] hover:border-[rgba(127,95,255,0.35)]"
              : "border-[rgba(255,255,255,0.06)] bg-[var(--bg-surface)] hover:border-[rgba(255,255,255,0.12)]"
          }
          hover:-translate-y-1 hover:shadow-[0_12px_48px_rgba(0,0,0,0.35)]
        `}
      >
        {/* Featured badge */}
        {isFeatured && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--brand-accent)] to-[var(--brand-deep)] text-white text-[0.65rem] font-semibold uppercase tracking-[0.08em] px-4 py-1 rounded-full whitespace-nowrap shadow-[0_4px_20px_rgba(127,95,255,0.35)]">
            Most Popular
          </span>
        )}

        {/* Gradient top border for featured */}
        {isFeatured && (
          <div
            className="absolute inset-x-0 top-0 h-px rounded-t-2xl"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(127,95,255,0.4), rgba(51,204,255,0.2), transparent)",
            }}
            aria-hidden="true"
          />
        )}

        {/* Header */}
        <div className="mb-5">
          <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
          <p className="text-sm text-[var(--brand-alt)] font-medium">{tier.tagline}</p>
        </div>

        {/* Outcome line */}
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
          {tier.outcome}
        </p>

        {/* Best for */}
        <p className="text-xs text-[var(--text-muted)] mb-5 flex items-center gap-1.5">
          <span className="text-[var(--brand-accent)]">●</span>
          Best for: {tier.bestFor}
        </p>

        {/* Deliverables */}
        <ul className="space-y-2 mb-6 flex-1" role="list">
          {tier.deliverables.map((d, j) => (
            <li key={j} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
                <circle cx="7" cy="7" r="6.5" stroke="rgba(127,95,255,0.35)" strokeWidth="0.8" />
                <path d="M4.5 7 L6.2 8.7 L9.5 5.3" stroke="var(--brand-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              {d}
            </li>
          ))}
        </ul>

        {/* Timeline + First Win */}
        <div className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[var(--border-soft)] mb-5">
          <span className="text-xs font-semibold text-[var(--brand-alt)] bg-[rgba(51,204,255,0.08)] px-2.5 py-1 rounded-full border border-[rgba(51,204,255,0.12)] whitespace-nowrap">
            {tier.timeline}
          </span>
          <p className="text-xs text-[var(--text-muted)] italic flex-1">
            First win: {tier.firstWin}
          </p>
        </div>

        {/* CTA */}
        <div>
          {isActive && (
            <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--brand-alt)] mb-2 text-center">
              Applying for: {tier.name}
            </p>
          )}
          <CTAButton
            href={`/apply?tier=${encodeURIComponent(tier.name)}`}
            variant={isActive || isFeatured ? "primary" : "secondary"}
            size="lg"
            className="w-full text-center"
            eventName={`services_plan_cta_click_${tier.name.toLowerCase()}` as "services_plan_cta_click_foundation"}
          >
            {tier.planCTA}
          </CTAButton>
        </div>
      </div>
    </Reveal>
  );
}
