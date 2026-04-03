type Post = {
  slug: "nextjs-portfolio-guide" | "tailwind-css-tips" | "react-best-practices"
  title: string
  description: string
  date: string
  content: string   // new field
}

export const posts: Post[] = [
   {
    slug: "nextjs-portfolio-guide",
    title: "How I Built My Portfolio with Next.js",
    description: "A step-by-step guide on building a modern developer portfolio.",
    date: "March 30, 2026",
    content: `
# Building a Portfolio with Next.js

I used **Next.js** because it provides:

- File-based routing
- Server-side rendering
- Easy deployment on Vercel

\`\`\`tsx
export default function Home() {
  return <h1>Hello World</h1>
}
\`\`\`
    `
  },
  {
    slug: "tailwind-css-tips",
    title: "5 Tailwind CSS Tips for Beginners",
    description: "Improve your UI development workflow with Tailwind.",
    date: "March 25, 2026",
    content: `
## Tailwind Tips

1. Use \`@apply\` for reusable styles.
2. Configure your theme in \`tailwind.config.js\`.
3. Use plugins like typography for better prose.
    `
  },
  {
    slug: "react-best-practices",
    title: "React Best Practices in 2026",
    description: "Modern techniques for writing clean React applications.",
    date: "March 20, 2026",
    content: "React has evolved a lot. In this post, I cover patterns like server components, hooks organization, and testing strategies..."
  }
]
