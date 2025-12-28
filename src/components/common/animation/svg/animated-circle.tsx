"use client"

import { useEffect, useRef, memo } from "react"

export interface AnimatedCircleProps {
  className?: string
  radius?: number
  strokeWidth?: number
  duration?: number
  start?: string
  end?: string
}

function AnimatedCircleComponent({
  className = "",
  radius = 80,
  strokeWidth = 2,
  duration = 2,
  start = "top 80%",
  end = "bottom 20%",
}: AnimatedCircleProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current || !circleRef.current) return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const circle = circleRef.current!
      const circumference = 2 * Math.PI * radius

      // Set initial state
      gsap.set(circle, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
      })

      // Create animation
      animationRef.current = gsap.to(circle, {
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

      // Continuous rotation
      gsap.to(svgRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      })
    }

    initAnimation()

    return () => {
      if (animationRef.current) {
        animationRef.current.kill()
      }
    }
  }, [radius, duration, start, end])

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      suppressHydrationWarning
    >
      <circle
        ref={circleRef}
        cx="100"
        cy="100"
        r={radius}
        stroke="url(#circleGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="1" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const AnimatedCircle = memo(AnimatedCircleComponent)

