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

  // TODO: Re-enable FR toggle after full translation pass
  return null;
}
