"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotionSafe } from "./usePrefersReducedMotionSafe";

type Props = {
  className?: string;
};

export default function AuroraBackground({ className = "" }: Props) {
  const reduced = usePrefersReducedMotionSafe();

  if (reduced) {
    return (
      <div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{ background: "var(--hero-atmo)" }}
        aria-hidden
      />
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden>
      <div style={{ background: "var(--hero-atmo)" }} className="absolute inset-0" />
      <motion.div
        className="absolute -top-24 -left-24 w-[45vw] h-[45vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(127,95,255,.20), rgba(127,95,255,0))" }}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 20, 0], scale: [1, 1.08, 0.95, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-[40vw] h-[40vw] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(51,204,255,.15), rgba(51,204,255,0))" }}
        animate={{ x: [0, -25, 15, 0], y: [0, 25, -15, 0], scale: [1, 0.96, 1.06, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
