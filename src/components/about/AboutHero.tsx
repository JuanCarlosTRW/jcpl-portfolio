"use client";

import { aboutContent } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FounderCard from "@/components/ui/FounderCard";

const proofBullets = [
  "Revenue-tracked — every system tied to booked calls",
  "Full pipeline ownership — no handoffs, no gaps",
  "Limited partners per quarter — guaranteed focus",
];

/**
 * AboutHero — 12-col grid split: left 7 cols copy, right 5 cols portrait.
 * Portrait (FounderCard + UnicornStudio WebGL) is kept COMPLETELY untouched.
 */
export default function AboutHero() {
  return (
    <div className="grid gap-12 lg:gap-16 items-center lg:grid-cols-12">
      {/* ── Left: Copy (7 cols) ── */}
      <div className="lg:col-span-7">
        <AnimatedSection direction="left">
          <SectionLabel label="About" className="mb-6" />
          <h1
            className="font-bold text-white leading-tight mb-8"
            style={{
              fontSize: "clamp(2rem, 4vw + 0.5rem, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {aboutContent.headline}
          </h1>

          <div className="space-y-4 mb-10">
            {aboutContent.story.map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--text-secondary)] leading-relaxed text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Proof strip */}
          <ul className="space-y-2.5" aria-label="Key proof points">
            {proofBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-muted)]">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-accent)]"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>
        </AnimatedSection>
      </div>

      {/* ── Right: Portrait (5 cols) — ANIMATION UNTOUCHED ── */}
      <div className="lg:col-span-5">
        <AnimatedSection direction="right" delay={0.2}>
          <FounderCard />
        </AnimatedSection>
      </div>
    </div>
  );
}
