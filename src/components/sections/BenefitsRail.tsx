"use client";

import { useRef, useCallback } from "react";
import { useTranslations } from "@/context/LocaleContext";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/motion/Reveal";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CARD_WIDTH = 300;
const GAP = 24;

function BenefitCardArt({ index }: { index: number }) {
  const gradients = [
    "from-sv-primary/30 via-sv-elevated to-sv-base",
    "from-sv-primary/20 via-sv-soft to-sv-base",
    "from-sv-primary/25 via-sv-elevated to-sv-base",
    "from-sv-soft via-sv-primary/15 to-sv-base",
    "from-sv-primary/20 via-sv-elevated to-sv-base",
    "from-sv-elevated via-sv-primary/20 to-sv-base",
  ];
  return (
    <div
      className={cn(
        "h-[120px] w-full rounded-t-lg bg-gradient-to-br flex items-center justify-center",
        gradients[index % gradients.length]
      )}
      aria-hidden
    >
      <div
        className="w-12 h-12 rounded-lg border border-white/10 bg-white/5"
        style={{
          background:
            "linear-gradient(135deg, rgba(43,90,140,0.4) 0%, rgba(18,40,69,0.6) 100%)",
        }}
      />
    </div>
  );
}

export default function BenefitsRail() {
  const t = useTranslations();
  const scrollRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotionSafe();

  const cards = [
    {
      title: t<string>("benefits.card1Title"),
      description: t<string>("benefits.card1Desc"),
    },
    {
      title: t<string>("benefits.card2Title"),
      description: t<string>("benefits.card2Desc"),
    },
    {
      title: t<string>("benefits.card3Title"),
      description: t<string>("benefits.card3Desc"),
    },
    {
      title: t<string>("benefits.card4Title"),
      description: t<string>("benefits.card4Desc"),
    },
    {
      title: t<string>("benefits.card5Title"),
      description: t<string>("benefits.card5Desc"),
    },
    {
      title: t<string>("benefits.card6Title"),
      description: t<string>("benefits.card6Desc"),
    },
  ];

  const scroll = useCallback(
    (dir: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;
      const step = CARD_WIDTH + GAP;
      el.scrollBy({
        left: dir === "left" ? -step : step,
        behavior: reduced ? "instant" : "smooth",
      });
    },
    [reduced]
  );

  return (
    <SectionWrapper id="benefits" variant="default">
      <Reveal className="text-center mb-10 md:mb-12">
        <SectionLabel label={t<string>("benefits.eyebrow")} className="mb-4" />
        <h2 className="text-[clamp(28px,4vw,44px)] font-[800] text-white leading-[1.12] tracking-[-0.02em] max-w-2xl mx-auto">
          {t<string>("benefits.headline")}
        </h2>
        <p className="mt-4 text-sv-text-sub text-[16px] md:text-[17px] leading-[1.65] max-w-xl mx-auto">
          {t<string>("benefits.paragraph")}
        </p>
      </Reveal>

      <Reveal>
        <div className="relative -mx-4 md:-mx-6">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide py-2 px-4 md:px-6"
            style={{
              scrollSnapType: "x mandatory",
              scrollPaddingInline: "var(--container-px, 24px)",
            }}
          >
            {cards.map((card, i) => (
              <article
                key={i}
                className="flex-shrink-0 w-[280px] sm:w-[300px] rounded-xl border border-[rgba(255,255,255,0.08)] bg-sv-surface overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[rgba(43,90,140,0.35)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-sv-primary/50"
                style={{ scrollSnapAlign: "start" }}
              >
                <BenefitCardArt index={i} />
                <div className="p-5">
                  <h3 className="text-[17px] font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-sv-text-sub leading-[1.55]">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-6" aria-hidden="true">
            <button
              type="button"
              onClick={() => scroll("left")}
              aria-label="Previous cards"
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-sv-surface flex items-center justify-center text-sv-text-muted hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              aria-label="Next cards"
              className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.15)] bg-sv-surface flex items-center justify-center text-sv-text-muted hover:text-white hover:border-[rgba(255,255,255,0.3)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sv-primary"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
