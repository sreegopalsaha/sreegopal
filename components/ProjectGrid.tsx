"use client"

import { useState } from "react"
import { ProjectCard, type Project } from "@/components/ProjectCard"

interface ProjectGridProps {
  projects: Project[]
  onEdit?: (project: Project) => void
  onDelete?: (id: string) => void
  searchable?: boolean
}

export function ProjectGrid({ projects, onEdit, onDelete, searchable = false }: ProjectGridProps) {
  const [search, setSearch] = useState("")

  const filtered = searchable
    ? projects.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.description.toLowerCase().includes(search.toLowerCase())
      )
    : projects

  return (
    <div>
      {searchable && (
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search projects"
          className="border border-foreground px-3 py-2 font-mono text-xs bg-transparent outline-none focus:bg-white w-full sm:w-56 placeholder:text-muted mb-0"
        />
      )}

      {filtered.length === 0 && (
        <p className="font-mono text-xs uppercase tracking-widest text-muted py-12">
          No projects found.
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-foreground">
        {filtered.map((project, index) => (
          <div key={project._id} className="border-b border-r border-foreground">
            <ProjectCard
              project={project}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
