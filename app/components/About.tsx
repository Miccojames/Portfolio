import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <Image
              src="/profile.jpg"
              width={400}
              height={400}
              alt="Profile"
              className="w-full h-auto object-cover aspect-square"
            />
          </div>

          <Card>
            <CardContent className="pt-8 space-y-6">
              <div>
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <div className="h-1 w-20 bg-primary rounded"></div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate frontend developer with a love for creating beautiful, 
                functional web applications. With a strong foundation in modern web technologies, 
                I focus on delivering clean, maintainable code and exceptional user experiences.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                My journey in web development has been driven by curiosity and a desire to solve 
                real-world problems through technology. I enjoy collaborating with teams and 
                staying updated with the latest industry trends.
              </p>

              <div>
                <h3 className="font-semibold text-lg mb-3">Main Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}