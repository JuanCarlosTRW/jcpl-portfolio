"use client";

import { aboutContent } from "@/lib/content";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * PhilosophyBlock — editorial manifesto-style centered block.
 * Large quote ornament at top-left (opacity-20), thin rule lines.
 */
export default function PhilosophyBlock() {
  return (
    <AnimatedSection className="max-w-3xl mx-auto">
      <div className="relative rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-surface)] py-14 px-8 md:py-20 md:px-14 overflow-hidden text-center">
        {/* Quote ornament */}
        <span
          className="absolute top-6 left-8 select-none font-serif leading-none text-[120px] md:text-[160px] text-white/[0.06] pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        {/* Thin top rule */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/50 to-transparent mx-auto mb-8" aria-hidden="true" />

        <SectionLabel label="Philosophy" className="mb-6" />

        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6 leading-tight">
          {aboutContent.philosophy.headline}
        </h2>

        <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto font-light">
          {aboutContent.philosophy.body}
        </p>

        {/* Thin bottom rule */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent mx-auto mt-10" aria-hidden="true" />

        {/* Subtle glow */}
        <div
          className="absolute inset-0 pointer-events-none rounded-3xl"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(127,95,255,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
      </div>
    </AnimatedSection>
  );
}
