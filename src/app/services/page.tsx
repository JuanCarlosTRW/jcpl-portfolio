import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import ProofBanner from "@/components/services/ProofBanner";
import ThreeStepProcess from "@/components/services/ThreeStepProcess";
import "@/styles/services.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Growth Systems for Service Businesses",
    description:
      "One acquisition system: conversion site, local SEO, Google Ads, AI call qualification, and ongoing optimization. Built and managed by one person. Apply to see if you qualify.",
    path: "/services",
  }),
  alternates: {
    canonical: "https://clientgrowth.ca/services",
  },
};

const TERMS = [
  {
    headline: "You approve before anything ships.",
    body: "Phase 1 is the market gap audit and 90-day roadmap. Phase 2 is the live build. You sign off on both before the next phase begins. Nothing moves without your confirmation.",
  },
  {
    headline: "Everything I build belongs to you.",
    body: "Website, ad accounts, tracking, and analytics. Built in your name, owned by your business. If you ever leave, you take all of it. No agency lock-in.",
  },
  {
    headline: "I tell you if I can produce a return before you pay anything.",
    body: "I review your market before any agreement is signed. If I cannot produce a measurable return, I say so on the review call. Not after month three. Before you have paid anything. I have turned clients down before.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <ServicesHero />

      {/* 2. Stats bar */}
      <ProofBanner />

      {/* 3. The System (3-step timeline) */}
      <ThreeStepProcess />

      {/* 4. Verified Results */}
      <section style={{ background: "#0D0B09", padding: "80px 24px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              color: "#D4A853",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            VERIFIED RESULTS
          </p>

          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              margin: "0 0 48px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            The same system. Every client.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: Google Ads Results */}
            <div
              style={{
                background: "#161209",
                border: "1px solid #2A2010",
                borderRadius: 8,
                padding: 32,
              }}
            >
              <p
                style={{
                  color: "#D4A853",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                RV RENTAL &middot; TEXAS &middot; GOOGLE ADS
              </p>

              <Image
                src="/images/proof/triple-w-ads-dashboard.png"
                alt="Google Ads results: $41,085 revenue in 30 days"
                width={1968}
                height={656}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 6,
                  border: "1px solid #2A2010",
                  marginBottom: 24,
                  display: "block",
                }}
              />

              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
                <div>
                  <p className="tabular-nums" style={{ color: "#D4A853", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>
                    $41,085
                  </p>
                  <p style={{ color: "#A89880", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    Revenue &middot; 30 days
                  </p>
                </div>
                <div>
                  <p className="tabular-nums" style={{ color: "#D4A853", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>
                    46&times;
                  </p>
                  <p style={{ color: "#A89880", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    Return on ad spend
                  </p>
                </div>
                <div>
                  <p className="tabular-nums" style={{ color: "#D4A853", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>
                    $33
                  </p>
                  <p style={{ color: "#A89880", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    Cost per qualified call
                  </p>
                </div>
              </div>

              <p style={{ color: "#A89880", fontSize: "0.8rem", margin: "0 0 12px" }}>
                Live account. Last verified February 2026.
              </p>
              <p style={{ color: "#D2C9B8", fontSize: "0.85rem", fontStyle: "italic", margin: 0 }}>
                This is a live account. I can walk you through it on the diagnostic call.
              </p>
            </div>

            {/* Card 2: Auction Insights */}
            <div
              style={{
                background: "#161209",
                border: "1px solid #2A2010",
                borderRadius: 8,
                padding: 32,
              }}
            >
              <p
                style={{
                  color: "#D4A853",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                AUCTION INSIGHTS &middot; COMPETITIVE DOMINANCE
              </p>

              <Image
                src="/images/proof/auction-insights.png"
                alt="Auction Insights: impression share dominance over all competitors"
                width={600}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 6,
                  border: "1px solid #2A2010",
                  marginBottom: 24,
                  display: "block",
                }}
              />

              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  marginBottom: 12,
                }}
              >
                Impression share dominance over every competitor in market.
              </p>

              <p
                style={{
                  color: "#A89880",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                Auction Insights report from live Google Ads account. Client&apos;s ads appear more
                frequently than all tracked competitors in their Texas search area.
              </p>

              <p style={{ color: "#A89880", fontSize: "0.8rem", margin: 0 }}>
                Last verified February 2026.
              </p>
            </div>
          </div>

          {/* Mid-page CTA */}
          <div
            className="text-center"
            style={{
              padding: "64px 0",
              borderTop: "1px solid rgba(212,168,83,0.08)",
              marginTop: 48,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-cormorant), Georgia, serif",
                fontSize: 28,
                fontStyle: "italic",
                color: "rgba(240,234,214,0.9)",
                marginBottom: 8,
              }}
            >
              This is the system that produced these numbers.
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 14,
                color: "#D4A853",
                marginBottom: 24,
              }}
            >
              One spot is currently open.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide transition-all hover:brightness-110"
              style={{
                background: "#D4A853",
                color: "#0D0B09",
                fontFamily: "var(--font-dm-sans), sans-serif",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderRadius: 6,
              }}
            >
              Apply for a Diagnostic Call &rarr;
            </Link>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 13,
                color: "rgba(240,234,214,0.4)",
                marginTop: 12,
              }}
            >
              No retainer until I confirm fit.
            </p>
          </div>
        </div>
      </section>

      {/* 5. THE TERMS */}
      <section style={{ background: "#0D0B09", padding: "80px 24px 88px", borderTop: "1px solid rgba(212,168,83,0.07)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              color: "#D4A853",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            THE TERMS
          </p>
          <h2
            style={{
              color: "#F5F0E8",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              margin: "0 0 8px",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
            }}
          >
            Set before any retainer is signed.
          </h2>
          <p
            style={{
              color: "#756D63",
              fontSize: "0.9375rem",
              marginBottom: 48,
            }}
          >
            Every protection is a buyer advantage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TERMS.map((card) => (
              <div
                key={card.headline}
                className="rounded-lg"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(212,168,83,0.12)",
                  borderRadius: 8,
                  padding: 32,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#D4A853",
                    marginBottom: 12,
                    lineHeight: 1.4,
                  }}
                >
                  {card.headline}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 15,
                    color: "rgba(240,234,214,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Apply CTA */}
      <section style={{ background: "#1A1510", padding: "80px 24px 96px" }}>
        <div className="max-w-xl mx-auto text-center">
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4A853",
              marginBottom: 12,
              fontFamily: "var(--font-dm-sans), sans-serif",
            }}
          >
            APPLY
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "#F5F0E8" }}
          >
            I Run 3 Partnerships at a Time.
          </h2>
          <p
            className="text-base leading-relaxed mb-8 max-w-md mx-auto"
            style={{ color: "#D2C9B8" }}
          >
            Short application. I review your market before the call. If I can produce a return, you will get a call link within 24 hours. If not, I will tell you directly.
          </p>

          {/* Proof block */}
          <div
            className="mb-6 text-left max-w-[600px] mx-auto"
            style={{
              background: "rgba(212,168,83,0.04)",
              borderLeft: "2px solid rgba(212,168,83,0.3)",
              padding: "16px 20px",
              borderRadius: "0 6px 6px 0",
            }}
          >
            <p className="text-[14px] leading-relaxed" style={{ color: "rgba(240,234,214,0.6)" }}>
              Last 3 partnerships: one went live in 9 days. One booked their first qualified call on day 7. One generated $2,716 in month one.
            </p>
          </div>

          {/* Price line */}
          <p className="text-sm mb-8" style={{ color: "#D2C9B8" }}>
            Full engagement starts at{" "}
            <span style={{ color: "#D4A853", fontWeight: 600 }}>$2,500/month</span>.{" "}
            No retainer until I confirm fit.
          </p>

          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-wide w-full sm:w-auto transition-all hover:brightness-110"
            style={{
              background: "#D4A853",
              color: "#0D0B09",
              fontFamily: "var(--font-dm-sans), sans-serif",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: 6,
            }}
          >
            Apply for a Diagnostic Call &rarr;
          </Link>

          <p className="text-xs text-center mt-4" style={{ color: "#756D63" }}>
            Response within 24 hours. No retainer until I confirm fit.
          </p>
        </div>
      </section>
    </>
  );
}
