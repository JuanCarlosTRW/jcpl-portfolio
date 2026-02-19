"use client";
import { caseStudies } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#050B1A] py-20 sm:py-28">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#2563EB] font-semibold mb-3">
            RESULTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
            Real Businesses. Real Results.
          </h2>
          <p className="text-[15px] text-[rgba(255,255,255,0.5)] max-w-xl mx-auto leading-relaxed">
            Every project below is a live system we built and manage — no mockups, no hypotheticals.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-14 text-center text-[11px] text-[rgba(255,255,255,0.25)] max-w-lg mx-auto leading-relaxed">
          All results are client-reported and independently verified. Your
          results will vary based on market, offer, and execution quality.
        </p>
      </div>
    </section>
  );
}
