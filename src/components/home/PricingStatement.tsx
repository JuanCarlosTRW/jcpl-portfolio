"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const JUAN_IMG_SRC = "/images/juan-headshot.jpeg";

export default function PricingStatement() {
  const { locale, lp } = useLocale();
  const p = translations[locale].homepage.pricing;

  const FEATURES_ACQUISITION = [p.item1, p.item2, p.item3, p.item4];
  const FEATURES_OWNERSHIP = [p.item5, p.item6, p.item7, p.item8];
  const ASSURANCES = [
    { title: p.term1Title, body: p.term1Sub },
    { title: p.term2Title, body: p.term2Sub },
    { title: p.term3Title, body: p.term3Sub },
  ];

  return (
    <section
      className="px-4"
      style={{
        background: "#131009",
        paddingTop: "clamp(64px, 10vw, 140px)",
        paddingBottom: "clamp(64px, 10vw, 140px)",
      }}
    >
      <div className="mx-auto max-w-[960px]">
        {/* Section label */}
        <p
          className="text-center uppercase mb-4"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#D4A853",
          }}
        >
          {p.eyebrow}
        </p>

        {/* Section h2 */}
        <AnimatedSection direction="up" className="text-center mb-4">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(2.2rem, 5.2vw, 4.4rem)" }}
          >
            {p.h2.split(". ")[0]}.{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {p.h2.split(". ")[1]}
            </span>
          </h2>
        </AnimatedSection>

        {/* Section framing line */}
        <AnimatedSection direction="up" delay={0.05} className="text-center mb-12">
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#A69D8D",
              maxWidth: 420,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            {p.sub}
          </p>
        </AnimatedSection>

        {/* Two-column core zone */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left — Founder trust panel */}
          <AnimatedSection direction="left" delay={0} className="flex-1 min-w-0 md:flex-none md:w-[43%]">
            <div
              className="relative rounded-2xl overflow-hidden pricing-left-card"
              style={{ minHeight: 520 }}
            >
              {/* Photo */}
              <div
                className="founder-photo-wrapper pricing-photo-wrapper absolute inset-0 z-0"
                style={{ position: "absolute" }}
              >
                <Image
                  src={JUAN_IMG_SRC}
                  alt="Juan Carlos Portillo-Laflamme"
                  fill
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="block w-full h-full object-cover object-top"
                  style={{ borderRadius: 16, filter: "brightness(0.87)" }}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(26,21,16,0.4) 68%, #1A1510 100%)",
                }}
              />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 z-[2] p-8">
                <p
                  className="uppercase mb-2"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    color: "#D4A853",
                  }}
                >
                  {p.byApplication}
                </p>
                <p
                  className="font-extrabold text-white mb-1"
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                    lineHeight: 1.2,
                  }}
                >
                  {p.workDirectly}
                </p>
                <p
                  className="mb-5"
                  style={{
                    fontSize: "0.875rem",
                    color: "#D2C9B8",
                    lineHeight: 1.6,
                  }}
                >
                  {p.noAccountManagers}
                </p>
                <div className="flex items-center mb-5" style={{ gap: 8 }}>
                  <span
                    className="inline-block rounded-full availability-pulse-dot"
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#22c55e",
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: "0.8rem", color: "#A69D8D" }}>
                    {p.spotOpen}
                  </span>
                </div>
                <Link
                  href={lp("/apply")}
                  className="flex items-center justify-center w-full rounded-lg font-semibold py-4 transition-colors"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(212, 168, 83, 0.35)",
                    color: "#D4A853",
                    fontSize: "0.9rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = "#D4A853";
                    e.currentTarget.style.color = "#F5F0E8";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(212, 168, 83, 0.35)";
                    e.currentTarget.style.color = "#D4A853";
                  }}
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Pricing and scope */}
          <AnimatedSection
            direction="right"
            delay={0.15}
            className="flex-1 min-w-0"
          >
            <div
              className="rounded-2xl p-8 flex flex-col depth-card"
              style={{
                minHeight: 520,
                background: "#1E1A14",
                border: "1px solid #2A2318",
                borderTop: "3px solid #D4A853",
              }}
            >
              {/* Card label */}
              <p
                className="uppercase mb-3"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  color: "#D4A853",
                }}
              >
                {p.growthPartnership}
              </p>

              {/* Price */}
              <div className="mb-2 stat-glow" style={{ position: "relative" }}>
                <span
                  className="font-extrabold text-white"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                  $2,500
                </span>
                <span
                  className="align-middle ml-1"
                  style={{
                    fontSize: "1rem",
                    color: "#756D63",
                    fontWeight: 400,
                  }}
                >
                  /month
                </span>
              </div>

              {/* Subcopy */}
              <p
                className="mb-5"
                style={{
                  fontSize: "0.8rem",
                  color: "#A69D8D",
                  lineHeight: 1.55,
                }}
              >
                {p.description}
              </p>

              {/* Divider */}
              <div
                className="mb-6"
                style={{ borderTop: "1px solid #2A2318" }}
              />

              {/* Grouped features */}
              <div className="mb-6 space-y-4">
                {/* Acquisition System */}
                <div>
                  <p
                    className="uppercase mb-3"
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      color: "#756D63",
                    }}
                  >
                    {p.acquisitionSystem}
                  </p>
                  <ul className="space-y-2">
                    {FEATURES_ACQUISITION.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className="shrink-0 mt-0.5"
                          size={14}
                          style={{ color: "#D4A853" }}
                        />
                        <span
                          style={{ fontSize: "0.85rem", color: "#D2C9B8" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ownership & Optimization */}
                <div>
                  <p
                    className="uppercase mb-3"
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.1em",
                      color: "#756D63",
                    }}
                  >
                    {p.ownershipOptimization}
                  </p>
                  <ul className="space-y-2">
                    {FEATURES_OWNERSHIP.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          className="shrink-0 mt-0.5"
                          size={14}
                          style={{ color: "#D4A853" }}
                        />
                        <span
                          style={{ fontSize: "0.85rem", color: "#D2C9B8" }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-auto space-y-2">
                <Link
                  href="#book-call"
                  className="flex items-center justify-center w-full py-4 rounded-lg font-semibold text-[#0A0E1A] text-base cta-primary cta-button"
                  style={{ backgroundColor: "#D4A853" }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#C49A2A";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "#D4A853";
                  }}
                >
                  {p.cta}
                </Link>
                <p
                  className="text-center"
                  style={{ fontSize: "0.72rem", color: "#756D63" }}
                >
                  {p.shortApplication}
                </p>
                <p className="text-center" style={{ paddingTop: 4 }}>
                  <Link
                    href={lp("/services")}
                    style={{
                      fontSize: "0.72rem",
                      color: "#4E4845",
                      letterSpacing: "-0.004em",
                      textDecoration: "none",
                      transition: "color 180ms ease",
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.color = "#A69D8D"; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = "#4E4845"; }}
                  >
                    {p.seeInvestment}
                  </Link>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Confidence strip */}
        <div
          style={{
            borderTop: "1px solid #2A2318",
            marginTop: "clamp(28px, 4vw, 40px)",
            paddingTop: "clamp(28px, 4vw, 40px)",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {ASSURANCES.map((item, i) => (
              <AnimatedSection
                key={item.title}
                direction="up"
                delay={0.1 + i * 0.07}
              >
                <div className="flex flex-col" style={{ gap: 4 }}>
                  <p
                    className="font-semibold text-white"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "#A69D8D",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
