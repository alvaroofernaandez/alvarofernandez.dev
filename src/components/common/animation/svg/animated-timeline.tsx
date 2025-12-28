"use client"

import { useEffect, useRef, memo } from "react"

export interface AnimatedTimelineProps {
  className?: string
  height?: number
  start?: string
  end?: string
}

function AnimatedTimelineComponent({
  className = "",
  height = 1000,
  start = "top 80%",
  end = "bottom 20%",
}: AnimatedTimelineProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const lineRef = useRef<SVGLineElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current || !lineRef.current) return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const line = lineRef.current!
      const lineLength = line.getTotalLength()

      gsap.set(line, {
        strokeDasharray: lineLength,
        strokeDashoffset: lineLength,
        opacity: 0.3,
      })

      animationRef.current = gsap.to(line, {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
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
  }, [height, start, end])

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox={`0 0 4 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      suppressHydrationWarning
    >
      <line
        ref={lineRef}
        x1="2"
        y1="0"
        x2="2"
        y2={height}
        stroke="url(#timelineGradient)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="1" />
          <stop offset="50%" stopColor="#F87171" stopOpacity="1" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const AnimatedTimeline = memo(AnimatedTimelineComponent)

