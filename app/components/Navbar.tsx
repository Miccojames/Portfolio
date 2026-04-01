"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        
        <h1 className="font-bold text-2xl">
          <Link href="/">Micco James</Link>
        </h1>

        <div className="flex gap-6 items-center">
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

      </div>
    </nav>
  )
}
