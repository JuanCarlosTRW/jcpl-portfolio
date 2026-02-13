declare module "lenis" {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      smooth?: boolean;
      direction?: "vertical" | "horizontal";
    });

    raf(time: number): void;
    destroy(): void;
  }
}