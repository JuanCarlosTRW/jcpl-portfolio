"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import CTAButton from "@/components/ui/CTAButton";
import { Reveal } from "@/components/motion";
import { ctaCopy } from "@/lib/content";

type Slide = { image: string; caption: string };

type Project = {
  id: string;
  featured: boolean;
  tag: string;
  title: string;
  description: string;
  result: string;
  heroScreenshot: string;
  logo: string;
  liveUrl: string;
  slides: Slide[];
};

const websiteProjects: Project[] = [
  {
    id: "triple-w",
    featured: true,
    tag: "RV RENTAL · TEXAS",
    title: "Triple W Rentals",
    description:
      "Full acquisition system: conversion website, Google Ads funnel, and booking automation — built from scratch.",
    result: "$41,084 in revenue · 30 days · $900 ad spend",
    heroScreenshot: "",
    logo: "https://static.wixstatic.com/media/62f926_5c14016a71f74c77a7eedfa86309eadd~mv2.jpg",
    liveUrl: "https://triplewrentals.com",
    slides: [
      {
        image:
          "https://static.wixstatic.com/media/62f926_5c7a609ac5c143e48028810fda21af82~mv2.png",
        caption: "Google Ads campaign — $900 spend → $41,084 revenue",
      },
      { image: "", caption: "Conversion landing page" },
    ],
  },
  {
    id: "culture",
    featured: false,
    tag: "BARBERSHOP · MONTREAL",
    title: "Culture Barbershop",
    description:
      "Brand identity, conversion website, and local SEO foundation for a Montreal barbershop.",
    result: "Page 1 local SEO · Under 60 days",
    heroScreenshot: "",
    logo: "https://static.wixstatic.com/media/62f926_ca6524ec96fe4822a3da0d0481995989~mv2.png",
    liveUrl: "https://culturemtl.ca",
    slides: [
      { image: "", caption: "Homepage design" },
      { image: "", caption: "Booking flow" },
    ],
  },
];

type LB = { projectIdx: number; slideIdx: number } | null;

function hideOnError(e: React.SyntheticEvent<HTMLImageElement>) {
  (e.target as HTMLImageElement).style.display = "none";
}

