import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center py-24 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="space-y-8">
          {/* Message me indicator */}
          <div className="flex items-center gap-2">
            <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
            <Link href="/contact" className="text-sm font-medium hover:underline">
              Message me
            </Link>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4">
              Hey, I'm Micco 👋
            </h1>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            A passionate Frontend Developer dedicated to building websites, 
            web applications, and custom solutions that are not only highly 
            functional but also visually captivating.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap pt-4">
            <Link href="/contact">
              <Button size="lg" className="gap-2 bg-foreground text-background hover:bg-foreground/90">
                Free Consultation
              </Button>
            </Link>
            <Link href="/projects">
              <Button size="lg" variant="outline" className="gap-2">
                Explore Projects
              </Button>
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:micco@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/profile.jpg"
            fill
            alt="Micco James"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  )
}