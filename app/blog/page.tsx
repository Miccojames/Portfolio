import Link from "next/link"
import { posts } from "../lib/posts"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function BlogPage() {

  return (
    <div className="max-w-4xl mx-auto py-24">

      <h1 className="text-4xl font-bold mb-12">
        Blog
      </h1>

      <div className="space-y-8">

        {posts.map((post) => (

          <Card key={post.slug}>

            <CardHeader>
              <h2 className="text-2xl font-semibold">
                {post.title}
              </h2>
            </CardHeader>

            <CardContent>

              <p className="text-muted-foreground">
                {post.description}
              </p>

              <p className="text-sm mt-2">
                {post.date}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="text-primary mt-3 inline-block"
              >
                Read Article →
              </Link>

            </CardContent>

          </Card>

        ))}

      </div>

    </div>
  )
}