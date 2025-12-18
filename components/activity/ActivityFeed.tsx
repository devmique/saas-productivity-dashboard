import { createSupabaseServerClient } from '@/lib/supabase/server'

export default async function ActivityFeed() {
  const supabase = await createSupabaseServerClient()

  const { data: logs } = await supabase
    .from('activity_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  return (
    <div className="bg-white rounded p-4">
      <h2 className="font-semibold mb-3">Recent activity</h2>

      <ul className="space-y-2 text-sm">
        {logs?.map(log => (
          <li key={log.id} className="text-gray-600">
            <span className="font-medium">{log.action}</span>
            <span className="text-xs text-gray-400 ml-2">
              {new Date(log.created_at).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
