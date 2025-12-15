import { createSupabaseServerClient } from '@/lib/supabase/server'

export async function ensureWorkspace() {
  const supabase = await createSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return

  // Check if user already has a workspace
  const { data: membership } = await supabase
    .from('workspace_members')
    .select('id')
    .eq('user_id', user.id)
    .single()

  if (membership) return

  // Create workspace
  const { data: workspace } = await supabase
    .from('workspaces')
    .insert({
      name: 'My Workspace',
      owner_id: user.id,
    })
    .select()
    .single()

  if (!workspace) return

  // Add owner membership
  await supabase.from('workspace_members').insert({
    workspace_id: workspace.id,
    user_id: user.id,
    role: 'owner',
  })
}
