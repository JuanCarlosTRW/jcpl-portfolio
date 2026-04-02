"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const STEPS = [
  {
    id: "01",
    title: "Pull in buyers",
    description: "Google Ads, Meta Ads, Local SEO, and geo-targeted AI campaigns that put your business in front of the right people at the right time.",
    proof: "$41,085 revenue · $900 ad spend · 30 days",
    image: "https://static.wixstatic.com/media/62f926_682a6adfbe824964b8be5e7d1df48c67~mv2.png",
    alt: "Google Ads impression share dominating Tyler, Texas market",
  },
  {
    id: "02",
    title: "Convert the click into a call",
    description: "A conversion website custom-coded for your niche. Built around one outcome: the visitor calls or books. Not a template. Not WordPress.",
    proof: "First booking in 11 days · Culture Barbershop · Montreal",
    image: "https://static.wixstatic.com/media/62f926_c777df5150064641aa49c6369141af8c~mv2.png",
    alt: "Culture Barbershop conversion website built by Client Growth",
  },
  {
    id: "03",
    title: "Keep the pipeline full",
    description: "Missed-call follow-up, automated booking flow, and weekly optimization. Every month the system runs, your cost per call drops and your pipeline compounds.",
    proof: "Fully booked calendar · Elite Barbershop · Montreal",
    image: "https://static.wixstatic.com/media/62f926_4d3dacc6a96e4998a10933a2c9076573~mv2.png",
    alt: "Elite Barbershop fully booked calendar",
    imagePosition: "custom" as const,
    objectPosition: "left 40%",
  },
];

function SliderArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s ease",
        flexShrink: 0,
      }}
      onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
      onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        {direction === "left" ? (
          <path d="M11 4L6 9L11 14" stroke="rgba(240,234,214,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M7 4L12 9L7 14" stroke="rgba(240,234,214,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

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

  const scrollTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, STEPS.length - 1));
    setActiveIdx(clamped);
    cardRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  return (
    <section id="system" className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      <div className="text-center mb-12 px-6">
        <p className="uppercase mb-4" style={{ fontSize: 12, letterSpacing: "0.15em", color: "#D4A853", fontFamily: "var(--font-dm-sans), sans-serif" }}>
          THE ACQUISITION SYSTEM
        </p>
        <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: "#F0EAD6", lineHeight: 1.1 }}>
          The system that fills your calendar.
        </h2>
        <p className="mt-4 mx-auto" style={{ maxWidth: 600, fontSize: 16, color: "rgba(240, 234, 214, 0.6)", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          Three layers. One connected pipeline. Every result on this page came from this exact system.
        </p>
      </div>

      <div ref={scrollRef} className="apple-slider-container" style={{ willChange: "transform" }}>
        {STEPS.map((step, i) => (
          <div key={step.id} ref={(el) => { cardRefs.current[i] = el; }} className="apple-slider-card">
            <div className="card-image-container">
              <Image
                src={step.image}
                alt={step.alt}
                width={760}
                height={500}
                quality={80}
                loading="lazy"
                style={{ objectPosition: (step as any).objectPosition || "center top" }}
              />
            </div>
            <div style={{ padding: "20px 24px 24px" }}>
              <span style={{ color: "#D4A853", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 14, fontStyle: "italic" }}>/{step.id}</span>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 22, color: "#F0EAD6", margin: "4px 0 8px", fontWeight: 400 }}>{step.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "rgba(240,234,214,0.55)", lineHeight: 1.5, margin: 0 }}>{step.description}</p>
              <div style={{ borderTop: "1px solid rgba(212,168,83,0.1)", marginTop: 16, paddingTop: 12 }}>
                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 12, color: "#D4A853", letterSpacing: "0.02em" }}>{step.proof}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <SliderArrow direction="left" onClick={() => scrollTo(activeIdx - 1)} />
        <SliderArrow direction="right" onClick={() => scrollTo(activeIdx + 1)} />
      </div>

      <div className="text-center" style={{ marginTop: 40 }}>
        <a href="#book-call" className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]" style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}>
          Apply to be a Partner →
        </a>
      </div>
    </section>
  );
}
