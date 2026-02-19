"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import ServicesHero from "./ServicesHero";
import QuickQualification from "./QuickQualification";
import InvestmentSection from "./InvestmentSection";
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

  <InvestmentSection />
    </>
  );
}
