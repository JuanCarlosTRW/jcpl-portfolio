"use client";

import UnicornEmbed from "../ui/UnicornEmbed";

export default function UnicornEmbedClientWrapper() {
  return (
    <section
      className="flex items-center justify-center bg-[#0D0B09]"
      style={{ padding: "64px 24px" }}
      aria-label="Interactive feature"
    >
      <div style={{ width: 390, height: 844 }}>
        <UnicornEmbed projectId="dyHEFIsGA1gwshhB9NPf" />
      </div>
    </section>
  );
}
