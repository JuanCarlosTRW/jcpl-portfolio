"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const SERVICES = [
  {
    num: "01",
    title: "Conversion website",
    description: "Custom coded. Loads in under a second. Built around one outcome: the visitor calls or books. Not a template. Not WordPress. Built for your niche, your market, your offer.",
    stat: "VISITORS BECOME CALLS.",
    placeholder: "Website Preview",
  },
  {
    num: "02",
    title: "Google Ads",
    description: "Purchase-intent targeting only. I find the buyers in your city who are ready to hire today and place your business in front of them first. Every dollar tracked to a call.",
    stat: "$33 AVERAGE COST PER QUALIFIED CALL ACROSS ACTIVE ACCOUNTS.",
    placeholder: "Google Ads Dashboard",
  },
  {
    num: "03",
    title: "Local SEO",
    description: "Google Maps and organic rankings for your service area. Compounds from day one. Every month it runs, your position gets stronger and your cost per call goes down.",
    stat: "PAGE 1 POSITIONING IN YOUR CITY.",
    placeholder: "Google Maps Rankings",
  },
  {
    num: "04",
    title: "GEO / AI search",
    description: "When someone asks ChatGPT, Perplexity, or Google AI \"best [service] near me,\" your business needs to be the answer. This is the new SEO. Most competitors do not have it yet.",
    stat: "VISIBLE BEFORE YOUR COMPETITORS KNOW THIS EXISTS.",
    placeholder: "AI Search Results",
  },
  {
    num: "05",
    title: "Booking flow",
    description: "Calls and form submissions captured around the clock. Missed-call follow-up built in. No lead slips through while you are on a job or after hours.",
    stat: "ZERO LEADS LOST TO MISSED CALLS.",
    placeholder: "Booking System",
  },
  {
    num: "06",
    title: "Weekly optimization",
    description: "Every week I review the data and cut what is not working. Every month I send a revenue report with real numbers. The longer the system runs, the cheaper each call gets.",
    stat: "COST PER CALL DROPS EVERY MONTH.",
    placeholder: "Performance Dashboard",
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
          WHAT I BUILD
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
          Six layers. One connected system.
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
          Not a menu. Everything below is included in every engagement, built and run as one unit.
        </p>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="apple-slider-container"
        style={{ willChange: "transform" }}
      >
        {SERVICES.map((s, i) => (
          <div
            key={s.num}
            ref={(el) => { cardRefs.current[i] = el; }}
            className="apple-slider-card"
          >
            {/* Placeholder image area */}
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
                {s.placeholder}
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
                {s.num}
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
                {s.title}
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
                {s.description}
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
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#D4A853",
                  }}
                >
                  {s.stat}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered arrows */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <SliderArrow direction="left" onClick={() => scrollTo(activeIdx - 1)} />
        <SliderArrow direction="right" onClick={() => scrollTo(activeIdx + 1)} />
      </div>

      {/* Footer text + CTA */}
      <div className="text-center" style={{ marginTop: 32 }}>
        <p
          style={{
            fontSize: 14,
            color: "rgba(240, 234, 214, 0.4)",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          Every service above is included. Nothing sold separately.
        </p>
        <div style={{ marginTop: 20 }}>
          <a
            href="#book-call"
            className="inline-block rounded-md px-10 py-4 text-[13px] font-medium uppercase tracking-[0.15em] transition-transform hover:scale-[1.02]"
            style={{ background: "#D4A853", color: "#0D0B09" }}
          >
            Apply to be a Partner →
          </a>
        </div>
      </div>
    </section>
  );
}
