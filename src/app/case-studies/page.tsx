import { caseStudiesContent } from "@/lib/caseStudiesContent";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
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
        {/* Hero: Unicorn Studio WebGL Scene */}
        <div className="mb-10">
          <CaseStudiesHero />
        </div>
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
