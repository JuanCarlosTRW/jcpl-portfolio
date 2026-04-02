"use client";

import Link from "next/link";
import Image from "next/image";
import { translations } from "@/lib/translations";
import { useLocale } from "@/context/LocaleContext";

export default function Footer() {
  const { locale } = useLocale();
  const { nav, footer } = translations[locale];
  const navItems = [
    { href: "/#system", label: "How it works" },
    { href: "/#system", label: nav.results },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#book-call", label: "Apply" },
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
                width={400}
                height={267}
                style={{ width: "200px", height: "auto", objectFit: "contain" }}
              />
            </Link>
            <p className="text-[0.8rem]" style={{ color: "#756D63" }}>
              {footer.tagline}
            </p>
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
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: "#2A2318" }}
        >
          <p className="text-[12px] mb-2" style={{ color: "#756D63" }}>
            Operated from Quebec, Canada. Founder-led. juan@clientgrowth.ca
          </p>
          <p className="text-[13px]" style={{ color: "#756D63" }}>
            © {new Date().getFullYear()} Client Growth. {footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
