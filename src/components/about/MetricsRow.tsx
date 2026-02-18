"use client";

import { aboutTrustStrip } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { CountUpValue } from "@/components/motion";

/**
 * MetricsRow — inline stat tiles with thin dividers.
 * No heavy card borders. Numbers animate on viewport entry.
 */
export default function MetricsRow() {
  return (
    <AnimatedSection className="max-w-3xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-soft)]">
        {aboutTrustStrip.map((item, i) => {
          const numericMatch = item.metric.match(/^(\d+)/);
          const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : null;
          const suffix = numericMatch ? item.metric.slice(numericMatch[1].length) : "";

          return (
            <AnimatedSection key={i} delay={0.1 * i} className="flex-1 w-full">
              <div className="flex flex-col items-center justify-center py-6 px-8 text-center">
                <span className="text-4xl md:text-5xl font-bold tabular-nums bg-gradient-to-br from-[var(--brand-accent)] to-[var(--brand-alt)] bg-clip-text text-transparent leading-none mb-2">
                  {numericValue !== null ? (
                    <CountUpValue to={numericValue} suffix={suffix} durationMs={1400} />
                  ) : (
                    item.metric
                  )}
                </span>
                <span className="text-sm text-[var(--text-muted)] leading-snug max-w-[120px]">
                  {item.label}
                </span>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
      <p className="text-center text-xs text-[var(--text-muted)] mt-2 tracking-wide">
        Numbers update as systems ship.
      </p>
    </AnimatedSection>
  );
}
