"use client";

import { problemSection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, CountUpValue } from "@/components/motion";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="Diagnosis" className="mb-5" />
        <h2 className="heading-2">
          Every Day Without a System, You Lose Revenue
        </h2>
      </Reveal>

      {/* Dominant element: stat blocks — large, clean, no icons */}
      <div className="grid gap-px md:grid-cols-3 max-w-4xl mx-auto mb-14 md:mb-16 border border-[var(--border-soft)] rounded-[var(--radius-md)] overflow-hidden">
        {problemSection.problems.map((problem, i) => (
          <Reveal key={i} delay={0.08 * i}>
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
              <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[260px] mx-auto">
                {problem.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Supporting paragraph — direct, uncomfortable */}
      <Reveal className="max-w-xl mx-auto text-center" delay={0.25}>
        <p className="text-[var(--text-secondary)] leading-relaxed text-[0.95rem]">
          {problemSection.body}
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
