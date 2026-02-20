"use client";

import { ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  /** Additional classes */
  className?: string;
  /** Section ID for anchor links */
  id?: string;
  /** Background variant */
  variant?: "default" | "alt" | "surface" | "elevated";
}

/**
 * SectionWrapper — unified section container with consistent
 * vertical rhythm, scroll-margin, and container width.
 */
const SectionWrapper = forwardRef<HTMLElement, Props>(
  ({ children, className = "", id, variant = "default" }, ref) => {
    const bgClass = {
      default: "bg-cg-section-a",
      alt: "bg-cg-section-b",
      surface: "bg-cg-card",
      elevated: "bg-cg-card-alt",
    }[variant];

    return (
      <section
        ref={ref}
        id={id}
        className={cn("section", bgClass, className)}
      >
        <div className="container">{children}</div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";
export default SectionWrapper;
