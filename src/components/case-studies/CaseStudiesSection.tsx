"use client";
import { useState } from "react";
import { caseStudies, CaseStudy } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";
import PreviewModal from "./PreviewModal";

export default function CaseStudiesSection() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <section className="bg-[#050B1A] py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="uppercase text-[#8899BB] tracking-[0.12em] text-[0.8rem] font-semibold mb-2">
          RESULTS
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Proof you can feel in 10 seconds.
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <CaseStudyCard
              key={cs.id}
              caseStudy={cs}
              onOpenPreview={() => setActive(cs)}
            />
          ))}
        </div>
        <PreviewModal
          isOpen={!!active}
          onClose={() => setActive(null)}
          caseStudy={active}
        />
      </div>
    </section>
  );
}
