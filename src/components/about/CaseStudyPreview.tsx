"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * CaseStudyPreview — Single case study card (RV Rentals only).
 * Full-width centered card.
 * Placed between MetricsRow and Principles on the About page.
 */
export default function CaseStudyPreview() {
  // Show only the first case study (RV Rentals)
  const preview = caseStudies[0];

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

      <AnimatedSection direction="up" delay={0.08}>
        <Link
          href={`/case-studies/${preview.slug}`}
          className="group flex flex-col rounded-xl border border-[rgba(37,99,235,0.15)] bg-[#0F2049] p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(37,99,235,0.35)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.10)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] max-w-2xl mx-auto"
          aria-label={`View case study: ${preview.title}`}
        >
          {/* Industry label */}
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#8899BB] mb-4">
            {preview.industry}
          </span>

          {/* Outcome stat */}
          <p className="text-4xl md:text-5xl font-bold tabular-nums text-[#2563EB] leading-none mb-2">
            {preview.heroStat}
          </p>
          <p className="text-sm text-[#8899BB] mb-6 leading-snug">
            {preview.heroLabel}
          </p>

          {/* Client + title */}
          <p className="text-base font-semibold text-[#2563EB] mb-1">
            {preview.client}
          </p>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-6">
            {preview.title}
          </p>

          {/* CTA link */}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] group-hover:text-[#60A5FA] transition-colors duration-200">
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
    </div>
  );
}
