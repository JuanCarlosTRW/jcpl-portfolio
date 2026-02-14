import React from "react";
import { agitationCopy } from "../../content/siteCopy";

export const AgitationCards = () => (
  <section className="flex flex-col md:flex-row gap-6 py-12 px-6 bg-neutral-950 text-white">
    {agitationCopy.cards.map((card, i) => (
      <div key={i} className="flex-1 bg-neutral-900 rounded-xl shadow-lg p-6 flex flex-col gap-2">
        <h3 className="text-xl font-bold text-primary-400">{card.title}</h3>
        <p className="text-neutral-300">{card.description}</p>
        <span className="text-xs text-neutral-500 mt-2">{card.cost}</span>
      </div>
    ))}
  </section>
);
