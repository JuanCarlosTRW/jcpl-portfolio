export const caseStudiesContent = {
  eyebrow: "Case Evidence",
  title: "Measured Results. No Hype.",
  subtitle: "Every outcome below is from a real engagement. Metrics are independently verified. Results vary by market, offer, and execution.",
  featuredCase: {
    client: "HVAC Contractor (Ontario)",
    context: "Mid-market HVAC firm with inconsistent inbound pipeline and high cost per lead.",
    problem: "Unpredictable lead flow, high CPL, low sales team utilization.",
    intervention: "Deployed Presence-to-Pipeline System: rebuilt digital presence, implemented AI-driven qualification, automated lead routing.",
    mechanism: "Integrated traffic, qualification, and conversion engine.",
    primaryMetric: { label: "Net New Revenue (90 Days)", value: 82000, suffix: "$" },
    supportingMetrics: [
      { label: "Avg. Cost Per Lead", value: "$41" },
      { label: "Speed-to-Lead", value: "<60s" },
      { label: "Conversion Rate", value: "31%" },
    ],
    beforeAfter: { before: "$18k/mo inconsistent", after: "$45k/mo predictable" },
    whatChanged: [
      "AI qualification reduced sales time per lead by 40%",
      "Automated routing cut response time to under 1 minute",
      "Unified dashboard for all lead sources",
    ],
    artifacts: [
      { type: "dashboard", src: "", alt: "Revenue dashboard (redacted)" },
      { type: "log", src: "", alt: "AI qualification log (redacted)" },
      { type: "screenshot", src: "", alt: "Lead routing config (redacted)" },
    ],
  },
  secondaryCases: [
    {
      client: "Dental Group",
      metric: "+$52k Revenue / 60 Days",
      summary: "Multi-location dental group with stagnant growth.",
      bullets: [
        "Cost per lead reduced 38%",
        "Booked appointments up 2.1x",
        "No new staff required",
      ],
    },
    {
      client: "Commercial Roofing",
      metric: "+17 Qualified B2B Leads / Month",
      summary: "Commercial roofer targeting property managers.",
      bullets: [
        "Lead quality up 3x",
        "Avg. deal size +22%",
        "Sales cycle shortened by 19 days",
      ],
    },
  ],
  disclaimer: "All results are client-reported and independently verified. Your results will vary based on market, offer, and execution quality.",
  cta: {
    label: "Apply for Selective Partnership",
    href: "/apply",
    note: "We work with a limited number of partners per quarter.",
  },
};
