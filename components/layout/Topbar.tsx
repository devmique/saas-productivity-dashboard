'use client'

import { supabase } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function Topbar() {
  const router = useRouter()

  const logout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <header className="h-16 border-b flex items-center justify-between px-6">
      <h2 className="font-semibold">Dashboard</h2>

      <button
        onClick={logout}
        className="text-sm text-red-500"
      >
        Logout
      </button>
    </header>
  )
}
