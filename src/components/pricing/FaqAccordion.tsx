"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { pricingFaqs } from "@/lib/pricing";
import { Reveal } from "@/components/motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { trackEvent } from "@/lib/analytics";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`shrink-0 text-[#2563EB] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PricingFaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = useCallback((i: number) => {
    setActiveIndex((prev) => (prev === i ? null : i));
    trackEvent("services_faq_toggle", {
      data: { question: pricingFaqs[i].question },
    });
  }, []);

  return (
    <div className="mt-20">
      <Reveal className="text-center mb-10">
        <SectionLabel label="FAQ" className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm text-[#E8EDF5] max-w-lg mx-auto">
          Straight answers before you commit.
        </p>
      </Reveal>

      <div className="max-w-2xl mx-auto space-y-3" role="list">
        {pricingFaqs.map((faq, i) => {
          const isOpen = activeIndex === i;
          return (
            <Reveal key={i} delay={0.03 * i}>
              <div
                role="listitem"
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[rgba(37,99,235,0.25)] bg-[#0D1A2D] shadow-[0_4px_24px_rgba(37,99,235,0.04)]"
                    : "border-[rgba(255,255,255,0.06)] bg-[#0A1628] hover:border-[rgba(255,255,255,0.1)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#2563EB]"
                  aria-expanded={isOpen}
                  aria-controls={`pricing-faq-panel-${i}`}
                >
                  <span
                    className={`text-[0.95rem] font-semibold leading-snug transition-colors duration-200 ${
                      isOpen
                        ? "text-white"
                        : "text-[#E8EDF5]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`pricing-faq-panel-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="h-px bg-[rgba(255,255,255,0.04)] mb-4" />
                        <p className="text-sm text-[#8899BB] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
