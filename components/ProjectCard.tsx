import { ArrowUpRight, Pencil, Trash2 } from "lucide-react"

export interface Project {
  _id: string
  name: string
  description: string
  liveUrl: string
}

interface ProjectCardProps {
  project: Project
  index: number
  onEdit?: (project: Project) => void
  onDelete?: (id: string) => void
}

const iconBtn = "border border-line p-1 hover:border-foreground hover:bg-foreground hover:text-background transition-none cursor-pointer"

export function ProjectCard({ project, index, onEdit, onDelete }: ProjectCardProps) {
  const num = String(index + 1).padStart(3, "0")
  const isAdmin = onEdit && onDelete

  return (
    <div className="p-5 flex flex-col gap-3 min-h-[9rem]">
      <div className="flex items-start justify-between gap-2">
        <span className="font-mono text-[0.6rem] font-bold tracking-widest text-muted">
          {num}
        </span>
        {isAdmin && (
          <div className="flex gap-1">
            <button onClick={() => onEdit(project)} className={iconBtn} aria-label="Edit">
              <Pencil className="size-3" />
            </button>
            <button onClick={() => onDelete(project._id)} className={iconBtn} aria-label="Delete">
              <Trash2 className="size-3" />
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="font-sans font-bold text-base tracking-tight leading-tight">
          {project.name}
        </span>
        <span className="font-mono text-[0.7rem] text-muted leading-snug">
          {project.description}
        </span>
      </div>

      {isAdmin ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[0.6rem] uppercase tracking-widest text-muted hover:text-foreground transition-none truncate mt-auto"
        >
          {project.liveUrl}
        </a>
      ) : (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto self-start flex items-center gap-1 border border-foreground px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-widest hover:bg-foreground hover:text-background transition-none"
        >
          Live Preview
          <ArrowUpRight className="size-3" />
        </a>
      )}
    </div>
  )
}

