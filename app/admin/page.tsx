"use client"

import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import { Plus, X } from "lucide-react"
import { Sidebar } from "@/components/admin/Sidebar"
import { ProjectForm, type FormData } from "@/components/admin/ProjectForm"
import { ProjectGrid } from "@/components/ProjectGrid"
import { ProjectSkeleton } from "@/components/ProjectSkeleton"
import type { Project } from "@/components/ProjectCard"

const emptyForm: FormData = { name: "", description: "", liveUrl: "" }

export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState("")

  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)

  const [panel, setPanel] = useState<"none" | "add" | "edit">("none")
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [form, setForm] = useState<FormData>(emptyForm)
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const adminHeaders = { "x-admin-password": password }

  const fetchProjects = useCallback(async () => {
    setLoading(true)
    const { data } = await axios.get<Project[]>("/api/projects")
    setProjects(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    if (authed) fetchProjects()
  }, [authed, fetchProjects])

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthError("")
    try {
      await axios.post("/api/admin/login", { password })
      setAuthed(true)
    } catch {
      setAuthError("Wrong password.")
    }
  }

  function openAdd() {
    setForm(emptyForm)
    setEditingProject(null)
    setMessage("")
    setPanel("add")
  }

  function openEdit(project: Project) {
    setForm({ name: project.name, description: project.description, liveUrl: project.liveUrl })
    setEditingProject(project)
    setMessage("")
    setPanel("edit")
  }

  function closePanel() {
    setPanel("none")
    setEditingProject(null)
    setForm(emptyForm)
    setMessage("")
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await axios.post("/api/projects", form, { headers: adminHeaders })
      setMessage("Project added.")
      setForm(emptyForm)
      fetchProjects()
    } catch {
      setMessage("Something went wrong.")
    } finally {
      setSubmitting(false)
    }
  }

  async function handleEdit(e: React.FormEvent) {
    e.preventDefault()
    if (!editingProject) return
    setSubmitting(true)
    try {
      await axios.put(`/api/projects/${editingProject._id}`, form, { headers: adminHeaders })
      setMessage("Project updated.")
      fetchProjects()
    } catch {
      setMessage("Something went wrong.")
    } finally {
      setSubmitting(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this project?")) return
    await axios.delete(`/api/projects/${id}`, { headers: adminHeaders })
    fetchProjects()
  }

  if (!authed) {
    return (
      <main className="max-w-sm mx-auto px-4 pt-20">
        <div className="font-mono text-xs tracking-widest uppercase mb-6 text-muted">
          Admin / Access
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-0">
          <label className="font-mono text-xs uppercase tracking-widest mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-foreground px-3 py-2 font-mono text-sm bg-transparent outline-none focus:bg-white"
          />
          {authError && (
            <p className="font-mono text-xs mt-2">{authError}</p>
          )}
          <button
            type="submit"
            className="mt-4 border border-foreground px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-none cursor-pointer"
          >
            Enter
          </button>
        </form>
      </main>
    )
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 pt-10 px-8 pb-16 max-w-3xl">
        <div className="flex items-center justify-between border-b border-foreground pb-4">
          <div className="font-mono text-xs uppercase tracking-widest text-muted">
            Projects / {projects.length} total
          </div>
          <button
            onClick={panel === "add" ? closePanel : openAdd}
            className="flex items-center gap-1.5 border border-foreground px-3 py-1.5 font-mono text-[0.625rem] uppercase tracking-widest hover:bg-foreground hover:text-background transition-none cursor-pointer"
          >
            {panel === "add" ? <><X className="size-3" /> Cancel</> : <><Plus className="size-3" /> Add New Project</>}
          </button>
        </div>

        {panel !== "none" && (
          <ProjectForm
            mode={panel as "add" | "edit"}
            form={form}
            onChange={setForm}
            onSubmit={panel === "add" ? handleAdd : handleEdit}
            onCancel={closePanel}
            submitting={submitting}
            message={message}
            editingName={editingProject?.name}
          />
        )}

        <div>
          {loading && <ProjectSkeleton count={3} />}
          {!loading && (
            <ProjectGrid
              projects={projects}
              onEdit={openEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  )
}
