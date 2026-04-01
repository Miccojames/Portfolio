import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="rounded-xl overflow-hidden">
          <Image
            src="/profile.jpg"
            width={400}
            height={400}
            alt="profile"
            className="w-full"
          />
        </div>

        <Card>
          <CardContent className="space-y-6">

            <h2 className="text-3xl font-bold">
              About Me
            </h2>

            <p className="text-muted-foreground">
              I'm a passionate frontend developer focused on building
              modern and responsive web applications. I enjoy creating
              clean user interfaces and improving user experience.
            </p>

            <p className="text-muted-foreground">
              My main stack includes React, Next.js, Tailwind CSS,
              and TypeScript.
            </p>
          </CardContent>
        </Card>

      </div>

    </section>
  )
}