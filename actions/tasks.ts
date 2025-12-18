'use server'

import { revalidatePath } from 'next/cache'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/activity'

export async function createTask(
  projectId: string,
  formData: FormData
) {
  const title = formData.get('title') as string
  if (!title) return

  const supabase = await createSupabaseServerClient()

  await supabase.from('tasks').insert({
    title,
    project_id: projectId,
    status: 'todo',
  })

  revalidatePath(`/dashboard/projects/${projectId}`)
}

export async function updateTaskStatus(
  taskId: string,
  status: 'todo' | 'in_progress' | 'done'
) {
  const supabase = await createSupabaseServerClient()

  await supabase
    .from('tasks')
    .update({ status })
    .eq('id', taskId)
  
  
await logActivity({
  action: `updated task status to ${status}`,
  entityType: 'task',
  entityId: taskId,
})
  revalidatePath('/dashboard')
}

export async function deleteTask(taskId: string) {
  const supabase = await createSupabaseServerClient()

  await supabase.from('tasks').delete().eq('id', taskId)

  revalidatePath('/dashboard')
}
