import type { Metadata } from "next";
import Image from "next/image";
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
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <ServicesHero />

      {/* Stats bar */}
      <ProofBanner />

      {/* Emotional beat */}
      <section style={{ background: "#0D0B09", padding: "64px 24px 0" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div
            className="rounded-xl px-8 py-10"
            style={{
              background: "#1A1714",
              border: "1px solid rgba(212,168,83,0.15)",
              borderLeft: "3px solid rgba(212,168,83,0.55)",
            }}
          >
            <p className="text-[16px] leading-[1.75]" style={{ color: "#C8BFAE" }}>
              Every week you run without a system, calls go to the business that
              shows up first. Not the best business. The most visible one. That gap
              compounds. The longer it runs, the harder it is to close. The clients
              you are not getting today are building habits with someone else.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The System */}
      <ThreeStepProcess />

      {/* 3. Verified Results */}
      <section style={{ background: "#0D0B09", padding: "80px 24px 88px" }}>
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
                width={600}
                height={200}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 6,
                  border: "1px solid #2A2010",
                  maxHeight: 200,
                  objectFit: "cover",
                  objectPosition: "top",
                  marginBottom: 24,
                  display: "block",
                }}
              />

              <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
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
                  maxHeight: 200,
                  objectFit: "cover",
                  objectPosition: "top",
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

        </div>
      </section>

      {/* 4. Core Acquisition System */}
      <SystemArchitectureSection />

      {/* 5. How I Work + 6. Apply */}
      <ServicesFinalCTA />
    </>
  );
}
