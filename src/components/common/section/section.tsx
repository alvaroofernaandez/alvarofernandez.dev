"use client"

import { memo, type ReactNode } from "react"
import { cn } from "@/src/utils"

export interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  suppressHydrationWarning?: boolean
}

function SectionComponent({ id, className, children, suppressHydrationWarning }: SectionProps) {
  return (
    <section id={id} className={cn(className)} suppressHydrationWarning={suppressHydrationWarning}>
      {children}
    </section>
  )
}

export const Section = memo(SectionComponent)

