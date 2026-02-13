import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="p-6 flex justify-center">
      <div className="text-center max-w-3xl w-full">
        <h1 className="text-5xl font-bold mb-4">
          Building Modern Web Experiences
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Hi, I'm Micco — a passionate web developer focused on creating
          clean, responsive, and user-friendly applications using modern
          web technologies.
        </p>

        <div className="flex gap-4 justify-center">
          <Button>Explore My Work</Button>
          <Button variant="outline">Contact Me</Button>
        </div>
      </div>
    </div>
  );
}
