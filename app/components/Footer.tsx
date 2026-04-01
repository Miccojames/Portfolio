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
            <Github size={18}/>
            <Linkedin size={18}/>
            <Mail size={18}/>
          </div>

        </div>
      </div>
    </footer>
  )
}