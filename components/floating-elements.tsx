"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rotate-45 animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-500/20 rounded-full animate-float-delayed"></div>
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400/30 animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/3 w-5 h-5 bg-cyan-400/20 rotate-12 animate-float"></div>
      <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-blue-300/40 rounded-full animate-float-delayed"></div>
      <div className="absolute top-3/4 right-1/6 w-4 h-4 bg-cyan-300/30 rotate-45 animate-float-slow"></div>
    </div>
  )
}
