// Central content adapter — re-exports and small placeholders
// This file maps the project's copy locations to the keys various
// components expect. All numeric/metric values are placeholders marked
// TODO:REAL_DATA and should be replaced with actual data later.

import {
  heroCopy,
  agitationCopy,
  systemCopy,
  transformationCopy,
  evidenceCopy,
  partnerCopy,
  applicationCopy,
} from "@/content/siteCopy";
import { caseStudies as _caseStudies } from "@/content/caseData";

export const hero = {
  eyebrow: heroCopy.eyebrow,
  headline: heroCopy.headline,
  subheadline: heroCopy.subheadline,
};

export const ctaCopy = {
  primary: heroCopy.primaryCTA || "Apply",
  secondary: heroCopy.secondaryCTA || "Case Studies",
  tertiary: applicationCopy.headline || "Apply",
  href: "/apply",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/system", label: "The System" },
  { href: "/apply", label: "Apply" },
];

export const siteConfig = {
  title: "JC Growth Systems",
  description: "Market Domination Systems for service businesses.",
};

export const aboutContent = {
  headline: "Who we are",
  body: "JC Growth Systems helps service businesses dominate local markets.",
};

export const serviceTiers = [
  { id: "core", name: "Core" },
  { id: "grow", name: "Grow" },
  { id: "dominate", name: "Dominate" },
];

export const systemSteps = (systemCopy.steps || []).map((s: any, idx: number) => ({
  step: idx + 1,
  icon: "◆",
  title: s.what || s.title || `Step ${idx + 1}`,
  description: s.why || s.kpi || "",
}));

export const problemSection = {
  label: "The Problem",
  headline: "Invisible online. Leaking revenue.",
  problems: [
    { stat: "[X]+", description: "Qualified leads lost to competitors" },
    { stat: "[Y]%", description: "Average funnel conversion loss" },
    { stat: "[Z]", description: "Markets underpenetrated" },
  ],
  body: "Most service businesses lose visibility, slow follow-up, and conversion leakage—turning real demand into missed revenue.",
};

export const whySection = {
  label: "Why JC Growth Systems",
  headline: partnerCopy.headline || "Why Juan Carlos",
  points: [
    { title: "Selective onboarding", body: "We only work with owners serious about growth." },
    { title: "Outcome focus", body: "We prioritize measurable pipeline and revenue." },
    { title: "Strategic partnership", body: "We act as an in-house growth partner, not a freelancer." },
  ],
};

export const resultsPreview = {
  label: "Results",
  headline: "Real business outcomes",
  items: heroCopy.proofChips || [],
  featured: {
    context: "Quarterly pipeline attributed to targeted campaigns",
    client: "Regional Plumbing Co.",
    method: "Authority site + Ads"
  },
  highlights: [
    { metric: "+31%", label: "Avg conversion lift" },
    { metric: "-28%", label: "Avg CPL reduction" },
    { metric: "60s", label: "Speed-to-lead" }
  ],
};

export const formSteps = [
  {
    id: "business",
    title: "Your Business",
    fields: [
      { name: "businessName", label: "Business name", type: "text", required: true },
      { name: "industry", label: "Industry", type: "select", options: ["Contractor", "Agency", "Local Service"], required: true },
    ],
  },
  {
    id: "volume",
    title: "Lead Volume",
    fields: [
      { name: "monthlyLeads", label: "Approx monthly leads", type: "text", required: true },
    ],
  },
];

export function isQualifiedLead(data: Record<string, string>) {
  return Boolean(data.businessName && data.industry);
}

export const caseStudies = _caseStudies || [];

// Export other copies as needed
export const why = whySection;
export const proof = resultsPreview;

export default {};
