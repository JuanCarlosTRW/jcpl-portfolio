"use client";

import { problemSection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, CountUpValue } from "@/components/motion";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <Reveal className="text-center mb-16 md:mb-20">
        <SectionLabel label={problemSection.label} className="mb-6" />
        <h2 className="heading-2 max-w-xl mx-auto">
          {problemSection.headline}
        </h2>
      </Reveal>

      {/* Dominant element: stat blocks — large, clean, no icons */}
      <div className="grid gap-px md:grid-cols-3 max-w-4xl mx-auto mb-16 md:mb-20 border border-[var(--border-soft)] rounded-[var(--radius-lg)] overflow-hidden">
        {problemSection.problems.map((problem, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="bg-[var(--bg-surface)] p-8 md:p-10 text-center h-full flex flex-col justify-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-3 tabular-nums tracking-tight">
                {problem.stat.includes("%") ? (
                  <CountUpValue
                    to={parseInt(problem.stat)}
                    suffix="%"
                  />
                ) : (
                  problem.stat
                )}
              </div>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[280px] mx-auto">
                {problem.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Single supporting paragraph */}
      <Reveal className="max-w-2xl mx-auto text-center" delay={0.3}>
        <p className="text-[var(--text-secondary)] leading-relaxed">
          {problemSection.body}
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
