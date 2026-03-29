"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function WorkingWithMe() {
  const { locale } = useLocale();
  const w = translations[locale].about.workingWithMe;
  const rowsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const container = rowsRef.current;
    if (!container) return;
    const rows = container.querySelectorAll(".timeline-row");
    rows.forEach((row) => {
      (row as HTMLElement).style.opacity = "0";
      (row as HTMLElement).style.transform = "translateY(20px)";
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        rows.forEach((row, i) => {
          (row as HTMLElement).style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
          (row as HTMLElement).style.opacity = "1";
          (row as HTMLElement).style.transform = "translateY(0)";
        });
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

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
        <div ref={rowsRef} className="space-y-6">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="timeline-row flex gap-4 pb-6 border-b border-[#2A2318] last:border-0 last:pb-0"
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
