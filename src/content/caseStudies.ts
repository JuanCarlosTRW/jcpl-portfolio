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
      "https://static.wixstatic.com/media/62f926_5c7a609ac5c143e48028810fda21af82~mv2.png",
    caseStudySlug: "triple-w-rentals",
    inProgress: false,
    situation:
      "Triple W Rentals had vehicles available but zero online acquisition. Revenue was entirely referral-dependent and unpredictable. The Texas RV rental market had strong search demand that was completely untapped. A full Google Ads funnel was built from scratch and deployed within weeks.",
    narrative:
      "Triple W Rentals was a new RV rental company in Texas with no online presence and no inbound lead flow. I built their conversion website, launched a Google Ads campaign, and deployed tracking in 11 days. In the first 30 days on $900 in ad spend, the system generated $41,085 in tracked revenue. They now dominate the RV rental market in their region.",
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
    outcome: "90 new clients acquired in the first 90 days. Full acquisition system built from scratch.",
    resultTag: "90 new clients, 90 days",
    metrics: [
      { label: "New clients", value: "90" },
      { label: "Timeframe", value: "90 days" },
    ],
    websiteUrl: "https://elitebyhadi.com/fr/",
    logoUrl: "/images/logos/elite.png",
    caseStudySlug: "elite-barbershop",
    inProgress: false,
    situation:
      "Elite Barbershop had the craft but zero online presence. No website, no discoverability, no way for new clients to find them. The goal was to build a full custom digital system that matched the premium quality of the service and turned online search into booked appointments.",
    deliverables: [
      "Custom conversion-engineered website",
      "Google Ads campaign with local intent targeting",
      "Professional brand positioning and copy",
      "GA4 tracking and event setup",
    ],
  },
  {
    id: "absolute-painting",
    title: "Absolute Painting",
    industry: "HOME SERVICES",
    outcome: "Custom conversion site. Google Ads funnel. Tracking live.",
    resultTag: "System live",
    metrics: [],
    websiteUrl: "https://absolutepainting.vercel.app/quote",
    logoUrl: "/images/logos/absolute.png",
    caseStudySlug: "absolute-painting",
    inProgress: true,
    situation:
      "Absolute Painting was generating work through word of mouth only. No structured funnel, no way to capture intent from homeowners actively searching for painters. A conversion website and quote funnel were built and launched. Google Ads targeting high-intent buyers in DFW. Conversion tracking live. Results compiling.",
    deliverables: [
      "Custom conversion website with quote funnel",
      "Google Ads campaign targeting homeowner search intent",
      "Landing pages per service and location",
      "GA4 + conversion tracking setup",
    ],
  },
  {
    id: "culture-barbershop",
    title: "Culture Barbershop",
    industry: "BARBERSHOP, MONTREAL",
    outcome: "Conversion website and booking funnel delivered. Page 1 for competitive Montreal searches in under 60 days.",
    resultTag: "Page 1 SEO, <60 days",
    metrics: [
      { label: "Deliverable", value: "Website" },
      { label: "Market", value: "Montreal" },
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
    outcome: "Custom conversion site and Google Ads funnel for high-value dental services. System live, tracking active.",
    resultTag: "Funnel live",
    metrics: [
      { label: "Deliverable", value: "Website" },
      { label: "Funnel", value: "Ads to Booking Funnel" },
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
