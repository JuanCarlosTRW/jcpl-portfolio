"use client";

import { createContext, useContext, type MutableRefObject } from "react";
import type Lenis from "lenis";

/**
 * Holds a ref to the Lenis instance so any component in the tree
 * can call lenis.stop() / lenis.start() / lenis.scrollTo() without
 * prop-drilling or forcing re-renders.
 */
export const LenisContext = createContext<MutableRefObject<Lenis | null>>({
  current: null,
});

export function useLenis(): MutableRefObject<Lenis | null> {
  return useContext(LenisContext);
}
