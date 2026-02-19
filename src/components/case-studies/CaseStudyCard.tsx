"use client";
import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "./FrozenWebsitePreview";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  return (
    <div className="bg-[#0F2049] border border-[rgba(37,99,235,0.12)] rounded-2xl overflow-hidden transition-colors duration-300 hover:border-[rgba(37,99,235,0.35)]">
      {/* Preview */}
      <FrozenWebsitePreview
        logoUrl={cs.logoUrl}
        websiteUrl={cs.websiteUrl}
        title={cs.title}
        metricsImageUrl={cs.metricsImageUrl}
      />

      {/* Card body */}
      <div className="p-6">
        {/* Industry overline */}
        <div className="text-[11px] uppercase tracking-[0.1em] text-[rgba(255,255,255,0.4)] mb-2">
          {cs.industry}
        </div>

        {/* Title */}
        <div className="text-[18px] font-bold text-white mb-1.5">{cs.title}</div>

        {/* Outcome */}
        <div className="text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.5] mb-4">
          {cs.outcome}
        </div>

        {/* Metrics pills */}
        {cs.metrics.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-5">
            {cs.metrics.map((m) => (
              <span
                key={m.label}
                className="bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.2)] rounded-full px-3 py-1 flex items-center"
              >
                <span className="text-[13px] font-semibold text-white">{m.value}</span>
                <span className="text-[11px] text-[rgba(255,255,255,0.5)] ml-1">{m.label}</span>
              </span>
            ))}
          </div>
        )}

        {/* CTA row */}
        <div className="flex gap-2.5 flex-wrap">
          {(cs.websiteUrl || cs.metricsImageUrl) && (
            <button
              type="button"
              className="bg-[#2563EB] text-white px-4 py-2 rounded-md text-[13px] font-semibold hover:bg-[#1D4ED8] transition-all duration-200"
              onClick={() =>
                window.open(
                  cs.websiteUrl || cs.metricsImageUrl,
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              {cs.websiteUrl ? "View Live Website →" : "View Metrics →"}
            </button>
          )}
          {cs.caseStudySlug && (
            <Link
              href={`/case-studies/${cs.caseStudySlug}`}
              className="border border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.7)] bg-transparent px-4 py-2 rounded-md text-[13px] font-medium hover:border-[rgba(37,99,235,0.5)] hover:text-white transition-all duration-200"
            >
              View Case Study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
