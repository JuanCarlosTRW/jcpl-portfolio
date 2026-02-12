import Link from "next/link";
import { navigation, siteConfig, ctaCopy } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050507]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-white">
              JC <span className="text-sm font-medium text-[#9a9ab0]">Growth Systems</span>
            </Link>
            <p className="text-sm leading-relaxed text-[#9a9ab0] max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Pages
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#9a9ab0] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/apply"
                  className="text-sm text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  {ctaCopy.primary}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[#9a9ab0]">
              <p>Ready to grow your business?</p>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
              >
                {ctaCopy.tertiary} →
              </Link>
            </div>
            <div className="flex gap-4 pt-4 text-xs text-[#5c5c72]">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-[#5c5c72]">
          © {new Date().getFullYear()} Juan Carlos. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
