"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-background sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
        
        <h1 className="font-bold text-xl">
          Portfolio
        </h1>

        <div className="flex gap-6 items-center">
          <Link href="#hero">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="#contact">Contact</Link>
          

          <Button>Hire Me</Button>
        </div>

      </div>
    </nav>
  )
}