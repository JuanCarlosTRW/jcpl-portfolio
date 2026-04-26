"use client";

import Script from "next/script";

export default function UnicornEmbed() {
  return (
    <section
      className="flex items-center justify-center bg-[#0D0B09]"
      style={{ padding: "64px 24px" }}
      aria-label="Interactive feature"
    >
      <div
        style={{ width: 390, height: 844 }}
        data-us-project="dyHEFIsGA1gwshhB9NPf"
      />
      <Script
        id="unicorn-studio"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `!function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();`,
        }}
      />
    </section>
  );
}
