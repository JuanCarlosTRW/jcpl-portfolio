"use client";

import { featuredCase } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, CountUpValue } from "@/components/motion";
import Link from "next/link";

const subStats = [
  { value: "$900", label: "Total ad spend" },
  { value: "33x", label: "Return on ad spend" },
  { value: "30", label: "Days to results" },
];

export default function FeaturedCaseStudy() {
  return (
    <SectionWrapper id="proof" className="bg-[#060D1F]">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={featuredCase.label} className="mb-5" />
  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {featuredCase.headline}
        </h2>
      </Reveal>

      {/* Featured Result Card */}
      <Reveal delay={0.1}>
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0F2049] border border-[rgba(37,99,235,0.2)] rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 text-center relative overflow-hidden">
            {/* Client label */}
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#6B9FD4] mb-4 relative z-10">
              RV RENTAL COMPANY — TEXAS
            </p>

            {/* Big number */}
              <div className="text-[clamp(40px,8vw,56px)] font-extrabold text-white leading-none mb-2">
                <CountUpValue to={30000} prefix="$" durationMs={2200} />
              </div>

            <p className="text-[16px] text-[#C8D4E8] mb-2 relative z-10">
              in revenue generated
            </p>
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#6B9FD4] mb-8 relative z-10">
              FIRST 30 DAYS · $900 AD SPEND · GOOGLE ADS FUNNEL
            </p>

            {/* Divider */}
            <div
              className="h-px max-w-xs mx-auto mb-8 relative z-10"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)",
              }}
              aria-hidden="true"
            />

            {/* Sub stats */}
            <div className="flex justify-center gap-8 sm:gap-12 mb-2 relative z-10">
              {subStats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-[28px] font-extrabold text-[#4B8EFF]">
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.08em] text-[#6B9FD4] mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Callout */}
            <span className="block text-[13px] text-[#4B8EFF] font-semibold mt-0 mb-7 relative z-10">
              $900 in ad spend generated $30,000 in revenue.
            </span>

            {/* CTA */}
            <Link
              href="/results"
              className="relative z-10 inline-block border border-[rgba(37,99,235,0.5)] text-[#C8D4E8] bg-transparent rounded-[8px] px-6 py-2.5 font-semibold text-[15px] hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-all duration-200"
            >
              View All Results
            </Link>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
