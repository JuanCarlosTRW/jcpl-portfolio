export type CaseStudy = {
  id: string;
  slug: string;
  title: string;
  industry: string;
  summary: string;
  metrics: { label: string; value: string }[];
  liveUrl: string;
  preview: {
    type: "iframe" | "image";
    poster: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    id: "01",
    slug: "elitebyhadi",
    title: "Elite by Hadi",
    industry: "Beauty Studio",
    summary: "Booked out with premium site + paid ads.",
    metrics: [
      { label: "Booked Clients", value: "90+" },
      { label: "Ad Spend", value: "$350" },
    ],
    liveUrl: "https://elitebyhadi.com",
    preview: {
      type: "iframe",
      poster: "/case-studies/previews/elitebyhadi.jpg",
    },
  },
  {
    id: "02",
    slug: "culturemtl",
    title: "Culture MTL",
    industry: "Event Venue",
    summary: "Doubled bookings with new site + Google Ads.",
    metrics: [
      { label: "Bookings", value: "2x" },
      { label: "SEO Rank", value: "#1" },
    ],
    liveUrl: "https://culturemtl.ca",
    preview: {
      type: "iframe",
      poster: "/case-studies/previews/culturemtl.jpg",
    },
  },
  {
    id: "03",
    slug: "triplew",
    title: "Triple W Rentals",
    industry: "RV Rentals",
    summary: "$20,000 in first 30 days.",
    metrics: [
      { label: "Revenue", value: "$20,000" },
      { label: "Bookings", value: "30+" },
    ],
    liveUrl: "",
    preview: {
      type: "image",
      poster: "/case-studies/previews/triplew.jpg",
    },
  },
  {
    id: "04",
    slug: "centredentairese",
    title: "Centre Dentaire SE",
    industry: "Dental Clinic",
    summary: "100+ new patients in 60 days.",
    metrics: [
      { label: "New Patients", value: "100+" },
      { label: "Conversion Rate", value: "18%" },
    ],
    liveUrl: "https://as.centredentairese.com",
    preview: {
      type: "iframe",
      poster: "/case-studies/previews/centredentairese.jpg",
    },
  },
];
