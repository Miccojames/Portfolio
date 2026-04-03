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
              src="https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/481994199_1725365931751601_7538237545907782544_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFIK5jBcqpV5_rx2ZpJ-9rjfaf4Ibtqalp9p_ghu2pqWqjNHJ_X2reyee5VCPknU7Sdoxkp59_atnWgQw2I_f3H&_nc_ohc=LKexNt75ZroQ7kNvwFTYfBB&_nc_oc=Adq08cZ_-XlYeeRVEq2rq2gOOupUqpwdj1lAWkmdyIbeVPwEsiv4p_akt7OgC1Ejdfs&_nc_zt=23&_nc_ht=scontent.fmnl17-2.fna&_nc_gid=t9sL_ev1KU75qVGhrjwkZA&_nc_ss=7a3a8&oh=00_Af0WjwfegYNJD6hfOdSE--LH4mLJrdV-bJMPwe6mwZdJlA&oe=69D4FDC5"
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
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}