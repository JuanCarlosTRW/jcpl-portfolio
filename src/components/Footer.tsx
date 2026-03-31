"use client";

import Link from "next/link";
import Image from "next/image";
import { translations } from "@/lib/translations";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { locale } = useLocale();
  const { nav, footer } = translations[locale];
  const navItems = [
    { href: "/services", label: nav.services },
    { href: "/results", label: nav.results },
    { href: "/about", label: nav.about },
  ];
  return (
    <footer
      className="border-t"
      style={{
        background: "#0D0B09",
        borderColor: "#2A2318",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "0 max(24px, 5vw)",
          marginBottom: "48px",
        }}
      >
        <div style={{ flex: 1, height: "1px", background: "#2A2318" }} />
        <div
          style={{
            width: "7px",
            height: "7px",
            background: "#D4A853",
            transform: "rotate(45deg)",
            boxShadow: "0 0 8px rgba(212,168,83,0.4)",
            flexShrink: 0,
          }}
        />
        <div style={{ flex: 1, height: "1px", background: "#2A2318" }} />
      </div>
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-block" style={{ transition: "opacity 200ms ease" }} onMouseOver={(e) => { e.currentTarget.style.opacity = "0.8"; }} onMouseOut={(e) => { e.currentTarget.style.opacity = "1"; }}>
              <Image
                src="/images/logo-clientgrowth.png"
                alt="Client Growth"
                width={160}
                height={107}
                style={{ height: "34px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p className="text-[0.8rem]" style={{ color: "#756D63" }}>
              {footer.tagline}
            </p>
            {/* JUAN: replace with your LinkedIn URL */}
            <a
              href="https://linkedin.com/in/juancarlospl"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-block mt-3 transition-colors duration-150"
              style={{ color: "rgba(240,234,214,0.5)" }}
              onMouseOver={(e) => { e.currentTarget.style.color = "#D4A853"; }}
              onMouseOut={(e) => { e.currentTarget.style.color = "rgba(240,234,214,0.5)"; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium mb-4" style={{ color: "#756D63" }}>
              {footer.navigation}
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] transition-colors duration-150 hover:text-white"
                    style={{ color: "#A69D8D" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium mb-4" style={{ color: "#756D63" }}>
              {footer.legal}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[15px] transition-colors duration-150 hover:text-white"
                  style={{ color: "#A69D8D" }}
                >
                  {footer.privacy}
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] transition-colors duration-150 hover:text-white"
                  style={{ color: "#A69D8D" }}
                >
                  {footer.terms}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:juan@clientgrowth.ca"
                  className="text-[15px] transition-colors duration-150"
                  style={{ color: "#D4A853" }}
                >
                  juan@clientgrowth.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-8 pt-6 border-t text-center text-[13px]"
          style={{ borderColor: "#2A2318", color: "#756D63" }}
        >
          © {new Date().getFullYear()} Client Growth. {footer.rights}.
        </div>
      </div>
    </footer>
  );
}
