"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function ServicesUnicornEmbed() {
  return (
    <section className="w-full" aria-hidden="true">
      <UnicornScene
        projectId="dyHEFIsGA1gwshhB9NPf"
        sdkUrl="/unicornStudio.umd.js"
        width="100%"
        height="400px"
        production={false}
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={true}
      />
    </section>
  );
}
