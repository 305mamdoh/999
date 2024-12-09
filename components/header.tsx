import { Bell, Search } from 'lucide-react'
import Link from "next/link"

export function Header() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Link href="/notifications" className="text-gray-400 hover:text-white transition-colors">
          <Bell size={24} />
        </Link>
        <Link href="/search" className="text-gray-400 hover:text-white transition-colors">
          <Search size={24} />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">D07</span>
      </div>
    </div>
  )
}

