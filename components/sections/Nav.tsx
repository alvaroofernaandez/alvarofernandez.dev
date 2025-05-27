import React from "react"

export const Nav: React.FC = () => (
  <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-40 animate-fade-in">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="text-xl font-extrabold text-white">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AF
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {["Experiencia", "Proyectos", "Stack tecnico", "Sobre mí"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-").replace("í", "i")}`}
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
)