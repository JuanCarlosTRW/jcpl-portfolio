declare module "lenis" {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
    });

    readonly scroll: number;
    scrollTo(target: number | string | HTMLElement, options?: { immediate?: boolean }): void;
    on(event: "scroll", callback: (lenis: Lenis) => void): void;
    raf(time: number): void;
    stop(): void;
    start(): void;
    destroy(): void;
  }
}