"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/content/caseStudies";
import FrozenWebsitePreview from "./FrozenWebsitePreview";

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className="flex-shrink-0 mt-0.5"
    >
      <circle cx="9" cy="9" r="9" fill="rgba(37,99,235,0.15)" />
      <path
        d="M6 9.5l2 2 4-4"
        stroke="#2563EB"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CaseStudyDetail({
  caseStudy: cs,
}: {
  caseStudy: CaseStudy;
}) {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const scrollToMetrics = () => {
    const el = document.getElementById("metrics-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handlePreviewClick = () => {
    if (cs.websiteUrl) {
      window.open(cs.websiteUrl, "_blank", "noopener,noreferrer");
    } else if (cs.metricsImageUrl) {
      scrollToMetrics();
    }
  };

  const defaultSituation =
    "This engagement focused on building a complete acquisition system from the ground up — turning an invisible or underperforming online presence into a predictable pipeline of qualified leads.";

  return (
    <main className="bg-[#060D1F]">
      {/* ═══ SECTION A — HERO ═══ */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column — content */}
            <div className="max-w-[520px]">
              <Link
                href="/results"
                className="inline-flex items-center gap-1.5 text-[13px] text-[#8899BB] hover:text-white transition-colors duration-200 mb-8"
              >
                ← Back to Results
              </Link>

              <div className="text-[11px] uppercase tracking-[0.12em] text-[#8899BB] mb-3">
                {cs.industry}
              </div>

              <h1 className="text-[clamp(28px,4vw,44px)] font-bold text-white leading-[1.15] mb-4">
                {cs.title}
              </h1>

              <p className="text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.6] mb-8">
                {cs.outcome}
              </p>

              {/* Metrics pills */}
              {cs.metrics?.length > 0 && (
                <div className="flex gap-2.5 flex-wrap mb-10">
                  {cs.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.25)] rounded-full px-4 py-1.5 flex items-center"
                    >
                      <span className="text-[15px] font-bold text-white">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-[#8899BB] ml-1.5">
                        {m.label}
                      </span>
                    </span>
                  ))}
                </div>
              )}

              {/* CTA buttons row */}
              <div className="flex gap-3 flex-wrap">
                {cs.websiteUrl && (
                  <button
                    type="button"
                    className="bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold text-[14px] hover:bg-[#1D4ED8] transition"
                    onClick={() =>
                      window.open(
                        cs.websiteUrl!,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    View Live Website →
                  </button>
                )}
                {cs.metricsImageUrl && (
                  <button
                    type="button"
                    className="border border-[rgba(37,99,235,0.4)] text-[#E8EDF5] bg-transparent px-6 py-3 rounded-lg font-medium text-[14px] hover:border-[#2563EB] hover:text-white transition"
                    onClick={scrollToMetrics}
                  >
                    View Metrics ↓
                  </button>
                )}
              </div>
            </div>

            {/* Right column — frozen preview */}
            <div className="max-w-[480px] w-full mx-auto lg:mx-0 lg:ml-auto">
              <FrozenWebsitePreview
                logoUrl={cs.logoUrl}
                websiteUrl={cs.websiteUrl}
                title={cs.title}
                metricsImageUrl={cs.metricsImageUrl}
                onClickOverride={handlePreviewClick}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION B — THE SITUATION ═══ */}
      <section className="bg-[#0A1628] py-20">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-[22px] font-bold text-white mb-4">
            The Situation
          </h2>
          <p className="text-[16px] text-[rgba(255,255,255,0.6)] leading-[1.8]">
            {cs.situation || defaultSituation}
          </p>
        </div>
      </section>

      {/* ═══ SECTION C — WHAT WAS BUILT ═══ */}
      {cs.deliverables && cs.deliverables.length > 0 && (
        <section className="bg-[#060D1F] py-20">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-[22px] font-bold text-white mb-6">
              What Was Built
            </h2>
            <div className="space-y-3.5">
              {cs.deliverables.map((d, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.5]">
                    {d}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══ SECTION D — METRICS / RESULTS IMAGE ═══ */}
      {cs.metricsImageUrl && (
        <section id="metrics-section" className="bg-[#0A1628] py-20">
          <div className="max-w-[900px] mx-auto px-6">
            <h2 className="text-[22px] font-bold text-white mb-2">
              Performance Metrics
            </h2>
            <p className="text-[14px] text-[#8899BB] mb-8">
              Real data from Google Ads dashboard. Client details redacted.
            </p>
            <div className="bg-[#0F2049] border border-[rgba(37,99,235,0.15)] rounded-xl overflow-hidden">
              <Image
                src={cs.metricsImageUrl}
                alt={`${cs.title} performance metrics`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>
        </section>
      )}

      {/* ═══ SECTION E — FINAL CTA ═══ */}
      <section className="bg-[#060D1F] py-24">
        <div className="max-w-[600px] mx-auto text-center px-6">
          <h2 className="text-[clamp(24px,3.5vw,36px)] font-bold text-white mb-4">
            Want results like this?
          </h2>
          <p className="text-[16px] text-[rgba(255,255,255,0.55)] leading-[1.65] mb-9">
            I take on a maximum of 3 active partnerships per quarter. If
            there&apos;s a fit, I&apos;ll tell you within 24 hours.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] hover:bg-[#1D4ED8] transition"
          >
            Apply for Growth Partnership →
          </Link>
          <p className="text-[13px] text-[#8899BB] mt-3.5">
            Short application. I&apos;ll personally review it within 24 hours.
          </p>
        </div>
      </section>
    </main>
  );
}
