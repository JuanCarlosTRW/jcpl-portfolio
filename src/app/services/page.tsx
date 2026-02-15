import { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { serviceTiers, ctaCopy, servicesComparison, servicesFitGuidance } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTAButton from "@/components/ui/CTAButton";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = buildMetadata({
  title: "Services — Growth Systems for Service Businesses",
  description:
    "Three clear service tiers to get you online, fill your calendar, and dominate your local market. Foundation, Growth, and Scale packages.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper className="pt-32 md:pt-40">
        <AnimatedSection className="text-center max-w-3xl mx-auto">
          <SectionLabel label="Services" className="mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Choose the{" "}
            <span className="gradient-text">Growth System</span>{" "}
            That Fits Your Stage
          </h1>
          <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Whether you&apos;re building your first online presence or scaling
            an existing lead machine, there&apos;s a clear path forward.
          </p>
        </AnimatedSection>
      </SectionWrapper>

      {/* Tiers */}
      <SectionWrapper>
        <div className="grid gap-8 lg:grid-cols-3">
          {serviceTiers.map((tier, i) => {
            const fitData = servicesFitGuidance[tier.name];
            return (
              <AnimatedSection key={tier.name} delay={0.1 * i}>
                <div
                  className={`relative gradient-border rounded-2xl bg-[var(--bg-surface)] p-8 h-full flex flex-col transition-all duration-300 hover:bg-[var(--bg-elevated)] ${
                    tier.featured
                      ? "ring-2 ring-[var(--brand-accent)]/30 shadow-[0_0_40px_rgba(127,95,255,0.1)]"
                      : ""
                  }`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--brand-accent)] px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white">{tier.name}</h3>
                    <p className="mt-1 text-sm text-[var(--brand-alt)] font-medium">
                      {tier.tagline}
                    </p>
                  </div>

                  <div className="mb-6 rounded-xl bg-white/[0.03] border border-white/5 p-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-1">
                      Best For
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tier.bestFor}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-6 flex-1">
                    {tier.deliverables.map((d, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--brand-accent)] shrink-0" />
                        <span className="text-sm text-[var(--text-secondary)]">{d}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--text-muted)]">Timeline:</span>
                      <span className="text-white font-medium">
                        {tier.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6 rounded-xl bg-[var(--brand-accent)]/5 border border-[var(--brand-accent)]/10 p-4">
                    <p className="text-xs uppercase tracking-wider text-[var(--brand-alt)] mb-1">
                      Business Impact
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tier.impact}
                    </p>
                  </div>

                  {/* Fit guidance */}
                  {fitData && (
                    <div className="mb-6 space-y-3">
                      <div className="rounded-lg bg-green-500/5 border border-green-500/10 p-3">
                        <p className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-2">✓ Best Fit</p>
                        <ul className="space-y-1">
                          {fitData.bestFit.map((item, j) => (
                            <li key={j} className="text-xs text-[var(--text-secondary)]">• {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-lg bg-red-500/5 border border-red-500/10 p-3">
                        <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">✗ Not Ideal If</p>
                        <ul className="space-y-1">
                          {fitData.notFit.map((item, j) => (
                            <li key={j} className="text-xs text-[var(--text-secondary)]">• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  <CTAButton
                    href={`/apply?tier=${encodeURIComponent(tier.name)}`}
                    variant={tier.featured ? "primary" : "secondary"}
                    size="lg"
                    className="w-full text-center"
                  >
                    {tier.cta}
                  </CTAButton>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </SectionWrapper>

      {/* Comparison Table */}
      <SectionWrapper className="bg-[var(--bg-surface)]/50">
        <AnimatedSection className="max-w-4xl mx-auto">
          <SectionLabel label="Compare" className="mb-6 text-center" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-[var(--border-soft)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--bg-elevated)]">
                  {servicesComparison.headers.map((h, i) => (
                    <th key={i} className={`px-4 py-3 font-semibold ${i === 0 ? "text-left text-[var(--text-muted)]" : "text-center text-white"}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {servicesComparison.rows.map((row, i) => (
                  <tr key={i} className="border-t border-[var(--border-soft)]">
                    <td className="px-4 py-3 text-[var(--text-muted)] font-medium">{row.label}</td>
                    {row.values.map((v, j) => (
                      <td key={j} className="px-4 py-3 text-center text-[var(--text-secondary)]">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>
      </SectionWrapper>

      <FinalCTA />
    </>
  );
}
