import React from "react";
import { partnerCopy } from "@/content/siteCopy";

export const PartnerAuthority = () => (
  <section className="py-12 px-6 bg-neutral-950 text-white flex flex-col items-center">
    <h2 className="text-2xl font-bold mb-8 text-primary-400">{partnerCopy.headline}</h2>
    <div className="max-w-xl bg-neutral-900 rounded-xl shadow-lg p-6">
      <p className="text-neutral-300 mb-4">{partnerCopy.narrative}</p>
      <div className="flex gap-4">
        <div className="flex-1">
          <h4 className="text-primary-400 font-bold">Who this is for</h4>
          <p className="text-neutral-300 text-sm">{partnerCopy.whoFor}</p>
        </div>
        <div className="flex-1">
          <h4 className="text-primary-400 font-bold">Not for</h4>
          <p className="text-neutral-300 text-sm">{partnerCopy.notFor}</p>
        </div>
      </div>
    </div>
  </section>
);
