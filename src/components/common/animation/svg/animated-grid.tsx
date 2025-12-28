"use client"

import { useEffect, useRef, memo } from "react"

export interface AnimatedGridProps {
  className?: string
  size?: number
  rows?: number
  cols?: number
  start?: string
  end?: string
}

function AnimatedGridComponent({
  className = "",
  size = 400,
  rows = 10,
  cols = 10,
  start = "top 80%",
  end = "bottom 20%",
}: AnimatedGridProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<SVGGElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current || !containerRef.current) return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const lines = containerRef.current!.querySelectorAll("line")

      gsap.set(lines, {
        opacity: 0,
        scale: 0.8,
      })

      animationRef.current = gsap.to(lines, {
        opacity: 0.4,
        scale: 1,
        duration: 1.5,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: svgRef.current,
          start,
          end,
          scrub: 1,
        },
      })
    }

    initAnimation()

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [rows, cols, start, end])

  const lines: JSX.Element[] = []
  const cellSize = Math.round((size / Math.max(rows, cols)) * 100) / 100

  // Horizontal lines
  for (let i = 0; i <= rows; i++) {
    const y = Math.round(i * cellSize * 100) / 100
    lines.push(
      <line
        key={`h-${i}`}
        x1="0"
        y1={y}
        x2={size}
        y2={y}
        stroke="url(#gridGradient)"
        strokeWidth="1"
      />
    )
  }

  // Vertical lines
  for (let i = 0; i <= cols; i++) {
    const x = Math.round(i * cellSize * 100) / 100
    lines.push(
      <line
        key={`v-${i}`}
        x1={x}
        y1="0"
        x2={x}
        y2={size}
        stroke="url(#gridGradient)"
        strokeWidth="1"
      />
    )
  }

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      suppressHydrationWarning
    >
      <g ref={containerRef}>{lines}</g>
      <defs>
        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const AnimatedGrid = memo(AnimatedGridComponent)

