export type OwnerCard = {
  name: string;
  company: string;
  image: string;
  caseUrl: string;
  labelColor?: string;
};

export const ownerCards: OwnerCard[] = [
  {
    name: "Tobari",
    company: "Culture Barbershop",
    image: "/images/testimonials/mike-s.webp",
    caseUrl: "/#testimonials",
  },
  {
    name: "Westin W. Walker",
    company: "Triple W Rentals",
    image: "/images/testimonials/tyler-w.webp",
    caseUrl: "/#testimonials",
  },
  {
    name: "Hadi",
    company: "Elite Barbershop",
    image: "/images/testimonials/alex-m.webp",
    caseUrl: "/#testimonials",
  },
  {
    name: "Wesley",
    company: "Absolute Painting",
    image: "/images/owners/wesley-absolute-painting.webp",
    caseUrl: "/#testimonials",
  },
  {
    name: "Dre Benyoucef",
    company: "Centre Dentaire Saint-Élzéar",
    image: "/images/owners/dre-benyoucef-centre-dentaire.webp",
    caseUrl: "/#testimonials",
  },
];
