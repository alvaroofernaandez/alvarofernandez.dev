"use client"

import { useEffect, useState, useCallback, useMemo, memo } from "react"

export interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
}

function TypewriterTextComponent({
  text,
  speed = 100,
  className = "",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const updateText = useCallback(() => {
    if (currentIndex < text.length) {
      setDisplayText((prev) => prev + text[currentIndex])
      setCurrentIndex((prev) => prev + 1)
    }
  }, [currentIndex, text])

  useEffect(() => {
    if (!isMounted) return
    if (currentIndex < text.length) {
      const timeout = setTimeout(updateText, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text.length, speed, updateText, isMounted])

  const cursor = useMemo(
    () => <span className="animate-pulse">|</span>,
    []
  )

  // En el servidor, mostrar el texto completo para evitar problemas de hidratación
  if (!isMounted) {
    return (
      <span className={className} suppressHydrationWarning>
        {text}
      </span>
    )
  }

  return (
    <span className={className} suppressHydrationWarning>
      {displayText}
      {cursor}
    </span>
  )
}

export const TypewriterText = memo(TypewriterTextComponent)

