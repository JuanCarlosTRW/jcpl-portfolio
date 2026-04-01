"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { prefersReducedMotion } from "@/lib/motion";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { locale, lp } = useLocale();
  const po = translations[locale].homepage.provenOutcomes;

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="outcomes" style={{ background: "#131009" }}>
      {/* Section header */}
      <Reveal className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
        <SectionLabel label={po.eyebrow} className="mb-5 !text-[#D4A853]" />
        <h2 className="text-[clamp(30px,4.5vw,46px)] font-[800] leading-[1.15] tracking-[-0.03em] max-w-2xl mx-auto text-white">
          $41,085 from $900 in ad spend. 11 days to the first call.
        </h2>
        <p
          className="mt-5 max-w-md mx-auto"
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1rem)", color: "#756D63", lineHeight: 1.6 }}
        >
          {po.sub}
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
              {po.card1Label}
            </p>

            {/* Core result */}
            <div className="stat-glow" style={{ position: "relative" }}>
              <div
                className="text-[#F5F0E8] font-extrabold mb-2 stat-41085-proof stat-41085"
                style={{ fontSize: "clamp(3.5rem, 8vw, 5rem)", lineHeight: 1 }}
              >
                <CountUpRevenue to={41085} prefix="$" />
              </div>
            </div>
            <p style={{ fontSize: "1.0625rem", color: "#A69D8D", marginBottom: 22 }}>
              {po.card1Revenue}
            </p>

            {/* ROAS */}
            <div
              style={{
                borderTop: "1px solid #2A2318",
                paddingTop: 16,
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  fontSize: "1.3125rem",
                  fontWeight: 700,
                  color: "#D2C9B8",
                  lineHeight: 1.3,
                }}
              >
                {po.card1Return}
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
              {po.card1Verified}
            </p>
          </div>
        </div>
      </Reveal>

      {/* — BARBERSHOP: Elite Barbershop (Hadi) — SEO In Progress */}
      <Reveal delay={0.15}>
        <div className="max-w-3xl mx-auto mb-6">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden lift-card case-study-card"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "3px solid #D4A853",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#756D63",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              BARBERSHOP · MONTREAL · LOCAL SEO
            </p>

            {/* In-progress badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{
                  background: "rgba(212,168,83,0.08)",
                  border: "1px solid rgba(212,168,83,0.25)",
                }}
              >
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ background: "#D4A853", animation: "pulse 2s ease-in-out infinite" }}
                />
                <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#D4A853", textTransform: "uppercase" }}>
                  IN PROGRESS
                </span>
              </span>
            </div>

            {/* SEO Campaign headline */}
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "#D4A853",
                textTransform: "uppercase",
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              SEO CAMPAIGN ACTIVE
            </p>
            <div
              className="text-[#F5F0E8] font-extrabold mb-2"
              style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", lineHeight: 1 }}
            >
              Targeting #1
            </div>
            <p style={{ fontSize: "1.0625rem", color: "#A69D8D", marginBottom: 22 }}>
              Local SEO campaign launched. Competing for top position in Google for barbershop searches in market.
            </p>

            <div style={{ borderTop: "1px solid #2A2318", paddingTop: 16 }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#756D63",
                  fontStyle: "italic",
                }}
              >
                Hadi, Elite Barbershop
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* — BARBERSHOP: Culture Barbershop (Tobari) — Website Deliverable */}
      <Reveal delay={0.2}>
        <div className="max-w-3xl mx-auto mb-6">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden lift-card case-study-card"
            style={{
              background: "#1E1A14",
              border: "1px solid #2A2318",
              borderTop: "3px solid #D4A853",
            }}
          >
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                color: "#756D63",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              BARBERSHOP · MONTREAL · WEB DESIGN
            </p>

            {/* Delivered badge */}
            <div className="flex items-center gap-2 mb-4">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{
                  background: "rgba(166,157,141,0.08)",
                  border: "1px solid rgba(166,157,141,0.25)",
                }}
              >
                <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", color: "#A69D8D", textTransform: "uppercase" }}>
                  DELIVERED
                </span>
              </span>
            </div>

            {/* Deliverable label */}
            <p
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: "#D4A853",
                textTransform: "uppercase",
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              DELIVERABLE
            </p>
            <div
              className="text-[#F5F0E8] font-extrabold mb-2"
              style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", lineHeight: 1 }}
            >
              Full custom website
            </div>
            <p style={{ fontSize: "1.0625rem", color: "#A69D8D", marginBottom: 22 }}>
              Fully custom coded conversion website. Designed and built to convert visitors into booked appointments. Mobile-optimized booking flow included.
            </p>

            <div style={{ borderTop: "1px solid #2A2318", paddingTop: 16 }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#756D63",
                  fontStyle: "italic",
                }}
              >
                Tobari, Culture Barbershop
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* See all results */}
      <Reveal delay={0.2}>
        <div className="text-center mt-10">
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
      </Reveal>
    </SectionWrapper>
  );
}
