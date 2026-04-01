"use client"

import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function Page() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'hero'
      setActiveSection(hash)
    }
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <main>
      {activeSection === 'hero' && <Hero />}
      {activeSection === 'about' && <About />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
    </main>
  )
}