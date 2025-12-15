import { ensureWorkspace } from '@/lib/workspace'

export default async function DashboardPage() {
  await ensureWorkspace()

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Welcome to your workspace 👋
      </h1>
    </div>
  )
}
