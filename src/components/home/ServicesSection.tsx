"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SERVICES = [
  "Conversion Website",
  "Google Ads",
  "Local SEO",
  "GEO / AI Search",
  "AI Voice Agent",
  "Conversion Copy",
];

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="py-14 border-t border-[#2A2318]"
      style={{ background: "#0D0B09" }}
    >
      <div className="max-w-[1200px] mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p
          className="uppercase mb-6"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "#756D63",
            fontWeight: 500,
          }}
        >
          What the system includes
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {SERVICES.map((item) => (
            <span
              key={item}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                color: "#D2C9B8",
                background: "rgba(34,29,23,0.8)",
                border: "1px solid #2A2318",
              }}
            >
              {item}
            </span>
          ))}
        </div>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 mt-6 text-sm transition-colors"
          style={{ color: "#756D63" }}
          onMouseOver={(e) => { e.currentTarget.style.color = "#D2C9B8"; }}
          onMouseOut={(e) => { e.currentTarget.style.color = "#756D63"; }}
        >
          See the full breakdown on /services →
        </Link>
      </div>
    </SectionWrapper>
  );
}
