"use client";

import { CaseStudy } from "@/content/caseStudies";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

interface Props {
  recent: CaseStudy[];
  building: CaseStudy[];
}

export default function ResultsPortfolioSection({ recent, building }: Props) {
  const { locale } = useLocale();
  const rp = translations[locale].results.portfolio;

  if (recent.length === 0 && building.length === 0) return null;

  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: "#131009",
        borderTop: "1px solid rgba(212,168,83,0.07)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6">

        {/* Recent Delivered — full weight */}
        {recent.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853]">
                {rp.recentlyDelivered}
              </span>
              <span
                className="flex-1 h-px"
                style={{ background: "rgba(212,168,83,0.1)" }}
              />
            </div>
            <p className="text-[14px] text-[rgba(255,255,255,0.35)] mb-10 max-w-[520px] leading-[1.65]">
              {rp.recentSub}
            </p>
            <div className="grid gap-5 md:gap-7 grid-cols-1 md:grid-cols-3">
              {recent.map((cs) => (
                <CaseStudyCard key={cs.id} cs={cs} />
              ))}
            </div>
          </div>
        )}

        {/* Active Builds — clearly secondary, in progress */}
        {building.length > 0 && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)]">
                {rp.activeBuilds}
              </span>
              <span
                className="flex-1 h-px"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />
              <span className="text-[11px] text-[rgba(255,255,255,0.2)] tabular-nums">
                {building.length} {rp.inProgress}
              </span>
            </div>
            <p className="text-[14px] text-[rgba(255,255,255,0.25)] mb-10 max-w-[520px] leading-[1.65]">
              {rp.activeSub}
            </p>
            <div className="grid gap-5 md:gap-7 grid-cols-1 md:grid-cols-3">
              {building.map((cs) => (
                <div key={cs.id} className="opacity-[0.60]">
                  <CaseStudyCard cs={cs} />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
