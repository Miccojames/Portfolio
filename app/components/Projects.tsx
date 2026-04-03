import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce ",
    description: "Modern online store with product catalog, shopping cart,",
    tech: [ "React",  "Tailwind CSS"],
    github: "https://github.com/JanAro1/Ecommerce-App",
    live: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing projects and skills with modern design",
    tech: [ "Tailwind CSS",  "React"],
    github: "https://github.com/Miccojames/Micco-OS",
    live: "https://micco-portfolio.vercel.app/"
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects I've built to showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 pt-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="gap-2"
                  asChild
                >
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}