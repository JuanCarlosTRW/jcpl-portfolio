"use client";

import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";

export default function ResultsCTA() {
  return (
    <section
      className="py-20 md:py-28 text-center"
      style={{ background: "#1A1510" }}
    >
      <div className="max-w-[640px] mx-auto px-6">
        <h2 className="text-[clamp(28px,3.5vw,40px)] font-extrabold text-white leading-[1.15] mb-5 tracking-[-0.02em]">
          Ready to see results like these?
        </h2>
        <p className="text-[17px] text-[#D2C9B8] leading-[1.7] mb-8">
          Apply for a partnership. Response within 24 hours. No commitment required.
        </p>
        <CTAButton href="/apply" size="lg">
          Apply Now
        </CTAButton>
      </div>
    </section>
  );
}
