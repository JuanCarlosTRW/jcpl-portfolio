"use client";

import Link from "next/link";
import { trackEvent, type EventName } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  eventName?: EventName;
}

const base =
  "relative inline-flex items-center justify-center font-semibold rounded-[8px] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4A853]";

const variants = {
  primary:
    "bg-[#D4A853] text-[#0D0B09] border border-[#D4A853] hover:bg-[#C49A2A] hover:-translate-y-[1px] shadow-[0_4px_24px_rgba(212,168,83,0.18)]",
  secondary:
    "bg-[#D4A853] text-[#0D0B09] border border-[#D4A853] hover:bg-[#C49A2A] hover:-translate-y-[1px] shadow-[0_4px_24px_rgba(212,168,83,0.18)]",
  ghost: "text-sv-muted hover:text-sv-primary hover:bg-white/5",
};

const sizes = {
  sm: "px-6 py-3 text-sm min-h-[44px]",
  md: "px-7 py-3.5 text-sm min-h-[44px]",
  lg: "px-7 py-3.5 text-base min-h-[48px]",
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
