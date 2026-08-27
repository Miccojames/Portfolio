"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center py-24 px-4 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      <div className="absolute top-0 -translate-y-12 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 translate-y-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50 text-sm font-medium backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>

          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
              Hi, I&apos;m Micco James.
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium">
              Frontend Developer & Web Developer
            </h2>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Building modern, responsive, and user-focused web applications. I turn complex problems into elegant, beautiful, and intuitive interfaces.
          </p>

          <div className="flex gap-4 flex-wrap pt-2">
            <Link href="#projects">
              <Button size="lg" className="gap-2 rounded-full h-12 px-8 shadow-lg shadow-primary/20">
                View My Projects
              </Button>
            </Link>
            <Link href="#contact">
              <Button size="lg" variant="outline" className="gap-2 rounded-full h-12 px-8">
                Let&apos;s Work Together
              </Button>
            </Link>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/Miccojames" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </a>
            <a href="mailto:micco@example.com" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] w-full rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl"
        >
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent z-10" />
          <Image
            src="/2.jpg"
            fill
            alt="Micco James"
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}