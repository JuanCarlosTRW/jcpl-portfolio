"use client";
import React, { useState } from "react";
import { transformationCopy } from "@/content/siteCopy";

export const TransformationCompare = () => {
  const [showAfter, setShowAfter] = useState(false);
  return (
    <section className="py-12 px-6 bg-neutral-950 text-white flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-8 text-primary-400">From Chaos to Control</h2>
      <div className="w-full max-w-xl bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col items-center">
        <div className="flex gap-4 items-center">
          <button
            className={`px-4 py-2 rounded font-bold ${!showAfter ? "bg-primary-500 text-white" : "bg-neutral-800 text-primary-400"}`}
            onClick={() => setShowAfter(false)}
          >
            Before
          </button>
          <button
            className={`px-4 py-2 rounded font-bold ${showAfter ? "bg-primary-500 text-white" : "bg-neutral-800 text-primary-400"}`}
            onClick={() => setShowAfter(true)}
          >
            After
          </button>
        </div>
        <div className="mt-6 text-lg text-neutral-300 min-h-[60px]">
          {showAfter ? transformationCopy.after : transformationCopy.before}
        </div>
      </div>
    </section>
  );
};
