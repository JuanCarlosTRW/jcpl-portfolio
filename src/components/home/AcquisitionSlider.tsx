"use client";

import { useRef, useState, useEffect } from "react";

const STEPS = [
  {
    id: "01",
    title: "Pull in buyers",
    description: "Google Ads, Local SEO, and geo-targeted AI campaigns that put your business in front of the right people at the right time.",
    proof: "$41,085 revenue · $900 ad spend · 30 days",
    placeholder: "Google Ads Screenshot",
    image: "/images/proof/triple-w-ads-dashboard.png",
  },
  {
    id: "02",
    title: "Convert the click into a call",
    description: "A conversion website custom-coded for your niche. Built around one outcome: the visitor calls or books. Not a template. Not WordPress.",
    proof: "90 new clients · 90 days · Culture Barbershop",
    placeholder: "Website Screenshot",
    image: "/images/proof/culture-barbershop-site.png",
  },
  {
    id: "03",
    title: "Keep the pipeline full",
    description: "Missed-call follow-up, automated booking flow, and weekly optimization. Every month the system runs, your cost per call drops and your pipeline compounds.",
    proof: "Page 1 Google · under 60 days · Elite Barbershop",
    placeholder: "Booking Calendar",
    image: "/images/proof/elite-calendar.png",
  },
];

export default function AcquisitionSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = cards.indexOf(entry.target as HTMLDivElement);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { root: scrollRef.current, threshold: 0.6 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="system" className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <p
          className="uppercase mb-4"
          style={{
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          THE ACQUISITION SYSTEM
        </p>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 300,
            color: "#F0EAD6",
            lineHeight: 1.1,
          }}
        >
          The system that fills your calendar.
        </h2>
        <p
          className="mt-4 mx-auto"
          style={{
            maxWidth: 600,
            fontSize: 16,
            color: "rgba(240, 234, 214, 0.6)",
            lineHeight: 1.6,
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Three layers. One connected pipeline. Every result on this page came from this exact system.
        </p>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="apple-slider-container"
        style={{ willChange: "transform" }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step.id}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="apple-slider-card"
          >
            {/* Image area */}
            <div
              style={{
                height: "65%",
                background: "linear-gradient(145deg, #0D0B09 0%, #141210 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <span style={{ color: "#D4A853", fontSize: 18 }}>◆</span>
              <span
                style={{
                  color: "rgba(212,168,83,0.25)",
                  fontSize: 12,
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {step.placeholder}
              </span>
            </div>

            {/* Text area */}
            <div style={{ padding: "20px 24px 24px" }}>
              <span
                style={{
                  color: "#D4A853",
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 14,
                  fontStyle: "italic",
                }}
              >
                /{step.id}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: 22,
                  color: "#F0EAD6",
                  margin: "4px 0 8px",
                  fontWeight: 400,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  color: "rgba(240,234,214,0.55)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {step.description}
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(212,168,83,0.1)",
                  marginTop: 16,
                  paddingTop: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 12,
                    color: "#D4A853",
                    letterSpacing: "0.02em",
                  }}
                >
                  {step.proof}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {STEPS.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === activeIdx ? " active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => {
              cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center" style={{ marginTop: 40 }}>
        <a
          href="#book-call"
          className="inline-block rounded-md px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] transition-transform hover:scale-[1.02]"
          style={{ background: "#D4A853", color: "#0D0B09" }}
        >
          Apply to be a Partner →
        </a>
      </div>
    </section>
  );
}
