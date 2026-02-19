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
  variant?: "default" | "surface" | "elevated";
}

/**
 * SectionWrapper — unified section container with consistent
 * vertical rhythm, scroll-margin, and container width.
 */
const SectionWrapper = forwardRef<HTMLElement, Props>(
  ({ children, className = "", id, variant = "default" }, ref) => {
    const bgClass = {
      default: "bg-[#060D1F]",
      surface: "bg-[#0F2049]",
      elevated: "bg-[#0D1B3E]",
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
