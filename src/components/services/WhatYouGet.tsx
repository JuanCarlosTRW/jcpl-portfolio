"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Reveal } from "@/components/motion";

const services = [
  {
    icon: (
      // Globe SVG
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="#5B9FFF" strokeWidth="1.5" />
        <path d="M2 10h16M10 2a16 16 0 010 16M10 2a16 16 0 000 16" stroke="#5B9FFF" strokeWidth="1.2" />
      </svg>
    ),
    title: "Conversion Website",
    body: "A premium custom website built to make visitors trust you instantly and take action. Not a template. Not a page builder. A hand-crafted digital presence that makes you the obvious choice in your city.",
  },
  {
    icon: (
      // BarChart SVG
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="12" width="3" height="5" rx="1" fill="#5B9FFF" />
        <rect x="8.5" y="8" width="3" height="9" rx="1" fill="#5B9FFF" />
        <rect x="14" y="4" width="3" height="13" rx="1" fill="#5B9FFF" />
      </svg>
    ),
    title: "Google Ads",
    body: "Campaigns built to put your business in front of people actively searching for what you offer. Every dollar tracked. Every keyword intentional. Results visible from week one.",
  },
  {
    icon: (
      // Layers SVG
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10l6 4 6-4-6-4-6 4z" stroke="#5B9FFF" strokeWidth="1.5" fill="none" />
        <path d="M4 14l6 4 6-4" stroke="#5B9FFF" strokeWidth="1.2" fill="none" />
      </svg>
    ),
    title: "SEO and GEO",
    body: "Rank above your competitors on Google. And get recommended by AI tools like ChatGPT and Perplexity when someone asks who the best option is in your city. Both channels. One strategy.",
  },
  {
    icon: (
      // MessageSquare SVG
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="14" height="10" rx="3" stroke="#5B9FFF" strokeWidth="1.5" />
        <path d="M7 9h6M7 12h4" stroke="#5B9FFF" strokeWidth="1.2" />
      </svg>
    ),
    title: "Copywriting",
    body: "Words that make your ideal client feel understood before they have spoken to you. Every headline, every page, every ad written to move one person closer to picking up the phone.",
  },
  {
    icon: (
      // Bot SVG
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="12" height="7" rx="3" stroke="#5B9FFF" strokeWidth="1.5" />
        <circle cx="7" cy="10.5" r="1" fill="#5B9FFF" />
        <circle cx="13" cy="10.5" r="1" fill="#5B9FFF" />
        <path d="M10 4v3" stroke="#5B9FFF" strokeWidth="1.2" />
      </svg>
    ),
    title: "AI Automation",
    body: "Qualification chatbots, automated follow-up, and booking flows that work around the clock. Leads get responded to in seconds. Your calendar fills without you lifting a finger.",
  },
  {
    icon: (
      // LineChart SVG
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 17l5-5 4 4 5-8" stroke="#5B9FFF" strokeWidth="1.5" fill="none" />
        <circle cx="8" cy="12" r="1.2" fill="#5B9FFF" />
        <circle cx="12" cy="16" r="1.2" fill="#5B9FFF" />
        <circle cx="16" cy="8" r="1.2" fill="#5B9FFF" />
      </svg>
    ),
    title: "Monthly Optimization",
    body: "Every month I review the data and tighten the system. Lower cost per lead. Higher conversion rates. Compounding results that make the system stronger every single month.",
  },
];

export default function WhatYouGet() {
  return (
    <SectionWrapper variant="surface" className="bg-[#0A1628] py-20">
      <Reveal className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cg-secondary mb-5">WHAT'S INCLUDED</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">Everything Your Business Needs<br />to Dominate Online.</h2>
      </Reveal>
      <div className="grid gap-7 md:grid-cols-3 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={0.07 * i}>
            <div className="group rounded-[14px] border border-[rgba(255,255,255,0.08)] bg-cg-card p-7 flex flex-col items-start transition-all duration-300 hover:border-[rgba(37,99,235,0.4)] hover:-translate-y-[2px]">
              <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[10px] bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.4)]">
                {s.icon}
              </div>
              <h3 className="text-white text-[17px] font-bold mt-4 mb-2">{s.title}</h3>
              <p className="text-cg-body text-[15px] leading-[1.7]">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="text-center mt-10">
        <p className="text-[14px] text-cg-secondary max-w-[560px] mx-auto mt-4">
          Not every engagement includes all six. During the strategy call, I scope exactly what your business needs to move the needle.
        </p>
      </div>
    </SectionWrapper>
  );
}
