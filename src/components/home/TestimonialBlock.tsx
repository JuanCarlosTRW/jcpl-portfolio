"use client";

import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";
import { TestimonialSection } from "@/components/ui/testimonials";

export default function TestimonialBlock() {
  const { locale } = useLocale();
  const t = translations[locale].homepage.testimonialBlock;

  const testimonialsData = [
    { id: 1, quote: t.quote1, name: "Tobari", role: "Culture Barbershop \u00b7 Montreal, QC", context: "Barbershop: full custom website delivered", imageSrc: "/images/testimonials/mike-s.webp" },
    { id: 2, quote: t.quote2, name: "Westin Wayne Walker", role: "Triple W Rentals \u00b7 Texas", context: "RV rental: Texas market, Google Ads", imageSrc: "/images/testimonials/tyler-w.webp" },
    { id: 3, quote: t.quote3, name: "Hadi", role: "Elite Barbershop \u00b7 Montreal, QC", context: "Barbershop: local market, SEO campaign in progress", imageSrc: "/images/testimonials/alex-m.webp" },
    { id: 4, quote: t.quote4, name: "Wesley", role: "Absolute Painting \u00b7 Dallas-Fort Worth", context: "Painting contractor: full custom website delivered", imageSrc: "/images/owners/wesley-absolute-painting.webp" },
    { id: 5, quote: t.quote5, name: "Dre Benyoucef", role: "Centre Dentaire Saint-\u00c9lz\u00e9ar \u00b7 Quebec", context: "Dental clinic: full custom website with booking funnel", imageSrc: "https://static.wixstatic.com/media/62f926_acfce4c5f2b54e88b9f994f56e927c73~mv2.png" },
  ];

  return (
    <section
      id="testimonials"
      style={{
        borderTop: "1px solid #2A2318",
        borderBottom: "1px solid #2A2318",
      }}
    >
      <TestimonialSection
        title={t.title}
        subtitle={t.subtitle}
        testimonials={testimonialsData}
      />

      {/* See Results link */}
      <div className="text-center pb-16">
        <a
          href="#outcomes"
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
          {t.seeAllResults}
        </a>
      </div>
    </section>
  );
}
