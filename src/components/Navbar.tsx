"use client";

import { navigation, ctaCopy } from "@/lib/content";
import StaggeredMenu from "@/components/nav/StaggeredMenu";
import type { StaggeredMenuItem } from "@/components/nav/StaggeredMenu";

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

export default function Navbar() {
  return (
    <StaggeredMenu
      items={staggeredMenuItems}
      displayItemNumbering={true}
      accentColor="#33ccff"
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      colors={["transparent", "transparent"]}
      isFixed={true}
      position="right"
    />
  );
}
