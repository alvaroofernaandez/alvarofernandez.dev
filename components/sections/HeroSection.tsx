import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypewriterText } from "@/components/typewriter-text"
import { Download, Github, Linkedin, Mail } from "lucide-react"


export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-black to-cyan-900/10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <Image
                src="/img.webp"
                alt="Álvaro Fernández - Desarrollador Full Stack"
                width={150}
                height={150}
                className="rounded-full object-cover w-44 h-44 mx-auto border-4 border-blue-500/50 shadow-2xl shadow-blue-500/25"
              />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Hola, soy{" "}
              <span className="text-blue-400">
                <TypewriterText text="Álvaro Fernández" />
              </span>
            </h1>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Desarrollador Full Stack especializado en crear{" "}
              <span className="text-blue-400 font-semibold">buenas experiencias digitales</span>
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "600ms" }}
          >
            <Button
              asChild
              size="lg"
              className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              >
              <Download className="mr-2 h-4 w-4" />
              Descargar CV
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
            {[
              { Icon: Github, href: "https://github.com/alvaroofernaandez", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/alvaroofernaandez/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:alvaroofernaandez@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}