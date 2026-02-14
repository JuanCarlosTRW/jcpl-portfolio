// Minimal placeholder form steps and qualification logic
// TODO: Replace with real qualification rules and copy (TODO:REAL_DATA)

export const formSteps = [
  {
    id: "business",
    title: "Your Business",
    fields: [
      { name: "businessName", label: "Business name", type: "text", required: true },
      { name: "industry", label: "Industry", type: "select", options: ["Contractor", "Agency", "Local Service"], required: true }
    ]
  },
  {
    id: "volume",
    title: "Lead Volume",
    fields: [
      { name: "monthlyLeads", label: "Approx monthly leads", type: "text", required: true }
    ]
  },
  {
    id: "goals",
    title: "Goals",
    fields: [
      { name: "revenueGoal", label: "Monthly revenue goal", type: "text", required: false }
    ]
  }
];

export function isQualifiedLead(data: Record<string, string>) {
  // Basic placeholder qualification: has businessName and industry
  return Boolean(data.businessName && data.industry);
}
// Navigation and CTA placeholders used by Footer and other UI
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/system", label: "The System" },
  { href: "/apply", label: "Apply" }
];

export const siteConfig = {
  title: "JC Growth Systems",
  description: "Market Domination Systems for service businesses."
};

export const ctaCopy = {
  primary: "Apply for Market Fit",
  tertiary: "Start Your Application"
};
