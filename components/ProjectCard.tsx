import { ArrowUpRight, GitCommit, Pencil, Trash2 } from "lucide-react";

export interface Project {
  _id: string;
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onEdit?: (project: Project) => void;
  onDelete?: (id: string) => void;
}

const actionBtn =
  "inline-flex items-center gap-2 border border-line px-4 py-3 font-sans text-sm text-foreground hover:bg-foreground hover:text-background transition-none cursor-pointer";

const iconBtn =
  "border border-line p-1 hover:border-foreground hover:bg-foreground hover:text-background transition-none cursor-pointer";

export function ProjectCard({
  project,
  index,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  const num = String(index + 1).padStart(3, "0");
  const isAdmin = onEdit && onDelete;

  return (
    <div className="border-b border-r border-line p-6">
      <div className="flex gap-5">
        <span className="shrink-0 font-mono text-[0.7rem] text-muted">
          {num}
        </span>

        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className="font-sans text-base font-bold leading-tight tracking-tight">
                {project.name}
              </h3>

              <p className="mt-2 font-sans text-sm leading-snug text-muted">
                {project.description}
              </p>
            </div>

            {isAdmin && (
              <div className="flex shrink-0 gap-1">
                <button
                  onClick={() => onEdit(project)}
                  className={iconBtn}
                  aria-label="Edit"
                >
                  <Pencil className="size-3" />
                </button>

                <button
                  onClick={() => onDelete(project._id)}
                  className={iconBtn}
                  aria-label="Delete"
                >
                  <Trash2 className="size-3" />
                </button>
              </div>
            )}
          </div>

          {!isAdmin && (
            <div className="mt-5 flex gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={actionBtn}
              >
                Live Preview
                <ArrowUpRight className="size-3.5" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={actionBtn}
              >
                Visit GitHub
                <GitCommit className="size-3.5" />
              </a>
            </div>
          )}

          {isAdmin && (
            <div className="mt-5 flex flex-col gap-1">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="truncate font-mono text-[0.65rem] uppercase tracking-widest text-muted hover:text-foreground"
              >
                {project.liveUrl}
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="truncate font-mono text-[0.65rem] uppercase tracking-widest text-muted hover:text-foreground"
              >
                {project.githubUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
