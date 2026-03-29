"use client"

import { useState } from "react"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false)

  const handleComplete = () => {
    setFading(true)
    setTimeout(() => {
      onComplete()
    }, 800)
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 0.8s ease-out",
      }}
    >
      <ParticleTextEffect
        words={["CLIENT GROWTH", "Welcome.", "This is where your business shines."]}
        onComplete={handleComplete}
      />
    </div>
  )
}
