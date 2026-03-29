"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    title: "Pull in buyers",
    description:
      "Google Ads, Local SEO, and geo-targeted AI campaigns that put your business in front of the right people at the right time.",
    subItems: [
      { name: "Google Ads", detail: "High-intent buyers, captured first" },
      { name: "Local SEO", detail: "Ranking where your market searches" },
      { name: "GEO / AI Search", detail: "Visible in ChatGPT and AI answers" },
    ],
  },
  {
    id: "02",
    title: "Make them call you",
    description:
      "A conversion website, persuasion-driven copy, and an AI voice agent that turns every visit into a booked call. Automatically.",
    subItems: [
      { name: "Conversion website", detail: "Built to turn visits into calls" },
      { name: "Conversion copy", detail: "Language written to close" },
      { name: "AI voice agent", detail: "Every call answered, 24/7" },
    ],
  },
  {
    id: "03",
    title: "Keep it full",
    description:
      "Weekly optimization, monthly reporting, and expansion layers that compound your growth every single month.",
    subItems: [
      { name: "Weekly optimization", detail: "Continuous performance testing" },
      { name: "Monthly reporting", detail: "Clear revenue and ROI tracking" },
      { name: "Expansion layers", detail: "New channels as your market grows" },
    ],
  },
];

const PROOF_ENTRIES = [
  {
    label: "RV RENTAL · TEXAS",
    stat: "$41,085 revenue · 30 days · $900 ad spend",
    verification: "Live Google Ads account · Verified February 2026",
    imageSrc:
      "https://static.wixstatic.com/media/62f926_43b8f7b3df514f86a0b0f40ce177ba31~mv2.png",
    badge: "LIVE ACCOUNT",
  },
  {
    label: "BARBERSHOP · MONTREAL",
    stat: "90 new clients · 90 days · Page 1 Google",
    verification:
      "Custom site and booking funnel delivered · Last verified Q1 2026",
    imageSrc:
      "https://static.wixstatic.com/media/62f926_c777df5150064641aa49c6369141af8c~mv2.png",
    badge: "BUILT BY CLIENT GROWTH",
  },
  {
    label: "PAINTING · DFW",
    stat: "Conversion website built from scratch · Active calls within 14 days",
    verification: "Full site build · Absolute Painting · Delivered Q4 2025",
    imageSrc: null, // placeholder — incoming soon
    badge: null,
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const activeProof = PROOF_ENTRIES[activeIndex];

  return (
    <section
      id="services"
      className="w-full border-t"
      style={{
        background: "#0D0B09",
        borderColor: "#2A2318",
        paddingTop: "clamp(56px, 8vw, 96px)",
        paddingBottom: "clamp(56px, 8vw, 96px)",
      }}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            <div className="mb-12">
              <span
                className="block mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#D4A853",
                }}
              >
                The Acquisition System
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-cormorant), Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "#F0EAD6",
                  letterSpacing: "-0.01em",
                }}
              >
                The system that fills your calendar.
              </h2>
              <p
                className="mt-4 max-w-md"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(240,234,214,0.45)",
                }}
              >
                Not three separate services. One connected system. Each layer
                feeds the next. The longer it runs, the cheaper each call gets.
              </p>
            </div>

            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={service.id}
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t first:border-0",
                      isActive
                        ? "text-[#F0EAD6]"
                        : "text-[rgba(240,234,214,0.3)] hover:text-[rgba(240,234,214,0.6)]"
                    )}
                    style={{ borderColor: "rgba(212,168,83,0.12)" }}
                  >
                    <div
                      className="absolute left-[-16px] md:left-[-24px] top-0 bottom-0 w-[2px]"
                      style={{ background: "rgba(212,168,83,0.12)" }}
                    >
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute top-0 left-0 w-full origin-top"
                          style={{ background: "#D4A853" }}
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 9,
                        fontWeight: 500,
                        marginTop: 4,
                        opacity: 0.5,
                        fontVariantNumeric: "tabular-nums",
                        color: "#D4A853",
                      }}
                    >
                      /{service.id}
                    </span>

                    <div className="flex flex-col gap-2 flex-1">
                      <span
                        className={cn(
                          "transition-colors duration-500",
                          isActive ? "text-[#F0EAD6]" : ""
                        )}
                        style={{
                          fontFamily: "var(--font-cormorant), Georgia, serif",
                          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                          fontWeight: 300,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {service.title}
                      </span>

                      <p
                        className="max-w-sm pb-2"
                        style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: 14,
                          lineHeight: 1.65,
                          color: isActive
                            ? "rgba(240,234,214,0.5)"
                            : "rgba(240,234,214,0.25)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {service.description}
                      </p>

                      {/* Sub-items */}
                      <div
                        className="flex flex-col gap-1.5 mt-1"
                        style={{
                          opacity: isActive ? 1 : 0.35,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        {service.subItems.map((item) => (
                          <p
                            key={item.name}
                            style={{
                              fontFamily: "var(--font-dm-sans), sans-serif",
                              fontSize: 12,
                              lineHeight: 1.5,
                              color: "rgba(240,234,214,0.4)",
                            }}
                          >
                            <span style={{ color: "#D4A853" }}>·</span>{" "}
                            <span
                              style={{
                                color: isActive
                                  ? "rgba(240,234,214,0.6)"
                                  : "rgba(240,234,214,0.3)",
                                transition: "color 0.3s ease",
                              }}
                            >
                              {item.name}
                            </span>{" "}
                            <span style={{ color: "rgba(240,234,214,0.3)" }}>
                              — {item.detail}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Proof */}
          <div
            className="lg:col-span-7 order-1 lg:order-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {isMobile ? (
              /* Mobile: show all three stacked */
              <div className="flex flex-col gap-8">
                {PROOF_ENTRIES.map((entry, i) => (
                  <ProofCard key={i} entry={entry} />
                ))}
              </div>
            ) : (
              /* Desktop: sticky + dynamic swap */
              <div style={{ position: "sticky", top: 120 }}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <ProofCard entry={activeProof} />
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProofCard({
  entry,
}: {
  entry: (typeof PROOF_ENTRIES)[number];
}) {
  return (
    <div>
      {/* Label */}
      <p
        style={{
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#D4A853",
        }}
      >
        {entry.label}
      </p>

      {/* Stat line */}
      <p
        style={{
          fontSize: 18,
          color: "rgba(240,234,214,0.95)",
          fontWeight: 500,
          marginTop: 8,
        }}
      >
        {entry.stat}
      </p>

      {/* Verification */}
      <p
        style={{
          fontSize: 12,
          color: "rgba(240,234,214,0.4)",
          fontStyle: "italic",
          marginTop: 4,
        }}
      >
        {entry.verification}
      </p>

      {/* Image or placeholder */}
      {entry.imageSrc ? (
        <div className="relative" style={{ marginTop: 16 }}>
          <img
            src={entry.imageSrc}
            alt={entry.label}
            style={{
              width: "100%",
              borderRadius: 8,
              border: "1px solid rgba(212,168,83,0.2)",
              display: "block",
            }}
          />
          {entry.badge && (
            <span
              style={{
                position: "absolute",
                top: 12,
                left: 12,
                background: "#D4A853",
                color: "#0D0B09",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 8px",
                borderRadius: 4,
                lineHeight: 1.3,
              }}
            >
              {entry.badge}
            </span>
          )}
        </div>
      ) : (
        /* Placeholder card */
        <div
          style={{
            marginTop: 16,
            background: "rgba(212,168,83,0.06)",
            border: "1px solid rgba(212,168,83,0.15)",
            borderRadius: 8,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "rgba(240,234,214,0.3)",
              fontSize: 13,
              fontStyle: "italic",
            }}
          >
            {/* JUAN: replace placeholder with real screenshot when ready */}
            Incoming soon
          </span>
        </div>
      )}
    </div>
  );
}

export default VerticalTabs;
