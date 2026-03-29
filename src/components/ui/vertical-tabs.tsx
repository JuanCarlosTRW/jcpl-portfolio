"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      "Conversion-first websites, persuasion-driven copy, and AI voice agents that turn traffic into booked calls — automatically.",
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
                What Drives Qualified Calls
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
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-7 flex flex-col justify-end h-full order-1 lg:order-2">
            <div
              className="relative group/gallery"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                className="relative aspect-[4/5] md:aspect-[4/3] lg:aspect-[16/11] overflow-hidden"
                style={{
                  border: "1px solid rgba(212,168,83,0.12)",
                  background: "rgba(13,11,9,0.5)",
                }}
              >
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
                      src={SERVICES[activeIndex].image}
                      alt={SERVICES[activeIndex].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 block"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all active:scale-90"
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
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-all active:scale-90"
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
