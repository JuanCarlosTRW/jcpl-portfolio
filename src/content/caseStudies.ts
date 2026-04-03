export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  outcome: string;
  resultTag?: string;
  metrics: { label: string; value: string }[];
  websiteUrl: string | null;
  logoUrl: string;
  metricsImageUrl?: string;
  caseStudySlug: string;
  situation: string;
  deliverables: string[];
  inProgress?: boolean;
  /** Extended narrative for flagship case study display */
  narrative?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "triple-w-rentals",
    title: "Triple W Rentals",
    industry: "RV RENTAL, TEXAS",
    outcome:
      "$41,085 in revenue generated in month one. $900 in total ad spend.",
    resultTag: "$41K revenue, 30 days",
    metrics: [
      { label: "Revenue", value: "$41,085" },
      { label: "Ad spend", value: "$900" },
      { label: "ROAS", value: "46x" },
      { label: "Timeline", value: "30 days" },
    ],
    websiteUrl: null,
    logoUrl: "/images/logos/triplew.png",
    metricsImageUrl:
      "/images/case-study-screenshot.png",
    caseStudySlug: "triple-w-rentals",
    inProgress: false,
    situation:
      "Triple W Rentals had vehicles available but zero online acquisition. Revenue was entirely referral-dependent and unpredictable. The Texas RV rental market had strong search demand that was completely untapped. A full Google Ads funnel was built from scratch and deployed within weeks.",
    narrative:
      "Triple W Rentals entered the Texas RV rental market with no website, no online presence, and no inbound lead flow. They had the inventory and the operation. They had no digital infrastructure to let anyone find them.\n\nI built the conversion site, launched the Google Ads campaign, configured GA4 event tracking for call and booking attribution, and had the full system live quickly. The ads went live targeting high-intent RV rental searches across their Texas service area.\n\nIn the first 30 days on $900 in ad spend, the system generated $41,085 in tracked revenue. $46 returned for every $1 spent. Average cost per qualified call: $33. They now hold dominant search visibility across their primary Texas market.",
    deliverables: [
      "Google Ads funnel with RV rental intent keywords",
      "Conversion landing pages optimized for bookings",
      "Automated booking qualification flow",
      "GA4 + Google Ads conversion tracking",
    ],
  },
  {
    id: "elite-barbershop",
    title: "Elite Barbershop",
    industry: "PREMIUM BARBERSHOP",
    outcome: "SEO campaign active. Targeting #1 in local search.",
    resultTag: "SEO in progress",
    metrics: [
      { label: "Campaign", value: "SEO Active" },
      { label: "Target", value: "#1 Local" },
    ],
    websiteUrl: "https://elitebyhadi.com/fr/",
    logoUrl: "/images/logos/elite.png",
    caseStudySlug: "elite-barbershop",
    inProgress: true,
    situation:
      "Elite Barbershop had the craft, the space, and the reputation in their neighborhood. What they did not have was a way for anyone searching online to find them. No website. No Google Business profile with real traction. New clients came entirely from walk-ins and word of mouth.\n\nI built the full acquisition system from scratch. Conversion website designed to match the premium positioning of the shop and push visitors toward one action: booking an appointment. Local SEO campaign launched targeting competitive barbershop searches in the Montreal market. The system is live and actively competing for top position in Google.",
    deliverables: [
      "Custom conversion-engineered website",
      "Local SEO campaign targeting competitive searches",
      "Professional brand positioning and copy",
      "GA4 tracking and event setup",
    ],
  },
  {
    id: "absolute-painting",
    title: "Absolute Painting",
    industry: "HOME SERVICES",
    outcome: "Full custom website built from scratch.",
    resultTag: "Website delivered",
    metrics: [
      { label: "Deliverable", value: "Full custom website" },
      { label: "Market", value: "Dallas-Fort Worth" },
    ],
    websiteUrl: "https://absolutepainting.vercel.app/quote",
    logoUrl: "/images/logos/absolute.png",
    caseStudySlug: "absolute-painting",
    inProgress: false,
    situation:
      "Absolute Painting was generating work through word of mouth only. No structured funnel, no way to capture intent from homeowners actively searching for painters. A fully custom coded website was built from scratch, designed around the brand and one outcome: qualified calls.",
    deliverables: [
      "Custom conversion website with quote funnel",
      "Brand-aligned design and copy",
      "Landing pages per service and location",
      "GA4 + conversion tracking setup",
    ],
  },
  {
    id: "culture-barbershop",
    title: "Culture Barbershop",
    industry: "BARBERSHOP, MONTREAL",
    outcome: "Full custom website built from scratch.",
    resultTag: "Website delivered",
    metrics: [
      { label: "Deliverable", value: "Full custom website" },
      { label: "Purpose", value: "Convert visitors to bookings" },
    ],
    websiteUrl: "https://culturemtl.ca",
    logoUrl: "/images/logos/culture.png",
    caseStudySlug: "culture-barbershop",
    inProgress: false,
    situation:
      "Culture Barbershop needed a digital presence that matched their identity and reputation in the Montreal market. The engagement focused on building a custom website with strong brand positioning. Paid acquisition to follow.",
    deliverables: [
      "Custom conversion-engineered website",
      "Brand positioning and copy",
      "Mobile-optimized booking flow",
      "Performance tracking setup",
    ],
  },
  {
    id: "centre-dentaire-saint-elzear",
    title: "Centre Dentaire Saint-Élzéar",
    industry: "DENTAL CLINIC",
    outcome: "Full custom website built from scratch.",
    resultTag: "Website delivered",
    metrics: [
      { label: "Deliverable", value: "Full custom website" },
      { label: "Purpose", value: "Credibility + bookings" },
    ],
    websiteUrl: "https://as.centredentairese.com",
    logoUrl: "/images/logos/dentaire.png",
    caseStudySlug: "centre-dentaire-saint-elzear",
    inProgress: false,
    situation:
      "Centre Dentaire Saint-Élzéar needed a professional online presence that would attract new patients and convert search intent into booked appointments. The engagement focused on building a premium custom website with a patient acquisition funnel. Google Ads targeting high-intent dental queries. System live, tracking active.",
    deliverables: [
      "Custom patient acquisition website",
      "Google Ads targeting high-intent dental queries",
      "Booking flow optimization",
      "Conversion tracking and performance setup",
    ],
  },
];
