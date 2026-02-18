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
      accentColor="#1e1e22"
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      colors={["transparent", "transparent"]}
      isFixed={true}
      position="right"
      logoUrl="https://static.wixstatic.com/media/62f926_145f629a54634971b81de3e9565c7928~mv2.png"
    />
  );
}
