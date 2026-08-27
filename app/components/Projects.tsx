"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Github, FolderGit2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/data"
import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Featured Work</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my best projects, showcasing my ability to build complex, full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group bg-background/50 backdrop-blur-sm">
                <Link href={`/projects/${project.slug}`} className="block relative h-75 overflow-hidden border-b border-border/50 bg-muted/50">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                  <Image
                    src={project.image}
                    fill
                    alt={project.title}
                    className={`object-cover transition-transform duration-700 group-hover:scale-105 ${project.image.includes('svg') ? 'opacity-20 object-contain p-12' : ''}`}
                  />
                  {/* Fallback icon if image is placeholder */}
                  {project.image.includes('svg') && (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50 z-0">
                      <FolderGit2 className="w-24 h-24" />
                    </div>
                  )}
                </Link>

                <CardHeader className="flex-none">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                    </CardTitle>
                    <Badge variant="outline" className="shrink-0 font-normal">{project.role}</Badge>
                  </div>
                  <CardDescription className="text-base line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="secondary" className="text-xs">+{project.technologies.length - 4}</Badge>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="gap-3 pt-4 border-t border-border/50 flex-none bg-muted/20">
                  <Button size="sm" variant="default" className="w-full sm:w-auto shadow-sm" asChild>
                    <Link href={`/projects/${project.slug}`}>
                      View Details
                    </Link>
                  </Button>
                  
                  {project.github !== "#" && (
                    <Button variant="outline" size="icon" className="shrink-0" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.live !== "#" && (
                    <Button variant="outline" size="icon" className="shrink-0" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}