"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useTranslations, useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/translations";

export default function FAQ() {
  const t = useTranslations();
  const { locale } = useLocale();
  const hp = translations[locale].homepage;

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

  return (
    <section
      id="faq"
      className="py-16 md:py-24"
      style={{ background: "#1A1510" }}
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.15] tracking-[-0.02em] mb-3"
            style={{
              color: "#F5F0E8",
              fontFamily: "var(--font-cormorant), Georgia, serif",
            }}
          >
            {hp.faqHeading}{" "}
            <em style={{ color: "#D4A853" }}>{hp.faqHeadingItalic}</em>
          </h2>
          <p
            className="text-[16px] md:text-[17px] leading-[1.5]"
            style={{ color: "#A69D8D" }}
          >
            {faqBooking.supportingLine}
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12">
          <Accordion
            type="multiple"
            defaultValue={["item-0", "item-4"]}
            className="w-full rounded-2xl border px-6 py-3 sm:px-8"
            style={{
              background: "#1E1A14",
              borderColor: "#2A2318",
            }}
          >
            {faqBooking.items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-dotted"
                style={{ borderColor: "#2A2318" }}
              >
                <AccordionTrigger
                  className="cursor-pointer text-[15px] md:text-base font-medium hover:no-underline py-5"
                  style={{ color: "#F5F0E8" }}
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p
                    className="text-[14px] md:text-[15px] leading-[1.7]"
                    style={{ color: "#D2C9B8" }}
                  >
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA row */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[14px]" style={{ color: "#A69D8D" }}>
              {hp.faqStillQuestions}{" "}
              <Link
                href="/apply"
                className="font-medium hover:underline"
                style={{ color: "#D4A853" }}
              >
                {hp.faqApplyCta}
              </Link>
            </p>
            <p className="text-[13px]" style={{ color: "#A69D8D" }}>
              {hp.faqPreferEmail}{" "}
              <a
                href={`mailto:${faqBooking.ctaEmail}`}
                className="font-medium underline underline-offset-2"
                style={{ color: "#D4A853" }}
              >
                {faqBooking.ctaEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
