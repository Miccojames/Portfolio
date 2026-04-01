type Post = {
  slug: string
  title: string
  description: string
  date: string
}

export const posts: Post[] = [
  {
    slug: "nextjs-portfolio-guide",
    title: "How I Built My Portfolio with Next.js",
    description: "A step-by-step guide on building a modern developer portfolio.",
    date: "March 30, 2026"
  },
  {
    slug: "tailwind-css-tips",
    title: "5 Tailwind CSS Tips for Beginners",
    description: "Improve your UI development workflow with Tailwind.",
    date: "March 25, 2026"
  },
  {
    slug: "react-best-practices",
    title: "React Best Practices in 2026",
    description: "Modern techniques for writing clean React applications.",
    date: "March 20, 2026"
  }
]
