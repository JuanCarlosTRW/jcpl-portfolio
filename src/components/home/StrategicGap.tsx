"use client";

import { strategicGap } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function StrategicGap() {
  const truths = strategicGap.truths;

  return (
    <SectionWrapper id="insight">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={strategicGap.label} className="mb-5 text-[#8899BB]" />
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {strategicGap.headline}
        </h2>
      </Reveal>

      <div className="max-w-4xl mx-auto">
        {/* Top featured card */}
        <Reveal>
          <div className="bg-[#0F2049] border border-[rgba(37,99,235,0.2)] rounded-[14px] px-8 sm:px-10 py-8 sm:py-9 mb-5">
            <span className="text-[11px] uppercase tracking-[0.1em] text-[#2563EB] font-bold mb-4 block">
              01
            </span>
            <div className="border-l-[3px] border-[#2563EB] pl-5">
              <h3 className="text-[22px] font-bold text-white mb-3">
                {truths[0].heading}
              </h3>
              <p className="text-[15px] text-[#8899BB] leading-[1.7] max-w-[640px]">
                {truths[0].body}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Bottom row — two half-width cards */}
        <div className="flex flex-col sm:flex-row gap-5">
          {truths.slice(1).map((truth, i) => (
            <Reveal key={i} delay={0.1 * (i + 1)}>
              <div className="flex-1 bg-[#0F2049] border border-[rgba(37,99,235,0.15)] rounded-[14px] px-7 py-7 transition-all duration-300 hover:border-[rgba(37,99,235,0.3)] hover:-translate-y-[2px]">
                <span className="text-[11px] uppercase tracking-[0.1em] text-[#2563EB] font-bold mb-3 block">
                  {`0${i + 2}`}
                </span>
                <h3 className="text-[18px] font-bold text-white mb-2">
                  {truth.heading}
                </h3>
                <p className="text-[14px] text-[#8899BB] leading-[1.65]">
                  {truth.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
