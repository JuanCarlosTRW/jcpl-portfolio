"use client";

import { howWeWork } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";

export default function HowWeWork() {
  return (
    <SectionWrapper id="process" variant="alt">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label={howWeWork.label} className="mb-5" />
  <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          {howWeWork.headline}
        </h2>
        <p className="mt-5 text-cg-body max-w-lg mx-auto leading-[1.75] text-[18px]">
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
                    <div className="w-[52px] h-[52px] rounded-full bg-[rgba(37,99,235,0.15)] border-2 border-[rgba(37,99,235,0.5)] flex items-center justify-center font-extrabold text-[16px] text-cg-accent-lt relative z-10">
                      {step.number}
                    </div>
                    {i < howWeWork.steps.length - 1 && (
                      <div
                        className="w-[2px] flex-1 min-h-[40px]"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(37,99,235,0.5) 0%, rgba(37,99,235,0.15) 100%)",
                        }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-12">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-[22px] font-bold text-white leading-snug">
                        {step.title}
                      </h3>
                      <span className="inline-flex bg-[rgba(37,99,235,0.15)] border border-[rgba(37,99,235,0.4)] rounded-full px-2.5 py-0.5 text-[12px] text-cg-accent-lt font-semibold tracking-[0.05em]">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-[17px] text-cg-secondary leading-[1.8] max-w-lg">
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
