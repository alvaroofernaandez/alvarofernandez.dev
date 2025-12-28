import { notFound } from "next/navigation"
import Link from "next/link"
import { getPostBySlug, getAllPostSlugs } from "@/src/lib/posts"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Calendar, ArrowLeft, Tag, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Nav } from "@/src/components/layout/nav/nav"
import { Section } from "@/src/components/common/section/section"
import { AnimatedPath, AnimatedCircle } from "@/src/components/common/animation/svg"
import { ShareButton } from "@/src/components/features/blog/share-button"
import { cn } from "@/src/utils"

export const dynamicParams = true // Permitir rutas dinámicas en desarrollo

export async function generateStaticParams() {
  try {
    const slugs = getAllPostSlugs()
    return slugs.map((slug) => ({
      slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string } 
}) {
  // Manejar tanto Promise como objeto directo (Next.js 15+)
  const resolvedParams = await Promise.resolve(params)
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    return {
      title: "Post no encontrado",
    }
  }

  return {
    title: `${post.metadata.title} | Blog - Álvaro Fernández`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author || "Álvaro Fernández"],
      tags: post.metadata.tags,
    },
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> | { slug: string } 
}) {
  // Manejar tanto Promise como objeto directo (Next.js 15+)
  const resolvedParams = await Promise.resolve(params)
  const post = await getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const postDate = new Date(post.metadata.date)
  const formattedDate = format(postDate, "d 'de' MMMM, yyyy", {
    locale: es,
  })

  // Calcular tiempo de lectura aproximado (250 palabras por minuto)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 250)

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-gray-100 relative">
      <Nav />
      <Section
        id="blog-post"
        className="min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-40 xl:pt-48 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A] relative overflow-hidden"
      >
        {/* Background SVG animations */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <AnimatedPath
            className="absolute top-1/4 right-1/4 w-64 h-64"
            path="M50,200 Q100,50 200,200 T350,200"
          />
          <AnimatedCircle
            className="absolute bottom-1/4 left-1/4 w-48 h-48"
            radius={96}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-400">
            <Link
              href="/"
              className="hover:text-vermilion-400 transition-colors duration-300"
            >
              Inicio
            </Link>
            <span className="text-vermilion-500/50">/</span>
            <Link
              href="/blog"
              className="hover:text-vermilion-400 transition-colors duration-300"
            >
              Blog
            </Link>
            <span className="text-vermilion-500/50">/</span>
            <span className="text-gray-300">{post.metadata.title}</span>
          </nav>

          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-vermilion-400 hover:text-vermilion-300 transition-all duration-300 mb-8 group px-4 py-2 rounded-lg hover:bg-vermilion-500/10 border border-transparent hover:border-vermilion-500/20"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Volver al blog</span>
          </Link>

          <article className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-vermilion-500/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/50">
            {/* Header */}
            <header className="mb-10 sm:mb-12 pb-8 border-b border-vermilion-500/10">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-vermilion-500/10 border border-vermilion-500/20">
                  <Calendar className="h-4 w-4 text-vermilion-400" />
                  <span className="font-medium">{formattedDate}</span>
                </div>
                {post.metadata.author && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/30">
                    <User className="h-4 w-4 text-gray-400" />
                    <span>{post.metadata.author}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/30">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span>{readingTime} min de lectura</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 font-heading leading-tight tracking-tight">
                {post.metadata.title}
              </h1>

              {post.metadata.description && (
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-8 font-light">
                  {post.metadata.description}
                </p>
              )}

              {post.metadata.tags && post.metadata.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-vermilion-700/10 text-vermilion-300 border-vermilion-700/30 hover:bg-vermilion-700/20 hover:border-vermilion-700/50 hover:scale-105 transition-all duration-300 px-3 py-1.5 text-sm"
                    >
                      <Tag className="h-3.5 w-3.5 mr-1.5" />
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </header>

            {/* Content */}
            <div
              className={cn(
                "prose prose-invert prose-lg max-w-none",
                "prose-headings:text-white prose-headings:font-heading prose-headings:font-black prose-headings:mt-10 prose-headings:mb-6",
                "prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8",
                "prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6",
                "prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4",
                "prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base sm:prose-p:text-lg",
                "prose-a:text-vermilion-400 prose-a:no-underline hover:prose-a:text-vermilion-300 hover:prose-a:underline prose-a:font-medium",
                "prose-strong:text-white prose-strong:font-bold",
                "prose-code:text-vermilion-400 prose-code:bg-gray-800/70 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono",
                "prose-pre:bg-gray-900 prose-pre:border prose-pre:border-vermilion-500/20 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto",
                "prose-pre code:bg-transparent prose-pre code:p-0",
                "prose-blockquote:border-l-4 prose-blockquote:border-vermilion-500/40 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:bg-gray-800/30 prose-blockquote:py-2 prose-blockquote:my-6",
                "prose-ul:text-gray-300 prose-ol:text-gray-300 prose-ul:my-6 prose-ol:my-6",
                "prose-li:text-gray-300 prose-li:my-2 prose-li:leading-relaxed",
                "prose-img:rounded-xl prose-img:border prose-img:border-vermilion-500/20 prose-img:shadow-xl prose-img:my-8",
                "prose-hr:border-vermilion-500/20 prose-hr:my-10",
                "prose-table:text-gray-300 prose-th:text-white prose-th:font-semibold prose-td:border-gray-700"
              )}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer */}
            <footer className="mt-12 pt-8 border-t border-vermilion-500/10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-vermilion-500/20 to-vermilion-700/20 border border-vermilion-500/30 flex items-center justify-center">
                    <span className="text-vermilion-400 font-black text-sm">AF</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Álvaro Fernández</p>
                    <p className="text-gray-400 text-sm">UI/UX Product Designer, Software Engineer</p>
                  </div>
                </div>
                <ShareButton
                  title={post.metadata.title}
                  description={post.metadata.description}
                  url={`https://alvarofernandez.dev/blog/${post.slug}`}
                />
              </div>
            </footer>
          </article>

          {/* Related posts or back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-vermilion-400 hover:text-vermilion-300 transition-all duration-300 px-6 py-3 rounded-lg hover:bg-vermilion-500/10 border border-vermilion-500/20 hover:border-vermilion-500/40 font-medium"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Ver todos los artículos
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}

