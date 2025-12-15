import { createSupabaseServerClient } from '@/lib/supabase/server'
import { deleteProject } from '@/actions/projects'

export default async function ProjectList() {
  const supabase = await createSupabaseServerClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <ul className="space-y-2">
      {projects?.map(project => (
        <li
          key={project.id}
          className="bg-white p-4 rounded flex justify-between"
        >
          <span>{project.name}</span>

          <form action={deleteProject.bind(null, project.id)}>
            <button className="text-red-500 text-sm">
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  )
}
