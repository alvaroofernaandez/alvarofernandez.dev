"use client"

import { useEffect, useRef, memo } from "react"

export interface AnimatedPathProps {
  className?: string
  path: string
  strokeWidth?: number
  duration?: number
  start?: string
  end?: string
}

function AnimatedPathComponent({
  className = "",
  path,
  strokeWidth = 2,
  duration = 2,
  start = "top 80%",
  end = "bottom 20%",
}: AnimatedPathProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !svgRef.current || !pathRef.current) return

    const initAnimation = async () => {
      const gsap = (await import("gsap")).default
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const pathElement = pathRef.current!
      const pathLength = pathElement.getTotalLength()

      // Set initial state
      gsap.set(pathElement, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      })

      // Create animation
      animationRef.current = gsap.to(pathElement, {
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
      if (typeof window !== "undefined") {
        const ScrollTrigger = (window as any).ScrollTrigger
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach((trigger: any) => {
            if (trigger.vars?.trigger === svgRef.current) {
              trigger.kill()
            }
          })
        }
      }
    }
  }, [path, duration, start, end])

  return (
    <svg
      ref={svgRef}
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      suppressHydrationWarning
    >
      <path
        ref={pathRef}
        d={path}
        stroke="url(#pathGradient)"
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E63946" stopOpacity="1" />
          <stop offset="50%" stopColor="#F87171" stopOpacity="1" />
          <stop offset="100%" stopColor="#E63946" stopOpacity="1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const AnimatedPath = memo(AnimatedPathComponent)

