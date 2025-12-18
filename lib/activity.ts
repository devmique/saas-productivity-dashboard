import { createSupabaseServerClient } from '@/lib/supabase/server'

type LogActivityParams = {
  action: string
  entityType: string
  entityId?: string
  metadata?: Record<string, any>
}

export async function logActivity({
  action,
  entityType,
  entityId,
  metadata,
}: LogActivityParams) {
  const supabase = await createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  const { data: membership } = await supabase
    .from('workspace_members')
    .select('workspace_id')
    .single()

  if (!membership) return

  await supabase.from('activity_logs').insert({
    workspace_id: membership.workspace_id,
    user_id: user.id,
    action,
    entity_type: entityType,
    entity_id: entityId,
    metadata,
  })
}
