import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { posts } from "../../lib/posts"

export default function BlogPreview() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.slice(0,3).map((post) => (
            <Card key={post.slug}>
              <CardHeader>
                <h3 className="text-xl font-semibold">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <p className="text-muted-foreground">{post.description}</p>
                <p className="text-sm mt-2 line-clamp-3">{post.content}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary mt-4 block">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
