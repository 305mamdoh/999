import { BottomNav } from "@/components/bottom-nav"
import { Header } from "@/components/header"
import Image from "next/image"

export default function ProfilePage() {
  return (
    <div className="pb-24">
      <Header />
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-32 h-32 relative mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4813.PNG-QWJs31OS9BVPPcl4b7rbsStP1uaUxQ.png"
            alt="شعار المتجر"
            fill
            className="object-contain border-2 border-purple-500 rounded-xl p-2"
          />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">متجر D07</h1>
        <p className="text-purple-400">الإصدار 1.0.0</p>
      </div>

      <BottomNav />
    </div>
  )
}