export default function PortfolioShowcase() {
  const [lb, setLb] = useState<LB>(null);
  const touchStartX = useRef<number | null>(null);

  const openLb = useCallback((projectIdx: number) => {
    setLb({ projectIdx, slideIdx: 0 });
    document.body.style.overflow = "hidden";
  }, []);

  const closeLb = useCallback(() => {
    setLb(null);
    document.body.style.overflow = "";
  }, []);

  const prevSlide = useCallback(() => {
    setLb((prev) => {
      if (!prev || prev.slideIdx === 0) return prev;
      return { ...prev, slideIdx: prev.slideIdx - 1 };
    });
  }, []);

  const nextSlide = useCallback(() => {
    setLb((prev) => {
      if (!prev) return prev;
      const project = websiteProjects[prev.projectIdx];
      if (prev.slideIdx >= project.slides.length - 1) return prev;
      return { ...prev, slideIdx: prev.slideIdx + 1 };
    });
  }, []);

  useEffect(() => {
    if (!lb) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLb();
      else if (e.key === "ArrowRight") nextSlide();
      else if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lb, closeLb, nextSlide, prevSlide]);

  // Clean up scroll lock if component unmounts while lightbox is open
  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  const activeProject = lb !== null ? websiteProjects[lb.projectIdx] : null;
  const activeSlide =
    activeProject && lb !== null ? activeProject.slides[lb.slideIdx] : null;

  return (
    <SectionWrapper id="portfolio" variant="default">
      {/* Header */}
      <Reveal className="max-w-2xl mx-auto text-center mb-14 md:mb-16">
        <SectionLabel label="CUSTOM BUILD" className="mb-5" />
        <h2 className="text-[clamp(34px,4.5vw,52px)] font-[800] text-white leading-[1.15] tracking-[-0.025em] max-w-xl mx-auto">
          Built to Convert. Not to Impress.
        </h2>
        <p className="mt-5 text-sv-text-sub max-w-lg mx-auto leading-[1.75] text-[18px]">
          Every site I build is designed around one goal: qualified calls on
          your calendar.
        </p>
      </Reveal>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-5 max-w-5xl mx-auto">
        {websiteProjects.map((project, i) => (
          <Reveal key={project.id} delay={0.08 * i}>
            <button
              type="button"
              onClick={() => openLb(i)}
              className="group relative w-full text-left rounded-2xl overflow-hidden bg-sv-surface border border-[rgba(255,255,255,0.07)] hover:border-[rgba(37,99,235,0.35)] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-sv-primary focus-visible:outline-offset-2 cursor-pointer"
              aria-label={`View ${project.title} build`}
            >
              {/* Screenshot zone */}
              <div
                className={`relative overflow-hidden bg-sv-elevated ${
                  project.featured ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                {project.heroScreenshot && (
                  <img
                    src={project.heroScreenshot}
                    alt={`${project.title} website`}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={hideOnError}
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-white font-[600] text-[15px] border border-white/30 rounded-lg px-5 py-2.5 bg-white/10 backdrop-blur-sm">
                    View Build →
                  </span>
                </div>
                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-[600] uppercase tracking-[0.12em] text-white/70 bg-black/50 backdrop-blur-sm rounded px-2 py-1">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="h-7 w-auto object-contain rounded"
                    onError={hideOnError}
                  />
                  <span className="text-[15px] font-[700] text-white">
                    {project.title}
                  </span>
                </div>
                <p className="text-[13px] font-[400] leading-[1.6] opacity-[0.65] mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-[600] text-emerald-400">
                    {project.result}
                  </span>
                  <span className="text-[13px] font-[500] text-sv-primary opacity-80">
                    View Build →
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* CTA strip */}
      <Reveal delay={0.2}>
        <div className="mt-14 text-center">
          <p className="text-sm text-sv-text-sub mb-5">
            Ready to see what we can build for your business?
          </p>
          <CTAButton
            href={ctaCopy.href}
            variant="primary"
            size="md"
            eventName="portfolio_cta_click"
          >
            Apply for Growth Partnership
          </CTAButton>
        </div>
      </Reveal>

      {/* Lightbox */}
      {lb !== null && activeProject && activeSlide && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 transition-opacity duration-200"
          onClick={closeLb}
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return;
            const delta = e.changedTouches[0].clientX - touchStartX.current;
            touchStartX.current = null;
            if (delta > 50) prevSlide();
            else if (delta < -50) nextSlide();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title} — slide ${lb.slideIdx + 1} of ${activeProject.slides.length}`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLb}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors text-xl leading-none"
            aria-label="Close"
          >
            ×
          </button>

          {/* Prev arrow */}
          {lb.slideIdx > 0 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevSlide(); }}
              className="absolute left-3 md:left-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              ‹
            </button>
          )}

          {/* Next arrow */}
          {lb.slideIdx < activeProject.slides.length - 1 && (
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextSlide(); }}
              className="absolute right-3 md:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              ›
            </button>
          )}

          {/* Content box */}
          <div
            className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden bg-sv-elevated border border-[rgba(255,255,255,0.1)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Slide image */}
            <div className="relative aspect-[16/9] bg-sv-surface">
              {activeSlide.image && (
                <img
                  src={activeSlide.image}
                  alt={activeSlide.caption}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={hideOnError}
                />
              )}
            </div>

            {/* Caption + meta */}
            <div className="px-6 py-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-sv-text-muted mb-1">
                    {activeProject.tag}
                  </p>
                  <p className="text-[15px] font-[500] text-white opacity-[0.90]">
                    {activeSlide.caption}
                  </p>
                </div>
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[13px] font-[600] text-sv-primary hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Visit Live Site →
                </a>
              </div>

              {/* Dot indicators */}
              {activeProject.slides.length > 1 && (
                <div className="flex items-center gap-2 mt-4">
                  {activeProject.slides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setLb((prev) =>
                          prev ? { ...prev, slideIdx: dotIdx } : prev
                        );
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        dotIdx === lb.slideIdx
                          ? "bg-sv-primary w-5"
                          : "bg-white/30 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
