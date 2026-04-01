"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const GROWTH_FEATURES = [
  "Conversion website: custom coded, built to rank and convert",
  "Google Ads: targeting buyers with purchase intent in your city",
  "Local SEO: Google Maps and organic positioning",
  "AI search visibility: appear when buyers search on ChatGPT, Perplexity, and Google AI",
  "Weekly campaign optimization: cost per call goes down every month",
  "Monthly performance review call",
  "Full asset ownership: everything is in your name",
];

const SCALE_ADDITIONS = [
  "Higher ad budget management: more spend, more calls, more jobs",
  "AI lead qualification: automated follow-up qualifies leads before your phone rings",
  "GEO (Generative Engine Optimization): when someone asks ChatGPT or Perplexity \u201Cbest [service] near me,\u201D your business is the answer. Most competitors do not know this exists yet.",
  "Multi-location and multi-channel expansion",
  "Dedicated landing pages per service and per city",
  "Weekly strategy calls: direct line, every week",
];

export default function PricingStatement() {
  return (
    <section
      className="px-4"
      style={{
        background: "#131009",
        paddingTop: "clamp(64px, 10vw, 140px)",
        paddingBottom: "clamp(64px, 10vw, 140px)",
      }}
    >
      <div className="mx-auto max-w-[1060px]">
        {/* Section label */}
        <p
          className="text-center uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          PRICING
        </p>

        {/* Section headline */}
        <AnimatedSection direction="up" className="text-center mb-4">
          <h2
            className="font-bold text-white"
            style={{
              fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            One system. Two speeds.
          </h2>
        </AnimatedSection>

        {/* Subheadline */}
        <AnimatedSection direction="up" delay={0.05} className="text-center mb-14">
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#A69D8D",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Both tiers include everything needed to fill your calendar. The difference is how fast you want to scale.
          </p>
        </AnimatedSection>

        {/* Two-card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TIER 1: Growth Architecture */}
          <AnimatedSection direction="left" delay={0}>
            <div
              className="rounded-2xl p-8 flex flex-col depth-card h-full"
              style={{
                background: "#1E1A14",
                border: "1px solid #2A2318",
                borderTop: "3px solid #D4A853",
              }}
            >
              {/* Tagline */}
              <p
                className="uppercase mb-3"
                style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#D4A853" }}
              >
                Get the phone ringing
              </p>

              {/* Tier name */}
              <h3
                className="text-[22px] font-bold text-white mb-3"
              >
                Growth Architecture
              </h3>

              {/* Price */}
              <div className="mb-5">
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  $2,500
                </span>
                <span
                  className="align-middle ml-1"
                  style={{ fontSize: "1rem", color: "#756D63", fontWeight: 400 }}
                >
                  / month
                </span>
              </div>

              {/* Divider */}
              <div className="mb-5" style={{ borderTop: "1px solid #2A2318" }} />

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {GROWTH_FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="shrink-0 mt-0.5"
                      size={14}
                      style={{ color: "#D4A853" }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "#D2C9B8", lineHeight: 1.55 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Proof anchor */}
              <div
                className="rounded-lg px-4 py-3 mb-5"
                style={{
                  background: "rgba(212,168,83,0.04)",
                  borderLeft: "2px solid rgba(212,168,83,0.4)",
                }}
              >
                <p style={{ fontSize: "0.8rem", color: "#D2C9B8", lineHeight: 1.6, fontStyle: "italic" }}>
                  Triple W Rentals started here. $41,085 in revenue. $900 in ad spend. 30 days.
                </p>
              </div>

              {/* Risk reversal */}
              <p
                className="mb-2"
                style={{ fontSize: "0.8rem", color: "#A69D8D", lineHeight: 1.6 }}
              >
                If your phone does not ring in the first 30 days, I refund the management fee for that period.
              </p>
              <p className="mb-6" style={{ fontSize: "0.7rem", color: "rgba(210,201,184,0.5)", lineHeight: 1.7 }}>
                Guarantee conditions: tracking must be fully in place before launch / minimum ad spend must be met / client must complete onboarding within 5 days / applies to markets where Google Ads inventory exists for your service category
              </p>

              {/* CTA */}
              <div className="mt-auto space-y-2">
                <Link
                  href="/apply"
                  className="flex items-center justify-center w-full text-base"
                  style={{
                    backgroundColor: "#D4A853",
                    color: "#0D0B09",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 6,
                    padding: "14px 28px",
                    fontSize: "0.9rem",
                    transition: "background-color 200ms",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#C49A2A";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#D4A853";
                  }}
                >
                  Apply for a Diagnostic Call &rarr;
                </Link>
                <p
                  className="text-center"
                  style={{ fontSize: "12px", color: "rgba(240,234,214,0.5)" }}
                >
                  I review every application within 24 hours.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* TIER 2: Scale Architecture */}
          <AnimatedSection direction="right" delay={0.15}>
            <div
              className="rounded-2xl p-8 flex flex-col depth-card h-full"
              style={{
                background: "#1E1A14",
                border: "1px solid #2A2318",
                borderTop: "3px solid #D4A853",
              }}
            >
              {/* Tagline */}
              <p
                className="uppercase mb-3"
                style={{ fontSize: "0.65rem", letterSpacing: "0.12em", color: "#D4A853" }}
              >
                Saturate your market
              </p>

              {/* Tier name */}
              <h3
                className="text-[22px] font-bold text-white mb-3"
              >
                Scale Architecture
              </h3>

              {/* Price */}
              <div className="mb-5">
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)" }}
                >
                  $4,500
                </span>
                <span
                  className="align-middle ml-1"
                  style={{ fontSize: "1rem", color: "#756D63", fontWeight: 400 }}
                >
                  / month
                </span>
              </div>

              {/* Divider */}
              <div className="mb-5" style={{ borderTop: "1px solid #2A2318" }} />

              {/* Intro line */}
              <p
                className="mb-4"
                style={{ fontSize: "0.85rem", color: "#D2C9B8", fontWeight: 500 }}
              >
                Everything in Growth Architecture, plus:
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {SCALE_ADDITIONS.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="shrink-0 mt-0.5"
                      size={14}
                      style={{ color: "#D4A853" }}
                    />
                    <span style={{ fontSize: "0.85rem", color: "#D2C9B8", lineHeight: 1.55 }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Proof anchor */}
              <div
                className="rounded-lg px-4 py-3 mb-5"
                style={{
                  background: "rgba(212,168,83,0.04)",
                  borderLeft: "2px solid rgba(212,168,83,0.4)",
                }}
              >
                <p style={{ fontSize: "0.8rem", color: "#D2C9B8", lineHeight: 1.6, fontStyle: "italic" }}>
                  This is the tier where a single city becomes a category you own.
                </p>
              </div>

              {/* Risk reversal */}
              <p
                className="mb-2"
                style={{ fontSize: "0.8rem", color: "#A69D8D", lineHeight: 1.6 }}
              >
                If your phone does not ring in the first 30 days, I refund the management fee for that period.
              </p>
              <p className="mb-6" style={{ fontSize: "0.7rem", color: "rgba(210,201,184,0.5)", lineHeight: 1.7 }}>
                Guarantee conditions: tracking must be fully in place before launch / minimum ad spend must be met / client must complete onboarding within 5 days / applies to markets where Google Ads inventory exists for your service category
              </p>

              {/* CTA */}
              <div className="mt-auto space-y-2">
                <Link
                  href="/apply"
                  className="flex items-center justify-center w-full text-base"
                  style={{
                    backgroundColor: "#D4A853",
                    color: "#0D0B09",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 6,
                    padding: "14px 28px",
                    fontSize: "0.9rem",
                    transition: "background-color 200ms",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#C49A2A";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#D4A853";
                  }}
                >
                  Apply for a Diagnostic Call &rarr;
                </Link>
                <p
                  className="text-center"
                  style={{ fontSize: "12px", color: "rgba(240,234,214,0.5)" }}
                >
                  3 active partnerships maximum. I review in 24 hours.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
