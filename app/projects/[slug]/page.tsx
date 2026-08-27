import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowUpRight, Github, FolderGit2 } from "lucide-react"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/#projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            {project.github !== "#" && (
              <Button className="gap-2 rounded-full" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  View Source Code
                </a>
              </Button>
            )}
            {project.live !== "#" && (
              <Button variant="outline" className="gap-2 rounded-full" asChild>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-muted/50">
          <Image
            src={project.image}
            fill
            alt={project.title}
            className={`object-cover ${project.image.includes('svg') ? 'opacity-20 object-contain p-20' : ''}`}
            priority
          />
          {project.image.includes('svg') && (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50 z-0">
              <FolderGit2 className="w-32 h-32" />
            </div>
          )}
        </div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Key Features</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-sm space-y-6">
              <div>
                <h3 className="font-semibold mb-2">My Role</h3>
                <p className="text-muted-foreground">{project.role}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <section className="space-y-4">
              <h3 className="font-bold text-lg">My Contribution</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.contribution}</p>
            </section>

            <section className="space-y-4">
              <h3 className="font-bold text-lg">Challenges & Learnings</h3>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Challenges:</strong> {project.challenges}</p>
                <p><strong className="text-foreground">Learnings:</strong> {project.learned}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
