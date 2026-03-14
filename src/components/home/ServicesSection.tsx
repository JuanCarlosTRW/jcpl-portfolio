"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { trackEvent } from "@/lib/analytics";

const SYSTEM_GROUPS = [
  {
    seq: "01",
    label: "ATTRACT",
    items: [
      { name: "Google Ads", desc: "High-intent buyers, captured first" },
      { name: "Local SEO", desc: "Ranking where your market searches" },
      { name: "GEO / AI Search", desc: "Visible in ChatGPT and AI answers" },
    ],
    borderStyle: "1px solid rgba(212, 168, 83, 0.2)",
    bg: "#181410",
    highlighted: false,
  },
  {
    seq: "02",
    label: "CONVERT",
    items: [
      { name: "Conversion Website", desc: "Pages that turn visits into calls" },
      { name: "Conversion Copy", desc: "Language written to close" },
      { name: "AI Voice Agent", desc: "Every call answered, 24/7" },
    ],
    borderStyle: "2px solid #D4A853",
    bg: "#1E1A14",
    highlighted: true,
  },
  {
    seq: "03",
    label: "COMPOUND",
    items: [
      { name: "Weekly Optimization", desc: "Continuous performance testing" },
      { name: "Monthly Reporting", desc: "Clear revenue and ROI tracking" },
      { name: "Expansion Layers", desc: "New channels as your market grows" },
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
            Not six separate services. One connected acquisition system. Each layer feeds the next. The longer it runs, the cheaper each call gets.
          </p>
        </div>

        {/* Three-column system architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
                        color: "#5E5650",
                        marginTop: 3,
                        lineHeight: 1.45,
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
        <div className="text-center mt-9">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 transition-colors"
            style={{ fontSize: "0.8125rem", color: "#A69D8D" }}
            onClick={() => trackEvent("services_link_clicked")}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#D2C9B8";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#A69D8D";
            }}
          >
            See the full system
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
