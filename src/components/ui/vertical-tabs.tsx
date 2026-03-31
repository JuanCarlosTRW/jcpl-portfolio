"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
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
    image: "/images/proof/triple-w-ads-dashboard.png",
    badge: "LIVE ACCOUNT",
    label: "RV RENTAL · TEXAS",
    stat: "$41,085 revenue · 30 days · $900 ad spend",
    verification: "Live Google Ads account · Verified February 2026",
  },
  {
    id: "02",
    title: "Convert the click into a call",
    description:
      "A site built for your niche, with copy that speaks to your buyer's exact problem and one job: make them call. No generic templates. No brochure pages. Every element tested against one metric: did the phone ring.",
    subItems: [
      { name: "Conversion-first design", detail: "Built for your niche, not from a template" },
      { name: "One clear CTA", detail: "Every page engineered to produce a call" },
      { name: "Mobile-optimized", detail: "70% of your buyers are on their phone" },
    ],
    /* TODO: Juan — take a full-width desktop screenshot of culturemtl.ca and save to /public/images/proof/culture-barbershop-site.png */
    image: null as string | null,
    badge: "BUILT BY CLIENT GROWTH",
    label: "BARBERSHOP · MONTREAL",
    stat: "Page 1 Google · Under 60 days · Competitive market",
    verification: "Custom conversion site · Built and launched by Client Growth",
  },
  {
    id: "03",
    title: "Keep the pipeline full",
    description:
      "Weekly optimization. Monthly revenue reporting. Every campaign refined based on what is actually producing calls. Not impressions. Not clicks. The system gets cheaper every month it runs.",
    subItems: [
      { name: "Weekly optimization loop", detail: "Continuous performance testing" },
      { name: "Monthly revenue reports", detail: "Clear revenue and ROI tracking" },
      { name: "Cost per call drops over time", detail: "System compounds as it learns" },
    ],
    image: "/images/proof/elite-calendar.png",
    badge: "ACTIVE CLIENT CALENDAR",
    label: "BARBERSHOP · MONTREAL",
    stat: "90 new clients · 90 days · Built from zero online presence",
    verification: "Full acquisition system · Calendar fully booked since launch",
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, AUTO_PLAY_DURATION);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  const active = SERVICES[activeIndex];

  return (
    <section
      id="services"
      className="w-full border-t"
      style={{
        background: "#0D0B09",
        borderColor: "#2A2318",
        paddingTop: "clamp(64px, 8vw, 120px)",
        paddingBottom: "clamp(64px, 8vw, 120px)",
      }}
    >
      <div className="w-full px-4 md:px-8 lg:px-12 xl:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pt-4">
            {/* Section header */}
            <div className="mb-12">
              <span
                className="block"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#D4A853",
                  marginBottom: 16,
                }}
              >
                THE ACQUISITION SYSTEM
              </span>
              <h2
                className="tracking-tight text-balance"
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
            </div>

            {/* Entries */}
            <div className="flex flex-col space-y-0">
              {SERVICES.map((service, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={service.id}>
                    <button
                      onClick={() => handleTabClick(index)}
                      className={cn(
                        "group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-400 border-t first:border-0 w-full",
                        isActive
                          ? "text-[#F0EAD6]"
                          : "text-[rgba(240,234,214,0.3)] hover:text-[rgba(240,234,214,0.6)]"
                      )}
                      style={{ borderColor: "rgba(212,168,83,0.12)" }}
                    >
                      {/* Gold progress indicator */}
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

                      {/* Entry number */}
                      <span
                        className="tabular-nums"
                        style={{
                          fontFamily: "var(--font-dm-sans), sans-serif",
                          fontSize: 9,
                          fontWeight: 500,
                          marginTop: 4,
                          color: "#D4A853",
                          opacity: 0.7,
                        }}
                      >
                        /{service.id}
                      </span>

                      <div className="flex flex-col gap-2 flex-1">
                        {/* Title */}
                        <span
                          className="transition-colors duration-400"
                          style={{
                            fontFamily: "var(--font-cormorant), Georgia, serif",
                            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                            fontWeight: 300,
                            letterSpacing: "-0.01em",
                            color: isActive ? "#F0EAD6" : "rgba(240,234,214,0.35)",
                            transition: "color 400ms ease",
                          }}
                        >
                          {service.title}
                        </span>

                        {/* Expandable content */}
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{
                                duration: 0.3,
                                ease: [0.23, 1, 0.32, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <p
                                className="max-w-sm pb-2"
                                style={{
                                  fontFamily: "var(--font-dm-sans), sans-serif",
                                  fontSize: 14,
                                  lineHeight: 1.65,
                                  color: "rgba(240,234,214,0.55)",
                                }}
                              >
                                {service.description}
                              </p>

                              {/* Sub-items / tags */}
                              <div className="flex flex-col gap-1.5 mt-1">
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
                                    <span style={{ color: "rgba(240,234,214,0.6)" }}>
                                      {item.name}
                                    </span>{" "}
                                    <span style={{ color: "rgba(240,234,214,0.3)" }}>
                                      · {item.detail}
                                    </span>
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>

                    {/* Mobile inline image — shown below each entry on mobile only */}
                    <div className="lg:hidden">
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="mb-4"
                        >
                          {/* Mobile stats */}
                          <div className="mb-3">
                            <p
                              style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                fontSize: 11,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#D4A853",
                              }}
                            >
                              {service.label}
                            </p>
                            <p
                              style={{
                                fontSize: 13,
                                color: "rgba(240,234,214,0.85)",
                                fontWeight: 500,
                                marginTop: 3,
                              }}
                            >
                              {service.stat}
                            </p>
                          </div>

                          {/* Mobile image */}
                          <div
                            className="relative overflow-hidden"
                            style={{
                              borderRadius: 8,
                              border: "1px solid rgba(212,168,83,0.08)",
                              aspectRatio: "16 / 11",
                            }}
                          >
                            {service.image ? (
                              <>
                                <Image
                                  src={service.image}
                                  alt={service.title}
                                  fill
                                  sizes="100vw"
                                  className="object-cover object-top"
                                />
                                {service.badge && (
                                  <span
                                    style={{
                                      position: "absolute",
                                      top: 10,
                                      left: 10,
                                      background: "#D4A853",
                                      color: "#0D0B09",
                                      fontSize: 10,
                                      fontWeight: 600,
                                      fontFamily: "var(--font-dm-sans), sans-serif",
                                      padding: "3px 8px",
                                      borderRadius: 4,
                                      lineHeight: 1.3,
                                      zIndex: 10,
                                    }}
                                  >
                                    {service.badge}
                                  </span>
                                )}
                              </>
                            ) : (
                              <div
                                className="absolute inset-0 flex items-center justify-center"
                                style={{ background: "rgba(212,168,83,0.04)" }}
                              >
                                <span
                                  style={{
                                    color: "rgba(240,234,214,0.25)",
                                    fontSize: 13,
                                    fontStyle: "italic",
                                  }}
                                >
                                  Client site screenshot loading
                                </span>
                              </div>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sticky Image Gallery — desktop only */}
          <div className="lg:col-span-7 hidden lg:flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="sticky"
              style={{ top: "20vh" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Stats overlay — top */}
              <div className="mb-3" style={{ minHeight: 56 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "#D4A853",
                      }}
                    >
                      {active.label}
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        color: "rgba(240,234,214,0.9)",
                        fontWeight: 500,
                        marginTop: 4,
                      }}
                    >
                      {active.stat}
                    </p>
                    <p
                      style={{
                        fontSize: 11,
                        color: "rgba(240,234,214,0.35)",
                        fontStyle: "italic",
                        marginTop: 2,
                      }}
                    >
                      {active.verification}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Image container with crossfade */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "16 / 11",
                  borderRadius: 8,
                  border: "1px solid rgba(212,168,83,0.08)",
                  background: "rgba(13,11,9,0.5)",
                }}
              >
                {/* Render all images, crossfade via opacity */}
                {SERVICES.map((service, index) => (
                  <div
                    key={service.id}
                    className="absolute inset-0 w-full h-full"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transition: "opacity 300ms ease-in-out",
                      zIndex: activeIndex === index ? 1 : 0,
                    }}
                  >
                    {service.image ? (
                      <>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 58vw, 100vw"
                          className="object-cover object-top"
                          priority={index === 0}
                        />

                        {/* Badge overlay */}
                        {service.badge && (
                          <span
                            style={{
                              position: "absolute",
                              top: 12,
                              left: 12,
                              background: "#D4A853",
                              color: "#0D0B09",
                              fontSize: 11,
                              fontWeight: 600,
                              fontFamily: "var(--font-dm-sans), sans-serif",
                              padding: "4px 10px",
                              borderRadius: 4,
                              lineHeight: 1.3,
                              zIndex: 10,
                            }}
                          >
                            {service.badge}
                          </span>
                        )}

                        {/* Bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                      </>
                    ) : (
                      /* Placeholder for missing screenshot */
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: "rgba(212,168,83,0.04)",
                          border: "1px solid rgba(212,168,83,0.12)",
                          borderRadius: 8,
                        }}
                      >
                        {/* TODO: Juan — add screenshot of culturemtl.ca. Save to /public/images/proof/culture-barbershop-site.png */}
                        <span
                          style={{
                            color: "rgba(240,234,214,0.25)",
                            fontSize: 13,
                            fontStyle: "italic",
                          }}
                        >
                          Client site screenshot loading
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
