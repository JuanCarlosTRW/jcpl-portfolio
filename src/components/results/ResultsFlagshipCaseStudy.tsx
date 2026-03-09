"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "@/components/case-studies/FrozenWebsitePreview";

export default function ResultsFlagshipCaseStudy({ cs }: { cs: CaseStudy }) {
  const router = useRouter();
  const narrative = cs.narrative ?? cs.situation;

  const handleCardClick = () => router.push(`/results/${cs.caseStudySlug}`);

  return (
    <section
      className="py-16 md:py-24"
      style={{ background: "#131009" }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Narrative */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853] block mb-4">
              {cs.industry}
            </span>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.02em]">
              {cs.title}
            </h2>
            <p className="text-[17px] text-[#D2C9B8] leading-[1.75] mb-8">
              {narrative}
            </p>

            {/* VERIFIED badge */}
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 border border-[rgba(212,168,83,0.3)] bg-[rgba(212,168,83,0.06)]">
              <svg
                className="w-4 h-4 text-[#D4A853]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-[13px] font-semibold text-[#D4A853]">
                VERIFIED
              </span>
            </div>

            {/* CTA links */}
            <div className="flex flex-wrap gap-4">
              {cs.metricsImageUrl && (
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("metrics-preview");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="border border-[rgba(212,168,83,0.4)] text-[#D4A853] px-5 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-[rgba(212,168,83,0.1)] transition-colors"
                >
                  View proof
                </button>
              )}
              <Link
                href={`/results/${cs.caseStudySlug}`}
                className="border border-[rgba(212,168,83,0.4)] text-[#D4A853] px-5 py-2.5 rounded-lg text-[14px] font-semibold hover:bg-[rgba(212,168,83,0.1)] transition-colors"
              >
                View Case Study →
              </Link>
            </div>
          </div>

          {/* Right: Stat grid + preview */}
          <div id="metrics-preview">
            <div
              className="rounded-2xl overflow-hidden border"
              style={{
                borderColor: "rgba(212,168,83,0.15)",
                background: "#0D0B09",
              }}
            >
              <div
                className="border-b p-6"
                style={{ borderColor: "rgba(212,168,83,0.1)" }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-[12px] text-[#D2C9B8] uppercase tracking-wider mb-0.5">
                        {m.label}
                      </div>
                      <div className="text-xl font-bold text-white">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                onClick={handleCardClick}
                className="cursor-pointer transition-opacity hover:opacity-95"
              >
                <FrozenWebsitePreview
                  logoUrl={cs.logoUrl}
                  websiteUrl={cs.websiteUrl}
                  title={cs.title}
                  metricsImageUrl={cs.metricsImageUrl}
                  onClickOverride={handleCardClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
