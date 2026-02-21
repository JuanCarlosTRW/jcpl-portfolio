"use client";

import { aboutContent, ctaCopy } from "@/lib/content";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";

function LightningIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent">
      <path d="M9 1L3 9h5l-1 6 7-9H9l1-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent">
      <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M5 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="8" cy="11" r="1" fill="currentColor"/>
    </svg>
  );
}
function ClipboardIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="w-3.5 h-3.5 text-cg-accent">
      <rect x="3" y="3" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
      <path d="M6 3V2h4v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M5.5 8h5M5.5 11h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}

const trustItems = [
  { Icon: LightningIcon, text: "Response within 24h" },
  { Icon: LockIcon, text: "100% confidential" },
  { Icon: ClipboardIcon, text: "Limited spots per quarter" },
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
          <SectionLabel label="ABOUT" className="mb-5" />

          {/* H1 */}
          <h1
            className="font-bold text-white leading-tight mb-4"
            style={{
              fontSize: "clamp(2rem, 3.6vw + 0.5rem, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Juan Carlos. Growth Partner<br />for Service Businesses.
          </h1>

          {/* Sub-head */}
          <p className="text-cg-accent font-medium text-base md:text-lg mb-4 leading-snug">
            I build systems that turn attention into booked calls.
          </p>

          {/* Mechanism lines */}
          <div className="space-y-1 mb-6 max-w-[52ch]">
            <p className="text-cg-body text-[0.9rem] md:text-[0.95rem] leading-relaxed">
              Most business owners I talk to are great at what they do. They just never built the infrastructure to let people find them. That is the gap I close. Website, ads, SEO, GEO, automation. All of it designed as one system so the right clients reach you first, already convinced you are the right choice.
            </p>
          </div>

          {/* Mechanism bullets */}
          <ul className="space-y-2.5 mb-8" aria-label="What I build">
            <li className="flex items-start gap-2 text-cg-secondary text-[0.97rem]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cg-accent shrink-0" aria-hidden="true" />
              Built around your market and your offer
            </li>
            <li className="flex items-start gap-2 text-cg-secondary text-[0.97rem]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cg-accent shrink-0" aria-hidden="true" />
              Every component measured by one outcome: calls booked
            </li>
            <li className="flex items-start gap-2 text-cg-secondary text-[0.97rem]">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-cg-accent shrink-0" aria-hidden="true" />
              I stay in it with you after launch
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-7">
            <CTAButton href="/apply" size="lg" eventName="hero_primary_cta_click">
        Apply for Growth Partnership →
            </CTAButton>
            <CTAButton href="/results" variant="secondary" size="md" eventName="hero_secondary_cta_click">
              See Results
            </CTAButton>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {trustItems.map(({ Icon, text }) => (
              <span
                key={text}
                className="inline-flex items-center gap-1.5 text-[0.72rem] text-cg-secondary tracking-wide"
              >
                <Icon />
                {text}
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
