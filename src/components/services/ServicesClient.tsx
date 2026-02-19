"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesHero from "./ServicesHero";
import QuickQualification from "./QuickQualification";
import IncludedGrid from "./IncludedGrid";
import ProofBlock from "./ProofBlock";
import ProcessSteps from "./ProcessSteps";
import ServicesFinalCTA from "./ServicesFinalCTA";
import StickyMobileCTA from "./StickyMobileCTA";
export default function ServicesClient() {
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

      {/* ═══ D · INCLUDED IN EVERY PLAN ═══ */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <IncludedGrid />
        </div>
      </SectionWrapper>

      {/* ═══ E · PROOF BLOCK ═══ */}
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">
          <ProofBlock />
        </div>
      </SectionWrapper>

      {/* ═══ F · PROCESS STEPS ═══ */}
      <SectionWrapper variant="surface">
        <div className="max-w-5xl mx-auto">
          <ProcessSteps />
        </div>
      </SectionWrapper>

      {/* ═══ G · STANDARDS + FINAL CTA ═══ */}
      <ServicesFinalCTA />

      {/* ═══ STICKY MOBILE CTA ═══ */}
      <StickyMobileCTA />
    </>
  );
}
