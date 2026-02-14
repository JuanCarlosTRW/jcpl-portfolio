"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotionSafe } from "./usePrefersReducedMotionSafe";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

type Props = {
  text: string;
  className?: string;
  durationMs?: number;
  delayMs?: number;
};

export default function DecryptText({
  text,
  className = "",
  durationMs = 900,
  delayMs = 0,
}: Props) {
  const reduced = usePrefersReducedMotionSafe();
  const [out, setOut] = useState(reduced ? text : "");

  useEffect(() => {
    if (reduced) {
      setOut(text);
      return;
    }

    const start = performance.now() + delayMs;
    let raf = 0;

    const tick = (t: number) => {
      if (t < start) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const p = Math.min(1, (t - start) / durationMs);
      const reveal = Math.floor(text.length * p);

      let s = "";
      for (let i = 0; i < text.length; i++) {
        if (i < reveal || text[i] === " ") s += text[i];
        else s += CHARS[Math.floor(Math.random() * CHARS.length)];
      }

      setOut(s);

      if (p < 1) raf = requestAnimationFrame(tick);
      else setOut(text);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, durationMs, delayMs, reduced]);

  return <span className={className}>{out}</span>;
}
