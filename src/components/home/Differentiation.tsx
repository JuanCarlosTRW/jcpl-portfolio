"use client";

import { differentiation } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

/* ─── Inline SVG Icons ─── */
function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 4l8 8M12 4l-8 8" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0">
      <path d="M4 8.5l3 3 5-5.5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Differentiation() {
  return (
    <SectionWrapper id="difference" className="bg-[#060D1F]">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
        <SectionLabel label={differentiation.label} className="mb-5 text-[#8899BB]" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {differentiation.headline}
        </h2>
        <p className="mt-5 text-[#E8EDF5] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          {differentiation.subheadline}
        </p>
      </Reveal>

      {/* ── Desktop Comparison Table ── */}
      <Reveal delay={0.1} className="hidden md:block">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[14px] border border-[rgba(37,99,235,0.15)] overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, #0F2049 0%, #060D1F 100%)",
            }}
          >
            {/* Header */}
            <div className="grid grid-cols-[1fr_1fr_1fr] border-b border-[rgba(37,99,235,0.15)]">
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#8899BB]">
                Dimension
              </div>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#E57373] text-center">
                Typical Approach
              </div>
              <div className="p-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#2563EB] text-center">
                Growth Architecture™
              </div>
            </div>

            {/* Rows */}
            {differentiation.comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr] ${
                  i < differentiation.comparisons.length - 1
                    ? "border-b border-[rgba(255,255,255,0.06)]"
                    : ""
                } hover:bg-[rgba(37,99,235,0.03)] transition-colors duration-150`}
              >
                <div className="p-5 text-sm font-medium text-white">
                  {row.dimension}
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center">
                  <XIcon />
                  <span className="text-sm text-[#8899BB]">
                    {row.them}
                  </span>
                </div>
                <div className="p-5 flex items-start gap-2.5 justify-center">
                  <CheckIcon />
                  <span className="text-sm text-[#E8EDF5]">
                    {row.us}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── Mobile Cards ── */}
      <div className="md:hidden space-y-4 max-w-sm mx-auto">
        {differentiation.comparisons.map((row, i) => (
          <Reveal key={i} delay={0.06 * i}>
            <div className="rounded-xl border border-[rgba(37,99,235,0.15)] bg-[#0F2049] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8899BB] mb-3">
                {row.dimension}
              </p>
              <div className="space-y-2.5">
                <div className="flex items-start gap-2">
                  <XIcon />
                  <span className="text-sm text-[#8899BB]">
                    {row.them}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm text-[#E8EDF5]">
                    {row.us}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
