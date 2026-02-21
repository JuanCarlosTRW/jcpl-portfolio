import Link from "next/link";
import { navigation, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[#030812]">
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-white">
              Client Growth
            </Link>
            {/* Tagline removed as requested */}
            {/* LinkedIn link removed as requested */}
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium text-cg-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-cg-secondary transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-[12px] uppercase tracking-[0.14em] font-medium text-cg-muted mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[15px] text-cg-secondary transition-colors duration-150 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] text-cg-secondary transition-colors duration-150 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:juan@clientgrowth.ca"
                  className="text-[15px] text-cg-secondary transition-colors duration-150 hover:text-cg-accent-lt"
                >
                  juan@clientgrowth.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.06)] text-center text-[13px] text-cg-dim">
          © {new Date().getFullYear()} Client Growth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
