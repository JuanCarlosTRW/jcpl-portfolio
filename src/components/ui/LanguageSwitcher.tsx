"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/context/LocaleContext";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(target: "en" | "fr") {
    setLocale(target);
    // Strip any existing /fr prefix then re-add if switching to FR
    const stripped = pathname.startsWith("/fr") ? pathname.slice(3) || "/" : pathname;
    const next = target === "fr" ? `/fr${stripped === "/" ? "" : stripped}` : stripped;
    router.push(next);
  }

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className="text-[12px] tracking-[0.14em] uppercase transition-colors"
        style={{
          color: locale === "en" ? "#D4A853" : "rgba(240,234,214,0.4)",
          fontWeight: locale === "en" ? 600 : 400,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 6px",
        }}
      >
        EN
      </button>
      <span style={{ color: "rgba(240,234,214,0.2)", fontSize: "12px" }}>|</span>
      <button
        type="button"
        onClick={() => switchTo("fr")}
        className="text-[12px] tracking-[0.14em] uppercase transition-colors"
        style={{
          color: locale === "fr" ? "#D4A853" : "rgba(240,234,214,0.4)",
          fontWeight: locale === "fr" ? 600 : 400,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px 6px",
        }}
      >
        FR
      </button>
    </div>
  );
}
