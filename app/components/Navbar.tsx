"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Journey", href: "/#journey" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/70 backdrop-blur-md border-b" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="font-bold text-2xl tracking-tighter">
          <Link href="/">Micco.</Link>
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.name}
            </Link>
          ))}

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="rounded-full">
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Link href="/#contact">
            <Button className="rounded-full">Let&apos;s Work Together</Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t bg-background/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-lg"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileOpen(false)} 
                className="text-lg font-medium text-foreground py-2 border-b border-border/50"
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center justify-between pt-2">
              <span className="font-medium">Theme</span>
              <Button variant="outline" size="icon" onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
                setMobileOpen(false)
              }}>
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}
