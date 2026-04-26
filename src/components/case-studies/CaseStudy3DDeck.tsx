"use client"

import * as React from "react"
import { motion, useMotionValue, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface CaseStudyCard {
  id: string
  headline: string
  subtext: string
  businessType: string
  adSpend?: string
  costPerCall?: string
  timeline?: string
  bgGradient: string
}

interface CaseStudy3DDeckProps {
  caseStudies?: CaseStudyCard[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

const defaultCaseStudies: CaseStudyCard[] = [
  {
    id: "1",
    headline: "$20,000",
    subtext: "revenue in first 30 days",
    businessType: "RV Rental",
    adSpend: "$5,200",
    costPerCall: "$14.00",
    timeline: "30 days",
    bgGradient: "from-amber-500/20 via-orange-500/20 to-rose-500/20",
  },
  {
    id: "2",
    headline: "SEO Active",
    subtext: "new bookings in 3 months",
    businessType: "Premium Barbershop",
    adSpend: "$0",
    costPerCall: "N/A",
    timeline: "90 days",
    bgGradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    id: "3",
    headline: "Premium",
    subtext: "brand identity & market position",
    businessType: "Barbershop Rebrand",
    adSpend: "N/A",
    costPerCall: "N/A",
    timeline: "1 week",
    bgGradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  },
  {
    id: "4",
    headline: "<60s",
    subtext: "response time, 0 leads lost",
    businessType: "AI Voice Agent",
    adSpend: "$0",
    costPerCall: "Automated",
    timeline: "24/7",
    bgGradient: "from-violet-500/20 via-purple-500/20 to-fuchsia-500/20",
  },
]

export default function CaseStudy3DDeck({
  caseStudies = defaultCaseStudies,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CaseStudy3DDeckProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [direction, setDirection] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const dragX = useMotionValue(0)

  const totalCards = caseStudies.length

  const navigate = React.useCallback(
    (newDirection: number) => {
      setDirection(newDirection)
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + newDirection
        if (nextIndex < 0) return totalCards - 1
        if (nextIndex >= totalCards) return 0
        return nextIndex
      })
    },
    [totalCards]
  )

  React.useEffect(() => {
    if (autoPlay && !isDragging) {
      const interval = setInterval(() => {
        navigate(1)
      }, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [autoPlay, autoPlayInterval, navigate, isDragging])

  const getCardIndex = (offset: number) => {
    const index = currentIndex + offset
    if (index < 0) return totalCards + index
    if (index >= totalCards) return index - totalCards
    return index
  }

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    setIsDragging(false)
    const threshold = 50
    if (info.offset.x > threshold) {
      navigate(-1)
    } else if (info.offset.x < -threshold) {
      navigate(1)
    }
  }

  const leftCard = caseStudies[getCardIndex(-1)]
  const centerCard = caseStudies[getCardIndex(0)]
  const rightCard = caseStudies[getCardIndex(1)]

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden py-24 px-4"
      style={{ background: "#0D0B09" }}
    >
      {/* Section header */}
      <div className="absolute top-12 left-0 right-0 text-center z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-7" style={{ background: "rgba(212,168,83,0.5)" }} />
          <span
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D4A853",
            }}
          >
            Case Studies
          </span>
          <div className="h-px w-7" style={{ background: "rgba(212,168,83,0.5)" }} />
        </div>
        <h2
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 300,
            color: "#F0EAD6",
            lineHeight: 1.1,
          }}
        >
          Real Results. Real Businesses.
        </h2>
      </div>

      <div className="relative w-full max-w-7xl mx-auto mt-20">
        <div
          className="relative h-[520px] sm:h-[560px] flex items-center justify-center"
          style={{ perspective: "1500px" }}
        >
          {/* Left Card */}
          <motion.div
            key={`left-${leftCard.id}`}
            className="absolute left-0 md:left-[10%]"
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={{
              opacity: 0.6,
              x: 0,
              rotateY: -20,
              scale: 0.85,
              z: -100,
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <DeckCard caseStudy={leftCard} isActive={false} onClick={() => navigate(-1)} />
          </motion.div>

          {/* Center Card */}
          <motion.div
            key={`center-${centerCard.id}`}
            className="absolute z-20"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            style={{ x: dragX, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, scale: 0.8, rotateY: direction > 0 ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, z: 50 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: direction > 0 ? -20 : 20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <DeckCard caseStudy={centerCard} isActive={true} />
          </motion.div>

          {/* Right Card */}
          <motion.div
            key={`right-${rightCard.id}`}
            className="absolute right-0 md:right-[10%]"
            initial={{ opacity: 0, x: 100, rotateY: 30 }}
            animate={{
              opacity: 0.6,
              x: 0,
              rotateY: 20,
              scale: 0.85,
              z: -100,
            }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <DeckCard caseStudy={rightCard} isActive={false} onClick={() => navigate(1)} />
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:px-8 pointer-events-none z-30">
          <button
            onClick={() => navigate(-1)}
            className="pointer-events-auto group relative w-12 h-12 rounded-full border transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(13,11,9,0.8)",
              borderColor: "rgba(212,168,83,0.2)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F0EAD6] group-hover:text-[#D4A853] transition-colors" />
          </button>
          <button
            onClick={() => navigate(1)}
            className="pointer-events-auto group relative w-12 h-12 rounded-full border transition-all duration-300 hover:scale-110"
            style={{
              background: "rgba(13,11,9,0.8)",
              borderColor: "rgba(212,168,83,0.2)",
              backdropFilter: "blur(8px)",
            }}
            aria-label="Next case study"
          >
            <ChevronRight className="w-5 h-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#F0EAD6] group-hover:text-[#D4A853] transition-colors" />
          </button>
        </div>

        {/* Indicators */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const diff = index - currentIndex
                setDirection(diff > 0 ? 1 : -1)
                setCurrentIndex(index)
              }}
              className="transition-all duration-300"
              style={{
                width: index === currentIndex ? 32 : 8,
                height: 8,
                borderRadius: 4,
                background:
                  index === currentIndex
                    ? "#D4A853"
                    : "rgba(212,168,83,0.2)",
              }}
              aria-label={`Go to case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface DeckCardProps {
  caseStudy: CaseStudyCard
  isActive: boolean
  onClick?: () => void
}

function DeckCard({ caseStudy, isActive, onClick }: DeckCardProps) {
  const [isHovered, setIsHovered] = React.useState(false)
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    setRotation({
      x: (y - centerY) / 30,
      y: -(x - centerX) / 30,
    })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "relative w-[280px] sm:w-[340px] md:w-[400px] h-[400px] sm:h-[460px] overflow-hidden",
        isActive && "cursor-grab active:cursor-grabbing",
        !isActive && onClick && "cursor-pointer"
      )}
      style={{
        transformStyle: "preserve-3d",
        transform:
          isActive && isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
            : undefined,
        borderRadius: 0,
        border: "1px solid rgba(212,168,83,0.12)",
        background: "#0D0B09",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => isActive && setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={!isActive ? onClick : undefined}
      animate={isActive ? { y: [0, -8, 0] } : {}}
      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
    >
      {/* Glow */}
      {isActive && (
        <motion.div
          className="absolute inset-0"
          animate={{
            boxShadow: [
              "0 0 20px 2px rgba(212,168,83,0.08)",
              "0 0 40px 4px rgba(212,168,83,0.16)",
              "0 0 20px 2px rgba(212,168,83,0.08)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Background gradient */}
      <div
        className={cn("absolute inset-0 bg-gradient-to-br opacity-20", caseStudy.bgGradient)}
      />

      {/* Glass */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(13,11,9,0.6)", backdropFilter: "blur(20px)" }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-8 sm:p-10">
        {/* Business type badge */}
        <div>
          <motion.div
            className="inline-block px-4 py-1.5"
            style={{
              border: "1px solid rgba(212,168,83,0.25)",
              background: "rgba(212,168,83,0.06)",
            }}
            animate={isActive ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4A853",
              }}
            >
              {caseStudy.businessType}
            </span>
          </motion.div>
        </div>

        {/* Headline */}
        <div className="text-center space-y-3">
          <motion.h3
            style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 300,
              lineHeight: 1,
              color: "#F0EAD6",
              transform: isActive && isHovered ? "translateZ(40px)" : undefined,
            }}
          >
            {caseStudy.headline}
          </motion.h3>
          <motion.p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 14,
              color: "rgba(240,234,214,0.55)",
              transform: isActive && isHovered ? "translateZ(30px)" : undefined,
            }}
          >
            {caseStudy.subtext}
          </motion.p>
        </div>

        {/* Details on hover */}
        <AnimatePresence>
          {isActive && isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-6"
              style={{
                borderTop: "1px solid rgba(212,168,83,0.12)",
                transform: "translateZ(20px)",
              }}
            >
              <div className="text-center">
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(240,234,214,0.4)",
                    marginBottom: 4,
                    fontFamily: "var(--font-dm-sans)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Ad Spend
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#F0EAD6" }}>
                  {caseStudy.adSpend}
                </p>
              </div>
              <div className="text-center">
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(240,234,214,0.4)",
                    marginBottom: 4,
                    fontFamily: "var(--font-dm-sans)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Cost/Call
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#F0EAD6" }}>
                  {caseStudy.costPerCall}
                </p>
              </div>
              <div className="text-center">
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(240,234,214,0.4)",
                    marginBottom: 4,
                    fontFamily: "var(--font-dm-sans)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Timeline
                </p>
                <p style={{ fontSize: 13, fontWeight: 600, color: "#F0EAD6" }}>
                  {caseStudy.timeline}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Shine Effect */}
      {isActive && (
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(212,168,83,0.04), transparent)",
          }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  )
}
