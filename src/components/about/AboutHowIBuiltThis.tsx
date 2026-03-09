"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { aboutHowIBuiltThis } from "@/lib/content";

export default function AboutHowIBuiltThis() {
  return (
  <div className="w-full bg-[#0D0B09] py-16">
      <AnimatedSection className="max-w-2xl mx-auto text-left">
        <SectionLabel label={aboutHowIBuiltThis.overline} className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6 whitespace-pre-line">
          {aboutHowIBuiltThis.heading}
        </h2>
        {aboutHowIBuiltThis.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[17px] text-sv-text-sub leading-[1.8] mb-5 last:mb-0"
            style={{ color: "#D2C9B8" }}
          >
            {p}
          </p>
        ))}
      </AnimatedSection>
    </div>
  );
}
