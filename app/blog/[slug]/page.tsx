import { posts } from "../../../lib/posts"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params   // 👈 unwrap the promise

  const post = posts.find((p) => p.slug === slug)

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-muted-foreground mb-2">{post.date}</p>
      <p className="text-lg mb-8">{post.description}</p>

      <div className="prose">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  )
}

// 👇 Prebuild slugs
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
