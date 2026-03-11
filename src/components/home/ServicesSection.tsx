"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SYSTEM_GROUPS = [
  {
    label: "ATTRACT",
    items: ["Google Ads", "Local SEO", "GEO / AI Search"],
    borderStyle: "1px solid rgba(212, 168, 83, 0.2)",
  },
  {
    label: "CONVERT",
    items: ["Conversion Website", "Conversion Copy", "AI Voice Agent"],
    borderStyle: "2px solid #D4A853",
    highlighted: true,
  },
  {
    label: "COMPOUND",
    items: ["Weekly Optimization", "Monthly Reporting", "Expansion Layers"],
    borderStyle: "1px solid rgba(212, 168, 83, 0.2)",
  },
];

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="services"
      className="border-t border-[#2A2318]"
      style={{
        background: "#0D0B09",
        paddingTop: "clamp(56px, 8vw, 96px)",
        paddingBottom: "clamp(56px, 8vw, 96px)",
      }}
    >
      <div className="max-w-[900px] mx-auto px-4 sm:px-6">
        {/* Section label + heading */}
        <div className="text-center mb-12">
          <p
            className="uppercase mb-4"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "#D4A853",
            }}
          >
            THE ACQUISITION SYSTEM
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            What drives qualified calls.
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "#A69D8D",
              maxWidth: 460,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Not six separate services. One connected acquisition system built
            to compound over time.
          </p>
        </div>

        {/* Three-column system architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SYSTEM_GROUPS.map((group) => (
            <div
              key={group.label}
              className="rounded-[14px] p-7"
              style={{
                background: "#181410",
                border: "1px solid #2A2318",
                borderTop: group.borderStyle,
              }}
            >
              <p
                className="uppercase mb-5"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  color: group.highlighted ? "#D4A853" : "#756D63",
                  fontWeight: 600,
                }}
              >
                {group.label}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.9rem",
                      color: group.highlighted ? "#D2C9B8" : "#A69D8D",
                      lineHeight: 1.4,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="inline-block transition-colors"
            style={{ fontSize: "0.8rem", color: "#4A4540" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#756D63";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#4A4540";
            }}
          >
            Full system architecture → /services
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
