"use client";
import React from "react";
import { applicationCopy } from "@/content/siteCopy";

export const QualificationFormStepper = () => (
  <section className="py-12 px-6 bg-neutral-950 text-white flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-8 text-primary-400">{applicationCopy.headline}</h2>
    {/* TODO: Multi-step form implementation (Milestone B) */}
    <div className="max-w-xl bg-neutral-900 rounded-xl shadow-lg p-6 text-neutral-300">
      Qualification Form Stepper (TODO)
      <div className="mt-4 text-xs text-neutral-400">{applicationCopy.expectation}</div>
    </div>
  </section>
);
