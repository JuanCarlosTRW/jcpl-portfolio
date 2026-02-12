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
  eventName?: "hero_cta_click" | "section_cta_click";
}

const base =
  "relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

const variants = {
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
  secondary:
    "bg-white/5 text-white border border-white/10 hover:border-indigo-500/50 hover:bg-white/10",
  ghost: "text-indigo-400 hover:text-indigo-300 hover:bg-white/5",
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
      className={cn(base, variants[variant], sizes[size], className)}
      onClick={() => trackEvent(eventName)}
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
