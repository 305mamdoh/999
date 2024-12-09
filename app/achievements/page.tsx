"use client"

import { useEffect, useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Header } from "@/components/header"
import { Diamond, Award, Medal } from 'lucide-react'

const supporters = [
  { name: "أحمد", amount: 5000 },
  { name: "فاطمة", amount: 4500 },
  { name: "محمد", amount: 4000 },
  { name: "سارة", amount: 3500 },
  { name: "عمر", amount: 3000 },
  { name: "ليلى", amount: 2500 },
  { name: "يوسف", amount: 2000 },
  { name: "نور", amount: 1500 },
  { name: "علي", amount: 1000 },
  { name: "مريم", amount: 500 },
]

function SupporterCard({ name, amount, rank }: { name: string; amount: number; rank: number }) {
  let BadgeIcon = Award
  let badgeColor = "text-gray-400"
  let animationClass = ""

  if (rank === 1) {
    BadgeIcon = Diamond
    badgeColor = "text-yellow-400"
    animationClass = "animate-pulse"
  } else if (rank === 2) {
    badgeColor = "text-gray-300"
    animationClass = "animate-bounce"
  } else if (rank === 3) {
    BadgeIcon = Medal
    badgeColor = "text-yellow-600"
    animationClass = "animate-spin-slow"
  }

  return (
    <div className={`flex items-center justify-between bg-gray-800/50 rounded-lg p-4 mb-4 ${rank <= 3 ? 'border-2 border-purple-500' : ''}`}>
      <div className="text-2xl font-bold text-gray-500">#{rank}</div>
      <div className="flex items-center">
        <div className="text-right">
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-purple-400">{amount} ريال</p>
        </div>
        <div className={`mr-4 ${badgeColor} ${animationClass}`}>
          <BadgeIcon size={24} />
        </div>
      </div>
    </div>
  )
}

export default function AchievementsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="pb-24">
      <Header />
      
      <section className="mt-4 px-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-right">أفضل الداعمين</h1>
        
        <div className="space-y-4">
          {supporters.map((supporter, index) => (
            <SupporterCard
              key={supporter.name}
              name={supporter.name}
              amount={supporter.amount}
              rank={index + 1}
            />
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  )
}

