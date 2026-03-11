"use client";

import { CaseStudy } from "@/content/caseStudies";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";

interface Props {
  recent: CaseStudy[];
  building: CaseStudy[];
}

export default function ResultsPortfolioSection({ recent, building }: Props) {
  const all = [...recent, ...building];

  if (all.length === 0) return null;

  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: "#131009",
        borderTop: "1px solid rgba(212,168,83,0.07)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)]">
            Active portfolio
          </span>
          <span
            className="flex-1 h-px"
            style={{ background: "rgba(212,168,83,0.1)" }}
          />
        </div>
        <p className="text-[14px] text-[rgba(255,255,255,0.35)] mb-10 max-w-[480px]">
          Recently delivered and active partnerships. Systems live. Revenue data
          being verified or collected where noted.
        </p>

        <div className="grid gap-5 md:gap-7 grid-cols-1 md:grid-cols-3">
          {all.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
