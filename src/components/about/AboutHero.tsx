"use client";

import Link from "next/link";
import { aboutContent, ctaCopy } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

import FounderCard from "@/components/ui/FounderCard";
import ElectricBorderPlaceholder from "@/components/ui/ElectricBorderPlaceholder";

const trustItems = [
  { icon: "⚡", text: "Response within 24h" },
  { icon: "🔒", text: "100% confidential" },
  { icon: "📋", text: "Limited spots / quarter" },
];

/**
 * AboutHero — 12-col grid: left 7 cols copy, right 5 cols portrait.
 * Two CTAs + trust row. Portrait wrapped in CSS overlay. Animation UNTOUCHED.
 */
export default function AboutHero() {
  return (
    <div className="grid gap-10 lg:gap-14 items-center lg:grid-cols-12">
      {/* ── Left: Copy (7 cols) ── */}
      <div className="lg:col-span-7">
        <AnimatedSection direction="left">
          <SectionLabel label="About" className="mb-5" />

          {/* H1 */}
          <h1
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 3.6vw + 0.5rem, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            {aboutContent.headline}
          </h1>

          {/* Sub-head */}
          <p className="text-[var(--brand-alt)] font-medium text-base md:text-lg mb-4 leading-snug">
            {aboutContent.subhead}
          </p>

          {/* Mechanism lines */}
          <div className="space-y-1 mb-6 max-w-[52ch]">
            {aboutContent.mechanism.map((line, i) => (
              <p key={i} className="text-[var(--text-secondary)] text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Mechanism bullets */}
          <ul className="space-y-2.5 mb-8" aria-label="What I build">
            {aboutContent.mechanismBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-accent)]"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <CTAButton
              href={ctaCopy.href}
              size="lg"
              eventName="hero_primary_cta_click"
              className="hover:shadow-[0_4px_20px_rgba(127,95,255,0.25)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {ctaCopy.primary}
            </CTAButton>
            <CTAButton
              href="/case-studies"
              variant="secondary"
              size="md"
              eventName="hero_secondary_cta_click"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              {ctaCopy.secondary}
            </CTAButton>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {trustItems.map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-1.5 text-[0.72rem] text-[var(--text-muted)] tracking-wide"
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
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
            {/* FounderCard: portrait animé */}
            <FounderCard />
            {/* Bordure électrique en overlay, ne masque pas l'image */}
            <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
              <ElectricBorderPlaceholder width={480} height={600} className="w-full h-full" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
