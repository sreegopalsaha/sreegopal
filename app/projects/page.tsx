"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import { ProjectGrid } from "@/components/ProjectGrid";
import { ProjectSkeleton } from "@/components/ProjectSkeleton";
import type { Project } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data } = await axios.get<Project[]>("/api/projects");
        setProjects(data);
      } catch {
        setProjects([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-6 pt-8 pb-16">
      <nav className="flex items-center gap-1.5 font-mono text-[0.625rem] uppercase tracking-widest text-muted mb-10">
        <ArrowLeft className="size-3" />
        <Link href="/" className="hover:text-foreground transition-none">
          Home
        </Link>
        <span>/</span>
        <span className="text-foreground">Projects</span>
      </nav>

      <div className="mb-14">
        <h1 className="font-mono text-[clamp(3.5rem,6vw,5.5rem)] font-normal leading-none tracking-[-0.06em] text-foreground">
          Things I’ve built.
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
          A collection of projects I’ve built, experimented with, and worked on
          along the way.
        </p>
      </div>

      {loading ? (
        <ProjectSkeleton count={6} />
      ) : (
        <ProjectGrid projects={projects} />
      )}
    </main>
  );
}
