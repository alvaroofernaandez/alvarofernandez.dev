"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useState } from "react"

interface ShareButtonProps {
  title: string
  description: string
  url: string
}

export function ShareButton({ title, description, url }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        })
      } catch (error) {
        // Usuario canceló o error
        console.log("Share cancelled")
      }
    } else {
      // Fallback: copiar al portapapeles
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error("Failed to copy:", error)
      }
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      className="border-vermilion-500/30 text-vermilion-300 hover:bg-vermilion-500/10 hover:border-vermilion-500/50 transition-all duration-300"
      onClick={handleShare}
    >
      <Share2 className="h-4 w-4 mr-2" />
      {copied ? "¡Copiado!" : "Compartir"}
    </Button>
  )
}

