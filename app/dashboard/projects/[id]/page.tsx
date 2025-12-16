import TaskForm from '@/components/tasks/TaskForm'
import TaskList from '@/components/tasks/TaskList'

export default function ProjectPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold">Tasks</h1>

      <TaskForm projectId={params.id} />
      <TaskList projectId={params.id} />
    </div>
  )
}
