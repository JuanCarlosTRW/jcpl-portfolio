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
      "Triple W Rentals entered the Texas RV rental market with no website, no online presence, and no inbound lead flow. They had the inventory and the operation. They had no digital infrastructure to let anyone find them.\n\nI built the conversion site, launched the Google Ads campaign, configured GA4 event tracking for call and booking attribution, and had the full system live in 11 days. The ads went live targeting high-intent RV rental searches across their Texas service area.\n\nIn the first 30 days on $900 in ad spend, the system generated $41,085 in tracked revenue. $46 returned for every $1 spent. Average cost per qualified call: $33. They now hold dominant search visibility across their primary Texas market.",
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
      "Elite Barbershop had the craft, the space, and the reputation in their neighborhood. What they did not have was a way for anyone searching online to find them. No website. No Google Business profile with real traction. New clients came entirely from walk-ins and word of mouth.\n\nI built the full acquisition system from scratch. Conversion website designed to match the premium positioning of the shop and push visitors toward one action: booking an appointment. Google Ads targeting local purchase-intent searches. Professional brand copy across every touchpoint. GA4 tracking configured so every new booking was attributed to its source.\n\nIn 90 days, Elite Barbershop acquired 90 net new clients through the digital system. Not walk-ins. Not referrals. Clients who found them online and booked before they had ever walked through the door. The calendar went from unpredictable to fully booked. The owners reported that new clients consistently complimented the website on their first visit.",
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
    outcome: "Custom conversion site and Google Ads funnel targeting high-intent buyers in the Dallas-Fort Worth market. Conversion tracking live. Optimization in progress.",
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
    outcome: "Conversion website and booking funnel delivered. Page 1 for competitive Montreal barbershop searches in under 60 days. System live and compounding.",
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
