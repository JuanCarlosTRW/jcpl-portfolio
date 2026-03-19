"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { useLenis } from "@/context/LenisContext";

export default function RouteScrollManager() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);
  const lenisRef = useLenis();

  useEffect(() => {
    if (
      pathname &&
      pathname.startsWith("/results/") &&
      pathname !== "/results"
    ) {
      scrollToTop(lenisRef.current);
    }
    prevPath.current = pathname;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}

function scrollToTop(lenis: { scrollTo(target: number, opts?: { immediate?: boolean }): void } | null) {
  if (typeof window === "undefined") return;

  if (lenis) {
    lenis.scrollTo(0, { immediate: true });
    return;
  }

  // Fallback when Lenis is not running (reduced motion)
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}
