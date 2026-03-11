"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SYSTEM_GROUPS = [
  {
    seq: "01",
    label: "ATTRACT",
    items: [
      { name: "Google Ads", desc: "Buyers with intent" },
      { name: "Local SEO", desc: "Ranking where they search" },
      { name: "GEO / AI Search", desc: "AI search visibility" },
    ],
    borderStyle: "1px solid rgba(212, 168, 83, 0.2)",
    bg: "#181410",
    highlighted: false,
  },
  {
    seq: "02",
    label: "CONVERT",
    items: [
      { name: "Conversion Website", desc: "Built to close" },
      { name: "Conversion Copy", desc: "Language that converts" },
      { name: "AI Voice Agent", desc: "No missed calls" },
    ],
    borderStyle: "2px solid #D4A853",
    bg: "#1E1A14",
    highlighted: true,
  },
  {
    seq: "03",
    label: "COMPOUND",
    items: [
      { name: "Weekly Optimization", desc: "Continuous improvement" },
      { name: "Monthly Reporting", desc: "Full revenue clarity" },
      { name: "Expansion Layers", desc: "Scale when ready" },
    ],
    borderStyle: "1px solid rgba(212, 168, 83, 0.2)",
    bg: "#181410",
    highlighted: false,
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
        <div className="text-center mb-10">
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
                background: group.bg,
                border: "1px solid #2A2318",
                borderTop: group.borderStyle,
              }}
            >
              {/* Sequence + label */}
              <p
                className="uppercase mb-6"
                style={{
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "#4A4540", marginRight: 7 }}>
                  {group.seq}
                </span>
                <span
                  style={{
                    color: group.highlighted ? "#D4A853" : "#756D63",
                  }}
                >
                  {group.label}
                </span>
              </p>

              {/* Items with micro-descriptors */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {group.items.map((item, idx) => (
                  <li
                    key={item.name}
                    style={{
                      marginBottom:
                        idx < group.items.length - 1 ? 14 : 0,
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.9rem",
                        color: group.highlighted ? "#D2C9B8" : "#A69D8D",
                        lineHeight: 1.3,
                      }}
                    >
                      {item.name}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontSize: "0.72rem",
                        color: "#4A4540",
                        marginTop: 2,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.desc}
                    </span>
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
            style={{ fontSize: "0.8rem", color: "#756D63" }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#A69D8D";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#756D63";
            }}
          >
            Full system architecture → /services
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
