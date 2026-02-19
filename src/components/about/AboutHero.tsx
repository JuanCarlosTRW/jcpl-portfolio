"use client";

import { aboutContent, ctaCopy } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";


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
          <p className="text-[#2563EB] font-medium text-base md:text-lg mb-4 leading-snug">
            {aboutContent.subhead}
          </p>

          {/* Mechanism lines */}
          <div className="space-y-1 mb-6 max-w-[52ch]">
            {aboutContent.mechanism.map((line, i) => (
              <p key={i} className="text-[#E8EDF5] text-[0.9rem] md:text-[0.95rem] leading-relaxed">
                {line}
              </p>
            ))}
          </div>

          {/* Mechanism bullets */}
          <ul className="space-y-2.5 mb-8" aria-label="What I build">
            {aboutContent.mechanismBullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-[#E8EDF5]">
                <span
                  className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
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
              className="hover:shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:-translate-y-0.5 transition-all duration-300"
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
                className="inline-flex items-center gap-1.5 text-[0.72rem] text-[#8899BB] tracking-wide"
              >
                <span aria-hidden="true" className="text-[#2563EB]">{item.icon}</span>
                {item.text}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Right: Portrait (5 cols) — Unicorn Studio Embed ── */}
      <div className="lg:col-span-5 flex items-center justify-center">
        <div
          data-us-project="bi8sQ4960W9R0aV2JSta"
          style={{ width: 390, height: 844 }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();`,
          }}
        />
      </div>
    </div>
  );
}
