import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { CounterAnimation } from "@/components/counter-animation"

export function AboutMeSection() {
  return (
    <AnimatedSection id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sobre mí</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conoce más sobre mi experiencia y pasión por el desarrollo
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Mi Historia</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Soy un desarrollador full stack con más de 2 años de experiencia creando software. Me apasiona resolver problemas complejos con código limpio y eficiente. Además de formar parte de iniciativas como ser fundador del Aula de Software Libre de la FP de Córdoba, donde promovemos el uso de tecnologías abiertas y el aprendizaje colaborativo.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              También he considerado iniciar mi propia startup tecnológica, Hagalink, donde lidero un equipo de desarrollo para crear soluciones innovadoras a medida para empresas.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              También me gusta aprender nuevas tecnologías y compartir conocimientos con la comunidad de desarrolladores.
            </p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Next.js"].map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:scale-105 transition-transform duration-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {[
              { label: "2+ Años", desc: "Experiencia en desarrollo", color: "blue", value: 2 },
              { label: "8+ Proyectos", desc: "Completados exitosamente", color: "cyan", value: 8 },
              { label: "100% Remoto", desc: "Trabajo flexible", color: "blue", value: 100 },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
              >
                <h4 className={`text-lg font-bold text-${stat.color}-400 mb-2`}>
                  <CounterAnimation end={stat.value} />
                  {stat.label.includes("+") ? "+" : ""}
                  {stat.label.includes("Años")
                    ? " Años"
                    : stat.label.includes("Proyectos")
                      ? " Proyectos"
                      : stat.label.includes("%")
                        ? "% Remoto"
                        : ""}
                </h4>
                <p className="text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}