import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import { projects } from "@/data/projects"


export function ProjectsSection() {
  return (
    <AnimatedSection id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Algunos de mis trabajos más representativos</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg bg-black">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - Mockup`}
                    width={800}
                    height={500}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="rounded-3xl border-gray-600 text-gray-300 hover:bg-blue-500/10 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}