import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/data/experience"
import { Building, Calendar, MapPin } from "lucide-react"


export function ExperienceSection() {
  return (
    <AnimatedSection id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiencia Profesional
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software
          </p>
        </div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                  <div className="flex items-center text-blue-400 mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    {exp.company}
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-gray-400">
                  <div className="flex items-center mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exp.period}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}