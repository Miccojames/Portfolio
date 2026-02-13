import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A ReactJs portfolio showcasing my skills, projects, and FCFS scheduling.",
      link: "https://micco-portfolio.vercel.app/"
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-foreground">Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-lg shadow-sm p-4 bg-card text-card-foreground"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-muted-foreground mb-2">{project.description}</p>
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
