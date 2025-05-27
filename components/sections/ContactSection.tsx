import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"


export function ContactSection() {
  return (
    <AnimatedSection id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">¿Tienes un proyecto en mente? ¡Hablemos!</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-900/30 backdrop-blur-sm border-blue-500/20 shadow-2xl shadow-blue-500/10">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">¡Trabajemos juntos!</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Estoy disponible para colaboraciones o proyectos freelance, ¡no dudes en contactarme!.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="rounded-3xl flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    <a href="mailto:alvaroofernaandez@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      alvaroofernaandez@gmail.com
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-3xl flex-1 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
                  >
                    <a
                      href="https://www.linkedin.com/in/alvaro-fernandez-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  )
}