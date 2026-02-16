"use client";

import { navigation, ctaCopy } from "@/lib/content";
import StaggeredMenu from "@/components/nav/StaggeredMenu";
import type { StaggeredMenuItem, StaggeredMenuSocialItem } from "@/components/nav/StaggeredMenu";

const staggeredMenuItems: StaggeredMenuItem[] = [
  ...navigation.map((item) => ({
    label: item.label,
    link: item.href,
    ariaLabel: item.label,
  })),
  {
    label: ctaCopy.primary,
    link: ctaCopy.href,
    ariaLabel: ctaCopy.primary,
  },
];

const staggeredMenuSocials: StaggeredMenuSocialItem[] = [
  { label: "Twitter", link: "https://twitter.com/juancarlostrw" },
  { label: "GitHub", link: "https://github.com/JuanCarlosTRW" },
];

export default function Navbar() {
  return (
    <StaggeredMenu
      items={staggeredMenuItems}
      socialItems={staggeredMenuSocials}
      displaySocials={true}
      displayItemNumbering={true}
      accentColor="#5227FF"
      menuButtonColor="#fff"
      openMenuButtonColor="#B19EEF"
      colors={["#B19EEF", "#5227FF"]}
      isFixed={true}
      position="right"
    />
  );
}
