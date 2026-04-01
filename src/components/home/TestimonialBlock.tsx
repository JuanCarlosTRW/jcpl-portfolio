"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { TestimonialSection } from "@/components/ui/testimonials";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Juan rebuilt our entire online presence from scratch. First booking came in 11 days. Calendar has not had a gap since.",
    name: "Tobari",
    role: "Culture Barbershop · Montreal, QC",
    context: "Barbershop: full custom website delivered",
    imageSrc: "/images/testimonials/mike-s.png",
  },
  {
    id: 2,
    quote:
      "First call came in 9 days. I had tried two agencies before this. Nothing came close.",
    name: "Westin Wayne Walker",
    role: "Triple W Rentals · Texas",
    context: "RV rental: Texas market, Google Ads, first call in 11 days",
    caseStudyHref: "/results/triple-w-rentals",
    imageSrc: "/images/testimonials/tyler-w.png",
  },
  {
    id: 3,
    quote:
      "The website looks exactly like us. First booking came in before the first week was done.",
    name: "Hadi",
    role: "Elite Barbershop · Montreal, QC",
    context: "Barbershop: local market, SEO campaign in progress",
    imageSrc: "/images/testimonials/alex-m.png",
  },
  {
    id: 4,
    quote:
      "Professional website that represents the brand. Built exactly what was needed.",
    name: "Wesley",
    role: "Absolute Painting · Dallas-Fort Worth",
    context: "Painting contractor: full custom website delivered",
    imageSrc: "/images/owners/wesley-absolute-painting.png",
  },
  {
    id: 5,
    quote:
      "The site establishes credibility from the first visit. Patients book directly from search.",
    name: "Dre Benyoucef",
    role: "Centre Dentaire Saint-Élzéar",
    context: "Dental clinic: full custom website delivered",
    imageSrc: "/images/owners/dre-benyoucef-centre-dentaire.png",
  },
];

export default function TestimonialBlock() {
  const { lp } = useLocale();

  return (
    <section
      style={{
        borderTop: "1px solid #2A2318",
        borderBottom: "1px solid #2A2318",
      }}
    >
      <TestimonialSection
        title="Five businesses. Same system. Real outcomes."
        subtitle="Every result below came from the same acquisition system."
        testimonials={testimonialsData}
      />

      {/* See Results link */}
      <div className="text-center pb-16" style={{ background: "#0D0B09" }}>
        <Link
          href={lp("/results")}
          style={{
            fontSize: "0.85rem",
            color: "#D4A853",
            textDecoration: "none",
            transition: "color 180ms ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.color = "#F5F0E8";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.color = "#D4A853";
          }}
        >
          See all client results →
        </Link>
      </div>
    </section>
  );
}
