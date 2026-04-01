import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">

      <div className="max-w-5xl text-center space-y-6">

        <h1 className="text-5xl font-bold">
          Hi, I'm Micco
        </h1>

        <h2 className="text-2xl text-muted-foreground">
          Frontend Developer
        </h2>

        <p className="text-lg max-w-xl mx-auto text-muted-foreground">
          I build modern, responsive, and user-friendly web applications
          using React, Next.js, and Tailwind CSS.
        </p>

        <div className="flex justify-center gap-4">
          <Button>View Projects</Button>
          <Button variant="outline">Contact Me</Button>
        </div>

        <div className="flex justify-center gap-6 pt-4">

          <Github className="cursor-pointer hover:text-primary"/>
          <Linkedin className="cursor-pointer hover:text-primary"/>
          <Mail className="cursor-pointer hover:text-primary"/>

        </div>

      </div>

    </section>
  )
}