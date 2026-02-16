"use client";

import { problemSection } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import PremiumFrame from "@/components/ui/PremiumFrame";
import Icon from "@/components/ui/Icon";
import { Reveal, CountUpValue } from "@/components/motion";
import BlurText from "@/components/ui/BlurText";

/* Icon mapping for problem cards */
const problemIcons = ["search", "clock", "trending-up"] as const;

export default function ProblemSection() {
  return (
    <SectionWrapper id="problem">
      <Reveal className="text-center mb-12 md:mb-16">
        <SectionLabel label={problemSection.label} className="mb-6" />
        <BlurText
          text={problemSection.headline}
          delay={200}
          className="section-title heading-2"
        />
      </Reveal>

      {/* 3 consequence cards */}
      <div className="grid gap-5 md:grid-cols-3 mb-12 md:mb-16">
        {problemSection.problems.map((problem, i) => (
          <Reveal key={i} delay={0.08 * i}>
            <PremiumFrame
              variant="accent"
              radius="lg"
              padding="md"
              className="text-center h-full flex flex-col justify-center min-h-[180px]"
            >
              {/* Small icon indicator */}
              <div className="mb-3 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-danger)]/10 text-[var(--color-danger)]">
                <Icon name={problemIcons[i]} size={18} strokeWidth={2} />
              </div>

              <div className="text-3xl md:text-4xl font-bold text-[var(--brand-accent)] mb-2 tabular-nums">
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
            </PremiumFrame>
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
