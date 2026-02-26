"use client";

import { forwardRef, useMemo } from "react";

interface TextSplitterProps {
  text: string;
  by?: "chars" | "words";
  className?: string;
  charClassName?: string;
}

/**
 * Lightweight text splitter for GSAP animations.
 * Renders each character/word as an individual <span> with
 * `data-char` or `data-word` attributes for easy GSAP targeting.
 */
const TextSplitter = forwardRef<HTMLSpanElement, TextSplitterProps>(
  ({ text, by = "chars", className = "", charClassName = "" }, ref) => {
    const segments = useMemo(() => {
      if (by === "words") {
        return text.split(" ").map((word, i, arr) => ({
          key: `w-${i}`,
          content: i < arr.length - 1 ? word + "\u00A0" : word,
          attr: "data-word",
        }));
      }
      return text.split("").map((char, i) => ({
        key: `c-${i}`,
        content: char === " " ? "\u00A0" : char,
        attr: "data-char",
      }));
    }, [text, by]);

    return (
      <span ref={ref} className={className} aria-label={text}>
        {segments.map((seg) => (
          <span
            key={seg.key}
            {...{ [seg.attr]: "" }}
            className={`inline-block ${charClassName}`}
            style={{ willChange: "transform, opacity" }}
            aria-hidden="true"
          >
            {seg.content}
          </span>
        ))}
      </span>
    );
  }
);

TextSplitter.displayName = "TextSplitter";
export default TextSplitter;
