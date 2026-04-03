"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { translations, type Locale } from "@/lib/translations";

const STORAGE_KEY = "locale";

function getLocaleFromPath(path: string): Locale | null {
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  return null;
}

function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "fr") return stored;
    localStorage.setItem(STORAGE_KEY, "en");
  } catch {
    // ignore
  }
  return null;
}

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: <T = string>(path: string) => T;
  /** Build a locale-aware internal path: lp("/results") → "/fr/results" in FR */
  lp: (path: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let current: unknown = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return current;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("en");

  // Force English — no /fr routes exist; ignore stale localStorage values
  useEffect(() => {
    setLocaleState("en");
    try { localStorage.setItem(STORAGE_KEY, "en"); } catch { /* ignore */ }
  }, [pathname]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    <T = string>(path: string): T => {
      const obj = translations[locale];
      const value = getByPath(obj, path);
      return (value ?? "") as T;
    },
    [locale]
  );

  const lp = useCallback(
    (path: string): string => {
      if (locale === "fr") {
        return `/fr${path === "/" ? "" : path}`;
      }
      return path;
    },
    [locale]
  );

  const value: LocaleContextValue = {
    locale,
    setLocale,
    t,
    lp,
  };

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useTranslations() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useTranslations must be used within LocaleProvider");
  return ctx.t;
}
