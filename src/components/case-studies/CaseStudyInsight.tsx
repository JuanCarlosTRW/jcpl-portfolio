"use client";
import type { CaseStudy } from "@/lib/caseStudiesContent";

export default function CaseStudyInsight({ study }: { study: CaseStudy }) {
  const { insight } = study;
  return (
    <section
      className="py-20 md:py-28 px-6 border-t border-white/[0.06]"
      style={{ background: "#0E0E0F" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--brand-accent)] mb-8 block">
          05 / Strategic Insight
        </span>

        <div
          className="text-2xl md:text-3xl font-semibold text-white leading-snug mb-10 relative"
          style={{ letterSpacing: "-0.02em" }}
        >
          {/* Decorative quote mark */}
          <span
            className="absolute -top-6 -left-4 text-7xl leading-none text-[var(--brand-accent)] opacity-20 font-serif select-none"
            aria-hidden="true"
          >
            "
          </span>
          <span className="relative z-10">{insight.quote}</span>
        </div>

        <div className="w-10 h-px bg-[var(--brand-accent)] mx-auto mb-10 opacity-60" />

        <p className="text-base md:text-lg text-white/60 leading-relaxed">
          {insight.body}
        </p>
      </div>
    </section>
  );
}
