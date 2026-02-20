"use client";

import dynamic from "next/dynamic";

// This client component safely wraps ResultsHeroWebGL with ssr: false
// so it can be imported from a server component page.
const ResultsHeroWebGL = dynamic(
  () => import("./ResultsHeroWebGL"),
  { ssr: false }
);

export default function ResultsHeroWebGLLoader() {
  return <ResultsHeroWebGL />;
}
