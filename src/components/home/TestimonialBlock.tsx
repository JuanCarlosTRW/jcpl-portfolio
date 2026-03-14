"use client";

import CTAButton from "@/components/ui/CTAButton";

function StarRow() {
  return (
    <div className="flex items-center justify-center gap-1 mb-5" aria-label="5 stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 16 16" fill="#D4A853" aria-hidden="true">
          <path d="M8 1.2l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.4l4-.6L8 1.2z"/>
        </svg>
      ))}
    </div>
  );
}

interface TestimonialProps {
  quote: string;
  name: string;
  business: string;
  logoSrc?: string;
  logoAlt?: string;
}

function TestimonialCard({ quote, name, business, logoSrc, logoAlt }: TestimonialProps) {
  return (
    <div
      className="rounded-[14px] px-8 py-10 sm:px-10 sm:py-12 text-center h-full flex flex-col"
      style={{
        background: "#1A1510",
        border: "1px solid #2A2318",
        borderTop: "2px solid rgba(212,168,83,0.35)",
      }}
    >
      <StarRow />

      <blockquote
        className="font-medium leading-relaxed mb-8 flex-1"
        style={{
          fontSize: "clamp(0.95rem, 1.7vw, 1.075rem)",
          color: "#EDE5D0",
          lineHeight: 1.75,
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution */}
      <div className="flex items-center justify-center gap-3.5">
        {logoSrc && (
          <div
            className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0"
            style={{ background: "#221D17", border: "1.5px solid rgba(212,168,83,0.2)" }}
          >
            <img
              src={logoSrc}
              alt={logoAlt ?? ""}
              className="w-7 h-7 object-contain"
              style={{ opacity: 0.85 }}
            />
          </div>
        )}
        <div className="text-left">
          <p className="font-semibold text-sm" style={{ color: "#F5F0E8" }}>
            {name}
          </p>
          <p className="text-xs mt-0.5" style={{ color: "#756D63" }}>
            {business}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialBlock() {
  return (
    <section
      className="px-4 sm:px-6 py-16 md:py-20"
      style={{
        background: "#0D0B09",
        borderTop: "1px solid #2A2318",
        borderBottom: "1px solid #2A2318",
      }}
    >
      <div className="max-w-[640px] mx-auto">

        {/* Single centered testimonial */}
        <TestimonialCard
          quote="Juan rebuilt our entire online presence from scratch. First booking came in 11 days. Calendar has not had a gap since."
          name="Mike S."
          business="Culture Barbershop · Montreal, QC"
          logoSrc="/images/logos/culture.png"
          logoAlt="Culture Barbershop"
        />

        {/* Context note */}
        <p className="mt-5 text-center" style={{ fontSize: "0.78rem", color: "#5E5650" }}>
          Every result on this page came from the same acquisition system.
        </p>

        <div className="mt-6 flex justify-center">
          <CTAButton
            href="/results"
            variant="secondary"
            size="sm"
            eventName="case_card_click"
          >
            See Results →
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
