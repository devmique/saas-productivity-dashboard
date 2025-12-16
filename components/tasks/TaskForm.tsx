'use client'

import { createTask } from '@/actions/tasks'

export default function TaskForm({
  projectId,
}: {
  projectId: string
}) {
  return (
    <form
      action={createTask.bind(null, projectId)}
      className="flex gap-2"
    >
      <input
        name="title"
        placeholder="New task"
        className="border p-2 rounded w-full"
        required
      />

      <button className="bg-black text-white px-3 rounded">
        Add
      </button>
    </form>
  )
}
