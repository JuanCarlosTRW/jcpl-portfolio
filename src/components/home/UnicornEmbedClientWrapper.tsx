"use client";

import UnicornEmbed from "../ui/UnicornEmbed";

export default function UnicornEmbedClientWrapper() {
  return (
    <section
      className="w-full bg-[#0D0B09] py-16"
      aria-label="Interactive feature"
    >
      {/* Maintain 1440:900 aspect ratio, scale to viewport width */}
      <div
        className="w-full mx-auto"
        style={{ maxWidth: 1440, aspectRatio: "1440 / 900" }}
      >
        <UnicornEmbed projectId="dyHEFIsGA1gwshhB9NPf" />
      </div>
    </section>
  );
}
