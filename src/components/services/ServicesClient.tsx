"use client";

import { useCallback } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesHero from "./ServicesHero";
import QuickQualification from "./QuickQualification";
import IncludedGrid from "./IncludedGrid";
import QuizRecommender from "./QuizRecommender";
import ProofBlock from "./ProofBlock";
import ProcessSteps from "./ProcessSteps";
import ServicesFinalCTA from "./ServicesFinalCTA";
import StickyMobileCTA from "./StickyMobileCTA";
import PricingSection from "@/components/pricing/PricingSection";

export default function ServicesClient() {
  const handleQuizRecommend = useCallback((tier: string) => {
    // Scroll to pricing after quiz recommendation
    setTimeout(() => {
      const pricingEl = document.getElementById("pricing");
      if (pricingEl) {
        pricingEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 600);
  }, []);

  return (
    <>
      {/* ═══ A · HERO ═══ */}
      <ServicesHero />

      {/* ═══ B · QUICK QUALIFICATION ═══ */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <QuickQualification />
        </div>
      </SectionWrapper>

      {/* ═══ C · PRICING (Cards + Toggle + Enterprise + Comparison + Add-ons + FAQ) ═══ */}
      <PricingSection />

      {/* ═══ D · INCLUDED IN EVERY PLAN ═══ */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <IncludedGrid />
        </div>
      </SectionWrapper>

      {/* ═══ E · QUIZ RECOMMENDER ═══ */}
      <SectionWrapper variant="surface" id="quiz">
        <div className="max-w-2xl mx-auto">
          <QuizRecommender onRecommend={handleQuizRecommend} />
        </div>
      </SectionWrapper>

      {/* ═══ F · PROOF BLOCK ═══ */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <ProofBlock />
        </div>
      </SectionWrapper>

      {/* ═══ G · PROCESS STEPS ═══ */}
      <SectionWrapper variant="surface">
        <div className="max-w-5xl mx-auto">
          <ProcessSteps />
        </div>
      </SectionWrapper>

      {/* ═══ H · STANDARDS + FINAL CTA ═══ */}
      <ServicesFinalCTA />

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <StickyMobileCTA />
    </>
  );
}
