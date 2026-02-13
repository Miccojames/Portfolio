import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-6 md:px-12 py-16 bg-background">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 max-w-6xl mx-auto">
        
        {/* LEFT SIDE - TEXT */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-8 text-foreground">
            About Me
          </h1>

          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            Hi, I’m <span className="font-semibold text-foreground">Micco James</span>, 
            a motivated student and aspiring web developer. I am passionate 
            about building modern, responsive, and user-friendly web applications 
            that create meaningful digital experiences.
          </p>

          <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
            I continuously improve my skills in frontend and backend development, 
            exploring technologies like <span className="font-medium">React, Next.js, PHP, and MySQL</span>. 
            I enjoy turning ideas into real, functional projects.
          </p>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Outside of coding, I love drawing, playing basketball, and learning 
            new tools that help me grow both creatively and technically.
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="relative w-80 h-96 md:w-[400px] md:h-[500px]">
          <Image
            src="/2.jpg"
            alt="Micco James"
            fill
            className="object-cover rounded-2xl shadow-xl border border-border bg-card"
          />
        </div>
      </div>
    </main>
  );
}
