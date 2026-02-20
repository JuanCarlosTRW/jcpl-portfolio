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
  eventName?: "hero_cta_click" | "hero_primary_cta_click" | "hero_secondary_cta_click" | "section_cta_click" | "case_card_click" | "faq_cta_click" | "final_cta_primary_click" | "final_cta_secondary_click" | "services_hero_primary_cta_click" | "services_hero_secondary_cta_click" | "services_plan_cta_click_foundation" | "services_plan_cta_click_growth" | "services_plan_cta_click_scale" | "services_final_cta_click" | "services_compare_expand" | "services_quiz_cta_click_foundation" | "services_quiz_cta_click_growth" | "services_quiz_cta_click_scale" | "services_sticky_cta_click";
}

const base =
  "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cg-accent";

const variants = {
  primary:
    "bg-cg-accent text-white hover:bg-cg-accent-hov shadow-[0_4px_24px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_32px_rgba(37,99,235,0.45)] hover:-translate-y-[1px]",
  secondary:
    "bg-transparent text-white border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.35)] hover:bg-[rgba(255,255,255,0.06)]",
  ghost: "text-cg-accent-lt hover:text-cg-accent hover:bg-white/5",
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
