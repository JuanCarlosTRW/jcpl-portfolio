"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
}

interface TestimonialSectionProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export const TestimonialSection = ({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Track active dot on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const child = el.firstElementChild as HTMLElement | null;
      if (!child) return;
      const gap = 16;
      const cardWidth = child.offsetWidth + gap;
      setActiveIdx(Math.round(el.scrollLeft / cardWidth));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse drag to scroll (desktop swipe)
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
    const dx = e.clientX - startX.current;
    el.scrollLeft = scrollStart.current - dx;
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

  const scrollTo = (idx: number) => {
    const el = scrollRef.current;
    if (!el || !el.children[idx]) return;
    (el.children[idx] as HTMLElement).scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

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

        {/* Horizontal slider — touch + mouse drag */}
        <div
          ref={scrollRef}
          className="testimonial-slider mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab select-none"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 4,
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="relative overflow-hidden rounded-lg shadow-sm snap-center shrink-0"
              style={{
                background: "#1E1A14",
                border: "1px solid #2A2318",
                width: "min(300px, 80vw)",
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
                <img
                  src={testimonial.imageSrc}
                  alt={testimonial.name}
                  className="w-full h-full object-cover object-top pointer-events-none"
                  style={{ borderRadius: "12px 12px 0 0" }}
                  draggable={false}
                />
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

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: i === activeIdx ? "#D4A853" : "#2A2318",
                transition: "background 200ms ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
