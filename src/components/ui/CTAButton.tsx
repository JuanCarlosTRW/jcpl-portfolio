"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  eventName?: "hero_cta_click" | "hero_primary_cta_click" | "hero_secondary_cta_click" | "section_cta_click" | "case_card_click";
}

const base =
  "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-accent)]";

const variants = {
  primary:
    "bg-[var(--brand-accent)] text-white hover:bg-[var(--brand-deep)] hover:scale-[1.02]",
  secondary:
    "bg-white/5 text-[var(--text-primary)] border border-[var(--border-soft)] hover:border-[var(--brand-accent)]/40 hover:bg-white/10",
  ghost: "text-[var(--brand-alt)] hover:text-[var(--brand-accent)] hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  eventName = "section_cta_click",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className, variant === "primary" ? "group" : "")}
      onClick={() => trackEvent(eventName)}
      style={variant === "primary" ? { boxShadow: 'var(--glow-accent)' } : undefined}
    >
      {children}
      {variant === "primary" && (
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      )}
    </Link>
  );
}
