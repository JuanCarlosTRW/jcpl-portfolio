"use client";

import { aboutTrustStrip } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CountUpValue } from "@/components/motion";

/**
 * MetricsRow — inline stat tiles with vertical dividers.
 * Engineered baseline look. Compact, no dead space.
 */
export default function MetricsRow() {
  return (
    <AnimatedSection className="max-w-2xl mx-auto">
      {/* Thin top baseline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent mb-1" aria-hidden="true" />

      <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x divide-[var(--border-soft)]">
        {aboutTrustStrip.map((item, i) => {
          // Only CountUp pure-numeric metrics (e.g. "6+", "4", "3")
          // Skip metrics containing letters or en-dash (e.g. "2–4 wks")
          const numericMatch = item.metric.match(/^(\d+)([^a-zA-Z–]*)$/);
          const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : null;
          const suffix = numericMatch ? numericMatch[2] : "";

          return (
            <AnimatedSection key={i} delay={0.08 * i} className="w-full">
              <div className="flex flex-col items-center justify-center py-5 px-4 text-center">
                <span className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tabular-nums bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-alt)] bg-clip-text text-transparent leading-none mb-1.5">
                  {numericValue !== null ? (
                    <CountUpValue to={numericValue} suffix={suffix} durationMs={1400} />
                  ) : (
                    item.metric
                  )}
                </span>
                <span className="text-[0.8rem] text-[var(--text-secondary)] leading-snug">
                  {item.label}
                </span>
              </div>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Thin bottom baseline */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--border-soft)] to-transparent mt-1" aria-hidden="true" />

      <p className="text-center text-[0.7rem] text-[var(--text-muted)] mt-3 tracking-wider uppercase">
        Numbers update as systems ship.
      </p>
    </AnimatedSection>
  );
}
