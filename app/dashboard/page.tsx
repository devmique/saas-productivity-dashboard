import { ensureWorkspace } from '@/lib/workspace'
import ActivityFeed from '@/components/activity/ActivityFeed'

export default async function DashboardPage() {
  await ensureWorkspace()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        {/* stats / projects */}
      </div>

      <ActivityFeed />
    </div>
  )
}
