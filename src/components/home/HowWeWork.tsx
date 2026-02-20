"use client";

import { howWeWork } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function HowWeWork() {
  return (
    <SectionWrapper id="process" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={howWeWork.label} className="mb-5 text-[#8899BB]" />
  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.15] tracking-tight max-w-xl mx-auto">
          {howWeWork.headline}
        </h2>
        <p className="mt-5 text-[#E8EDF5] max-w-lg mx-auto leading-relaxed text-[0.95rem]">
          {howWeWork.subheadline}
        </p>
      </Reveal>

      <div className="relative max-w-3xl mx-auto">
        <div className="flex flex-col gap-0">
          {howWeWork.steps.map((step, i) => {
            return (
              <Reveal key={step.number} delay={0.1 * i}>
                <div className="group relative flex gap-6 md:gap-8">
                  {/* Step number circle + connector */}
                  <div className="flex flex-col items-center relative shrink-0">
                    <div className="w-[52px] h-[52px] rounded-full bg-[rgba(37,99,235,0.12)] border-2 border-[rgba(37,99,235,0.4)] flex items-center justify-center font-extrabold text-[16px] text-[#2563EB] relative z-10">
                      {step.number}
                    </div>
                    {i < howWeWork.steps.length - 1 && (
                      <div
                        className="w-[2px] flex-1 min-h-[40px]"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(37,99,235,0.4) 0%, rgba(37,99,235,0.1) 100%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[20px] font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                      <span className="inline-flex bg-[rgba(37,99,235,0.1)] border border-[rgba(37,99,235,0.25)] rounded-full px-2.5 py-0.5 text-[11px] text-[#2563EB] font-semibold tracking-[0.05em]">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[15px] text-[#8899BB] leading-[1.7] max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
