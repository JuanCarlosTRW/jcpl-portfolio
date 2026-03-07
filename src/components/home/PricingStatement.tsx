"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Check, Calendar, ShieldCheck } from "lucide-react";

const FEATURES = [
  "Conversion website built to close",
  "Google Ads targeting buyers with intent",
  "Local SEO and location pages",
  "AI voice agent for after-hours calls",
  "Weekly optimization loop",
  "Monthly revenue report",
  "Copy engineered to convert",
  "Full asset ownership — you keep everything",
];

const FOUNDER_IMAGE =
  "https://static.wixstatic.com/media/62f926_880aac26b23148b180643d3682eadd6b~mv2.jpeg";

export default function PricingStatement() {
  return (
    <section
      className="px-4"
      style={{
        background: "#0a0f1e",
        paddingTop: "clamp(80px, 10vw, 140px)",
        paddingBottom: "clamp(80px, 10vw, 140px)",
      }}
    >
      <div className="mx-auto max-w-[960px]">
        <p
          className="text-center uppercase mb-4"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#f97316",
          }}
        >
          PRICING
        </p>

        <AnimatedSection direction="up" className="text-center mb-12">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            One partnership.{" "}
            <span
              className="italic"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Serious results.
            </span>
          </h2>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Left card — Visual/emotional */}
          <AnimatedSection
            direction="left"
            delay={0}
            className="flex-1 min-w-0"
          >
            <div
              className="relative rounded-2xl overflow-hidden pricing-gradient-mesh"
              style={{ minHeight: 480 }}
            >
              {/* Grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
                  opacity: 0.04,
                }}
              />

              <div className="relative z-0 p-6 md:p-8 flex flex-col items-center">
                <div className="relative w-32 h-44 md:w-40 md:h-52 shrink-0 mb-6 pricing-float-photo">
                  <div
                    className="relative w-full h-full"
                    style={{ transform: "rotate(2deg)" }}
                  >
                    <Image
                      src={FOUNDER_IMAGE}
                      alt="Juan — Client Growth founder"
                      fill
                      className="object-cover rounded-lg"
                      sizes="160px"
                      style={{
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                      }}
                    />
                  </div>
                </div>
                <p
                  className="uppercase mb-1"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#f97316",
                  }}
                >
                  Apply today
                </p>
                <p
                  className="font-bold text-white mb-2"
                  style={{ fontSize: "2rem" }}
                >
                  Join Client Growth
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block w-2 h-2 rounded-full availability-pulse-dot"
                    style={{ backgroundColor: "#86efac" }}
                  />
                  <span
                    className="font-semibold"
                    style={{ fontSize: "0.8rem", color: "#86efac" }}
                  >
                    1 spot open
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right card — Price and features */}
          <AnimatedSection
            direction="right"
            delay={0.15}
            className="flex-1 min-w-0"
          >
            <div
              className="rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-[rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.05)]"
              style={{
                minHeight: 480,
                background: "#070c18",
                border: "1px solid #1e293b",
              }}
            >
              <div className="flex justify-end mb-4">
                <span
                  className="text-[0.6rem] uppercase"
                  style={{
                    letterSpacing: "0.1em",
                    color: "#64748b",
                    border: "1px solid #1e293b",
                    borderRadius: 4,
                    padding: "3px 8px",
                  }}
                >
                  BY APPLICATION ONLY
                </span>
              </div>

              <h3
                className="mb-6"
                style={{
                  fontSize: "1.1rem",
                  color: "#94a3b8",
                  fontWeight: 500,
                }}
              >
                Growth Partnership
              </h3>

              <div
                className="mb-6"
                style={{ borderTop: "1px dashed #1e293b" }}
              />

              <div className="mb-2">
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
                    color: "#64748b",
                    fontWeight: 400,
                  }}
                >
                  /month
                </span>
              </div>

              <p
                className="mb-5 italic"
                style={{ fontSize: "0.75rem", color: "#64748b" }}
              >
                Most partnerships scale to $6,000/month based on scope.
              </p>

              <span
                className="inline-block uppercase mb-3"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  background: "#1e3a5f",
                  color: "#93c5fd",
                  borderRadius: 4,
                  padding: "3px 10px",
                  width: "fit-content",
                }}
              >
                INCLUDED
              </span>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="shrink-0 mt-0.5"
                      size={18}
                      style={{ color: "#f97316" }}
                    />
                    <span
                      style={{
                        fontSize: "0.85rem",
                        color: "#cbd5e1",
                      }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto space-y-2">
                <Link
                  href="/apply"
                  className="pricing-cta-shine flex items-center justify-center w-full py-4 rounded-lg font-bold text-white text-base transition-all duration-300 hover:bg-[#ea6c0a] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(249,115,22,0.3)]"
                  style={{ backgroundColor: "#f97316" }}
                >
                  Apply for Growth Partnership →
                </Link>
                <p
                  className="text-center"
                  style={{ fontSize: "0.72rem", color: "#64748b" }}
                >
                  Short application. I respond within one business day.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Risk reversals */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-8">
          <div
            className="flex flex-col items-center text-center max-w-[280px]"
            style={{ gap: 8 }}
          >
            <Calendar size={20} style={{ color: "#f97316" }} />
            <p
              className="font-semibold text-white"
              style={{ fontSize: "0.9rem" }}
            >
              No long-term contracts
            </p>
            <p
              style={{ fontSize: "0.8rem", color: "#64748b" }}
            >
              90-day initial term. Month-to-month after that.
            </p>
          </div>
          <div
            className="flex flex-col items-center text-center max-w-[280px]"
            style={{ gap: 8 }}
          >
            <ShieldCheck size={20} style={{ color: "#f97316" }} />
            <p
              className="font-semibold text-white"
              style={{ fontSize: "0.9rem" }}
            >
              No payment before clarity
            </p>
            <p
              style={{ fontSize: "0.8rem", color: "#64748b" }}
            >
              I&apos;ll tell you on the call if I can&apos;t move the needle —
              before you pay anything.
            </p>
          </div>
        </div>

        <Link
          href="/services"
          className="block text-center"
          style={{ fontSize: "0.75rem", color: "#475569" }}
        >
          See full pricing breakdown and tier details →
        </Link>
      </div>
    </section>
  );
}
