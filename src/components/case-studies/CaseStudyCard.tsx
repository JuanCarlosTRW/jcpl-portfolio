"use client";
import { useRouter } from "next/navigation";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "./FrozenWebsitePreview";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/results/${cs.caseStudySlug}`);
  };

  return (
    <div
      className="bg-[#0F2049] border border-[rgba(37,99,235,0.1)] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(37,99,235,0.35)] hover:-translate-y-[2px]"
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleCardClick();
      }}
    >
      {/* Preview */}
      <div className="border-b border-[rgba(37,99,235,0.08)]">
        <FrozenWebsitePreview
          logoUrl={cs.logoUrl}
          websiteUrl={cs.websiteUrl}
          title={cs.title}
          metricsImageUrl={cs.metricsImageUrl}
          onClickOverride={handleCardClick}
        />
      </div>

      {/* Card body */}
      <div className="p-6">
        {/* Industry overline */}
        <div className="text-[10px] uppercase tracking-[0.12em] text-[#8899BB] mb-2">
          {cs.industry}
        </div>

        {/* Title */}
        <div className="text-[18px] font-bold text-white mb-2 tracking-[-0.01em]">
          {cs.title}
        </div>

        {/* Outcome */}
        <div className="text-[14px] text-[rgba(255,255,255,0.55)] leading-[1.55] mb-5">
          {cs.outcome}
        </div>

        {/* Metrics pills */}
        {cs.metrics.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {cs.metrics.map((m) => (
              <span
                key={m.label}
                className="bg-[rgba(37,99,235,0.08)] border border-[rgba(37,99,235,0.18)] rounded-full px-3 py-[3px] flex items-center"
              >
                <span className="text-[12px] font-bold text-white">
                  {m.value}
                </span>
                <span className="text-[11px] text-[#8899BB] ml-1.5">
                  {m.label}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* CTA row */}
        <div className="flex gap-2.5 flex-wrap items-center">
          {cs.websiteUrl && cs.title !== "Triple W Rentals" && (
            <button
              type="button"
              className="bg-[#2563EB] text-white px-4 py-2 rounded-md text-[13px] font-semibold hover:bg-[#1D4ED8] transition-all duration-200"
              onClick={(e) => {
                e.stopPropagation();
                window.open(cs.websiteUrl!, "_blank", "noopener,noreferrer");
              }}
            >
              View Live Website →
            </button>
          )}
          <button
            type="button"
            className="border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.6)] bg-transparent px-4 py-2 rounded-md text-[13px] font-medium hover:border-[rgba(37,99,235,0.4)] hover:text-white transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/results/${cs.caseStudySlug}`);
            }}
          >
            View Case Study
          </button>
        </div>
      </div>
    </div>
  );
}
