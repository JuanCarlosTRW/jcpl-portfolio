"use client";

import { useRef, useEffect, useState } from "react";
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

const compactClients = [
  {
    badge: "IN PROGRESS",
    badgeBg: "rgba(212,168,83,0.08)",
    badgeBorder: "rgba(212,168,83,0.25)",
    badgeColor: "#D4A853",
    pulse: true,
    niche: "BARBERSHOP · MONTREAL · LOCAL SEO",
    name: "Hadi, Elite Barbershop",
    stat: "Targeting #1",
    detail: "Local SEO campaign launched. Competing for top position in Google.",
  },
  {
    badge: "DELIVERED",
    badgeBg: "rgba(166,157,141,0.08)",
    badgeBorder: "rgba(166,157,141,0.25)",
    badgeColor: "#A69D8D",
    pulse: false,
    niche: "BARBERSHOP · MONTREAL · WEB DESIGN",
    name: "Tobari, Culture Barbershop",
    stat: "Full custom website",
    detail: "Conversion website designed and built. Mobile-optimized booking flow included.",
  },
  {
    badge: "IN THE FIELD",
    badgeBg: "rgba(166,157,141,0.08)",
    badgeBorder: "rgba(166,157,141,0.25)",
    badgeColor: "#A69D8D",
    pulse: false,
    niche: "PAINTING CONTRACTOR · DALLAS-FORT WORTH",
    name: "Wesley, Absolute Painting",
    stat: "Live",
    detail: "Conversion website. DFW market. Tracking active.",
  },
  {
    badge: "IN THE FIELD",
    badgeBg: "rgba(166,157,141,0.08)",
    badgeBorder: "rgba(166,157,141,0.25)",
    badgeColor: "#A69D8D",
    pulse: false,
    niche: "DENTAL CLINIC · LAVAL · WEB DESIGN",
    name: "Dre Benyoucef, Centre Dentaire Saint-Élzéar",
    stat: "Live",
    detail: "Full custom website. Booking funnel built.",
  },
];

export default function FeaturedCaseStudy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const po = translations[locale].homepage.provenOutcomes;

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(".proof-cards .case-study-card", {
        opacity: 0,
        y: 22,
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

      {/* LEAD RESULT label */}
      <Reveal delay={0.05}>
        <p
          className="text-center mb-3"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            color: "#D4A853",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          LEAD RESULT — VERIFIED REVENUE
        </p>
      </Reveal>

      {/* HERO CARD — Triple W Rentals */}
      <Reveal delay={0.1}>
        <div className="max-w-3xl mx-auto mb-10 proof-cards">
          <div
            className="rounded-[14px] px-8 sm:px-10 py-10 sm:py-12 overflow-hidden lift-card case-study-card case-study-card-primary"
            style={{
              background: "rgba(212, 168, 83, 0.05)",
              border: "1px solid rgba(212, 168, 83, 0.4)",
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
              {po.card1Label}
            </p>

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

            <div
              style={{
                borderTop: "1px solid rgba(212, 168, 83, 0.15)",
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

      {/* COMPACT GRID — 4 remaining clients */}
      <Reveal delay={0.15}>
        <div className="max-w-3xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {compactClients.map((client) => (
            <div
              key={client.name}
              className="rounded-lg case-study-card"
              style={{
                padding: 24,
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
              }}
            >
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                  style={{
                    background: client.badgeBg,
                    border: `1px solid ${client.badgeBorder}`,
                  }}
                >
                  {client.pulse && (
                    <span
                      className="inline-block w-2 h-2 rounded-full"
                      style={{ background: "#D4A853", animation: "pulse 2s ease-in-out infinite" }}
                    />
                  )}
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: client.badgeColor, textTransform: "uppercase" }}>
                    {client.badge}
                  </span>
                </span>
              </div>

              {/* Niche label */}
              <p
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "0.12em",
                  color: "#756D63",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {client.niche}
              </p>

              {/* Stat */}
              <div
                className="text-[#F5F0E8] font-extrabold mb-1"
                style={{ fontSize: "1.5rem", lineHeight: 1.2 }}
              >
                {client.stat}
              </div>

              {/* Detail */}
              <p style={{ fontSize: "0.85rem", color: "#A69D8D", marginBottom: 12, lineHeight: 1.5 }}>
                {client.detail}
              </p>

              {/* Attribution */}
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#756D63",
                  fontStyle: "italic",
                }}
              >
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Revenue summary */}
      <Reveal delay={0.2}>
        <p
          className="text-center mt-4 mb-6"
          style={{
            fontSize: "0.85rem",
            color: "#D4A853",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          $60K+ in tracked revenue across active partnerships. Updated as results are verified.
        </p>
      </Reveal>

      {/* See all results */}
      <Reveal delay={0.25}>
        <div className="text-center mt-4">
          <a
            href="#system"
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
          </a>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
