"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function WorkingWithMe() {
  const { locale } = useLocale();
  const w = translations[locale].about.workingWithMe;

  const phases = [
    { title: w.phase1Title, desc: w.phase1Desc },
    { title: w.phase2Title, desc: w.phase2Desc },
    { title: w.phase3Title, desc: w.phase3Desc },
  ];

  return (
    <div className="w-full py-16" style={{ background: "#131009" }}>
      <AnimatedSection className="max-w-2xl mx-auto">
        <SectionLabel label={w.overline} className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-8">
          {w.headline}
        </h2>
        <div className="space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="flex gap-4 pb-6 border-b border-[#2A2318] last:border-0 last:pb-0"
            >
              <span className="text-[13px] font-semibold text-[#D4A853] shrink-0 w-16">
                {phase.title}
              </span>
              <p className="text-[15px] text-[#D2C9B8] leading-relaxed">
                {phase.desc}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
