import Link from "next/link"
import { getAllPosts } from "@/src/lib/posts"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react"
import { Nav } from "@/src/components/layout/nav/nav"
import { Section } from "@/src/components/common/section/section"
import { SectionHeader } from "@/src/components/common/section/section-header"
import { AnimatedGrid, AnimatedCurve } from "@/src/components/common/animation/svg"
import { cn } from "@/src/utils"

export const metadata = {
  title: "Blog | Álvaro Fernández",
  description: "Artículos sobre desarrollo web, diseño de productos, tecnología y más.",
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-gray-100 relative">
      <Nav />
      <Section
        id="blog"
        className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-48 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden"
      >
        {/* Background SVG animations */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <AnimatedGrid
            className="absolute top-0 left-0 w-full h-full"
            size={600}
            rows={6}
            cols={6}
          />
          <AnimatedCurve
            className="absolute top-1/4 right-1/4 w-64 h-64 opacity-40"
            width={256}
            height={256}
          />
          <AnimatedCurve
            className="absolute bottom-1/4 left-1/4 w-48 h-48 opacity-40"
            width={192}
            height={192}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-10 xl:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 xl:w-12 xl:h-12 2xl:w-10 2xl:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-br from-vermilion-500/20 to-vermilion-700/20 border border-vermilion-500/30 mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-4">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-7 lg:w-7 xl:h-6 xl:w-6 2xl:h-5 2xl:w-5 text-vermilion-400" />
            </div>
            <div className="mb-4 sm:mb-5 md:mb-6 lg:mb-5 xl:mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-3xl xl:text-2xl 2xl:text-xl font-black mb-3 sm:mb-4 md:mb-5 lg:mb-3 xl:mb-2 font-heading">
                <span className="bg-gradient-to-r from-vermilion-400 via-vermilion-500 to-vermilion-400 bg-clip-text text-transparent">
                  Blog
                </span>
              </h2>
              <p className="text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-xl xl:max-w-lg 2xl:max-w-md mx-auto text-sm sm:text-base md:text-base lg:text-sm xl:text-xs 2xl:text-xs px-4">
                Artículos sobre desarrollo, diseño y tecnología
              </p>
            </div>
            <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-4 xl:mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base lg:text-sm xl:text-xs 2xl:text-xs text-gray-400">
              <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-3.5 lg:w-3.5 xl:h-3 xl:w-3 2xl:h-2.5 2xl:w-2.5 text-vermilion-400" />
              <span>{posts.length} {posts.length === 1 ? "artículo" : "artículos"}</span>
            </div>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-800/50 mb-6">
                <BookOpen className="h-10 w-10 text-gray-500" />
              </div>
              <p className="text-gray-400 text-lg mb-2">
                No hay posts disponibles todavía
              </p>
              <p className="text-gray-500 text-sm">
                Próximamente...
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-5 xl:gap-4">
              {posts.map((post, index) => {
                const postDate = new Date(post.metadata.date)
                const formattedDate = format(postDate, "d 'de' MMMM, yyyy", {
                  locale: es,
                })

                return (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`}
                    className="group animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Card
                      className={cn(
                        "relative h-full bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl",
                        "border border-vermilion-500/10 rounded-xl sm:rounded-2xl",
                        "hover:border-vermilion-500/40 transition-all duration-500",
                        "hover:shadow-2xl hover:shadow-vermilion-500/30 hover:-translate-y-2",
                        "overflow-hidden active:scale-[0.98] cursor-pointer",
                        "group-hover:bg-gradient-to-br group-hover:from-gray-900/90 group-hover:to-gray-800/70"
                      )}
                    >
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-vermilion-500/0 via-vermilion-500/8 to-vermilion-700/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      {/* Left border accent */}
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vermilion-500/50 via-vermilion-700/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="p-5 sm:p-6 md:p-7 lg:p-6 xl:p-5 2xl:p-4 relative z-10 flex flex-col h-full">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3 sm:mb-4 lg:mb-3 xl:mb-2.5 text-xs sm:text-sm lg:text-xs xl:text-xs text-gray-400">
                            <div className="p-1.5 sm:p-1.5 lg:p-1.5 xl:p-1 rounded-lg bg-vermilion-500/10 border border-vermilion-500/20">
                              <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-3.5 lg:w-3.5 xl:h-3.5 xl:w-3.5 text-vermilion-400" />
                            </div>
                            <span className="font-medium">{formattedDate}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-lg 2xl:text-base font-black text-white mb-3 sm:mb-4 lg:mb-3.5 xl:mb-3 group-hover:text-vermilion-400 transition-colors duration-300 font-heading leading-tight line-clamp-2">
                            {post.metadata.title}
                          </h3>

                          <p className="text-gray-300 text-sm sm:text-base lg:text-sm xl:text-sm 2xl:text-xs leading-relaxed mb-4 sm:mb-5 lg:mb-4 xl:mb-3.5 line-clamp-3">
                            {post.metadata.description}
                          </p>

                          {post.metadata.tags && post.metadata.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-1.5 mb-4 sm:mb-5 lg:mb-4 xl:mb-3.5">
                              {post.metadata.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="secondary"
                                  className="bg-vermilion-700/10 text-vermilion-300 border-vermilion-700/30 hover:bg-vermilion-700/20 hover:border-vermilion-700/50 hover:scale-105 transition-all duration-300 text-xs lg:text-xs xl:text-xs 2xl:text-xs px-2.5 sm:px-3 lg:px-2.5 xl:px-2 py-1 sm:py-1 lg:py-0.5"
                                >
                                  {tag}
                                </Badge>
                              ))}
                              {post.metadata.tags.length > 3 && (
                                <Badge
                                  variant="secondary"
                                  className="bg-gray-800/50 text-gray-400 border-gray-700/30 text-xs lg:text-xs xl:text-xs 2xl:text-xs px-2.5 sm:px-3 lg:px-2.5 xl:px-2 py-1 sm:py-1 lg:py-0.5"
                                >
                                  +{post.metadata.tags.length - 3}
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>

                        <div className="flex items-center justify-between gap-2 text-vermilion-400 group-hover:text-vermilion-300 transition-colors duration-300 mt-auto pt-4 sm:pt-5 lg:pt-4.5 xl:pt-4 border-t border-vermilion-500/10">
                          <span className="text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-xs font-semibold">Leer artículo</span>
                          <div className="flex items-center gap-1">
                            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-3.5 lg:w-3.5 xl:h-3.5 xl:w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </Section>
    </div>
  )
}

