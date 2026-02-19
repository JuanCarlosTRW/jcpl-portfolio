"use client";

import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import "./SpotlightCard.css";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  /** Color of the spotlight glow. Defaults to brand-accent at low opacity. */
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(37, 99, 235, 0.08)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      el.style.setProperty("--spotlight-color", spotlightColor);
    },
    [spotlightColor]
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn("card-spotlight", className)}
    >
      {children}
    </div>
  );
}
