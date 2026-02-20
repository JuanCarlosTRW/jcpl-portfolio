"use client";
import { useEffect } from "react";

export default function ClientScrollToTop({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return <>{children}</>;
}
