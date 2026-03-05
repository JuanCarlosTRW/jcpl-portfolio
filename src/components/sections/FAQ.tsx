"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/context/LocaleContext";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <ChevronDown
      aria-hidden
      className={cn(
        "w-5 h-5 shrink-0 text-sv-text-muted transition-transform duration-200",
        open && "rotate-180"
      )}
    />
  );
}

export default function FAQ() {
  const t = useTranslations();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const reduced = usePrefersReducedMotionSafe();

  const faqBooking = t("faqBooking") as {
    heading: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaEmail: string;
  };

  const toggle = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? null : i)),
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, i: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle(i);
      }
    },
    [toggle]
  );

  return (
    <SectionWrapper id="faq" variant="alt">
      <div className="grid gap-10 lg:grid-cols-[1fr,340px] lg:gap-14">
        {/* Left: FAQ accordion */}
        <div>
          <Reveal>
            <h2 className="text-[clamp(28px,3.5vw,40px)] font-[700] text-white leading-[1.15] tracking-[-0.02em] mb-8">
              {faqBooking.heading}
            </h2>
          </Reveal>

          <div role="list" className="space-y-0">
            {faqBooking.items.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <Reveal key={i} delay={0.02 * i}>
                  <div
                    role="listitem"
                    className="border-b border-[rgba(255,255,255,0.08)]"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left group"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className="text-[15px] md:text-[16px] font-[500] text-white group-hover:text-sv-primary transition-colors pr-4">
                        {item.question}
                      </span>
                      <ChevronIcon open={isOpen} />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          role="region"
                          initial={reduced ? false : { height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: reduced ? 0 : 0.25,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 md:pb-5 pr-8">
                            <p className="text-[14px] md:text-[15px] text-sv-text-sub leading-[1.7]">
                              {item.answer}
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

        {/* Right: CTA card */}
        <Reveal delay={0.15} className="lg:sticky lg:top-24 self-start">
          <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-sv-elevated p-6 md:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
            <h3 className="text-[20px] md:text-[22px] font-[700] text-white leading-tight mb-3">
              {faqBooking.ctaTitle}
            </h3>
            <p className="text-[15px] text-sv-text-sub leading-[1.6] mb-6">
              {faqBooking.ctaBody}
            </p>
            <Link
              href="#book-call"
              className="flex items-center justify-center w-full py-3.5 px-5 rounded-lg bg-sv-primary text-white font-[600] text-[15px] hover:bg-sv-primary-hov transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              {faqBooking.ctaButton}
            </Link>
            <p className="mt-4 text-[13px] text-sv-text-muted flex items-center justify-center gap-2">
              <Mail className="w-3.5 h-3.5" aria-hidden />
              <a
                href={`mailto:${faqBooking.ctaEmail}`}
                className="hover:text-sv-primary transition-colors"
              >
                {faqBooking.ctaEmail}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
