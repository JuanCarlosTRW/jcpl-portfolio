import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies, caseStudyMeta, ctaCopy } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Proven Results for Service Businesses",
  description:
    "$20K generated in month one for an RV rental client. Premium barbershop websites delivered. See the proof.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-32 md:pt-40">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <SectionLabel label="Case Studies" className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Real Clients. Real{" "}
            <span className="gradient-text">Results</span>.
          </h1>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Every project below represents a real business that needed more
            clients — and got them through a systemized approach.
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Cases */}
      {caseStudies.map((cs, i) => {
        const meta = caseStudyMeta[cs.slug];
        return (
          <SectionWrapper
            key={cs.slug}
            className={i % 2 === 1 ? "bg-[var(--bg-surface)]/50" : ""}
          >
            {/* Header */}
            <AnimatedSection className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-[var(--brand-accent)]/10 border border-[var(--brand-accent)]/20 px-3 py-1 text-xs font-semibold text-[var(--brand-alt)]">
                  {cs.industry}
                </span>
                {cs.tags.map((tag) => (
                  <span
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
