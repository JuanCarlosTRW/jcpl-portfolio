"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/motion";
import { prefersReducedMotion } from "@/lib/motion";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

gsap.registerPlugin(ScrollTrigger);

export default function ClientReality() {
  const sectionRef = useRef<HTMLElement>(null);
  const { locale } = useLocale();
  const r = translations[locale].homepage.reality;

  const CARDS = [
    { num: "01", title: r.card01Title, body: r.card01Body },
    { num: "02", title: r.card02Title, body: r.card02Body },
    { num: "03", title: r.card03Title, body: r.card03Body },
    { num: "04", title: r.card04Title, body: r.card04Body },
  ];

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const ctx = gsap.context(() => {
      gsap.from(".reality-cards .card", {
        opacity: 0,
        y: isMobile ? 0 : 22,
        stagger: 0.09,
        duration: 0.55,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reality-cards",
          start: "top 76%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper
      ref={sectionRef}
      id="reality"
      variant="alt"
      className="border-b border-[#2A2318] py-20 md:py-28"
      style={{ background: "#0D0B09" }}
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-[980px] text-center md:mb-14">
          <SectionLabel label={r.eyebrow} className="mb-5 !text-[#D4A853]" />
          <h2 className="mx-auto mb-5 max-w-[860px] text-[clamp(32px,4.2vw,50px)] font-[800] leading-[1.12] tracking-[-0.026em] text-[#F5F0E8]">
            {r.h2}
          </h2>
          <p className="mx-auto mb-6 max-w-[580px] text-[clamp(15.5px,1.7vw,17.5px)] font-[400] leading-[1.7] text-[#8A7E74]">
            {r.sub}
          </p>
          <p
            className="mx-auto"
            style={{
              fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
              fontWeight: 600,
              color: "#C8A05A",
            }}
          >
            {r.goldLine}
          </p>
        </Reveal>

        <Reveal className="mx-auto my-14 md:my-16 max-w-[620px]">
          <div
            className="relative mx-auto max-w-[620px] rounded-[14px] px-8 py-10 sm:px-10 sm:py-11 lift-card"
            style={{
              background: "#1A1714",
              border: "1px solid rgba(212,168,83,0.15)",
              borderLeft: "3px solid rgba(212,168,83,0.55)",
              boxShadow: "0 4px 40px rgba(0,0,0,0.35), 0 0 60px rgba(212,168,83,0.04)",
            }}
          >
            <p
              className="mb-7 uppercase tracking-[0.18em]"
              style={{ fontSize: "0.6875rem", color: "#D4A853", fontWeight: 600 }}
            >
              {r.notificationTime}
            </p>
            <div
              style={{
                fontSize: "clamp(1.1rem, 1.65vw, 1.175rem)",
                lineHeight: 1.85,
              }}
            >
              <p style={{ color: "#C8BFAE" }}>{r.notificationLine1}</p>
              <p style={{ color: "#C8BFAE" }}>{r.notificationLine2}</p>
              <p style={{ color: "#C8BFAE" }}>{r.notificationLine3}</p>

              <div
                aria-hidden="true"
                style={{
                  height: "1px",
                  background: "rgba(212,168,83,0.14)",
                  margin: "1.5rem 0",
                }}
              />

              <p style={{ color: "#A8A098", fontWeight: 400 }}>
                {r.notificationLine4}
              </p>
              <p style={{ color: "#D4A853", fontWeight: 600 }}>
                {r.notificationLine5}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mb-12 grid gap-5 lg:mb-14 lg:grid-cols-2 reality-cards">
          {CARDS.map((card, i) => {
            const isFullWidth = i === 0 || i === 3;
            const isDominant = i === 0;
            const isConclusion = i === 3;
            const padding = isFullWidth ? "p-9 md:p-11" : "p-7 md:p-8";
            const titleSize = isFullWidth
              ? "text-[clamp(22px,2.3vw,27px)]"
              : "text-[19px]";
            return (
              <Reveal key={card.num} delay={0.08 * (i + 1)} className={isFullWidth ? "lg:col-span-2" : ""}>
                <div
                  className={`group relative flex h-full flex-col rounded-[14px] lift-card card ${padding}`}
                  style={{
                    background: "#1A1714",
                    border: "1px solid rgba(212,168,83,0.12)",
                    borderLeft: "3px solid rgba(212,168,83,0.30)",
                    ...(isConclusion
                      ? { borderLeft: "3px solid rgba(212,168,83,0.50)" }
                      : {}),
                  }}
                >
                  <span
                    className="mb-5 inline-flex w-fit items-center rounded-md px-2.5 py-1"
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#D4A853",
                      background: "rgba(212,168,83,0.08)",
                      border: "1px solid rgba(212,168,83,0.22)",
                    }}
                  >
                    {card.num}
                  </span>
                  <h3
                    className={`mb-3.5 font-[700] leading-[1.26] text-[#F5F0E8] ${titleSize}`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`flex-1 leading-[1.72] ${
                      isFullWidth ? "text-[0.9375rem] md:text-[1rem]" : "text-[0.8625rem]"
                    }`}
                    style={{ color: isDominant ? "#A8A098" : "#9A9080" }}
                  >
                    {card.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </SectionWrapper>
  );
}
