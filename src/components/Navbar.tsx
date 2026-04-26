"use client";

import { useTranslations } from "@/context/LocaleContext";
import { trackEvent } from "@/lib/analytics";
import StaggeredMenu from "@/components/nav/StaggeredMenu";
import type { StaggeredMenuItem } from "@/components/nav/StaggeredMenu";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations();
  const staggeredMenuItems: StaggeredMenuItem[] = [
    { label: t<string>("nav.results"), link: "/results", ariaLabel: t<string>("nav.results") },
    { label: t<string>("nav.about"), link: "/about", ariaLabel: t<string>("nav.about") },
    { label: t<string>("nav.apply"), link: "/apply", ariaLabel: t<string>("nav.apply"), onClick: () => trackEvent("nav_cta_clicked"), isCta: true },
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
      logoUrl="/images/logo-clientgrowth.webp"
      menuLabel={t<string>("common.menu")}
      closeLabel={t<string>("common.close")}
      languageSwitcher={<LanguageSwitcher />}
      languageSwitcherPanel={<LanguageSwitcher />}
    />
  );
}
