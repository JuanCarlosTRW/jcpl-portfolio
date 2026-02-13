"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import { usePrefersReducedMotionSafe } from "./usePrefersReducedMotionSafe";

type Props = {
  text: string;
  className?: string;
  delay?: number;
};

export default function SplitText({ text, className = "", delay = 0 }: Props) {
  const reduced = usePrefersReducedMotionSafe();
  const chars = useMemo(() => text.split(""), [text]);

  if (reduced) return <span className={className}>{text}</span>;

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: delay + i * 0.018 }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}
