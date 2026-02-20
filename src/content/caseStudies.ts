export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  websiteUrl: string | null;
  logoUrl: string;
  metricsImageUrl?: string;
  caseStudySlug: string;
  situation?: string;
  deliverables?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "elite-barbershop",
    title: "Elite Barbershop",
    industry: "Premium Barbershop",
    outcome: "Full digital presence built from zero.",
    metrics: [
      { label: "Launch time", value: "2 weeks" },
      { label: "Channels", value: "SEO + Ads" },
    ],
    websiteUrl: "https://elitebyhadi.com/fr/",
    logoUrl:
      "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/ChatGPT_Image_6_janv._2026_17_33_55.png?v=1767738915",
    caseStudySlug: "elite-barbershop",
    situation:
      "Elite Barbershop had the craft but zero online presence. No website, no ads, no way for new clients to find them. The goal: build a full digital system that matched the premium quality of their service.",
    deliverables: [
      "Conversion-engineered website with booking integration",
      "Google Ads campaign with local intent targeting",
      "Professional brand positioning and copy",
      "GA4 tracking and event setup",
    ],
  },
  {
    id: "absolute-painting",
    title: "Absolute Painting",
    industry: "Home Services",
    outcome: "Conversion website + quote funnel launched.",
    metrics: [
      { label: "Funnel", value: "Quote → Call" },
      { label: "Stack", value: "Ads + Landing" },
    ],
    websiteUrl: "https://absolutepainting.vercel.app/quote",
    logoUrl:
      "https://static.wixstatic.com/media/62f926_58438d6814374c1b81421512d6762ad0~mv2.png",
    caseStudySlug: "absolute-painting",
    situation:
      "Absolute Painting was generating leads through word of mouth only. No structured funnel, no way to capture intent from people actively searching for painters. Built a conversion website with a dedicated quote flow to capture and qualify demand.",
    deliverables: [
      "Multi-step quote funnel with lead qualification",
      "Conversion landing pages per service type",
      "Google Ads with service + location targeting",
      "Automated follow-up sequence",
    ],
  },
  {
    id: "culture-barbershop",
    title: "Culture Barbershop",
    industry: "Barbershop — Montreal",
    outcome: "Brand positioning + full acquisition system.",
    metrics: [
      { label: "Market", value: "Montreal" },
      { label: "System", value: "Full stack" },
    ],
    websiteUrl: "https://culturemtl.ca",
    logoUrl:
      "https://static.wixstatic.com/media/62f926_26ca6fb6d443456c94fab653adce03cc~mv2.png",
    caseStudySlug: "culture-barbershop",
    situation:
      "Culture MTL needed a positioning overhaul and a complete digital acquisition system. The Montreal market is competitive — standing out required both brand clarity and a full-stack traffic and conversion system.",
    deliverables: [
      "Full brand positioning and messaging system",
      "Conversion website optimized for bookings",
      "Local SEO and Google Business optimization",
      "Paid acquisition funnel",
    ],
  },
  {
    id: "triple-w-rentals",
    title: "Triple W Rentals",
    industry: "RV Rental — Texas",
    outcome: "$20,000 in confirmed bookings within 30 days.",
    metrics: [
      { label: "Revenue", value: "$20,000" },
      { label: "Timeline", value: "30 days" },
    ],
    websiteUrl: null,
    logoUrl:
      "https://static.wixstatic.com/media/62f926_5c14016a71f74c77a7eedfa86309eadd~mv2.jpg",
    metricsImageUrl:
      "https://static.wixstatic.com/media/62f926_5c7a609ac5c143e48028810fda21af82~mv2.png",
    caseStudySlug: "triple-w-rentals",
    situation:
      "Triple W Rentals had 8 vehicles sitting idle, zero online acquisition, and a revenue model built entirely on word of mouth. The opportunity was clear: the RV rental market in Texas was active and underserved digitally. Built a full Google Ads funnel and conversion landing pages from scratch.",
    deliverables: [
      "Google Ads funnel with RV rental intent keywords",
      "Conversion landing pages optimized for bookings",
      "Automated booking qualification flow",
      "GA4 + Google Ads conversion tracking",
    ],
  },
  {
    id: "centre-dentaire-saint-elzear",
    title: "Centre Dentaire Saint-Élzéar",
    industry: "Dental Clinic",
    outcome: "Premium patient acquisition system live.",
    metrics: [
      { label: "Funnel", value: "Ads → Booking" },
      { label: "Stack", value: "Full system" },
    ],
    websiteUrl: "https://as.centredentairese.com",
    logoUrl:
      "https://static.wixstatic.com/media/62f926_b2db4e8f4d74470fb8848ee6183aecde~mv2.png",
    caseStudySlug: "centre-dentaire-saint-elzear",
    situation:
      "The clinic had an existing patient base but no structured system for acquiring new patients online. Built a premium patient acquisition funnel with Google Ads targeting high-intent dental search queries and a booking-optimized landing page.",
    deliverables: [
      "Patient acquisition landing page",
      "Google Ads targeting high-intent dental queries",
      "Booking flow optimization",
      "Conversion tracking and performance reporting",
    ],
  },
];
