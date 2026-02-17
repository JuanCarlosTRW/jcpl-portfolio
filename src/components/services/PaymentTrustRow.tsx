"use client";

import { servicesPaymentMethods, servicesPaymentLine } from "@/lib/content";
import { Reveal } from "@/components/motion";

/* ─── Monochrome Brand SVG Icons ─── */
function VisaSVG() {
  return (
    <svg viewBox="0 0 48 16" fill="none" aria-hidden="true" className="w-10 h-4">
      <path d="M19.3 1.2L15.4 14.8H12.1L16 1.2H19.3ZM34.5 9.8L36.2 4.8L37.2 9.8H34.5ZM38.1 14.8H41.1L38.5 1.2H35.7C35 1.2 34.4 1.6 34.1 2.2L28.7 14.8H32.2L32.9 12.9H37.2L37.6 14.8H38.1ZM29.4 10.1C29.4 6.4 24.2 6.2 24.2 4.5C24.2 3.9 24.8 3.3 26 3.1C26.6 3 28.2 2.9 30 3.7L30.7 1.5C29.7 1.2 28.5 0.8 27 0.8C23.7 0.8 21.4 2.6 21.4 5.1C21.4 7 23 8 24.2 8.7C25.4 9.4 25.8 9.8 25.8 10.4C25.8 11.3 24.7 11.7 23.7 11.7C21.8 11.7 20.7 11.2 19.8 10.8L19.1 13.1C20 13.5 21.7 13.9 23.4 13.9C27 14 29.4 12.2 29.4 10.1ZM12.4 1.2L7 14.8H3.5L0.9 3.6C0.7 2.8 0.6 2.5 0 2.1C-0.8 1.6 1.8 1.2 1.8 1.2L5.5 1.2L8 11.2L11.4 1.2H12.4Z" fill="currentColor"/>
    </svg>
  );
}

function MastercardSVG() {
  return (
    <svg viewBox="0 0 32 20" fill="none" aria-hidden="true" className="w-8 h-5">
      <circle cx="12" cy="10" r="8" fill="currentColor" opacity="0.4" />
      <circle cx="20" cy="10" r="8" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function AmexSVG() {
  return (
    <svg viewBox="0 0 32 20" fill="none" aria-hidden="true" className="w-8 h-5">
      <rect x="1" y="1" width="30" height="18" rx="3" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <text x="16" y="13" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" fontFamily="system-ui">AMEX</text>
    </svg>
  );
}

function BankSVG() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="w-5 h-5">
      <path d="M10 2L2 7H18L10 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <rect x="4" y="8" width="2" height="7" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
      <rect x="9" y="8" width="2" height="7" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
      <rect x="14" y="8" width="2" height="7" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
      <rect x="2" y="16" width="16" height="2" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}

const iconMap: Record<string, () => React.JSX.Element> = {
  visa: VisaSVG,
  mastercard: MastercardSVG,
  amex: AmexSVG,
  bank: BankSVG,
};

export default function PaymentTrustRow() {
  return (
    <Reveal>
      <div className="text-center">
        <div
          className="payment-trust-row"
          role="list"
          aria-label="Accepted payment methods"
        >
          {servicesPaymentMethods.map((method) => {
            const Icon = iconMap[method.icon];
            return (
              <div
                key={method.name}
                className="payment-icon"
                role="listitem"
                aria-label={method.name}
                title={method.name}
              >
                {Icon ? <Icon /> : <span>{method.name}</span>}
              </div>
            );
          })}
        </div>
        <p className="text-[0.7rem] text-[var(--text-muted)] mt-3 tracking-wide">
          {servicesPaymentLine}
        </p>
      </div>
    </Reveal>
  );
}
