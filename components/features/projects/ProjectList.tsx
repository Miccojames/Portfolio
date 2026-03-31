"use client";

import { useState, ChangeEvent } from "react";
import { PROJECTS } from "@/components/constants/project";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { SectionHeading } from "@/components/common/SectionHeading";

type Project = typeof PROJECTS[number];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p: Project) => p.category)))];

export function ProjectList() {
    const [filter, setFilter] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");

    const filteredProjects = PROJECTS.filter((project: Project) => {
        const matchesCategory = filter === "All" || project.category === filter;
        const matchesSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some((tag: string) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesSearch;
    });

    return (
        <Section className="space-y-12 min-h-screen">
            <SectionHeading title="All Projects" description="A collection of projects I've built, ranging from web applications to mobile apps and more." />
            
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category: string) => (
                        <Button
                            key={category}
                            variant={filter === category ? "default" : "outline"}
                            onClick={() => setFilter(category || "All")}
                            size="sm"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <div className="relative w-full md:w-64">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        className="pl-8"
                    />
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-12 text-muted-foreground">
                        No projects found matching your criteria.
                    </div>
                )}
            </div>
        </Section>
    );
}