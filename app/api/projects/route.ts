import { NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import { Project } from "@/lib/models/Project"

export async function GET() {
  await connectDB()
  const projects = await Project.find().sort({ createdAt: 1 })
  return NextResponse.json(projects)
}

export async function POST(req: Request) {
  const password = req.headers.get("x-admin-password")
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
  await connectDB()
  const body = await req.json()
  const project = await Project.create(body)
  return NextResponse.json(project, { status: 201 })
}
