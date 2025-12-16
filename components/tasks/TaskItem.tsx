'use client'

import { updateTaskStatus, deleteTask } from '@/actions/tasks'

export default function TaskItem({ task }: any) {
  return (
    <li className="flex justify-between items-center bg-white p-3 rounded">
      <span>{task.title}</span>

      <div className="flex gap-2">
        <select
          value={task.status}
          onChange={(e) =>
            updateTaskStatus(task.id, e.target.value as any)
          }
          className="border rounded px-2"
        >
          <option value="todo">Todo</option>
          <option value="in_progress">In Progress</option>
          <option value="done">Done</option>
        </select>

        <form action={deleteTask.bind(null, task.id)}>
          <button className="text-red-500 text-sm">
            Delete
          </button>
        </form>
      </div>
    </li>
  )
}
