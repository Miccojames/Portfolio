import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      
      <p className="mb-4">
        Hi, I’m Micco James — a student aspiring to become a web developer. 
        I’m passionate about learning how to build modern, user-friendly 
        websites and improving my skills in coding and design.
      </p>

      <p className="mb-4">
        Outside of my studies, I enjoy drawing, playing basketball, and 
        exploring new tools that help me create better digital experiences.
      </p>

      <Button>Learn More</Button>
    </div>
  )
}
