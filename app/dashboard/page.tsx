export default function DashboardPage() {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">
          Welcome back 👋
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            Projects
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            Tasks
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            Activity
          </div>
        </div>
      </div>
    )
  }
  