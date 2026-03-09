"use client";

import { caseStudies } from "@/content/caseStudies";
import ResultsFlagshipCaseStudy from "@/components/results/ResultsFlagshipCaseStudy";
import ResultsRecentBuilds from "@/components/results/ResultsRecentBuilds";
import ResultsCTA from "@/components/results/ResultsCTA";
import CaseStudyCard from "./CaseStudyCard";

const TRIPLE_W_ID = "triple-w-rentals";
const ELITE_ID = "elite-barbershop";
const RECENT_IDS = ["absolute-painting", "culture-barbershop", "centre-dentaire-saint-elzear"];

export default function CaseStudiesSection() {
  const flagship = caseStudies.find((c) => c.id === TRIPLE_W_ID);
  const secondary = caseStudies.find((c) => c.id === ELITE_ID);
  const recent = caseStudies.filter((c) => RECENT_IDS.includes(c.id));

  return (
    <>
      {/* Triple W flagship — full-width */}
      {flagship && (
        <ResultsFlagshipCaseStudy cs={flagship} />
      )}

      {/* Elite Barbershop — secondary */}
      {secondary && (
        <section
          className="py-12 md:py-16"
          style={{ background: "#0D0B09" }}
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="max-w-[540px]">
              <CaseStudyCard cs={secondary} />
            </div>
          </div>
        </section>
      )}

      {/* Recent builds — smaller cards */}
      <ResultsRecentBuilds studies={recent} />

      {/* CTA */}
      <ResultsCTA />

      {/* Disclaimer */}
      <p className="py-10 text-center text-[12px] text-[rgba(255,255,255,0.25)] max-w-[560px] mx-auto leading-relaxed" style={{ background: "#1A1510" }}>
        Results shown are from real client engagements. Revenue figures are client-reported. Your results will vary based on market, offer, and execution.
      </p>
    </>
  );
}
