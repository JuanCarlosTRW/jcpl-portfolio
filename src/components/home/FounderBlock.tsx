"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

const JUAN_IMG_SRC = "/images/juan-headshot-founder.jpeg";

export default function FounderBlock() {
  const { locale, lp } = useLocale();
  const o = translations[locale].homepage.oneOperator;

  const CHIPS = [o.tag1, o.tag2, o.tag3];

  return (
    <section className="py-20 md:py-28" style={{ background: "#1A1510" }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <p
          className="text-center uppercase mb-12 md:mb-16"
          style={{
            fontSize: "0.6875rem",
            letterSpacing: "0.15em",
            color: "#D4A853",
          }}
        >
          {o.eyebrow}
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16 md:items-center">

          {/* Portrait */}
          <div className="max-w-[440px] mx-auto md:mx-0 relative">
            <Image
              src={JUAN_IMG_SRC}
              alt="Juan Carlos Portillo-Laflamme, founder and sole operator of Client Growth"
              width={440}
              height={590}
              quality={85}
              sizes="(max-width: 768px) 100vw, 440px"
              className="w-full h-auto object-cover object-top"
              style={{
                borderRadius: 12,
                border: "1px solid #2A2318",
              }}
            />
            {/* Subtle bottom-fade overlay for polish */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                borderRadius: "0 0 12px 12px",
                background: "linear-gradient(to top, rgba(26,21,16,0.6) 0%, transparent 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6">

            <h2
              className="text-white font-bold"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)", lineHeight: 1.15, margin: 0 }}
            >
              {o.h2}
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "#D2C9B8",
                lineHeight: 1.68,
                margin: 0,
              }}
            >
              {o.p1}
            </p>

            <div className="flex flex-col gap-4">
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#A8998A",
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                {o.p2}
              </p>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#A8998A",
                  lineHeight: 1.78,
                  margin: 0,
                }}
              >
                {o.p3}
              </p>
            </div>

            {/* Video placeholder */}
            <div
              style={{
                background: "rgba(212,168,83,0.07)",
                border: "1px solid rgba(212,168,83,0.25)",
                borderRadius: 10,
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 36,
                  height: 36,
                  background: "#D4A853",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <polygon points="6,4 16,10 6,16" fill="#0D0B09"/>
                </svg>
              </div>
              <div>
                <span
                  style={{
                    display: "block",
                    color: "#EDE5D5",
                    fontSize: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  {o.videoLabel}
                </span>
                <span
                  style={{
                    display: "block",
                    color: "rgba(237,229,213,0.4)",
                    fontSize: "11px",
                    marginTop: 3,
                  }}
                >
                  {o.videoSoon}
                </span>
              </div>
            </div>

            {/* Trust chips */}
            <div className="flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip}
                  style={{
                    background: "#221D17",
                    border: "1px solid #2A2318",
                    borderLeft: "3px solid rgba(212,168,83,0.65)",
                    color: "#D2C9B8",
                    fontSize: "0.8125rem",
                    padding: "9px 16px",
                    borderRadius: 6,
                    lineHeight: 1.3,
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* Closing line */}
            <p
              style={{
                fontSize: "0.875rem",
                color: "#7A6E62",
                lineHeight: 1.68,
                borderTop: "1px solid #2A2318",
                paddingTop: 20,
                margin: 0,
              }}
            >
              {o.closing}
            </p>

            <Link
              href={lp("/about")}
              style={{
                fontSize: "0.8125rem",
                color: "#8A7E74",
                letterSpacing: "-0.006em",
                textDecoration: "none",
                transition: "color 180ms ease",
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#D2C9B8"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "#8A7E74"; }}
            >
              {o.link}
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
