import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import {
  serviceTiers,
  ctaCopy,
  servicesHero,
} from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import ServiceCard from "@/components/services/ServiceCard";
import ComparisonTable from "@/components/services/ComparisonTable";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import "@/styles/services.css";

export const metadata: Metadata = buildMetadata({
  title: "Services — Growth Systems for Service Businesses",
  description:
    "Three clear service tiers to get you online, fill your calendar, and dominate your local market. Foundation, Growth, and Scale packages.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <SectionWrapper className="pt-32 md:pt-40">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <SectionLabel label={servicesHero.label} className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {servicesHero.headline.replace(servicesHero.headlineAccent, "").trim()}{" "}
            <span className="gradient-text">{servicesHero.headlineAccent}</span>
          </h1>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {servicesHero.subheadline}
          </p>

          {/* Hero CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton
              href={ctaCopy.href}
              size="lg"
              eventName="services_hero_cta_click"
            >
              {ctaCopy.primary}
            </CTAButton>
            <CTAButton
              href="#services-cta"
              variant="ghost"
              size="md"
              eventName="services_hero_cta_click"
            >
              See how it works ↓
            </CTAButton>
          </div>

          {/* Trust line */}
          <p className="mt-5 text-xs text-[var(--text-muted)] tracking-wide">
            {servicesHero.trustLine}
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* ═══ OFFER CARDS ═══ */}
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceTiers.map((tier, i) => (
            <ServiceCard key={tier.name} tier={tier} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ COMPARISON TABLE ═══ */}
      <SectionWrapper variant="surface">
        <div className="max-w-4xl mx-auto">
          <ComparisonTable />
        </div>
      </SectionWrapper>

      {/* ═══ FINAL CTA + GUARANTEES + TRUST ═══ */}
      <ServicesFinalCTA />
    </>
  );
}
