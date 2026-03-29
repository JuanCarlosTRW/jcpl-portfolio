"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    image:
      "https://static.wixstatic.com/media/62f926_43b8f7b3df514f86a0b0f40ce177ba31~mv2.png",
    badge: "LIVE ACCOUNT",
    label: "RV RENTAL · TEXAS",
    stat: "$41,085 revenue · 30 days · $900 ad spend",
    verification: "Live Google Ads account · Verified February 2026",
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
    image:
      "https://static.wixstatic.com/media/62f926_c777df5150064641aa49c6369141af8c~mv2.png",
    badge: "BUILT BY CLIENT GROWTH",
    label: "BARBERSHOP · MONTREAL",
    stat: "90 new clients · 90 days · Page 1 Google",
    verification:
      "Custom site and booking funnel delivered · Last verified Q1 2026",
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
    image: null, // placeholder — incoming soon
    badge: null,
    label: "PAINTING · DFW",
    stat: "Conversion website built from scratch · Active calls within 14 days",
    verification: "Full site build · Absolute Painting · Delivered Q4 2025",
  },
];

const AUTO_PLAY_DURATION = 5000;

export function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
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

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const active = SERVICES[activeIndex];

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
            <div className="space-y-1 mb-12">
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
              <span
                className="block ml-0.5"
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: "#D4A853",
                  marginTop: 8,
                }}
              >
                (THE ACQUISITION SYSTEM)
              </span>
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
                      className="tabular-nums"
                      style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 9,
                        fontWeight: 500,
                        marginTop: 4,
                        opacity: 0.5,
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
                                color: "rgba(240,234,214,0.5)",
                              }}
                            >
                              {service.description}
                            </p>

                            {/* Sub-items */}
                            <div className="flex flex-col gap-1.5 mt-1">
                              {service.subItems.map((item) => (
                                <p
                                  key={item.name}
                                  style={{
                                    fontFamily:
                                      "var(--font-dm-sans), sans-serif",
                                    fontSize: 12,
                                    lineHeight: 1.5,
                                    color: "rgba(240,234,214,0.4)",
                                  }}
                                >
                                  <span style={{ color: "#D4A853" }}>·</span>{" "}
                                  <span
                                    style={{
                                      color: "rgba(240,234,214,0.6)",
                                    }}
                                  >
                                    {item.name}
                                  </span>{" "}
                                  <span
                                    style={{ color: "rgba(240,234,214,0.3)" }}
                                  >
                                    — {item.detail}
                                  </span>
                                </p>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Proof info overlay — top */}
              <div
                className="mb-3"
                style={{ minHeight: 56 }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.25 }}
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

              {/* Image container */}
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "16 / 11",
                  borderRadius: 12,
                  border: "1px solid rgba(212,168,83,0.12)",
                  background: "rgba(13,11,9,0.5)",
                }}
              >
                {active.image ? (
                  <AnimatePresence
                    initial={false}
                    custom={direction}
                    mode="popLayout"
                  >
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        y: { type: "spring", stiffness: 260, damping: 32 },
                        opacity: { duration: 0.4 },
                      }}
                      className="absolute inset-0 w-full h-full cursor-pointer"
                      onClick={handleNext}
                    >
                      <img
                        src={active.image}
                        alt={active.title}
                        className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105 block"
                      />

                      {/* Badge overlay */}
                      {active.badge && (
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
                            zIndex: 10,
                          }}
                        >
                          {active.badge}
                        </span>
                      )}

                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  /* Placeholder for entry 03 */
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: "rgba(212,168,83,0.06)",
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

                {/* Nav arrows */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all active:scale-90"
                    style={{
                      background: "rgba(13,11,9,0.8)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(212,168,83,0.2)",
                    }}
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 text-[#F0EAD6]" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all active:scale-90"
                    style={{
                      background: "rgba(13,11,9,0.8)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(212,168,83,0.2)",
                    }}
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-[#F0EAD6]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
