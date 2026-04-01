import { Github, Linkedin, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer>
      <Separator />
      <div className="py-6">

        <div className="max-w-6xl mx-auto flex justify-between items-center px-4">

          <p className="text-sm text-muted-foreground">
            © 2026 Micco. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a href="https://github.com/micco" target="_blank" rel="noopener noreferrer">
              <Github size={18} className="hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/in/micco" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} className="hover:text-primary transition-colors" />
            </a>
            <a href="mailto:contact@micco.dev" className="hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}