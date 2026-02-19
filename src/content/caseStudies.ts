export type CaseStudy = {
  id: string;
  title: string;
  industry: string;
  outcome: string;
  metrics: { label: string; value: string }[];
  websiteUrl: string | null;
  logoUrl: string;
  metricsImageUrl?: string;
  caseStudySlug?: string;
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
      "https://static.wixstatic.com/media/62f926_ca6524ec96fe4822a3da0d0481995989~mv2.png",
    caseStudySlug: "culture-barbershop",
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
      "https://static.wixstatic.com/media/62f926_4ff81d541b9d494985f403570c94e828~mv2.png",
    caseStudySlug: "centre-dentaire-saint-elzear",
  },
];
