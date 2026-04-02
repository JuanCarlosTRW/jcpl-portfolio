"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";

const SERVICES = [
  {
    num: "01",
    title: "Conversion website",
    description: "Custom coded. Loads in under a second. Built around one outcome: the visitor calls or books. Not a template. Not WordPress. Built for your niche, your market, your offer.",
    stat: "VISITORS BECOME CALLS.",
    image: "https://static.wixstatic.com/media/62f926_c777df5150064641aa49c6369141af8c~mv2.png",
    alt: "Culture Barbershop website built by Client Growth",
    objectPosition: "center top",
  },
  {
    num: "02",
    title: "Google Ads / Meta Ads",
    description: "Purchase-intent targeting only. I find the buyers in your city who are ready to hire today and place your business in front of them first. Every dollar tracked to a call.",
    stat: "$33 AVERAGE COST PER QUALIFIED CALL ACROSS ACTIVE ACCOUNTS.",
    image: "https://static.wixstatic.com/media/62f926_b625e6d3a49844feb398b5af2ad8ed31~mv2.png",
    alt: "Google Ads and Meta Ads dashboard showing campaign performance",
    objectPosition: "center 50%",
  },
  {
    num: "03",
    title: "Local SEO",
    description: "Google Maps and organic rankings for your service area. Compounds from day one. Every month it runs, your position gets stronger and your cost per call goes down.",
    stat: "PAGE 1 POSITIONING IN YOUR CITY.",
    image: "https://static.wixstatic.com/media/62f926_89f31d5c8a8d40bf81a89126c4969979~mv2.png",
    alt: "Local SEO rankings and Google Maps positioning",
    objectPosition: "center 60%",
  },
  {
    num: "04",
    title: "GEO / AI search",
    description: "When someone asks ChatGPT, Perplexity, or Google AI \"best [service] near me,\" your business needs to be the answer. This is the new SEO. Most competitors do not have it yet.",
    stat: "VISIBLE BEFORE YOUR COMPETITORS KNOW THIS EXISTS.",
    image: "https://static.wixstatic.com/media/62f926_a22866474ed343dca8aed45202b5d05b~mv2.png",
    alt: "AI search visibility in ChatGPT and Google AI",
    objectPosition: "center 55%",
  },
  {
    num: "05",
    title: "AI integration",
    description: "Voice agents and chatbots that answer, qualify, and follow up with leads automatically. Your phone does not need to ring for a lead to be captured. The system works while you are on a job.",
    stat: "AUTOMATED FOLLOW-UP BEFORE YOU PICK UP THE PHONE.",
    image: "https://static.wixstatic.com/media/62f926_e9658dd24b3044a3aef6c5f38ea4ce9b~mv2.png",
    alt: "AI workflow tools and automation",
    objectPosition: "center 50%",
  },
  {
    num: "06",
    title: "Email marketing",
    description: "Nurture sequences, reactivation campaigns, and automated follow-ups that keep your business top of mind. Turn past leads into future bookings.",
    stat: "STAY TOP OF MIND. REACTIVATE PAST LEADS.",
    image: "https://static.wixstatic.com/media/62f926_a8b917792ec049f28cbae257c67f7737~mv2.png",
    alt: "Email marketing campaigns and sequences",
    badge: "SCALE",
    objectPosition: "center 55%",
  },
  {
    num: "07",
    title: "Weekly optimization + reporting",
    description: "Every week I review the data and cut what is not working. Every month I send a revenue report with real numbers. The longer the system runs, the cheaper each call gets.",
    stat: "COST PER CALL DROPS EVERY MONTH.",
    image: "https://static.wixstatic.com/media/62f926_d50d59a0a06543fe8baa6786a41cb2ec~mv2.png",
    alt: "Weekly optimization and performance reporting",
    objectPosition: "center 50%",
  },
];

function SliderArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      style={{
        width: 44, height: 44, borderRadius: "50%", border: "none",
        background: "rgba(255,255,255,0.08)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "background 0.2s ease", flexShrink: 0,
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

function CardPlaceholder({ label }: { label: string }) {
  return (
    <div style={{ width: "100%", height: "100%", background: "#0D0B09", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
      <span style={{ color: "#D4A853", fontSize: 18 }}>◆</span>
      <span style={{ color: "rgba(212,168,83,0.25)", fontSize: 12, fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export default function WhatIBuildSlider() {
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
    const clamped = Math.max(0, Math.min(idx, SERVICES.length - 1));
    cardRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, []);

  return (
    <section id="services" className="py-16 md:py-24" style={{ background: "#0D0B09" }}>
      <div className="text-center mb-12 px-6">
        <p className="uppercase mb-4" style={{ fontSize: 12, letterSpacing: "0.15em", color: "#D4A853", fontFamily: "var(--font-dm-sans), sans-serif" }}>WHAT I BUILD</p>
        <h2 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 300, color: "#F0EAD6", lineHeight: 1.1 }}>Seven layers. One connected system.</h2>
        <p className="mt-4 mx-auto" style={{ maxWidth: 600, fontSize: 16, color: "rgba(240, 234, 214, 0.6)", lineHeight: 1.6, fontFamily: "var(--font-dm-sans), sans-serif" }}>Not a menu. Everything below is included in every engagement, built and run as one unit.</p>
      </div>

      <div ref={scrollRef} className="apple-slider-container" style={{ willChange: "transform" }}>
        {SERVICES.map((s, i) => (
          <div key={s.num} ref={(el) => { cardRefs.current[i] = el; }} className="apple-slider-card" style={{ position: "relative" }}>
            {/* Badge */}
            {(s as any).badge && (
              <span style={{ position: "absolute", top: 12, right: 12, zIndex: 2, background: "rgba(212,168,83,0.15)", color: "#D4A853", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 4, border: "1px solid rgba(212,168,83,0.2)" }}>
                {(s as any).badge}
              </span>
            )}
            {/* Image area */}
            <div className="card-image-container">
              {s.image ? (
                <Image src={s.image} alt={s.alt} width={760} height={500} quality={80} loading="lazy" style={{ objectPosition: (s as any).objectPosition || "center top" }} />
              ) : (
                <CardPlaceholder label={(s as any).placeholder || s.title} />
              )}
            </div>
            {/* Text area */}
            <div style={{ padding: "20px 24px 24px" }}>
              <span style={{ color: "#D4A853", fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 14, fontStyle: "italic" }}>{s.num}</span>
              <h3 style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: 22, color: "#F0EAD6", margin: "4px 0 8px", fontWeight: 400 }}>{s.title}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 14, color: "rgba(240,234,214,0.55)", lineHeight: 1.5, margin: 0 }}>{s.description}</p>
              <div style={{ borderTop: "1px solid rgba(212,168,83,0.1)", marginTop: 16, paddingTop: 12 }}>
                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#D4A853" }}>{s.stat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <SliderArrow direction="left" onClick={() => scrollTo(activeIdx - 1)} />
        <SliderArrow direction="right" onClick={() => scrollTo(activeIdx + 1)} />
      </div>

      <div className="text-center" style={{ marginTop: 32 }}>
        <p style={{ fontSize: 14, color: "rgba(240, 234, 214, 0.35)", fontFamily: "var(--font-dm-sans), sans-serif" }}>Every service above is included. Nothing sold separately.</p>
        <div style={{ marginTop: 20 }}>
          <a href="#book-call" className="inline-block rounded-md px-8 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-transform hover:scale-[1.02]" style={{ background: "#D4A853", color: "#0D0B09", borderRadius: 6 }}>Apply to be a Partner →</a>
        </div>
      </div>
    </section>
  );
}
