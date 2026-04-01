import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <Projects />
    </main>
  )
}