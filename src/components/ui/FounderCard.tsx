"use client";


import Image from "next/image";

export default function FounderCard() {
  return (
    <div className="rounded-2xl overflow-hidden aspect-[3/4] flex flex-col items-center justify-center bg-transparent">
      <Image
        src="/portrait.jpg"
        alt="Juan Carlos"
        width={480}
        height={640}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  );
}
