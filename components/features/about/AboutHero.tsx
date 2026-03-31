import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AboutHero() {
    return (
        <Section className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start justify-center space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-gradient">
                        About Me
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        I'm Micco. I'm studying front-end development and enjoy building clean UI. I love turning ideas into interactive experiences that feel intuitive and visually engaging. My focus is on crafting responsive layouts, clean code, and seamless user journeys. Whether it's a portfolio site or a full-blown web app, I aim to build interfaces that not only look good but work beautifully across devices. I'm constantly learning new tools and techniques to push my skills further and bring creativity into every project.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <Button size="lg" className="group" asChild>
                        <Link href="/resume.pdf" download>
                            <Download className="mr-2 h-4 w-4" />
                            Download Resume
                        </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="mailto:hello@example.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <Image
                    src="/2.jpg"
                    alt="Micco James Ang"
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-2xl object-cover w-full max-w-[500px] aspect-square transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
            </div>
        </Section>
    );
}