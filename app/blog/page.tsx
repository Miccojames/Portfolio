import Link from "next/link"
import { posts } from "../lib/posts"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function BlogPage() {
  const noPosts = posts.length === 0

  return (
    <div className="max-w-4xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      {noPosts ? (
        <div className="rounded-xl border border-muted bg-background/70 p-10 text-center shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">No blog posts available yet</h2>
          <p className="text-muted-foreground mb-6">
            Check back soon for updates, articles, and insights.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors">
            Get in touch
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <h2 className="text-2xl font-semibold">{post.title}</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.description}</p>
                <p className="text-sm mt-2">{post.date}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary mt-3 inline-block">
                  Read Article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}