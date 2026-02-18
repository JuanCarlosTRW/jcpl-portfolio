"use client";

import { aboutPrinciples } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Principles — 3 operating principles with numbered outlined circle badges.
 * Hover: lift 2px, border brighten, subtle inner glow.
 */
export default function Principles() {
  return (
    <div className="max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <SectionLabel label="Operating Principles" className="mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          How I Operate
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {aboutPrinciples.map((principle, i) => (
          <AnimatedSection key={principle.title} delay={0.1 * i}>
            <div
              className="group relative flex flex-col gap-5 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-7 transition-all duration-300 ease-out cursor-default
                hover:-translate-y-1 hover:border-[rgba(127,95,255,0.45)] hover:shadow-[0_0_24px_rgba(127,95,255,0.12)] hover:bg-[var(--bg-elevated)]"
            >
              {/* Numbered outlined badge */}
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--brand-accent)] text-sm font-bold text-[var(--brand-accent)] transition-all duration-300 group-hover:bg-[rgba(127,95,255,0.12)] group-hover:shadow-[0_0_12px_rgba(127,95,255,0.25)]"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-base font-semibold text-white mb-2 transition-colors duration-200 group-hover:text-[var(--brand-accent)]">
                  {principle.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed text-sm">
                  {principle.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
