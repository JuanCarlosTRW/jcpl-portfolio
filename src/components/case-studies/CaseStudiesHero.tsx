import UnicornScene from "unicornstudio-react/next";

export default function CaseStudiesHero() {
  return (
    <div
      className="w-screen h-[60vh] min-h-[320px] max-h-[100vh] relative left-1/2 right-1/2 -mx-[50vw] overflow-hidden mb-12"
      style={{ minWidth: '100vw' }}
    >
      <UnicornScene
        projectId="hU6U4mKRHf6q7lApTLwx"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
        production={true}
        scale={1}
        dpi={1.5}
        fps={60}
        lazyLoad={true}
      />
    </div>
  );
}
