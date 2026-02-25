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
        <p className="text-7xl font-black text-white leading-none mb-0">$33</p>
        <p className="text-slate-400 text-base max-w-md mx-auto text-center mt-4">
          Average cost per qualified call delivered. Active client accounts. Q4 2025. Updated as campaigns scale.
        </p>
        <p className="text-white font-bold text-base max-w-xl mx-auto text-center mt-5 leading-[1.65]">
          A business that needs 10 booked calls per month to stay fully booked spends $330 on leads with this system. That is less than the margin on one missed job.
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
