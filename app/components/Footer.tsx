import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Need help building something?
          </h2>
          <p className="text-lg text-background/80 max-w-2xl mx-auto">
            Whether you're searching for a dedicated partner to develop your 
            project or simply need expert support, I'm here to help.
          </p>
          <Link href="/contact">
            <button className="bg-background text-foreground font-semibold px-8 py-3 rounded-lg hover:bg-background/90 transition-colors">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      <Separator className="bg-background/20" />

      {/* Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Micco James</h3>
            <p className="text-sm text-background/80">Frontend Developer</p>
            <div className="flex items-center gap-2 text-sm text-background/80">
              <MapPin className="h-4 w-4" />
              <span>Philippines</span>
            </div>
          </div>

          {/* Pages */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Pages</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-background transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Resources</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  GitHub Boilerplates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  CodePen Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  MDN Web Docs
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Connect</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:miccojamesang9@gmail.com" className="hover:text-background transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom */}
        <div className="text-center text-sm text-background/60">
          <p>© 2026 Micco James. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}