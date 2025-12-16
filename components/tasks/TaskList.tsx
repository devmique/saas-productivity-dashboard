import { createSupabaseServerClient } from '@/lib/supabase/server'
import TaskItem from './TaskItem'

export default async function TaskList({
  projectId,
}: {
  projectId: string
}) {
  const supabase = await createSupabaseServerClient()

  const { data: tasks } = await supabase
    .from('tasks')
    .select('*')
    .eq('project_id', projectId)
    .order('created_at')

  return (
    <ul className="space-y-2">
      {tasks?.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}
