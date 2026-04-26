"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePrefersReducedMotionSafe } from "@/components/motion/usePrefersReducedMotionSafe";
import { LenisContext } from "@/context/LenisContext";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotionSafe();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (reduced) return;

    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;
    let cancelled = false;

    // Defer heavy scroll-engine init until the browser is idle so it
    // doesn't block first paint or LCP. Falls back to setTimeout(0) on
    // browsers without requestIdleCallback (Safari).
    const idle =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 1) as unknown as number;

    const handle = idle(() => {
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      lenisRef.current = lenis;

      ScrollTrigger.scrollerProxy(document.documentElement, {
        scrollTop(value: number | undefined) {
          if (value !== undefined) {
            lenis!.scrollTo(value, { immediate: true });
          }
          return lenis!.scroll;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });

      lenis.on("scroll", ScrollTrigger.update);

      raf = (time: number) => lenis!.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }, { timeout: 1500 });

    return () => {
      cancelled = true;
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(handle);
      }
      if (lenis) {
        ScrollTrigger.scrollerProxy(document.documentElement, {});
        lenis.destroy();
        lenisRef.current = null;
      }
      if (raf) gsap.ticker.remove(raf);
    };
  }, [reduced]);

  return (
    <LenisContext.Provider value={lenisRef}>
      {children}
    </LenisContext.Provider>
  );
}
