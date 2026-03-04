"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotionSafe();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    /* Connect ScrollTrigger to Lenis virtual scroll so pin/scrub use correct position */
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value: number | undefined) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      ScrollTrigger.scrollerProxy(document.documentElement, {});
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, [reduced]);

  return <>{children}</>;
}