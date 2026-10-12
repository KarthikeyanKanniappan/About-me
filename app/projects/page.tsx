import type { Metadata } from "next";
import { PageTitle } from "@/components/PageTitle";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects I've designed and built.",
};

export default function ProjectsPage() {
  return (
    <div className="container-page">
      <div className="py-16 md:py-24">
        <PageTitle>Projects</PageTitle>
      </div>
      {projects.length === 0 ? (
        <p className="border-t border-line py-16 text-muted">New projects coming soon.</p>
      ) : (
        projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} reverse={i % 2 === 1} />
        ))
      )}
    </div>
  );
}
