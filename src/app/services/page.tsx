import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import ServicesHero from "@/components/services/ServicesHero";
import ProofBanner from "@/components/services/ProofBanner";
import ThreeStepProcess from "@/components/services/ThreeStepProcess";
import SystemArchitectureSection from "@/components/services/SystemArchitectureSection";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
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
    languages: {
      "en": "https://clientgrowth.ca/services",
      "fr": "https://clientgrowth.ca/fr/services",
      "x-default": "https://clientgrowth.ca/services",
    },
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ProofBanner />
      <ThreeStepProcess />

      {/* ── Verified Results (Proof Section) ── */}
      <section style={{ background: "#0D0B09", padding: "80px 24px 88px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

          {/* Label */}
          <p
            style={{
              color: "#D4A853",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            VERIFIED RESULTS
          </p>

          {/* Headline */}
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

          {/* Cards — side by side on desktop, stacked on mobile */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            {/* Card 1 — Google Ads Results */}
            <div
              style={{
                background: "#161209",
                border: "1px solid #2A2010",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              {/* Tag */}
              <p
                style={{
                  color: "#D4A853",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                RV RENTAL &middot; TEXAS &middot; GOOGLE ADS
              </p>

              {/* Screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/62f926_492fa3904b904883bd7ff2023e2c28a9~mv2.png"
                alt="Google Ads results: $41,085 revenue in 30 days"
                style={{
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #2A2010",
                  maxHeight: "200px",
                  objectFit: "cover",
                  objectPosition: "top",
                  marginBottom: "24px",
                  display: "block",
                }}
              />

              {/* Stats row */}
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  flexWrap: "wrap",
                  marginBottom: "20px",
                }}
              >
                <div>
                  <p style={{ color: "#D4A853", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>
                    $41,085
                  </p>
                  <p style={{ color: "#A89880", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    Revenue &middot; 30 days
                  </p>
                </div>
                <div>
                  <p style={{ color: "#D4A853", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>
                    46&times;
                  </p>
                  <p style={{ color: "#A89880", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    Return on ad spend
                  </p>
                </div>
                <div>
                  <p style={{ color: "#D4A853", fontWeight: 700, fontSize: "1.5rem", margin: 0 }}>
                    $33
                  </p>
                  <p style={{ color: "#A89880", fontSize: "0.75rem", margin: "2px 0 0" }}>
                    Cost per qualified call
                  </p>
                </div>
              </div>

              {/* Verification line */}
              <p style={{ color: "#A89880", fontSize: "0.8rem", margin: 0 }}>
                Live account. Last verified February 2026.
              </p>
            </div>

            {/* Card 2 — Auction Insights */}
            <div
              style={{
                background: "#161209",
                border: "1px solid #2A2010",
                borderRadius: "8px",
                padding: "32px",
              }}
            >
              {/* Tag */}
              <p
                style={{
                  color: "#D4A853",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                AUCTION INSIGHTS &middot; COMPETITIVE DOMINANCE
              </p>

              {/* Screenshot */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://static.wixstatic.com/media/62f926_682a6adfbe824964b8be5e7d1df48c67~mv2.png"
                alt="Auction Insights: impression share dominance over all competitors"
                style={{
                  width: "100%",
                  borderRadius: "6px",
                  border: "1px solid #2A2010",
                  maxHeight: "200px",
                  objectFit: "cover",
                  objectPosition: "top",
                  marginBottom: "24px",
                  display: "block",
                }}
              />

              {/* Callout */}
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.5,
                  marginBottom: "12px",
                }}
              >
                Impression share dominance over every competitor in market.
              </p>

              {/* Detail */}
              <p
                style={{
                  color: "#A89880",
                  fontSize: "0.875rem",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                }}
              >
                Auction Insights report from live Google Ads account. Client&apos;s ads appear more
                frequently than all tracked competitors in their Texas search area.
              </p>

              {/* Verification line */}
              <p style={{ color: "#A89880", fontSize: "0.8rem", margin: 0 }}>
                Last verified February 2026.
              </p>
            </div>
          </div>

          {/* Link */}
          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <Link
              href="/results"
              style={{
                color: "#D4A853",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              See full client results &rarr;
            </Link>
          </div>
        </div>
      </section>

      <SystemArchitectureSection />
      <ServicesFinalCTA />
    </>
  );
}
