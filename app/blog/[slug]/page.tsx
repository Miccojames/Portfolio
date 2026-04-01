import { posts } from "../../lib/posts"
import { notFound } from "next/navigation"

export default function BlogPost({ params }: { params: { slug: string } }) {

  const post = posts.find((p: typeof posts[number]) => p.slug === params.slug)

  if (!post) return notFound()

  return (
    <article className="max-w-3xl mx-auto py-24">

      <h1 className="text-4xl font-bold mb-4">
        {post.title}
      </h1>

      <p className="text-muted-foreground mb-8">
        {post.date}
      </p>

      <p>
        This is where your blog content will go. You can replace this
        with markdown rendering later.
      </p>

    </article>
  )
}