"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function RouteScrollManager() {
  const pathname = usePathname();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    if (
      pathname &&
      pathname.startsWith("/results/") &&
      pathname !== "/results"
    ) {
      scrollToTop();
    }
    prevPath.current = pathname;
  }, [pathname]);

  return null;
}

function scrollToTop() {
  if (typeof window === "undefined") return;

  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const selectors = [
    "main",
    "#main",
    "#main-content",
    "[data-scroll-container]",
    "#__next",
  ];

  for (const sel of selectors) {
    const el = document.querySelector(sel) as HTMLElement | null;
    if (el && typeof el.scrollTop === "number") {
      el.scrollTop = 0;
    }
  }
}
