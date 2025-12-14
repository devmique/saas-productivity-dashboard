'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Projects', href: '/dashboard/projects' },
  { name: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen">
      <div className="p-6 font-bold text-xl">
        Flowdesk
      </div>

      <nav className="space-y-1 px-4">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded-md text-sm ${
              pathname === link.href
                ? 'bg-slate-700'
                : 'hover:bg-slate-800'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
