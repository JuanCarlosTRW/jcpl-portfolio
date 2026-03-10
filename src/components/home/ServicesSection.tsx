"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";

const SERVICES = [
  "Conversion Website",
  "Google Ads",
  "Local SEO",
  "GEO / AI Search",
  "AI Voice Agent",
  "Conversion Copy",
];

export default function ServicesSection() {
  return (
    <SectionWrapper
      id="active-systems"
      className="py-14 border-t border-[#2A2318]"
      style={{ background: "#0D0B09" }}
    >
      <div className="max-w-[1200px] mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-tight">Active Systems</h2>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-[13px] font-medium text-[rgba(220,230,240,0.62)] px-3 py-1 rounded-full bg-[rgba(24,24,32,0.38)] border border-[rgba(220,230,240,0.10)] shadow-sm">+2 in build</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Triple W Rentals */}
          <div className="bg-[rgba(20,24,32,0.82)] rounded-xl p-6 flex flex-col items-start shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/logos/triplew.png" alt="Triple W Rentals" className="h-8 w-auto" />
              <span className="font-semibold text-white text-lg">Triple W Rentals</span>
            </div>
            <div className="text-[13px] text-[rgba(220,230,240,0.62)] mb-2">RV Rental · Texas</div>
            <div className="text-[15px] font-bold text-[rgba(80,200,120,0.82)] mb-1">$41K revenue in 30 days</div>
          </div>
          {/* Elite Barbershop */}
          <div className="bg-[rgba(20,24,32,0.82)] rounded-xl p-6 flex flex-col items-start shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/logos/elite.png" alt="Elite Barbershop" className="h-8 w-auto" />
              <span className="font-semibold text-white text-lg">Elite Barbershop</span>
            </div>
            <div className="text-[13px] text-[rgba(220,230,240,0.62)] mb-2">Premium Barbershop · Montreal</div>
            <div className="text-[15px] font-bold text-[rgba(80,200,120,0.82)] mb-1">90 new clients in 90 days</div>
          </div>
          {/* Culture Barbershop */}
          <div className="bg-[rgba(20,24,32,0.82)] rounded-xl p-6 flex flex-col items-start shadow-lg">
            <div className="flex items-center gap-2 mb-2">
              <img src="/images/logos/culture.png" alt="Culture Barbershop" className="h-8 w-auto" />
              <span className="font-semibold text-white text-lg">Culture Barbershop</span>
            </div>
            <div className="text-[13px] text-[rgba(220,230,240,0.62)] mb-2">Barbershop · Montreal</div>
            <div className="text-[15px] font-bold text-[rgba(80,200,120,0.82)] mb-1">Page 1 SEO in 60 days</div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
