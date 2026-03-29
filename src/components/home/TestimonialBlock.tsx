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
      "https://static.wixstatic.com/media/62f926_1dc693b7cf684246a2646e373b31390f~mv2.png",
  },
  {
    id: 2,
    quote:
      "First call came in 9 days. We had tried two agencies before this. Nothing came close.",
    name: "Tyler W.",
    role: "Triple W Rentals · Texas",
    imageSrc:
      "https://static.wixstatic.com/media/62f926_1a67b8b17c99467a899c5bacbb26b5bc~mv2.png",
  },
  {
    id: 3,
    quote:
      "90 new clients in 90 days. The system runs itself. Best investment I've made for the shop.",
    name: "Alex M.",
    role: "Elite Barbershop · Montreal, QC",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0624/6059/2222/files/Facelab_2025-08-18_06-28-56.jpg?v=1755567059",
  },
  {
    id: 4,
    quote:
      "Professional, fast, and the results speak for themselves. Our online visibility has never been better.",
    name: "Centre Dentaire St-Elzear",
    role: "Dental Clinic · Laval, QC",
    imageSrc:
      "https://static.wixstatic.com/media/62f926_acfce4c5f2b54e88b9f994f56e927c73~mv2.png",
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
        title="Real clients. Real results."
        subtitle="Every result on this page came from the same acquisition system."
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
