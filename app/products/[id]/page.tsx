import { Header } from "@/components/header"
import { BottomNav } from "@/components/bottom-nav"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Dummy product data
const products = [
  { id: "1", name: "اشتراك بلس ايفون", price: 100, description: "اشتراك لمدة شهر في خدمة ابل بلس للايفون", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4785.PNG-TSpgJRdEwk9l6Bi0rfvTlcoW9ktzJ6.png" },
  { id: "2", name: "اشتراك بلس ايباد", price: 50, description: "اشتراك لمدة شهر في خدمة ابل بلس للايباد", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4787.PNG-bTVpLB2DUf8GVqPSUu4uDepl3LVoCl.png" },
  { id: "3", name: "بطاقة ستور 100 ريال", price: 100, description: "بطاقة هدايا لمتجر ابل بقيمة 100 ريال", image: "/placeholder.svg?height=400&width=400" },
  { id: "4", name: "بطاقة ستور 200 ريال", price: 200, description: "بطاقة هدايا لمتجر ابل بقيمة 200 ريال", image: "/placeholder.svg?height=400&width=400" },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return <div className="text-center text-white mt-10">المنتج غير موجود</div>
  }

  return (
    <div className="pb-24">
      <Header />
      
      <div className="px-4 py-6">
        <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2 text-right">{product.name}</h1>
        <p className="text-xl text-purple-400 font-bold mb-4 text-right">{product.price} ريال</p>
        
        <p className="text-gray-300 mb-6 text-right">{product.description}</p>
        
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
          إضافة إلى السلة
        </Button>
      </div>

      <BottomNav />
    </div>
  )
}

