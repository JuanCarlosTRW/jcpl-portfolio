"use client"

import { useState, useEffect } from "react"
import { ParticleTextEffect } from "@/components/ui/particle-text-effect"

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [fading, setFading] = useState(false)

  // Lock scroll and reset to top while intro is active
  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.overflow = "hidden"
    document.body.style.position = "fixed"
    document.body.style.top = "0"
    document.body.style.width = "100%"
    document.body.style.height = "100%"

    return () => {
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.height = ""
      window.scrollTo(0, 0)
    }
  }, [])

  const handleComplete = () => {
    setFading(true)
    setTimeout(() => {
      // Unlock scroll and ensure we're at the top (hero)
      document.body.style.overflow = ""
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.height = ""
      window.scrollTo(0, 0)
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
