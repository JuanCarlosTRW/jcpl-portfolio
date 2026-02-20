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
            <p className="text-[14px] text-cg-secondary max-w-[280px] leading-[1.65]">
              One partner. One system. One outcome — qualified calls on autopilot.
            </p>
            <a
              href="https://www.linkedin.com/company/clientgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-cg-secondary hover:text-white transition-colors duration-150"
              aria-label="Client Growth on LinkedIn"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M16.667 2H3.333A1.333 1.333 0 002 3.333v13.334A1.333 1.333 0 003.333 18h13.334A1.333 1.333 0 0018 16.667V3.333A1.333 1.333 0 0016.667 2zM7 15H4.667V8H7v7zM5.833 6.833a1.167 1.167 0 110-2.333 1.167 1.167 0 010 2.333zM15.333 15H13V11.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5V15H7.667V8H10v1.017C10.488 8.39 11.22 8 12.167 8c1.84 0 3.166 1.343 3.166 3.167V15z"/>
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-cg-muted mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] text-cg-secondary transition-colors duration-150 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.1em] font-medium text-cg-muted mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-[14px] text-cg-secondary transition-colors duration-150 hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[14px] text-cg-secondary transition-colors duration-150 hover:text-white"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@clientgrowth.ca"
                  className="text-[14px] text-cg-secondary transition-colors duration-150 hover:text-cg-accent-lt"
                >
                  hello@clientgrowth.ca
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
