"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Visual differentiation background */}
      <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-background/60 backdrop-blur-xl border border-border/50 rounded-[3rem] p-12 md:p-20 shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Have a project in mind?</h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 font-medium">
            Let&apos;s build something together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="gap-2 rounded-full h-14 px-8 text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow" asChild>
              <a href="mailto:micco@example.com">
                <Mail className="h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-full h-14 px-8 text-base bg-background/50 hover:bg-background/80" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 rounded-full h-14 px-8 text-base bg-background/50 hover:bg-background/80" asChild>
              <a href="https://github.com/Miccojames" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}