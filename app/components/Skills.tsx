"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { skills } from "@/lib/data"
import { Code2, Server, Database, Wrench } from "lucide-react"

const categoryIcons = {
  frontend: <Code2 className="h-5 w-5 text-primary" />,
  backend: <Server className="h-5 w-5 text-primary" />,
  database: <Database className="h-5 w-5 text-primary" />,
  tools: <Wrench className="h-5 w-5 text-primary" />
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary rounded mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to create modern, high-performance web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([key, categorySkills], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-background/50 backdrop-blur-sm group shadow-sm hover:shadow-md">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/50">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {categoryIcons[key as keyof typeof categoryIcons]}
                    </div>
                    <h3 className="font-semibold text-lg capitalize">{key}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <Badge key={skill.name} variant="secondary" className="hover:bg-primary/20 hover:text-primary transition-colors py-1.5 px-3">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}