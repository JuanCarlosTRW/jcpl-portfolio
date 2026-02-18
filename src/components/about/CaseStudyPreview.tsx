"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * CaseStudyPreview — 3-column proof-of-work cards.
 * Each card: client, what was built (heroLabel), outcome (heroStat), link.
 * Placed between MetricsRow and Principles on the About page.
 */
export default function CaseStudyPreview() {
  const previews = caseStudies.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-10">
        <SectionLabel label="Proof of Work" className="mb-3" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Systems That Shipped
        </h2>
        <p className="mt-2 text-[0.9rem] text-[var(--text-secondary)] max-w-md mx-auto">
          Real businesses. Real pipelines. Measurable outcomes.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {previews.map((cs, i) => (
          <AnimatedSection key={cs.slug} direction="up" delay={0.08 * i}>
            <Link
              href={`/case-studies/${cs.slug}`}
              className="group flex flex-col h-full rounded-xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(127,95,255,0.35)] hover:shadow-[0_8px_32px_rgba(127,95,255,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
              aria-label={`View case study: ${cs.title}`}
            >
              {/* Industry label */}
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)] mb-3">
                {cs.industry}
              </span>

              {/* Outcome stat */}
              <p className="text-3xl font-bold tabular-nums bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-alt)] bg-clip-text text-transparent leading-none mb-1">
                {cs.heroStat}
              </p>
              <p className="text-[0.75rem] text-[var(--text-muted)] mb-4 leading-snug">
                {cs.heroLabel}
              </p>

              {/* Client + title */}
              <p className="text-[0.82rem] font-semibold text-[var(--brand-accent)] mb-0.5">
                {cs.client}
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-snug flex-1">
                {cs.title}
              </p>

              {/* CTA link */}
              <span className="mt-5 inline-flex items-center gap-1 text-[0.78rem] font-medium text-[var(--brand-alt)] group-hover:text-[var(--brand-accent)] transition-colors duration-200">
                View case study
                <span
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
