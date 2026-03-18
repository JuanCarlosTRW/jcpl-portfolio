import UnicornScene from "unicornstudio-react/next";

export default function UnicornStudioEmbed() {
  return (
    <section className="w-full flex justify-center items-center py-12 md:py-20">
      <UnicornScene
        projectId="dyHEFIsGA1gwshhB9NPf"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js"
        width="100%"
        height="400px"
      />
    </section>
  );
}
