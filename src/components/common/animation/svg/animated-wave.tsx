"use client"

import { useEffect, useRef, memo } from "react"

export interface AnimatedWaveProps {
  className?: string
  width?: number
  height?: number
  duration?: number
  start?: string
  end?: string
}

function AnimatedWaveComponent({
  className = "",
  width = 1200,
  height = 200,
  duration = 2,
  start = "top 80%",
  end = "bottom 20%",
}: AnimatedWaveProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current || !pathRef.current) return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const path = pathRef.current!
      const pathLength = path.getTotalLength()

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      })

      animationRef.current = gsap.to(path, {
        strokeDashoffset: 0,
        duration,
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
  }, [duration, start, end])

  const pathData = `M0,${Math.round(height / 2)} Q${Math.round(width / 4)},${Math.round(height / 4)} ${Math.round(width / 2)},${Math.round(height / 2)} T${width},${Math.round(height / 2)}`

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      suppressHydrationWarning
    >
      <path
        ref={pathRef}
        d={pathData}
        stroke="url(#waveGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="1" />
          <stop offset="50%" stopColor="#F87171" stopOpacity="1" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const AnimatedWave = memo(AnimatedWaveComponent)

