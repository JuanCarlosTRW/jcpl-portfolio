"use client";

import { caseStudies } from "@/content/caseStudies";
import ResultsFlagshipCaseStudy from "@/components/results/ResultsFlagshipCaseStudy";
import ResultsRecentBuilds from "@/components/results/ResultsRecentBuilds";
import ResultsCTA from "@/components/results/ResultsCTA";
import CaseStudyCard from "./CaseStudyCard";

const TRIPLE_W_ID = "triple-w-rentals";
const ELITE_ID = "elite-barbershop";
const RECENT_WITH_METRICS = ["culture-barbershop"];
const CURRENTLY_BUILDING = ["absolute-painting", "centre-dentaire-saint-elzear"];

export default function CaseStudiesSection() {
  const flagship = caseStudies.find((c) => c.id === TRIPLE_W_ID);
  const secondary = caseStudies.find((c) => c.id === ELITE_ID);
  const recentWithMetrics = caseStudies.filter((c) => RECENT_WITH_METRICS.includes(c.id));
  const currentlyBuilding = caseStudies.filter((c) => CURRENTLY_BUILDING.includes(c.id));

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
      <ResultsRecentBuilds studies={recentWithMetrics} />

      {/* Currently building — no implied results */}
      {currentlyBuilding.length > 0 && (
        <section
          className="py-16 md:py-20"
          style={{ background: "#131009" }}
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <h3 className="text-[13px] uppercase tracking-[0.14em] text-[#D4A853] text-center mb-10">
              Currently building
            </h3>
            <div className="grid gap-5 md:gap-7 grid-cols-1 md:grid-cols-2 max-w-[720px] mx-auto">
              {currentlyBuilding.map((cs) => (
                <CaseStudyCard key={cs.id} cs={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ResultsCTA />

      {/* Disclaimer */}
      <p className="py-10 text-center text-[12px] text-[rgba(255,255,255,0.25)] max-w-[560px] mx-auto leading-relaxed" style={{ background: "#1A1510" }}>
        Results shown are from real client engagements. Revenue figures are client-reported. Your results will vary based on market, offer, and execution.
      </p>
    </>
  );
}
