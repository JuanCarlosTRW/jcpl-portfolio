"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
  monogram?: string;
}

interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

function SliderArrow({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "background 0.2s ease",
        flexShrink: 0,
      }}
      onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
      onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        {direction === "left" ? (
          <path d="M11 4L6 9L11 14" stroke="rgba(240,234,214,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M7 4L12 9L7 14" stroke="rgba(240,234,214,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

export const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Mouse drag to scroll (mobile swipe)
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.clientX;
    scrollStart.current = el.scrollLeft;
    el.setPointerCapture(e.pointerId);
    el.style.scrollSnapType = "none";
    el.style.cursor = "grabbing";
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = scrollStart.current - (e.clientX - startX.current);
  }, []);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const el = scrollRef.current;
    if (!el) return;
    el.releasePointerCapture(e.pointerId);
    el.style.scrollSnapType = "x mandatory";
    el.style.cursor = "";
  }, []);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full py-16 sm:py-24" style={{ background: "#0D0B09" }}>
      <div className="container mx-auto max-w-6xl px-4 text-center">
        <h2
          className="text-3xl font-bold tracking-tight sm:text-4xl"
          style={{ color: "#F5F0E8" }}
        >
          {title}
        </h2>
        <p
          className="mx-auto mt-4 max-w-2xl text-lg"
          style={{ color: "#A69D8D" }}
        >
          {subtitle}
        </p>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          className="testimonial-track mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab select-none md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:cursor-default"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            padding: "0 20px",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {testimonials.slice(0, 4).map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card relative overflow-hidden rounded-lg shadow-sm snap-start shrink-0 md:shrink md:snap-align-none"
              style={{
                background: "#1E1A14",
                border: "1px solid #2A2318",
                minWidth: 280,
              }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "3/4" }}
              >
                {testimonial.monogram ? (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "#1A1510" }}
                  >
                    <div
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: "50%",
                        background: "#1A1510",
                        border: "1px solid rgba(212,168,83,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-cormorant), Georgia, serif",
                        fontSize: 32,
                        color: "#D4A853",
                        fontWeight: 600,
                      }}
                    >
                      {testimonial.monogram}
                    </div>
                  </div>
                ) : (
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover object-top pointer-events-none"
                    style={{ borderRadius: "12px 12px 0 0" }}
                    loading="lazy"
                    draggable={false}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-left text-white">
                <span
                  aria-hidden="true"
                  style={{
                    display: "block",
                    fontSize: 32,
                    color: "#D4A853",
                    opacity: 0.6,
                    fontFamily: "Georgia, serif",
                    lineHeight: 1,
                    marginBottom: 12,
                  }}
                >
                  {"\u201C"}
                </span>
                <blockquote className="text-base font-medium leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold">
                    {testimonial.name},
                    <span className="ml-1 text-white/60">
                      {testimonial.role}
                    </span>
                  </p>
                </figcaption>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered arrows — mobile only (desktop is a grid) */}
        <div className="flex md:hidden justify-center items-center gap-4 mt-6">
          <SliderArrow
            direction="left"
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const next = Math.max(0, activeIdx - 1);
              setActiveIdx(next);
              const child = el.children[next] as HTMLElement;
              child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
          />
          <SliderArrow
            direction="right"
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              const max = Math.min(testimonials.length - 1, activeIdx + 1);
              setActiveIdx(max);
              const child = el.children[max] as HTMLElement;
              child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
          />
        </div>
      </div>
    </section>
  );
};
