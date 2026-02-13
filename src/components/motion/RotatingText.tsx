"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePrefersReducedMotionSafe } from "./usePrefersReducedMotionSafe";

type Props = {
  items: string[];
  intervalMs?: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function RotatingText({ items, intervalMs = 2200, className = "", style }: Props) {
  const reduced = usePrefersReducedMotionSafe();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced || items.length <= 1) return;
    const id = setInterval(() => setIndex((p) => (p + 1) % items.length), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, items.length, reduced]);

  if (!items.length) return null;
  if (reduced) return <span className={className} style={style}>{items[0]}</span>;

  return (
    <span className={`inline-block min-w-[10ch] ${className}`} style={style} aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35 }}
          className="inline-block text-[var(--brand-accent)]"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
