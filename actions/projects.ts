'use server'

import { revalidatePath } from 'next/cache'
import { createSupabaseServerClient } from '@/lib/supabase/server'
import { logActivity } from '@/lib/activity'

async function getWorkspaceId(supabase: any) {
  const { data } = await supabase
    .from('workspace_members')
    .select('workspace_id')
    .single()

  return data?.workspace_id
}

export async function createProject(formData: FormData) {
  const name = formData.get('name') as string
  if (!name) return

  const supabase = await createSupabaseServerClient()
  const workspaceId = await getWorkspaceId(supabase)
  if (!workspaceId) return

  await supabase.from('projects').insert({
    name,
    workspace_id: workspaceId,
  })
  await logActivity({
  action: 'created project',
  entityType: 'project',
  metadata: { name },
})
  revalidatePath('/dashboard/projects')
}

export async function deleteProject(id: string) {
  const supabase = await createSupabaseServerClient()

  await supabase.from('projects').delete().eq('id', id)

  revalidatePath('/dashboard/projects')
}
