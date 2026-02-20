"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutHowIBuiltThis } from "@/lib/content";

export default function AboutHowIBuiltThis() {
  return (
    <div className="w-full bg-[#0A1628] py-16 md:py-20">
      <AnimatedSection className="max-w-2xl mx-auto text-left">
        <SectionLabel label={aboutHowIBuiltThis.overline} className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6 whitespace-pre-line">
          {aboutHowIBuiltThis.heading}
        </h2>
        {aboutHowIBuiltThis.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[17px] text-cg-body leading-[1.8] mb-5 last:mb-0"
            style={{ color: "#D4DFF0" }}
          >
            {p}
          </p>
        ))}
      </AnimatedSection>
    </div>
  );
}
