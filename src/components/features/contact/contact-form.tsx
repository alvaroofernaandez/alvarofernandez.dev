"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Mail, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/LanguageContext"
import { cn } from "@/src/utils"

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres").max(100),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const { t, translationsLoaded } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Error al enviar el mensaje")
      }

      setSubmitStatus("success")
      reset()
      
      // Resetear el estado de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Mostrar placeholder mientras se cargan las traducciones
  if (!translationsLoaded) {
    return (
      <div className="space-y-4 sm:space-y-5 animate-pulse">
        <div className="space-y-2">
          <div className="h-4 w-20 bg-neutral-700/50 rounded"></div>
          <div className="h-11 sm:h-12 bg-neutral-800/50 rounded-md"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-16 bg-neutral-700/50 rounded"></div>
          <div className="h-11 sm:h-12 bg-neutral-800/50 rounded-md"></div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-20 bg-neutral-700/50 rounded"></div>
          <div className="h-32 bg-neutral-800/50 rounded-md"></div>
        </div>
        <div className="h-12 bg-neutral-800/50 rounded-full"></div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-gray-300 font-medium text-sm sm:text-base">
          {t("contact.form.name")}
        </Label>
        <Input
          id="name"
          type="text"
          placeholder={t("contact.form.namePlaceholder")}
          className={cn(
            "h-11 sm:h-12 bg-neutral-900/80 border border-neutral-700/50 text-white placeholder:text-gray-400",
            "focus-visible:border-vermilion-500/60 focus-visible:ring-vermilion-500/30 focus-visible:ring-2",
            "transition-all duration-300 hover:border-vermilion-500/40",
            errors.name && "border-red-500/50 focus-visible:border-red-500 focus-visible:ring-red-500/20"
          )}
          {...register("name")}
          disabled={isSubmitting}
        />
        {errors.name && (
          <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1.5 mt-1">
            <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-gray-300 font-medium text-sm sm:text-base">
          {t("contact.form.email")}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={t("contact.form.emailPlaceholder")}
          className={cn(
            "h-11 sm:h-12 bg-neutral-900/80 border border-neutral-700/50 text-white placeholder:text-gray-400",
            "focus-visible:border-vermilion-500/60 focus-visible:ring-vermilion-500/30 focus-visible:ring-2",
            "transition-all duration-300 hover:border-vermilion-500/40",
            errors.email && "border-red-500/50 focus-visible:border-red-500 focus-visible:ring-red-500/20"
          )}
          {...register("email")}
          disabled={isSubmitting}
        />
        {errors.email && (
          <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1.5 mt-1">
            <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-300 font-medium text-sm sm:text-base">
          {t("contact.form.message")}
        </Label>
        <Textarea
          id="message"
          placeholder={t("contact.form.messagePlaceholder")}
          rows={5}
          className={cn(
            "min-h-[120px] bg-neutral-900/80 border border-neutral-700/50 text-white placeholder:text-gray-400 resize-none",
            "focus-visible:border-vermilion-500/60 focus-visible:ring-vermilion-500/30 focus-visible:ring-2",
            "transition-all duration-300 hover:border-vermilion-500/40",
            errors.message && "border-red-500/50 focus-visible:border-red-500 focus-visible:ring-red-500/20"
          )}
          {...register("message")}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-xs sm:text-sm text-red-400 flex items-center gap-1.5 mt-1">
            <AlertCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
            {errors.message.message}
          </p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="flex items-center gap-2.5 p-3.5 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 backdrop-blur-sm">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{t("contact.form.success")}</p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="flex items-center gap-2.5 p-3.5 sm:p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 backdrop-blur-sm">
          <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{t("contact.form.error")}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full group/btn relative rounded-full bg-gradient-to-r from-vermilion-600 to-vermilion-500 hover:from-vermilion-700 hover:to-vermilion-600 shadow-xl shadow-vermilion-500/30 hover:shadow-vermilion-500/50 transition-all duration-500 hover:scale-105 active:scale-95 text-white font-semibold py-5 sm:py-6 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
            {t("contact.form.sending")}
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            {t("contact.form.send")}
          </>
        )}
        <span className="absolute inset-0 bg-gradient-to-r from-vermilion-700/20 to-vermilion-500/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
      </Button>
    </form>
  )
}

