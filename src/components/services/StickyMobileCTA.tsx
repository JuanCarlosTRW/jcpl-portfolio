"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { stickyMobileCTA } from "@/lib/content";
import { trackEvent } from "@/lib/analytics";
import Link from "next/link";

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 500px (typically past hero)
      const scrollY = window.scrollY;
      setHasScrolledPastHero(scrollY > 500);

      // Hide near bottom of page (near final CTA)
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollY + windowHeight > documentHeight - 400;

      setIsVisible(scrollY > 500 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only render on mobile (handled via CSS, but also check width for hydration)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  const { label, cta, href } = stickyMobileCTA;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="sticky-mobile-cta"
        >
          <div className="sticky-mobile-cta__content">
            <span className="sticky-mobile-cta__label">{label}</span>
            <Link
              href={href}
              onClick={() => trackEvent("services_sticky_cta_click")}
              className="sticky-mobile-cta__button"
            >
              {cta}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
