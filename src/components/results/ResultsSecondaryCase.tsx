"use client";

import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";

export default function ResultsSecondaryCase({ cs }: { cs: CaseStudy }) {
  return (
    <section
      className="py-14 md:py-20"
      style={{
        background: "#0D0B09",
        borderTop: "1px solid rgba(212,168,83,0.07)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)]">
            Featured partnership
          </span>
          <span
            className="flex-1 h-px"
            style={{ background: "rgba(212,168,83,0.1)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
          {/* Left: Evidence content */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853] block mb-3">
              {cs.industry}
            </span>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.02em]">
              90 new clients in 90 days.
              <br className="hidden md:block" /> Built from zero online presence.
            </h2>
            <div className="mb-8 max-w-[480px]">
              {cs.situation.split("\n\n").map((para, i) => (
                <p key={i} className="text-[15px] text-[#D2C9B8] leading-[1.75] mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* What was built */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-4">
                Infrastructure built
              </p>
              <ul className="space-y-2.5">
                {cs.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.5]"
                  >
                    <span className="text-[#D4A853] mt-[1px] flex-shrink-0 select-none">
                      —
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-[rgba(212,168,83,0.3)] bg-[rgba(212,168,83,0.06)]">
                <svg
                  className="w-3.5 h-3.5 text-[#D4A853]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[12px] font-semibold text-[#D4A853]">
                  Verified
                </span>
              </div>
              <Link
                href={`/results/${cs.caseStudySlug}`}
                className="text-[14px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#D4A853] transition-colors"
              >
                View full case study →
              </Link>
            </div>
          </div>

          {/* Right: Outcome panel */}
          <div
            className="rounded-2xl border p-7"
            style={{
              borderColor: "rgba(212,168,83,0.15)",
              background: "#131009",
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-6">
              Outcome
            </p>

            {/* Primary metric — dominant */}
            <div
              className="pb-5 mb-5 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="text-[52px] font-extrabold text-white tracking-[-0.03em] leading-none mb-2">
                90
              </div>
              <div className="text-[14px] text-[#D2C9B8]">New clients acquired</div>
            </div>

            {/* Secondary metric */}
            <div
              className="pb-5 mb-5 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="text-[28px] font-extrabold text-white tracking-[-0.02em] leading-none mb-1">
                90 days
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.4)]">
                Timeframe
              </div>
            </div>

            {/* Commercial context note */}
            <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-[1.65]">
              Full acquisition infrastructure built from scratch. No prior
              website, no paid channels, no existing discoverability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
