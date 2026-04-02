"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Results", href: "/results", isCta: false },
  { name: "How it works", href: "/#system", isCta: false },
  { name: "Pricing", href: "/#pricing", isCta: false },
  { name: "Apply", href: "/apply", isCta: true },
];

function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function AnimatedNavFramer() {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 nav-wrapper" style={{ transition: "all 0.3s ease" }}>
      <nav
        className="nav-bar flex items-center overflow-hidden rounded-full border shadow-lg backdrop-blur-md h-12"
        style={{ background: "rgba(13,11,9,0.95)", borderColor: "rgba(212,168,83,0.12)" }}
      >
        <a href="/" className="flex-shrink-0 flex items-center pl-4 pr-2">
          <Image
            src="https://static.wixstatic.com/media/62f926_5324879084e1438391f656f8121a391a~mv2.png"
            alt="Client Growth"
            width={120}
            height={36}
            priority
            style={{ height: 36, width: "auto" }}
          />
        </a>

        <div className="flex items-center gap-1 sm:gap-4 pr-4">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors whitespace-nowrap",
                  item.isCta
                    ? "bg-[#D4A853] text-[#0D0B09] px-4 py-1.5 rounded-md hover:brightness-110"
                    : active
                      ? "text-[#D4A853] px-2 py-1"
                      : "text-muted-foreground hover:text-foreground px-2 py-1"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
