"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Menu, X, Moon, Sun } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        <h1 className="font-bold text-2xl">
          <Link href="/">Micco James</Link>
        </h1>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>

          <Button variant="outline" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg border border-muted text-muted-foreground"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-muted px-4 pb-4">
          <div className="flex flex-col gap-2">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-2">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-2">About</Link>
            <Link href="/skills" onClick={() => setMobileOpen(false)} className="block py-2">Skills</Link>
            <Link href="/projects" onClick={() => setMobileOpen(false)} className="block py-2">Projects</Link>
            <Link href="/blog" onClick={() => setMobileOpen(false)} className="block py-2">Blog</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="block py-2">Contact</Link>

            <button
              className="mt-2 text-left py-2"
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark')
                setMobileOpen(false)
              }}
            >
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
