"use client";

import {
  aboutContent,
} from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FounderCard from "@/components/ui/FounderCard";

/**
 * AboutHero — split layout: left copy + right portrait.
 * Portrait (FounderCard + UnicornStudio) is kept COMPLETELY untouched.
 */
export default function AboutHero() {
  return (
    <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
      {/* ── Left: Copy ── */}
      <AnimatedSection direction="left">
        <SectionLabel label="About" className="mb-6" />
        <h1
          className="font-bold text-white leading-tight mb-8"
          style={{
            fontSize: "clamp(2.25rem, 5vw + 0.5rem, 3.5rem)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          {aboutContent.headline}
        </h1>
        <div className="space-y-4">
          {aboutContent.story.map((paragraph, i) => (
            <p
              key={i}
              className="text-[var(--text-secondary)] leading-relaxed text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </AnimatedSection>

      {/* ── Right: Portrait — ANIMATION UNTOUCHED ── */}
      <AnimatedSection direction="right" delay={0.2}>
        <FounderCard />
      </AnimatedSection>
    </div>
  );
}
