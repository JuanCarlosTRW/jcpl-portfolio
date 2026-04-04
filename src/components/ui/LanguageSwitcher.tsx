"use client";

import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  className,
}: {
  className?: string;
}) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={cn("flex items-center gap-0.5 sm:gap-1", className)}>
      <button
        type="button"
        onClick={() => setLocale("en")}
        className="text-[10px] sm:text-[12px] tracking-[0.1em] sm:tracking-[0.14em] uppercase transition-colors"
        style={{
          color: locale === "en" ? "#D4A853" : "rgba(240,234,214,0.4)",
          fontWeight: locale === "en" ? 600 : 400,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 3px",
        }}
      >
        EN
      </button>
      <span style={{ color: "rgba(240,234,214,0.2)", fontSize: "10px" }}>|</span>
      <button
        type="button"
        onClick={() => setLocale("fr")}
        className="text-[10px] sm:text-[12px] tracking-[0.1em] sm:tracking-[0.14em] uppercase transition-colors"
        style={{
          color: locale === "fr" ? "#D4A853" : "rgba(240,234,214,0.4)",
          fontWeight: locale === "fr" ? 600 : 400,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 3px",
        }}
      >
        FR
      </button>
    </div>
  );
}
