// Centralized logo data for LogoLoop
export type LogoWithIndustry = {
  src: string;
  alt?: string;
  name: string;
  city: string;
  service: string;
  industryLabel: string;
};

export const caseStudyLogos: LogoWithIndustry[] = [
  {
    src: "/images/logos/elite.png",
    alt: "Elite Barbershop",
    name: "Elite Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
    industryLabel: "BARBERSHOP · MONTREAL",
  },
  {
    src: "/images/logos/absolute.png",
    alt: "Absolute Painting",
    name: "Absolute Painting",
    city: "Dallas, TX",
    service: "Painting Contractor",
    industryLabel: "PAINTING · DFW",
  },
  {
    src: "/images/logos/culture.png",
    alt: "Culture Barbershop",
    name: "Culture Barbershop",
    city: "Montreal, QC",
    service: "Barbershop",
    industryLabel: "BARBERSHOP · MONTREAL",
  },
  {
    src: "/images/logos/triplew.png",
    alt: "Triple W Rentals",
    name: "Triple W Rentals",
    city: "Texas",
    service: "RV Rental",
    industryLabel: "RV RENTAL · TEXAS",
  },
  {
    src: "/images/logos/dentaire.png",
    alt: "Centre Dentaire Saint-Élzéar",
    name: "Centre Dentaire Saint-Élzéar",
    city: "Montreal, QC",
    service: "Dental Clinic",
    industryLabel: "DENTAL · QUEBEC",
  },
];
