"use client";

import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { TestimonialSection } from "@/components/ui/testimonials";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Juan rebuilt our entire online presence from scratch. First booking came in 11 days. Calendar has not had a gap since.",
    name: "Mike S.",
    role: "Culture Barbershop · Montreal, QC",
    imageSrc:
      "/images/testimonials/mike-s.png",
  },
  {
    id: 2,
    quote:
      "First call came in 9 days. We had tried two agencies before this. Nothing came close.",
    name: "Tyler W.",
    role: "Triple W Rentals · Texas",
    imageSrc:
      "/images/testimonials/tyler-w.png",
  },
  {
    id: 3,
    quote:
      "90 new clients in 90 days. The system runs itself. Best investment I have made for the shop.",
    name: "Alex M.",
    role: "Elite Barbershop · Montreal, QC",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/Facelab_2025-08-18_06-28-56.jpg?v=1755567059",
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
        title="What happens when the system runs."
        subtitle="Every one of these came from the same system. Running continuously."
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
          See Results →
        </Link>
      </div>
    </section>
  );
}
