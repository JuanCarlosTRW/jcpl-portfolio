"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { servicesFAQ } from "@/lib/content";
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
      className={`shrink-0 text-sv-primary transition-transform duration-300 ${
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

export default function ServicesFAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = useCallback(
    (i: number) => {
      setActiveIndex((prev) => (prev === i ? null : i));
      trackEvent("services_faq_toggle", { data: { question: servicesFAQ[i].question } });
    },
    []
  );

  return (
    <div>
      <Reveal className="text-center mb-10">
        <SectionLabel label="FAQ" className="mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Questions Buyers Ask Before Committing.
        </h2>
        <p className="mt-3 text-sm text-sv-text-sub max-w-lg mx-auto">
          Straight answers. No fluff.
        </p>
      </Reveal>

      <div className="max-w-2xl mx-auto space-y-3" role="list">
        {servicesFAQ.map((faq, i) => {
          const isOpen = activeIndex === i;
          return (
            <Reveal key={i} delay={0.03 * i}>
              <div
                role="listitem"
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-[rgba(212,168,83,0.25)] bg-[#1E1A14] shadow-[0_4px_24px_rgba(212,168,83,0.04)]"
                    : "border-[rgba(255,255,255,0.06)] bg-sv-surface hover:border-[rgba(255,255,255,0.1)]"
                } ${"featured" in faq && faq.featured ? "ring-1 ring-emerald-500/20" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`sfaq-answer-${i}`}
                >
                  <span
                    className={`text-[0.95rem] font-semibold leading-snug ${
                      isOpen ? "text-white" : "text-sv-text-sub"
                    } transition-colors duration-200`}
                  >
                    {faq.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`sfaq-answer-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="h-px bg-[rgba(255,255,255,0.04)] mb-4" />
                        <p className="text-sm text-sv-text-sub leading-relaxed">
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
