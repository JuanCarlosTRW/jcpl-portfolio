"use client";

import Link from "next/link";

export default function ResultsCTA() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "#1A1510",
        borderTop: "1px solid rgba(212,168,83,0.07)",
      }}
    >
      <div className="max-w-[680px] mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.15] mb-6 tracking-[-0.02em]">
          The results are documented. The system is the same one I&apos;d build for you.
        </h2>

        {/* Body */}
        <p className="text-[16px] text-[#D2C9B8] leading-[1.7] mb-8 max-w-[560px] mx-auto">
          If you&apos;re generating consistent revenue and your pipeline depends on referrals, that&apos;s the problem I fix. One spot is open this quarter. Book the diagnostic call. I&apos;ll tell you exactly what it&apos;s worth before you pay anything.{" "}
          <span style={{ color: "#D4A853" }}>Before you pay anything.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/apply"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold w-full sm:w-auto"
            style={{ background: "#D4A853", color: "#0A0F1E" }}
          >
            Book a Diagnostic Call &rarr;
          </Link>
          <Link
            href="/services"
            className="text-[13px] text-[rgba(255,255,255,0.4)] hover:text-[#D4A853] transition-colors"
          >
            How the acquisition system works &rarr;
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-8">
          {[
            "\u26A1 Response within 24 hours",
            "\uD83D\uDD12 No commitment to apply",
            "Founder-led, not an agency intake",
          ].map((item, i) => (
            <span key={i} className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-2">
              {i > 0 && (
                <span
                  className="hidden sm:inline-block"
                  style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)" }}
                />
              )}
              {item}
            </span>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[0.75rem] text-center mx-auto max-w-[480px]" style={{ color: "rgba(255,255,255,0.2)" }}>
          Results shown are from real client engagements. Revenue figures are client-reported. Your results will vary based on market, offer, and execution.
        </p>
      </div>
    </section>
  );
}
