import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Project } from "@/lib/models/Project"

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const password = req.headers.get("x-admin-password")
  if (password !== process.env.ADMIN_PASSWORD) return unauthorized()
  const { id } = await params
  await connectDB()
  const body = await req.json()
  const project = await Project.findByIdAndUpdate(id, body, { new: true })
  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 })
  return NextResponse.json(project)
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const password = req.headers.get("x-admin-password")
  if (password !== process.env.ADMIN_PASSWORD) return unauthorized()
  const { id } = await params
  await connectDB()
  await Project.findByIdAndDelete(id)
  return NextResponse.json({ ok: true })
}
