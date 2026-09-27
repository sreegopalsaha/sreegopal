"use client";

import { ProjectCard, type Project } from "@/components/ProjectCard";

interface ProjectGridProps {
  projects: Project[];
  onEdit?: (project: Project) => void;
  onDelete?: (id: string) => void;
}

export function ProjectGrid({ projects, onEdit, onDelete }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="py-12 font-mono text-xs uppercase tracking-widest text-muted">
        No projects found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard
          key={project._id}
          project={project}
          index={index}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
