"use client"

import { memo } from "react"
import Image from "next/image"
import { SITE_CONFIG } from "@/src/constants"

const IMAGE_ALT = "Álvaro Fernández - UI/UX Product Designer, Software Engineer caminando por un túnel de torii gates en Japón"

function HeroBackgroundComponent() {
  return (
    <div className="absolute inset-0 z-0" suppressHydrationWarning>
      <Image
        src={SITE_CONFIG.image}
        alt={IMAGE_ALT}
        fill
        className="object-cover scale-105 transition-transform duration-[20s] ease-out hover:scale-100"
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        suppressHydrationWarning
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/80 via-[#0F0F0F]/75 to-[#0F0F0F]/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,57,70,0.05),transparent_70%)]" />
    </div>
  )
}

export const HeroBackground = memo(HeroBackgroundComponent)

