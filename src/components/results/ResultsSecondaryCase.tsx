"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { CaseStudy } from "@/content/caseStudies";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function ResultsSecondaryCase({ cs }: { cs: CaseStudy }) {
  const { locale } = useLocale();
  const rs = translations[locale].results.secondary;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = sectionRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        observer.disconnect();
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const headlineParts = rs.headline.split("\n");

  return (
    <section
      ref={sectionRef}
      className="py-14 md:py-20"
      style={{
        background: "#0D0B09",
        borderTop: "1px solid rgba(212,168,83,0.07)",
      }}
    >
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.3)]">
            {rs.sectionMarker}
          </span>
          <span
            className="flex-1 h-px"
            style={{ background: "rgba(212,168,83,0.1)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
          {/* Left: Evidence content */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853] block mb-3">
              {cs.industry}
            </span>
            <h2 className="text-[clamp(26px,3.2vw,38px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.02em]">
              {headlineParts[0]}
              {headlineParts[1] && (
                <>
                  <br className="hidden md:block" /> {headlineParts[1]}
                </>
              )}
            </h2>
            <div className="mb-8 max-w-[480px]">
              {cs.situation.split("\n\n").map((para, i) => (
                <p key={i} className="text-[15px] text-[#D2C9B8] leading-[1.75] mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>

            {/* Calendar proof image */}
            <div
              className="mb-8 rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(212,168,83,0.4)", borderRadius: 8 }}
            >
              <img
                src="/images/proof/elite-calendar.png"
                alt="Fully booked calendar. Elite Barbershop, Montreal. 90 days after system launch."
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <p
                className="px-4 py-3 text-[12px]"
                style={{ color: "rgba(255,255,255,0.4)", background: "#0D0B09" }}
              >
                Fully booked calendar. Elite Barbershop, Montreal. 90 days after system launch.
              </p>
            </div>

            {/* What was built */}
            <div className="mb-8">
              <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-4">
                {rs.infrastructureBuilt}
              </p>
              <ul className="space-y-2.5">
                {cs.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex items-start gap-3 text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.5]"
                  >
                    <span className="text-[#D4A853] mt-[1px] flex-shrink-0 select-none">
                      —
                    </span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer row */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-[rgba(212,168,83,0.3)] bg-[rgba(212,168,83,0.06)]">
                <svg
                  className="w-3.5 h-3.5 text-[#D4A853]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[12px] font-semibold text-[#D4A853]">
                  {rs.verified}
                </span>
              </div>
              <Link
                href={`/results/${cs.caseStudySlug}`}
                className="text-[14px] font-semibold text-[rgba(255,255,255,0.55)] hover:text-[#D4A853] transition-colors"
              >
                {rs.viewCaseStudy}
              </Link>
            </div>
          </div>

          {/* Right: Outcome panel */}
          <div
            className="rounded-2xl border p-7"
            style={{
              borderColor: "rgba(212,168,83,0.15)",
              background: "#131009",
            }}
          >
            <p className="text-[11px] uppercase tracking-[0.12em] text-[rgba(255,255,255,0.3)] mb-6">
              {rs.outcome}
            </p>

            {/* Primary metric — dominant */}
            <div
              className="pb-5 mb-5 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="text-[52px] font-extrabold text-white tracking-[-0.03em] leading-none mb-2">
                90
              </div>
              <div className="text-[14px] text-[#D2C9B8]">{rs.newClients}</div>
            </div>

            {/* Secondary metric */}
            <div
              className="pb-5 mb-5 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <div className="text-[28px] font-extrabold text-white tracking-[-0.02em] leading-none mb-1">
                90 {rs.days}
              </div>
              <div className="text-[12px] text-[rgba(255,255,255,0.4)]">
                {rs.timeframe}
              </div>
            </div>

            {/* Commercial context note */}
            <p className="text-[13px] text-[rgba(255,255,255,0.4)] leading-[1.65]">
              {rs.contextNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
