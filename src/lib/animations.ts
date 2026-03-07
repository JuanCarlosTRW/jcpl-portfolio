import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function countUp(
  element: HTMLElement | null,
  target: number,
  options: {
    prefix?: string;
    suffix?: string;
    duration?: number;
    decimals?: number;
  } = {}
) {
  if (!element) return;

  const { prefix = "", suffix = "", duration = 1.5, decimals = 0 } = options;

  if (prefersReducedMotion()) {
    const formatted =
      decimals > 0 ? target.toFixed(decimals) : target.toLocaleString("en-US");
    element.textContent = prefix + formatted + suffix;
    return;
  }

  const obj = { val: 0 };
  gsap.fromTo(
    obj,
    { val: 0 },
    {
      val: target,
      duration,
      ease: "expo.out",
      onUpdate: () => {
        const v = obj.val;
        const formatted =
          decimals > 0
            ? v.toFixed(decimals)
            : Math.round(v).toLocaleString("en-US");
        element.textContent = prefix + formatted + suffix;
      },
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        once: true,
      },
    }
  );
}
