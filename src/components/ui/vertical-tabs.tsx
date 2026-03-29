"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    id: "01",
    title: "Attract",
    description:
      "Google Ads, Local SEO, and geo-targeted AI campaigns that put your business in front of the right people at the right time.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
  },
  {
    id: "02",
    title: "Convert",
    description:
      "Conversion-first websites, persuasion-driven copy, and AI voice agents that turn traffic into booked calls. Automatically.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: "03",
    title: "Compound",
    description:
      "Weekly optimization, monthly reporting, and expansion layers that compound your growth every single month.",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200",
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
                What drives qualified calls
              </h2>
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
                          color: isActive ? "rgba(240,234,214,0.5)" : "rgba(240,234,214,0.25)",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Stat Block */}
          <div className="lg:col-span-7 flex flex-col justify-center h-full order-1 lg:order-2">
            <div
              className="rounded-[14px] p-8 sm:p-10"
              style={{
                background: "#1A1714",
                border: "1px solid rgba(212,168,83,0.12)",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                  color: "#F0EAD6",
                  fontWeight: 600,
                  marginBottom: 32,
                }}
              >
                Three clients. Three industries. One system.
              </p>

              {/* RV Rental */}
              <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: "1px solid rgba(212,168,83,0.12)" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A853", marginBottom: 8, fontWeight: 600 }}>
                  RV RENTAL · TEXAS
                </p>
                <p style={{ fontSize: "1.0625rem", color: "#F5F0E8", fontWeight: 600, marginBottom: 4 }}>
                  $41,085 revenue · 30 days · $900 ad spend
                </p>
              </div>

              {/* Barbershop */}
              <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: "1px solid rgba(212,168,83,0.12)" }}>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A853", marginBottom: 8, fontWeight: 600 }}>
                  BARBERSHOP · MONTREAL
                </p>
                <p style={{ fontSize: "1.0625rem", color: "#F5F0E8", fontWeight: 600, marginBottom: 4 }}>
                  90 new clients · 90 days · Page 1 Google
                </p>
              </div>

              {/* Painting */}
              <div>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#D4A853", marginBottom: 8, fontWeight: 600 }}>
                  PAINTING · DFW
                </p>
                <p style={{ fontSize: "1.0625rem", color: "#F5F0E8", fontWeight: 600, marginBottom: 4 }}>
                  Pipeline built from zero · Active calls within 14 days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerticalTabs;
