"use client"

import { useEffect, useState, memo } from "react"

export interface CounterAnimationProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

function CounterAnimationComponent({
  end,
  duration = 2000,
  suffix = "",
  className = "",
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration])

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  )
}

export const CounterAnimation = memo(CounterAnimationComponent)

