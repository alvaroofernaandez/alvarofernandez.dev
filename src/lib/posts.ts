import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const postsDirectory = path.join(process.cwd(), "content/posts")

export interface PostMetadata {
  title: string
  date: string
  description: string
  author?: string
  tags?: string[]
  image?: string
}

export interface Post {
  slug: string
  metadata: PostMetadata
  content: string
}

// Obtener todos los slugs de los posts
export function getAllPostSlugs(): string[] {
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Posts directory does not exist: ${postsDirectory}`)
      return []
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const slugs = fileNames
      .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
      .map((fileName) => fileName.replace(/\.(md|mdx)$/, ""))
    
    return slugs
  } catch (error) {
    console.error("Error reading posts directory:", error)
    return []
  }
}

// Obtener un post por slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`)

  let filePath: string | null = null
  if (fs.existsSync(fullPath)) {
    filePath = fullPath
  } else if (fs.existsSync(mdxPath)) {
    filePath = mdxPath
  }

  if (!filePath) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  // Procesar el markdown a HTML
  const processedContent = await remark().use(html).process(content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    metadata: {
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      description: data.description || "",
      author: data.author || "Álvaro Fernández",
      tags: data.tags || [],
      image: data.image || "",
    },
    content: contentHtml,
  }
}

// Obtener todos los posts ordenados por fecha
export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs()
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug)
      return post
    })
  )

  // Filtrar nulls y ordenar por fecha (más reciente primero)
  return posts
    .filter((post): post is Post => post !== null)
    .sort((a, b) => {
      const dateA = new Date(a.metadata.date).getTime()
      const dateB = new Date(b.metadata.date).getTime()
      return dateB - dateA
    })
}

