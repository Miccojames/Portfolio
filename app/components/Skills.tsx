import { Card, CardContent } from "@/components/ui/card"

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git"
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <Card key={skill}>
              <CardContent className="flex justify-center items-center h-20 font-medium">
                {skill}
              </CardContent>
            </Card>
          ))}

        </div>

      </div>

    </section>
  )
}