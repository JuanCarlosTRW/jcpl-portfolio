import { caseStudiesContent } from "@/lib/caseStudiesContent";
import SectionHeader from "@/components/ui/SectionHeader";
import FeaturedCase from "@/components/case-studies/FeaturedCase";
import BeforeAfterStrip from "@/components/case-studies/BeforeAfterStrip";
import EvidenceArtifacts from "@/components/case-studies/EvidenceArtifacts";
import CaseCard from "@/components/case-studies/CaseCard";
import ObjectionNote from "@/components/ui/ObjectionNote";
import SelectiveCTA from "@/components/ui/SelectiveCTA";

export default function CaseStudiesPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <SectionHeader
          eyebrow={caseStudiesContent.eyebrow}
          title={caseStudiesContent.title}
          subtitle={caseStudiesContent.subtitle}
        />

        {/* Featured Case */}
        <FeaturedCase {...caseStudiesContent.featuredCase} />

        {/* Before/After Strip */}
        <BeforeAfterStrip data={caseStudiesContent.featuredCase.beforeAfter} />

        {/* What Changed */}
        <div className="my-12 md:my-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-accent)] mb-4">
            What Changed
          </h3>
          <ul className="space-y-2">
            {caseStudiesContent.featuredCase.whatChanged.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <span className="w-2 h-2 mt-2 rounded-full bg-[var(--brand-accent)] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence Artifacts */}
        <EvidenceArtifacts artifacts={caseStudiesContent.featuredCase.artifacts} />

        {/* Secondary Cases */}
        <div className="my-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-8">
            More Results
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesContent.secondaryCases.map((c, i) => (
              <CaseCard key={i} {...c} />
            ))}
          </div>
        </div>

        {/* Objection-safe note */}
        <ObjectionNote>{caseStudiesContent.disclaimer}</ObjectionNote>

        {/* Selective CTA */}
        <div className="mt-16 md:mt-24">
          <SelectiveCTA
            label={caseStudiesContent.cta.label}
            href={caseStudiesContent.cta.href}
            note={caseStudiesContent.cta.note}
          />
        </div>
      </div>
    </div>
  );
}
                    key={tag}
                    className="rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-[var(--text-muted)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {cs.title}
              </h2>
              <p className="text-[var(--text-secondary)]">{cs.client}</p>
            </AnimatedSection>

            {/* Metadata bar */}
            {meta && (
              <AnimatedSection delay={0.05} className="mb-10">
                <div className="flex flex-wrap gap-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-soft)] p-4">
                  {[
                    { label: "Industry", value: meta.industry },
                    { label: "Duration", value: meta.duration },
                    { label: "Budget", value: meta.budgetRange },
                    { label: "Channel", value: meta.primaryChannel },
                  ].map((item, j) => (
                    <div key={j} className="flex-1 min-w-[120px]">
                      <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-0.5">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            )}

            {/* Hero stat */}
            <AnimatedSection delay={0.1} className="mb-12">
              <div className="gradient-border rounded-2xl bg-[var(--bg-surface)] p-10 text-center max-w-md mx-auto">
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  {cs.heroStat}
                </div>
                <p className="text-[var(--text-secondary)]">{cs.heroLabel}</p>
              </div>
            </AnimatedSection>

            {/* Case details grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection delay={0.15} direction="left">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--brand-alt)] font-semibold mb-2">
                      Context
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{cs.context}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--brand-alt)] font-semibold mb-2">
                      Problem
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{cs.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--brand-alt)] font-semibold mb-2">
                      Strategy
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {cs.strategy}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2} direction="right">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--brand-alt)] font-semibold mb-2">
                      Execution
                    </h3>
                    <ul className="space-y-2">
                      {cs.execution.map((step, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)] shrink-0" />
                          <span className="text-sm text-[var(--text-secondary)]">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-[var(--brand-alt)] font-semibold mb-2">
                      Outcome
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {cs.outcome}
                    </p>
                  </div>
                  <div className="rounded-xl bg-[var(--brand-accent)]/5 border border-[var(--brand-accent)]/10 p-5">
                    <h3 className="text-sm uppercase tracking-wider text-[var(--brand-alt)] font-semibold mb-2">
                      Key Takeaway
                    </h3>
                    <p className="text-white font-medium leading-relaxed">
                      {cs.takeaway}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </SectionWrapper>
        );
      })}

      {/* Bridge CTA */}
      <SectionWrapper>
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready for Results Like These?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Every case above started with a single conversation. Let&apos;s have yours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/apply" size="lg">
              {ctaCopy.primary}
            </CTAButton>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
