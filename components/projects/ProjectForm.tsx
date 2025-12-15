'use client'

import { createProject } from '@/actions/projects'

export default function ProjectForm() {
  return (
    <form
      action={createProject}
      className="flex gap-2"
    >
      <input
        name="name"
        placeholder="Project name"
        className="border p-2 rounded w-full"
        required
      />

      <button className="bg-black text-white px-4 rounded">
        Add
      </button>
    </form>
  )
}
