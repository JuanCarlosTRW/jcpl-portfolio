"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

export default function DataBenchmarkBlock() {
  return (
    <SectionWrapper id="benchmark" className="bg-[#060b14] py-16">
      <Reveal className="text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400 mb-6">
          Operational Benchmark
        </p>
        <p className="type-metric text-white text-center mb-0">$33</p>
        <p className="text-[12px] font-[400] opacity-[0.45] max-w-md mx-auto text-center mt-4">
          Average cost per qualified call delivered. Active client accounts. Q4 2025. Updated as campaigns scale.
        </p>
        <p className="text-white text-[18px] font-[600] opacity-[1.0] max-w-[560px] mx-auto text-center mt-5 leading-[1.65]">
          A business that needs 10 booked calls per month to stay fully booked spends $330 on leads with this system. That is less than the margin on one missed job.
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
