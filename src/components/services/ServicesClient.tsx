"use client";

import { useState, useCallback } from "react";
import { serviceTiers } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesHero from "./ServicesHero";
import QuickQualification from "./QuickQualification";
import PlanCard from "./PlanCard";
import IncludedGrid from "./IncludedGrid";
import QuizRecommender from "./QuizRecommender";
import ProofBlock from "./ProofBlock";
import ProcessSteps from "./ProcessSteps";
import ComparisonTable from "./ComparisonTable";
import ServicesFAQ from "./ServicesFAQ";
import ServicesFinalCTA from "./ServicesFinalCTA";
import StickyMobileCTA from "./StickyMobileCTA";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function ServicesClient() {
  const [selectedTier, setSelectedTier] = useState("Growth");

  const handleTierSelect = useCallback((name: string) => {
    setSelectedTier(name);
    // Smooth scroll to plans section if selecting from quiz
  }, []);

  const handleQuizRecommend = useCallback(
    (tier: string) => {
      setSelectedTier(tier);
      // Scroll to plans after quiz recommendation
      setTimeout(() => {
        const plansEl = document.getElementById("plans");
        if (plansEl) {
          plansEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 600);
    },
    []
  );

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

      {/* ═══ C · PLAN CARDS ═══ */}
      <SectionWrapper variant="surface" id="plans">
        <Reveal className="text-center mb-10">
          <SectionLabel label="Choose Your System" className="mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Three tiers. One goal: predictable growth.
          </h2>
          <p className="mt-3 text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
            Click a card to pre-select it for your application.
          </p>
        </Reveal>
        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {serviceTiers.map((tier, i) => (
            <PlanCard
              key={tier.name}
              tier={tier}
              index={i}
              selected={selectedTier === tier.name}
              onSelect={handleTierSelect}
            />
          ))}
        </div>
      </SectionWrapper>

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

      {/* ═══ H · COMPARISON TABLE ═══ */}
      <SectionWrapper>
        <div className="max-w-4xl mx-auto">
          <ComparisonTable />
        </div>
      </SectionWrapper>

      {/* ═══ I · FAQ ═══ */}
      <SectionWrapper variant="surface">
        <ServicesFAQ />
      </SectionWrapper>

      {/* ═══ J · STANDARDS + FINAL CTA ═══ */}
      <ServicesFinalCTA />

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <StickyMobileCTA />
    </>
  );
}
