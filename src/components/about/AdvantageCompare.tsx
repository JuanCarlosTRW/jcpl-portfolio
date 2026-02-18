"use client";

import { aboutContent } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { XCircle, CheckCircle2 } from "lucide-react";

const fragmented = [
  "Web designer, media buyer, SEO person, chatbot vendor — none talk to each other.",
  "Deliverables ship in silos. No unified strategy.",
  "You become the project manager for five contractors.",
  "Communication gaps erode results and timelines.",
  "You pay for execution but own zero strategy.",
];

const integrated = [
  "One operator owns positioning → funnel → traffic → automation → booking.",
  "Every layer is built to reinforce the others — compounding, not fragmenting.",
  "Faster launches, lower costs, and a system that scales.",
];

/**
 * AdvantageCompare — 2-column comparison: Fragmented vs Integrated.
 * Fragmented column uses X icons; Integrated uses check icons.
 */
export default function AdvantageCompare() {
  return (
    <div className="max-w-5xl mx-auto">
      <AnimatedSection className="text-center mb-12">
        <SectionLabel label="The Advantage" className="mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {aboutContent.advantage.headline}
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Fragmented */}
        <AnimatedSection direction="left" delay={0.1}>
          <div className="rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-surface)] p-7 h-full">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)]">
                Fragmented Freelancers
              </span>
            </div>
            <ul className="space-y-4">
              {fragmented.map((point, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <XCircle
                    className="mt-0.5 shrink-0 text-red-400/60"
                    size={17}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* Right: Integrated */}
        <AnimatedSection direction="right" delay={0.2}>
          <div className="rounded-2xl border border-[rgba(127,95,255,0.30)] bg-[var(--bg-elevated)] p-7 h-full relative overflow-hidden">
            {/* Subtle glow */}
            <div
              className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(127,95,255,0.08) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--brand-accent)]">
                  Integrated System
                </span>
              </div>
              <ul className="space-y-5">
                {integrated.map((point, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-[var(--brand-accent)]"
                      size={17}
                      aria-hidden="true"
                    />
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Result sentence */}
      <AnimatedSection delay={0.3} className="mt-8 text-center">
        <p className="text-[var(--text-muted)] text-sm">
          <span className="text-white font-semibold">The result:</span>{" "}
          faster launches, lower costs, fewer handoffs — and a system that compounds over time.
        </p>
      </AnimatedSection>
    </div>
  );
}
