"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { useTranslations } from "@/context/LocaleContext";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <ChevronDown
      aria-hidden
      className={cn(
        "w-5 h-5 shrink-0 transition-transform duration-200",
        open && "rotate-180"
      )}
      style={{ color: "#756D63" }}
    />
  );
}

export default function FAQ() {
  const t = useTranslations();
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0, 4]));
  const reduced = usePrefersReducedMotionSafe();

  const faqBooking = t("faqBooking") as {
    heading: string;
    headlineItalic?: string;
    supportingLine: string;
    items: Array<{ question: string; answer: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
    ctaEmail: string;
    ctaEmailLabel: string;
  };

  const toggle = useCallback(
    (i: number) => setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i); else next.add(i);
      return next;
    }),
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

  const headlineItalic = faqBooking.headlineItalic ?? "";
  const headingParts = headlineItalic
    ? faqBooking.heading.split(headlineItalic)
    : [faqBooking.heading];

  return (
    <SectionWrapper id="faq" variant="alt" className="py-16 md:py-24"
      style={{ background: "#1A1510" }}>
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10 lg:grid lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
        {/* Mobile: order 1=heading, 2=CTA, 3=accordion. Desktop: left col=heading+accordion, right col=CTA */}
        {/* Block 1: Heading + supporting */}
        <div className="order-1 lg:col-start-1 lg:row-start-1">
          <Reveal>
            <h2 className="text-[clamp(32px,4vw,48px)] font-[700] text-white leading-[1.15] tracking-[-0.02em] mb-3">
              Every question I hear before someone signs. Answered.
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.5] mb-8 lg:mb-0" style={{ color: "#A69D8D" }}>
              {faqBooking.supportingLine}
            </p>
          </Reveal>
        </div>

        {/* Block 2: CTA card — simplified, no button */}
        <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-start">
          <div
            className="relative rounded-2xl overflow-hidden lift-card"
            style={{
              background: "#1A1510",
              borderTop: "2px solid rgba(212,168,83,0.32)",
              borderLeft: "1px solid #2A2318",
              borderRight: "1px solid #2A2318",
              borderBottom: "1px solid #2A2318",
              borderRadius: 16,
              padding: "28px",
            }}
          >
            <div className="p-6 md:p-8">
              <h3 className="text-[1.25rem] font-bold text-white leading-tight mb-2">See how other businesses have used this</h3>
              <p className="text-[0.9rem] leading-[1.6] mb-4" style={{ color: "#D2C9B8" }}>
                Same system. Different industries. Every result verified against live account data.
              </p>
              <p className="text-[0.8rem] leading-[1.6] mb-6" style={{ color: "rgba(240,234,214,0.5)" }}>
                $41,085 from $900 in ad spend. SEO campaigns active. Custom websites delivered.
              </p>
              <a
                href="/results"
                style={{
                  fontSize: "0.875rem",
                  color: "#D4A853",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 180ms ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#F5F0E8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#D4A853"; }}
              >
                See all client results &rarr;
              </a>
              <div className="mt-6">
                <p className="text-[13px]" style={{ color: "#A69D8D" }}>
                  Prefer email?{" "}
                  <a
                    href="mailto:juan@clientgrowth.ca"
                    className="font-medium underline underline-offset-2"
                    style={{ color: "#D4A853" }}
                  >
                    juan@clientgrowth.ca
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: Accordion */}
        <div className="order-3 lg:col-start-1 lg:row-start-2">
          <div role="list" className="space-y-0">
            {faqBooking.items.map((item, i) => {
              const isOpen = openIndices.has(i);
              return (
                <Reveal key={i} delay={0.02 * i}>
                  <div
                    role="listitem"
                    className="border-b"
                    style={{ borderColor: "#2A2318" }}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left group hover:bg-white/[0.03] transition-colors rounded-sm -mx-1 px-1 min-h-[44px]"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span className="text-[15px] md:text-[16px] font-[500] text-white pr-4 transition-colors" style={{ color: "#F5F0E8" }}>
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
                            <p className="text-[14px] md:text-[15px] leading-[1.7]" style={{ color: "#D2C9B8" }}>
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
      </div>
    </SectionWrapper>
  );
}
