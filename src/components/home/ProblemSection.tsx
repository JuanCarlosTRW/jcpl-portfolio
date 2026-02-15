"use client";

import { problemSection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import StarBorder from "@/components/ui/StarBorder";
import { Reveal, CountUpValue } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <Reveal className="text-center mb-12 md:mb-16">
        <SectionLabel label={problemSection.label} className="mb-6" />
        <BlurText
          text={problemSection.headline}
          delay={200}
          className="heading-2 max-w-3xl mx-auto"
        />
      </Reveal>

      {/* 3 consequence cards — equal heights */}
      <div className="grid gap-6 md:grid-cols-3 mb-12 md:mb-16">
        {problemSection.problems.map((problem, i) => (
          <Reveal key={i} delay={0.1 * i}>
            <StarBorder variant="accent" speed="10s" className="rounded-2xl h-full">
              <div className="rounded-2xl bg-[var(--bg-surface)] p-6 md:p-8 text-center h-full flex flex-col justify-center min-h-[180px]">
                <div className="text-4xl md:text-5xl font-bold text-[var(--brand-accent)] mb-3 tabular-nums">
                  {problem.stat.includes("%") ? (
                    <CountUpValue
                      to={parseInt(problem.stat)}
                      suffix="%"
                    />
                  ) : (
                    problem.stat
                  )}
                </div>
                <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </StarBorder>
          </Reveal>
        ))}
      </div>

      {/* Body text — consequence framing */}
      <Reveal className="max-w-2xl mx-auto text-center" delay={0.3}>
        <p className="body-lg">
          {problemSection.body}
        </p>
      </Reveal>
    </SectionWrapper>
  );
}
