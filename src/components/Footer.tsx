import Link from "next/link";
import { navigation, siteConfig, ctaCopy } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-[var(--text-primary)]">
              JC <span className="text-sm font-medium text-[var(--text-muted)]">Growth Systems</span>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)] max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Pages
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-[var(--brand-accent)] transition-colors hover:text-[var(--brand-strong)]"
                >
                  {ctaCopy.primary}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p>Ready to grow your business?</p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-accent)] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--brand-deep)] hover:scale-[1.02]"
              >
                {ctaCopy.tertiary} →
              </Link>
            </div>
            <div className="flex gap-6 pt-4 text-xs text-[var(--text-muted)]">
              <Link href="#" className="hover:text-[var(--brand-accent)] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-[var(--border-strong)]">·</span>
              <Link href="#" className="hover:text-[var(--brand-accent)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--border-soft)] pt-8 text-center text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} Juan Carlos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
