import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="p-10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* LEFT SIDE - TEXT */}
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Hi, I’m <span className="font-semibold">Micco James</span>, 
            a motivated student and aspiring web developer. I am passionate 
            about building modern, responsive, and user-friendly web applications 
            that create meaningful digital experiences.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            I continuously improve my skills in frontend and backend development, 
            exploring technologies like React, Next.js, PHP, and MySQL. 
            I enjoy turning ideas into real, functional projects.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            Outside of coding, I love drawing, playing basketball, and learning 
            new tools that help me grow both creatively and technically.
          </p>

          
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative w-72 h-96">
          <Image
            src="/2.jpg"
            alt="Micco James"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>

      </div>
    </div>
  );
}
