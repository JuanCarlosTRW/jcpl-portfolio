"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { countUp } from "@/lib/animations";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

function CountUpRevenue({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(to);

  useEffect(() => {
    if (!ref.current) return;
    if (prefersReducedMotion()) {
      setDisplay(to);
      return;
    }

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(obj, {
            val: to,
            duration: 1.5,
            ease: "power2.out",
            onUpdate: () => {
              const v = Math.round(obj.val);
              setDisplay(v >= 1 ? v : to);
            },
          });
        },
        once: true,
      });
    }, ref);

    return () => ctx.revert();
  }, [to, prefix]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-US")}
    </span>
  );
}

export default function FeaturedCaseStudy() {
  const tripleWRef = useRef<HTMLDivElement>(null);
  const statCardsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const statCards = statCardsRef.current;
    if (statCards) {
      const el33 = statCards.querySelector(".stat-33-card");
      const el11 = statCards.querySelector(".stat-11-card");
      if (el33) countUp(el33 as HTMLElement, 33, { prefix: "$" });
      if (el11) countUp(el11 as HTMLElement, 11);
    }
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.from(".proof-cards .case-study-card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".proof-cards",
          start: "top 76%",
          once: true,
        },
      });
      gsap.from(".stat-cards .stat-card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stat-cards",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="proof" style={{ background: "#131009" }}>
      {/* Section header */}
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="PROVEN OUTCOMES" className="mb-5 !text-[#D4A853]" />
        <h2 className="text-[clamp(30px,4.5vw,46px)] font-[800] leading-[1.15] tracking-[-0.03em] max-w-2xl mx-auto">
          <span className="text-white font-bold">
            $41,085 from $900 in ad spend.
          </span>{" "}
          <span
            className="italic"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#A69D8D",
            }}
          >
            Page 1 in under 60 days.
          </span>
        </h2>
        <p
          className="mt-5 max-w-md mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", color: "#756D63", lineHeight: 1.6 }}
        >
          Revenue, qualified calls, and search visibility. Not separate wins — the same connected system.
        </p>
      </Reveal>

      {/* — FLAGSHIP: Triple W Rentals — */}
      <Reveal delay={0.1}>
        <div ref={tripleWRef} className="max-w-3xl mx-auto mb-6 proof-cards">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden lift-card case-study-card case-study-card-primary"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "3px solid #D4A853",
            }}
          >
            {/* Niche / location / channel */}
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#756D63",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              RV RENTAL · TEXAS · GOOGLE ADS
            </p>

            {/* Core result */}
            <div className="stat-glow" style={{ position: "relative" }}>
              <div
                className="text-[#F5F0E8] font-extrabold mb-2 stat-41085-proof stat-41085"
                style={{ fontSize: "5rem", lineHeight: 1 }}
              >
                <CountUpRevenue to={41085} prefix="$" />
              </div>
            </div>
            <p style={{ fontSize: "1rem", color: "#A69D8D", marginBottom: 20 }}>
              in revenue. First 30 days.
            </p>

            {/* ROAS — elevated; enough weight to register as a second stat */}
            <div
              style={{
                borderTop: "1px solid #2A2318",
                paddingTop: 16,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#D2C9B8",
                  lineHeight: 1.3,
                }}
              >
                $46 returned per $1 of ad spend.
              </div>
            </div>

            {/* Verification */}
            <p
              style={{
                fontSize: "0.72rem",
                color: "#756D63",
                fontStyle: "italic",
              }}
            >
              Live account. Last verified February 2026.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Repeatability bridge */}
      <Reveal delay={0.13}>
        <p
          className="text-center uppercase max-w-3xl mx-auto mb-6"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            color: "#756D63",
          }}
        >
          Confirming the pattern
        </p>
      </Reveal>

      {/* — SUPPORTING: Absolute Painting — */}
      <Reveal delay={0.15}>
        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-8 sm:py-10 overflow-hidden lift-card case-study-card case-study-card-secondary"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "2px solid rgba(212, 168, 83, 0.2)",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#756D63",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              PAINTING CONTRACTOR · TEXAS · GOOGLE ADS + SEO
            </p>

            {/* Two-stat compact row */}
            <div className="flex flex-wrap items-end gap-x-10 gap-y-4 mb-5">
              <div>
                <div
                  className="text-white font-extrabold"
                  style={{ fontSize: "2.75rem", lineHeight: 1 }}
                >
                  Page 1
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#A69D8D",
                    marginTop: 5,
                  }}
                >
                  in under 60 days
                </p>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2.75rem",
                    fontWeight: 800,
                    color: "#F5F0E8",
                    lineHeight: 1,
                  }}
                >
                  $33
                </div>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: "#A69D8D",
                    marginTop: 5,
                  }}
                >
                  avg cost per qualified call
                </p>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.8rem",
                color: "#756D63",
                fontStyle: "italic",
              }}
            >
              Competitive DFW market. Ranking above national lead gen sites.
              Last verified Q4 2025.
            </p>
          </div>
        </div>
      </Reveal>

      {/* — AGGREGATE EVIDENCE — */}
      <Reveal delay={0.2}>
        <div
          ref={statCardsRef}
          className="max-w-4xl mx-auto"
          style={{ marginTop: 48 }}
        >
          <p
            className="uppercase text-center mb-6"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.14em",
              color: "#A69D8D",
            }}
          >
            ACROSS ALL ACTIVE PARTNERSHIPS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 stat-cards">
            <div
              className="rounded-xl p-6 lift-card stat-card"
              style={{ background: "#1E1A14", border: "1px solid #2A2318" }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#D4A853",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                LOCAL SEO
              </p>
              <p className="text-3xl font-bold text-white">Page 1</p>
              <p
                style={{ fontSize: "0.875rem", color: "#A69D8D", marginTop: 8 }}
              >
                Under 60 days. Competitive TX market.
              </p>
            </div>
            <div
              className="rounded-xl p-6 lift-card stat-card"
              style={{ background: "#1E1A14", border: "1px solid #2A2318" }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#D4A853",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                COST PER QUALIFIED CALL
              </p>
              <p className="text-3xl font-bold text-white stat-glow">
                <span className="stat-33-card">$33</span>
              </p>
              <p
                style={{ fontSize: "0.875rem", color: "#A69D8D", marginTop: 8 }}
              >
                Avg per qualified inbound call. All active accounts.
              </p>
            </div>
            <div
              className="rounded-xl p-6 lift-card stat-card"
              style={{ background: "#1E1A14", border: "1px solid #2A2318" }}
            >
              <p
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "#D4A853",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                SPEED TO FIRST BOOKED CALL
              </p>
              <p className="text-3xl font-bold text-white stat-glow">
                <span className="stat-11-card">11</span> days
              </p>
              <p
                style={{ fontSize: "0.875rem", color: "#A69D8D", marginTop: 8 }}
              >
                Median across all active accounts.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* See all results — proof continuation path */}
      <Reveal delay={0.25}>
        <div className="text-center mt-10">
          <Link
            href="/results"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              letterSpacing: "-0.006em",
              color: "#A69D8D",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "0.5rem",
              padding: "0.625rem 1.25rem",
              textDecoration: "none",
              transition: "color 180ms ease, border-color 180ms ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = "#D2C9B8";
              e.currentTarget.style.borderColor = "rgba(212,168,83,0.25)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = "#A69D8D";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
            }}
          >
            See all results →
          </Link>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
