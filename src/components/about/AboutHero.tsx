"use client";

import Link from "next/link";
import { aboutContent } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import FounderCard from "@/components/ui/FounderCard";

const proofPills = [
  "Revenue-tracked systems",
  "Full pipeline ownership",
  "Limited partners / quarter",
];

/**
 * AboutHero — 12-col grid: left 7 cols copy, right 5 cols portrait.
 * Portrait wrapped in CSS overlay frame. Animation UNTOUCHED.
 */
export default function AboutHero() {
  return (
    <div className="grid gap-10 lg:gap-14 items-center lg:grid-cols-12">
      {/* ── Left: Copy (7 cols) ── */}
      <div className="lg:col-span-7">
        <AnimatedSection direction="left">
          <SectionLabel label="About" className="mb-5" />
          <h1
            className="font-bold text-white leading-tight mb-6 max-w-[18ch] md:max-w-none"
            style={{
              fontSize: "clamp(2rem, 3.6vw + 0.5rem, 3rem)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {aboutContent.headline}
          </h1>

          <div className="space-y-3 mb-8 max-w-[56ch]">
            {aboutContent.story.map((paragraph, i) => (
              <p
                key={i}
                className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem] md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Proof pill strip */}
          <div className="flex flex-wrap gap-2 mb-6" aria-label="Key proof points">
            {proofPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center rounded-lg border border-[var(--border-soft)] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)] tracking-wide"
              >
                <span className="mr-2 h-1 w-1 rounded-full bg-[var(--brand-accent)] shrink-0" aria-hidden="true" />
                {pill}
              </span>
            ))}
          </div>

          {/* Inline secondary link */}
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--brand-alt)] hover:text-[var(--brand-accent)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)] rounded"
          >
            View Case Studies
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </Link>
        </AnimatedSection>
      </div>

      {/* ── Right: Portrait (5 cols) — ANIMATION UNTOUCHED ── */}
      <div className="lg:col-span-5">
        <AnimatedSection direction="right" delay={0.2}>
          {/* Premium frame: CSS overlay + vignette + border */}
          <div className="relative rounded-2xl overflow-hidden">
            {/* Top + edge gradient overlay */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(180deg, rgba(10,16,32,0.35) 0%, transparent 30%, transparent 70%, rgba(10,16,32,0.45) 100%), linear-gradient(90deg, rgba(10,16,32,0.25) 0%, transparent 15%, transparent 85%, rgba(10,16,32,0.25) 100%)",
              }}
            />
            {/* Vignette mask */}
            <div
              className="absolute inset-0 z-20 pointer-events-none rounded-2xl"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 50%, rgba(10,16,32,0.55) 100%)",
              }}
            />
            {/* Inner highlight border */}
            <div
              className="absolute inset-px z-20 pointer-events-none rounded-2xl border border-white/[0.06]"
              aria-hidden="true"
            />
            <FounderCard />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
