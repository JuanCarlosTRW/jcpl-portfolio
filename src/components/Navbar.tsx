"use client";

import { ctaCopy } from "@/lib/content";
import { useTranslations, useLocale } from "@/context/LocaleContext";
import { trackEvent } from "@/lib/analytics";
import StaggeredMenu from "@/components/nav/StaggeredMenu";
import type { StaggeredMenuItem } from "@/components/nav/StaggeredMenu";

export default function Navbar() {
  const t = useTranslations();
  const { locale } = useLocale();
  const p = locale === "fr" ? "/fr" : "";
  const staggeredMenuItems: StaggeredMenuItem[] = [
    { label: t<string>("nav.services"), link: `${p}/services`, ariaLabel: t<string>("nav.services") },
    { label: t<string>("nav.results"), link: `${p}/results`, ariaLabel: t<string>("nav.results") },
    { label: t<string>("nav.about"), link: `${p}/about`, ariaLabel: t<string>("nav.about") },
    {
      label: "Book a Diagnostic Call",
      link: "/apply",
      ariaLabel: "Book a Diagnostic Call",
      onClick: () => trackEvent("nav_cta_clicked"),
      isCta: true,
    },
  ];

  return (
    <StaggeredMenu
      items={staggeredMenuItems}
      displayItemNumbering={true}
      accentColor="#1e1e22"
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      colors={["transparent", "transparent"]}
      isFixed={true}
      position="right"
      logoUrl="/images/logo-clientgrowth.png"
      menuLabel={t<string>("common.menu")}
      closeLabel={t<string>("common.close")}
    />
  );
}
