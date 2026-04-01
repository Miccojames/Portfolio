import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-Commerce Website",
    description: "Modern online store built with Next.js and Tailwind",
    tech: "Next.js, Tailwind, Stripe"
  },
  {
    title: "Gym Management System",
    description: "Full system for gym memberships and workouts",
    tech: "React, Node.js"
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio",
    tech: "Next.js, Tailwind"
  },
  {
    title: "Task Manager",
    description: "Productivity task management application",
    tech: "React, Firebase"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <Card key={index}>

              <CardHeader>
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.split(", ").map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">

                <Button size="sm">GitHub</Button>
                <Button size="sm" variant="outline">
                  Live Demo
                </Button>

              </CardFooter>

            </Card>

          ))}

        </div>

      </div>

    </section>
  )
}