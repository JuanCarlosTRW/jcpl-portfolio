import UnicornScene from "unicornstudio-react/next";

export default function CaseStudiesHero() {
  return (
    <div className="w-full flex justify-center items-center mb-12">
      <UnicornScene
        projectId="hU6U4mKRHf6q7lApTLwx"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        width="100%"
        height="400px"
        production={true}
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={true}
      />
    </div>
  );
}
