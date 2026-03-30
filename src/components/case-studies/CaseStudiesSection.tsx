"use client";

import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import ResultsFlagshipCaseStudy from "@/components/results/ResultsFlagshipCaseStudy";
import ResultsSecondaryCase from "@/components/results/ResultsSecondaryCase";
import ResultsPortfolioSection from "@/components/results/ResultsPortfolioSection";
import ResultsCTA from "@/components/results/ResultsCTA";

const TRIPLE_W_ID = "triple-w-rentals";
const ELITE_ID = "elite-barbershop";
const BUILDING_IDS = ["absolute-painting", "centre-dentaire-saint-elzear"];

/* ── Section 2: Case study card grid (replaces carousel) ── */
function CaseStudyCardGrid() {
  const cards = [
    {
      label: "LEAD PARTNERSHIP",
      niche: "RV RENTAL, TEXAS",
      client: "Triple W Rentals",
      stat: "$41,085",
      subStats: "46x ROAS · $900 ad spend · 30 days",
      slug: "triple-w-rentals",
      siteUrl: null as string | null,
    },
    {
      label: "FEATURED PARTNERSHIP",
      niche: "PREMIUM BARBERSHOP, MONTREAL",
      client: "Elite Barbershop",
      stat: "90",
      subStats: "New clients · 90 days · Built from zero",
      slug: "elite-barbershop",
      siteUrl: "https://elitebyhadi.com/fr/",
    },
    {
      label: "RECENTLY DELIVERED",
      niche: "BARBERSHOP, MONTREAL",
      client: "Culture Barbershop",
      stat: "Page 1",
      subStats: "Google · Under 60 days · Montreal market",
      slug: "culture-barbershop",
      siteUrl: "https://culturemtl.ca",
    },
  ];

  return (
    <section className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      <div className="max-w-[1120px] mx-auto px-6">
        <p className="text-[11px] uppercase tracking-[0.16em] mb-3" style={{ color: "#D4A853" }}>
          CASE STUDIES
        </p>
        <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.1] mb-12 tracking-[-0.02em]">
          Real Results. Real Businesses.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.slug}
              className="rounded-xl overflow-hidden"
              style={{ background: "#131009", border: "1px solid rgba(212,168,83,0.12)" }}
            >
              <div className="p-6">
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: "#D4A853" }}>
                  {card.label}
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {card.niche}
                </p>
                <h3 className="text-lg font-bold text-white mb-4">{card.client}</h3>
                <p className="text-[40px] font-extrabold text-white tracking-[-0.03em] leading-none mb-2">
                  {card.stat}
                </p>
                <p className="text-[13px] mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {card.subStats}
                </p>
                <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 mb-5 border border-[rgba(212,168,83,0.25)] bg-[rgba(212,168,83,0.06)]">
                  <span className="text-[11px] font-semibold" style={{ color: "#D4A853" }}>
                    &#10003; Verified
                  </span>
                </div>
                <div className="flex items-center gap-4 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <Link
                    href={`/results/${card.slug}`}
                    className="text-[13px] font-semibold hover:underline"
                    style={{ color: "#D4A853" }}
                  >
                    View full case study &rarr;
                  </Link>
                  {card.siteUrl && (
                    <a
                      href={card.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] hover:underline"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      Live site &#8599;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 5: Culture Barbershop full case study ── */
function CultureCaseStudy() {
  return (
    <section
      className="py-14 md:py-20"
      style={{ background: "#0D0B09", borderTop: "1px solid rgba(212,168,83,0.07)" }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)]">
            RECENTLY DELIVERED
          </span>
          <span className="flex-1 h-px" style={{ background: "rgba(212,168,83,0.1)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853] block mb-3">
              BARBERSHOP, MONTREAL
            </span>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-white leading-[1.1] mb-3 tracking-[-0.02em]">
              Culture Barbershop
            </h2>
            <p className="text-[15px] text-[#D2C9B8] leading-[1.75] mb-4">
              Page 1 in under 60 days. Montreal market.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Page 1", "SEO", "<60 days Timeline", "Montreal Market"].map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] px-3 py-1 rounded-full"
                  style={{ border: "1px solid rgba(212,168,83,0.2)", color: "rgba(255,255,255,0.5)" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-[15px] text-[#D2C9B8] leading-[1.75] mb-8 max-w-[480px]">
              Culture Barbershop needed a digital presence that matched their identity and reputation in the Montreal market. The engagement focused on building a custom website with strong brand positioning and copy engineered to convert first-time visitors into booked appointments. Local SEO targeting competitive Montreal barbershop searches. Page 1 achieved in under 60 days.
            </p>

            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-4">
                INFRASTRUCTURE BUILT
              </p>
              <ul className="space-y-2.5">
                {[
                  "Custom conversion-engineered website",
                  "Brand positioning and copy",
                  "Mobile-optimized booking flow",
                  "Local SEO targeting Montreal market",
                  "Performance tracking setup",
                ].map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.5]">
                    <span className="text-[#D4A853] mt-[1px] flex-shrink-0">&#8212;</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-[rgba(212,168,83,0.3)] bg-[rgba(212,168,83,0.06)]">
                <span className="text-[12px] font-semibold text-[#D4A853]">&#10003; Verified</span>
              </div>
              <Link
                href="/results/culture-barbershop"
                className="text-[14px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#D4A853] transition-colors"
              >
                View full case study &rarr;
              </Link>
              <a
                href="https://culturemtl.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-[rgba(255,255,255,0.35)] hover:text-[#D4A853] transition-colors"
              >
                Live site &#8599;
              </a>
            </div>
          </div>

          <div
            className="rounded-2xl border p-7"
            style={{ borderColor: "rgba(212,168,83,0.15)", background: "#131009" }}
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-6">OUTCOME</p>
            <div className="pb-5 mb-5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="text-[42px] font-extrabold text-white tracking-[-0.03em] leading-none mb-2">Page 1</div>
              <div className="text-[14px] text-[#D2C9B8]">Google search results</div>
            </div>
            <div className="pb-5 mb-5 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="text-[28px] font-extrabold text-white tracking-[-0.02em] leading-none mb-1">&lt;60 days</div>
              <div className="text-[12px] text-[rgba(255,255,255,0.4)]">Timeline</div>
            </div>
            <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-[1.65]">
              Competitive Montreal barbershop market. Custom website with brand positioning and local SEO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesSection() {
  const flagship = caseStudies.find((c) => c.id === TRIPLE_W_ID);
  const secondary = caseStudies.find((c) => c.id === ELITE_ID);
  const building = caseStudies.filter((c) => BUILDING_IDS.includes(c.id));

  return (
    <>
      {/* Section 2: Card grid (replaces carousel) */}
      <CaseStudyCardGrid />

      {/* Section 3: Triple W full case study */}
      {flagship && <ResultsFlagshipCaseStudy cs={flagship} />}

      {/* Section 4: Elite Barbershop full case study */}
      {secondary && <ResultsSecondaryCase cs={secondary} />}

      {/* Section 5: Culture Barbershop full case study */}
      <CultureCaseStudy />

      {/* Section 6: In the Field (active builds, muted) */}
      <ResultsPortfolioSection recent={[]} building={building} />

      {/* Section 8: Final CTA */}
      <ResultsCTA />

      {/* Disclaimer — single instance, page bottom only */}
      <div
        className="py-10"
        style={{ background: "#1A1510", borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <p className="text-center text-[12px] text-[rgba(255,255,255,0.2)] max-w-[480px] mx-auto px-6 leading-[1.7]">
          Results shown are from real client engagements. Revenue figures are client-reported. Your results will vary based on market, offer, and execution.
        </p>
      </div>
    </>
  );
}
