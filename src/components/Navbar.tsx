"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, ctaCopy } from "@/lib/content";
import { cn } from "@/lib/utils";
import BubbleMenu, { type BubbleMenuItem } from "@/components/nav/BubbleMenu";

/* ─── Map nav items to BubbleMenu format (mobile) ─── */
const BUBBLE_COLORS = [
  { bgColor: "rgba(127, 95, 255, 0.85)", textColor: "#ffffff" },  // purple
  { bgColor: "rgba(51, 204, 255, 0.85)", textColor: "#ffffff" },   // cyan
  { bgColor: "rgba(16, 185, 129, 0.85)", textColor: "#ffffff" },   // emerald
  { bgColor: "rgba(245, 158, 11, 0.85)", textColor: "#ffffff" },   // amber
  { bgColor: "rgba(239, 68, 68, 0.85)", textColor: "#ffffff" },    // red
];

const BUBBLE_ROTATIONS = [-6, 5, -4, 7, -5];

const bubbleItems: BubbleMenuItem[] = [
  ...navigation.map((item, i) => ({
    label: item.label,
    href: item.href,
    ariaLabel: item.label,
    rotation: BUBBLE_ROTATIONS[i] ?? 0,
    hoverStyles: BUBBLE_COLORS[i] ?? BUBBLE_COLORS[0],
  })),
  {
    label: ctaCopy.primary,
    href: ctaCopy.href,
    ariaLabel: ctaCopy.primary,
    rotation: BUBBLE_ROTATIONS[navigation.length] ?? -5,
    hoverStyles: { bgColor: "rgba(127, 95, 255, 0.95)", textColor: "#ffffff" },
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Expose --nav-h via ResizeObserver
  const updateNavHeight = useCallback(() => {
    if (navRef.current) {
      const height = navRef.current.offsetHeight;
      document.documentElement.style.setProperty("--nav-h", `${height}px`);
    }
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    updateNavHeight();
    const ro = new ResizeObserver(updateNavHeight);
    ro.observe(nav);
    document.fonts?.ready?.then(updateNavHeight);
    return () => ro.disconnect();
  }, [updateNavHeight]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-[var(--border-soft)] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      {/* ─── Desktop Nav (md+) ─── */}
      <nav
        className="hidden md:flex container items-center justify-between h-16 md:h-18"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="text-xl font-bold tracking-tight text-white">
            JC
          </span>
          <span className="text-sm text-[var(--text-muted)] font-medium tracking-wide">
            Growth Systems
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                pathname === item.href
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--text-muted)] hover:text-[var(--brand-alt)]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA button */}
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--brand-deep)] hover:scale-[1.02] shadow-[0_0_20px_rgba(127,95,255,0.3)] hover:shadow-[0_0_30px_rgba(127,95,255,0.5)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]"
        >
          {ctaCopy.primary}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </nav>

      {/* ─── Mobile Nav (< md): Bubble Menu ─── */}
      <div className="md:hidden container flex items-center justify-between h-16">
        <BubbleMenu
          items={bubbleItems}
          logo={
            <span className="text-lg font-bold tracking-tight text-white">JC</span>
          }
          menuBg="rgba(14, 21, 48, 0.95)"
          menuContentColor="#f0f0f8"
          animationEase="back.out(1.5)"
          animationDuration={0.5}
          staggerDelay={0.1}
        />
      </div>
    </header>
  );
}
