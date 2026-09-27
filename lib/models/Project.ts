import mongoose, { Schema, models } from "mongoose"

const ProjectSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    liveUrl: { type: String, required: true },
  },
  { timestamps: true }
)

export const Project = models.Project ?? mongoose.model("Project", ProjectSchema)
