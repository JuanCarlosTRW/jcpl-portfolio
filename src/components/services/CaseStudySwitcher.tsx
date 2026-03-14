"use client";

const caseStudies = [
  {
    id: "triplew",
    index: "01",
    name: "Triple W Rentals",
    tag: "RV Rental · Texas",
    metric: "$41,085",
    metricLabel: "revenue. 30 days. $900 ad spend.",
    description:
      "Zero presence to regional leader. Site, ads, and AI voice: live in 11 days.",
    deliverables: ["Website", "Google Ads", "AI Voice Agent", "SEO"],
    status: "active" as const,
    link: "/results#triplew",
  },
  {
    id: "elite",
    index: "02",
    name: "Elite Barbershop",
    tag: "Premium Barbershop · Montreal",
    metric: "90",
    metricLabel: "new clients acquired in 90 days",
    description:
      "Top-tier positioning in Montreal. Site, local SEO, and booking flow.",
    deliverables: ["Website", "Local SEO", "Booking Flow"],
    status: "active" as const,
    link: "/results#elite",
  },
  {
    id: "culture",
    index: "03",
    name: "Culture Barbershop",
    tag: "Barbershop · Montreal, QC",
    metric: "Page 1",
    metricLabel: "local SEO. Under 60 days.",
    description:
      "Page 1 for competitive Montreal searches. Calendar fully booked in 3 weeks.",
    deliverables: ["Website", "Local SEO", "Booking System"],
    status: "active" as const,
    link: "/results#culture",
  },
  {
    id: "absolute",
    index: "04",
    name: "Absolute Painting",
    tag: "Painting Contractor · DFW, Texas",
    metric: "Live",
    metricLabel: "system live",
    description:
      "Google Ads targeting high-intent buyers in DFW. Conversion tracking live. Results compiling.",
    deliverables: ["Website", "Google Ads", "Conversion Tracking"],
    status: "building" as const,
    link: "/results#absolute",
  },
  {
    id: "dentaire",
    index: "05",
    name: "Centre Dentaire",
    tag: "Dental Clinic · Quebec",
    metric: "Live",
    metricLabel: "patient acquisition funnel running",
    description:
      "Ads-to-booking funnel for high-value dental services. Tracked cost per lead. Patient acquisition live.",
    deliverables: ["Website", "Ads Funnel", "Booking Flow"],
    status: "building" as const,
    link: "/results#dentaire",
  },
];

export default function CaseStudySwitcher() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20" style={{ background: "#131009" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8" style={{ background: "rgba(212,168,83,0.6)" }} />
          <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "#756D63" }}>
            Client Systems
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-3">
          Every System I Have Built.
        </h2>
        <p className="text-sm mb-10 max-w-[480px]" style={{ color: "#756D63" }}>
          Every engagement documented. Every result verifiable.
        </p>

        {/* Roster */}
        <div className="flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="grid grid-cols-1 md:grid-cols-[48px_1fr_160px] gap-4 md:gap-8 py-6 group"
            >
              {/* Index */}
              <div className="hidden md:flex items-start pt-0.5">
                <span className="text-xs font-mono" style={{ color: "#4A4540" }}>{cs.index}</span>
              </div>

              {/* Main content */}
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                  <span className="text-[15px] font-semibold text-white">{cs.name}</span>
                  <span className="text-xs" style={{ color: "#4A4540" }}>{cs.tag}</span>
                  {cs.status === "active" ? (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-emerald-400/70">Active</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                      <span className="text-[11px] text-amber-400/50">Building</span>
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed mb-3 max-w-[520px]" style={{ color: "#756D63" }}>
                  {cs.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cs.deliverables.map((d) => (
                    <span
                      key={d}
                      className="px-2.5 py-0.5 text-[11px] rounded"
                      style={{ color: "#4A4540", border: "1px solid #2A2318" }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metric + link */}
              <div className="flex md:flex-col items-start md:items-end justify-between gap-2">
                <div className="md:text-right">
                  <p className="text-xl font-semibold text-white">{cs.metric}</p>
                  <p
                    className="text-xs mt-0.5 leading-snug md:text-right"
                    style={{ color: "#4A4540", maxWidth: "140px" }}
                  >
                    {cs.metricLabel}
                  </p>
                </div>
                <a
                  href={cs.link}
                  className="text-xs transition-colors duration-200"
                  style={{ color: "#4A4540" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#A69D8D")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#4A4540")}
                >
                  Full case →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
