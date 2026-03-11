"use client";

import { caseStudies } from "@/content/caseStudies";
import ResultsFlagshipCaseStudy from "@/components/results/ResultsFlagshipCaseStudy";
import ResultsSecondaryCase from "@/components/results/ResultsSecondaryCase";
import ResultsPortfolioSection from "@/components/results/ResultsPortfolioSection";
import ResultsCTA from "@/components/results/ResultsCTA";

const TRIPLE_W_ID = "triple-w-rentals";
const ELITE_ID = "elite-barbershop";
const RECENT_IDS = ["culture-barbershop"];
const BUILDING_IDS = ["absolute-painting", "centre-dentaire-saint-elzear"];

export default function CaseStudiesSection() {
  const flagship = caseStudies.find((c) => c.id === TRIPLE_W_ID);
  const secondary = caseStudies.find((c) => c.id === ELITE_ID);
  const recent = caseStudies.filter((c) => RECENT_IDS.includes(c.id));
  const building = caseStudies.filter((c) => BUILDING_IDS.includes(c.id));

  return (
    <>
      {/* Flagship — Triple W Rentals */}
      {flagship && <ResultsFlagshipCaseStudy cs={flagship} />}

      {/* Secondary featured — Elite Barbershop */}
      {secondary && <ResultsSecondaryCase cs={secondary} />}

      {/* Active portfolio — recent + in-progress */}
      <ResultsPortfolioSection recent={recent} building={building} />

      {/* CTA */}
      <ResultsCTA />

      {/* Disclaimer — page-close, authored */}
      <div
        className="py-10"
        style={{
          background: "#1A1510",
          borderTop: "1px solid rgba(255,255,255,0.04)",
        }}
      >
        <p className="text-center text-[12px] text-[rgba(255,255,255,0.2)] max-w-[480px] mx-auto px-6 leading-[1.7]">
          Results shown are from real client engagements. Revenue figures are
          client-reported. Your results will vary based on market, offer, and
          execution.
        </p>
      </div>
    </>
  );
}
