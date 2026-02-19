import Link from "next/link";
import { navigation, siteConfig } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(37,99,235,0.15)] bg-[#030812]">
      <div className="container py-10 md:py-14">
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold text-white">
              Client Growth
            </Link>
            <p className="text-sm text-[#8899BB] max-w-xs leading-relaxed">
              One partner. One system. One outcome — qualified calls on autopilot.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8899BB]">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#E8EDF5] transition-colors hover:text-[#2563EB]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#8899BB]">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-[#E8EDF5] transition-colors hover:text-[#2563EB]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm text-[#E8EDF5] transition-colors hover:text-[#2563EB]"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[rgba(37,99,235,0.15)] text-center text-xs text-[#8899BB]">
          © {new Date().getFullYear()} Client Growth. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
