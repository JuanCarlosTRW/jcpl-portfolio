"use client";

import { problemSection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal, CountUpValue } from "@/components/motion";

export default function ProblemSection() {
  return (
    <SectionWrapper>
      <Reveal className="text-center mb-16">
        <SectionLabel label={problemSection.label} className="mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] max-w-3xl mx-auto leading-tight">
          {problemSection.headline}
        </h2>
      </Reveal>

      {/* Stat cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-16">
        {problemSection.problems.map((problem, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-[var(--brand-accent)] mb-3">
                {problem.stat.includes("%") ? (
                  <CountUpValue
                    to={parseInt(problem.stat)}
                    suffix="%"
                  />
                ) : (
                  problem.stat
                )}
              </div>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Body text */}
      <Reveal className="max-w-2xl mx-auto text-center" delay={0.3}>
        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          {problemSection.body}
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
