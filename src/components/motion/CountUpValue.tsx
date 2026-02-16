"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotionSafe } from "./usePrefersReducedMotionSafe";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

export default function CountUpValue({
  to,
  prefix = "",
  suffix = "",
  durationMs = 1200,
  className = "",
}: Props) {
  const reduced = usePrefersReducedMotionSafe();
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const [val, setVal] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setVal(to);
      return;
    }

    const start = performance.now();
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / durationMs);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, durationMs, reduced]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {val.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
