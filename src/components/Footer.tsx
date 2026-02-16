import Link from "next/link";
import { navigation, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-base)]">
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-[var(--text-primary)]">
              JC <span className="text-xs font-medium text-[var(--text-muted)]">Growth Systems</span>
            </Link>
            <p className="text-sm text-[var(--text-muted)] max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[var(--text-muted)]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border-soft)] text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Juan Carlos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
