"use client";

import CTAButton from "@/components/ui/CTAButton";
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
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start">
          {/* Left: Conversion framing */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#D4A853] mb-5">
              Next step
            </p>
            <h2 className="text-[clamp(26px,3.5vw,38px)] font-extrabold text-white leading-[1.1] mb-5 tracking-[-0.02em]">
              If the evidence looks right,
              <br className="hidden md:block" /> the next step is a
              conversation.
            </h2>
            <p className="text-[16px] text-[#D2C9B8] leading-[1.7] max-w-[480px] mb-6">
              Partnerships are selective. The first call is diagnostic — it is
              about whether the fit is real, not a sales pitch. No commitment
              required, no deck.
            </p>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {[
                "Response within 24 hours",
                "No commitment to apply",
                "Founder-led, not an agency intake",
              ].map((item) => (
                <span
                  key={item}
                  className="text-[13px] text-[rgba(255,255,255,0.4)] flex items-center gap-2"
                >
                  <span className="text-[#D4A853] select-none">—</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: CTAs */}
          <div className="flex flex-col items-start lg:items-end gap-4 lg:pt-14">
            <CTAButton href="/apply" size="lg">
              Apply for a strategy call
            </CTAButton>
            <Link
              href="/services"
              className="text-[13px] text-[rgba(255,255,255,0.4)] hover:text-white transition-colors"
            >
              How the acquisition system works →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
