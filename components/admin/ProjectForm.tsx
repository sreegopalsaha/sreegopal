export type FormData = { name: string; description: string; liveUrl: string }

interface ProjectFormProps {
  mode: "add" | "edit"
  form: FormData
  onChange: (form: FormData) => void
  onSubmit: (e: React.FormEvent) => void
  onCancel: () => void
  submitting: boolean
  message: string
  editingName?: string
}

export function ProjectForm({
  mode,
  form,
  onChange,
  onSubmit,
  onCancel,
  submitting,
  message,
  editingName,
}: ProjectFormProps) {
  return (
    <form onSubmit={onSubmit} className="border-b border-foreground py-6 flex flex-col gap-0">
      <div className="font-mono text-[0.625rem] uppercase tracking-widest text-muted mb-4">
        {mode === "add" ? "New Project" : `Editing: ${editingName}`}
      </div>

      <label className="font-mono text-xs uppercase tracking-widest mb-1">Project Name</label>
      <input
        type="text"
        value={form.name}
        onChange={(e) => onChange({ ...form, name: e.target.value })}
        required
        placeholder="e.g. DevDeck"
        className="border border-foreground px-3 py-2 font-mono text-sm bg-transparent outline-none focus:bg-white"
      />

      <label className="font-mono text-xs uppercase tracking-widest mt-5 mb-1">Short Description</label>
      <textarea
        value={form.description}
        onChange={(e) => onChange({ ...form, description: e.target.value })}
        required
        rows={2}
        placeholder="One or two lines about the project"
        className="border border-foreground px-3 py-2 font-mono text-sm bg-transparent outline-none focus:bg-white resize-none"
      />

      <label className="font-mono text-xs uppercase tracking-widest mt-5 mb-1">Live URL</label>
      <input
        type="url"
        value={form.liveUrl}
        onChange={(e) => onChange({ ...form, liveUrl: e.target.value })}
        required
        placeholder="https://..."
        className="border border-foreground px-3 py-2 font-mono text-sm bg-transparent outline-none focus:bg-white"
      />

      <div className="flex items-center gap-3 mt-6">
        <button
          type="submit"
          disabled={submitting}
          className="border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-none cursor-pointer disabled:opacity-40"
        >
          {submitting ? "Saving..." : mode === "add" ? "Add Project" : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest hover:border-foreground transition-none cursor-pointer"
        >
          Cancel
        </button>
        {message && (
          <span className="font-mono text-[0.625rem] uppercase tracking-widest text-muted">
            {message}
          </span>
        )}
      </div>
    </form>
  )
}
