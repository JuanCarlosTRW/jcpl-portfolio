"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Results", href: "/results", anchor: "", isCta: false },
  { name: "About", href: "/about", anchor: "", isCta: false },
  { name: "Pricing", href: "/#pricing", anchor: "pricing", isCta: false },
  { name: "Apply", href: "/apply", anchor: "", isCta: true },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href;
}

export function AnimatedNavFramer() {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, anchor: string) => {
    if (!anchor) return;
    if (pathname !== "/") return;
    const el = document.getElementById(anchor);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 nav-wrapper" style={{ transition: "all 0.3s ease" }}>
      <nav
        className="nav-bar flex items-center overflow-hidden rounded-full border shadow-lg backdrop-blur-md h-14"
        style={{ background: "rgba(13,11,9,0.95)", borderColor: "rgba(212,168,83,0.12)" }}
      >
        <Link href="/" className="flex-shrink-0 flex items-center pl-4 pr-3 sm:pr-4">
          <Image
            src="https://static.wixstatic.com/media/62f926_5324879084e1438391f656f8121a391a~mv2.png"
            alt="Client Growth"
            width={160}
            height={48}
            priority
            className="nav-logo"
            style={{ height: 44, width: "auto" }}
          />
        </Link>

        <div className="nav-links flex items-center gap-1 sm:gap-4 pr-3 sm:pr-4">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            // Use plain <a> for anchor links (/#pricing), Link for pages
            const isAnchor = item.href.startsWith("/#");
            const Tag = isAnchor ? "a" : Link;
            return (
              <Tag
                key={item.name}
                href={item.href}
                onClick={isAnchor ? (e: React.MouseEvent<HTMLAnchorElement>) => handleClick(e as React.MouseEvent<HTMLAnchorElement>, item.anchor) : undefined}
                className={cn(
                  "nav-link-item text-sm font-medium transition-colors whitespace-nowrap",
                  item.isCta
                    ? "bg-[#D4A853] text-[#0D0B09] px-4 py-1.5 rounded-md hover:brightness-110"
                    : active
                      ? "text-[#D4A853] px-2 py-1"
                      : "text-muted-foreground hover:text-foreground px-2 py-1"
                )}
              >
                {item.name}
              </Tag>
            );
          })}
        </div>
      </nav>

      <style>{`
        @media (max-width: 480px) {
          .nav-bar {
            width: calc(100% - 24px) !important;
            max-width: 100% !important;
          }
          .nav-logo {
            height: 32px !important;
          }
          .nav-links {
            gap: 2px !important;
          }
          .nav-link-item {
            font-size: 12px !important;
            padding-left: 6px !important;
            padding-right: 6px !important;
          }
          .nav-link-item.bg-\\[\\#D4A853\\] {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
