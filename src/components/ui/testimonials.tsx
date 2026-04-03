"use client";

import { useRef, useState, useCallback, useEffect } from "react";
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

function SliderArrow({ direction, onClick, disabled }: { direction: "left" | "right"; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Scroll ${direction}`}
      disabled={disabled}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        background: disabled ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.08)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: disabled ? "default" : "pointer",
        transition: "background 0.2s ease",
        flexShrink: 0,
        opacity: disabled ? 0.3 : 1,
      }}
      onMouseOver={(e) => { if (!disabled) e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
      onMouseOut={(e) => { if (!disabled) e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
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

  // Sync activeIdx on scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;
      const scrollCenter = el.scrollLeft + el.offsetWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const dist = Math.abs(scrollCenter - childCenter);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIdx(closest);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Mouse drag to scroll
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

  const scrollTo = useCallback((idx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(testimonials.length - 1, idx));
    setActiveIdx(clamped);
    const child = el.children[clamped] as HTMLElement;
    child?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [testimonials.length]);

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
      <div className="mx-auto max-w-7xl px-4 text-center">
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

        {/* Slider track */}
        <div className="relative mt-12">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory cursor-grab select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              paddingLeft: "max(20px, calc((100% - 1200px) / 2))",
              paddingRight: "max(20px, calc((100% - 1200px) / 2))",
            }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="relative overflow-hidden rounded-xl snap-center shrink-0"
                style={{
                  background: "#1E1A14",
                  border: "1px solid #2A2318",
                  width: "min(85vw, 340px)",
                }}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Owner photo */}
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
                      width={340}
                      height={453}
                      className="w-full h-full object-cover object-top pointer-events-none"
                      loading="lazy"
                      draggable={false}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Quote overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
                  <span
                    aria-hidden="true"
                    style={{
                      display: "block",
                      fontSize: 28,
                      color: "#D4A853",
                      opacity: 0.6,
                      fontFamily: "Georgia, serif",
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {"\u201C"}
                  </span>
                  <blockquote className="text-[15px] font-medium leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  <figcaption className="mt-3">
                    <p className="text-[14px] font-semibold">
                      {testimonial.name},
                      <span className="ml-1 text-white/60 font-normal">
                        {testimonial.role}
                      </span>
                    </p>
                  </figcaption>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation: arrows + dots */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <SliderArrow
              direction="left"
              disabled={activeIdx === 0}
              onClick={() => scrollTo(activeIdx - 1)}
            />

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => scrollTo(i)}
                  style={{
                    width: activeIdx === i ? 20 : 6,
                    height: 6,
                    borderRadius: 3,
                    background: activeIdx === i ? "#D4A853" : "rgba(212,168,83,0.25)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <SliderArrow
              direction="right"
              disabled={activeIdx === testimonials.length - 1}
              onClick={() => scrollTo(activeIdx + 1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
