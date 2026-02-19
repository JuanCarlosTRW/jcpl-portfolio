"use client";
import { caseStudies } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#060D1F] py-20 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Card grid */}
        <div className="grid gap-7 grid-cols-1 md:grid-cols-2">
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
