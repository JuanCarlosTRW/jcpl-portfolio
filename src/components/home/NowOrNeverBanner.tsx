import React from "react";

export default function NowOrNeverBanner() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full py-16 md:py-24 bg-gradient-to-br from-black via-[#1e23e8] to-[#ffb700] overflow-hidden"
      style={{ minHeight: 220 }}
    >
      {/* 3D shape effect (subtle, mobile-friendly) */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-xl opacity-60" />
      </div>
      {/* Animated Text */}
      <h2
        className="relative z-10 text-center font-bold text-white tracking-wide"
        style={{
          fontFamily: 'Inter Tight, sans-serif',
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        <span className="block text-[60px] md:text-[100px] lg:text-[180px] leading-none animate-pulse">
          Now Or Never
        </span>
      </h2>
    </section>
  );
}
