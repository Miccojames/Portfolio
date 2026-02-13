import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-background">
      <section className="text-center max-w-4xl w-full py-20">
        <h1 className="text-6xl font-extrabold mb-6 text-foreground leading-tight">
          Building Modern Web Experiences
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Hi, I'm Micco — a passionate web developer focused on creating
          clean, responsive, and user-friendly applications using modern
          web technologies.
        </p>

        <div className="flex flex-wrap gap-6 justify-center">
          <Link href="/projects">
            <Button size="lg" className="px-8 py-4 text-lg">
              Explore My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-border"
            >
              Contact Me
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
