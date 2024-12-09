import { BottomNav } from "@/components/bottom-nav"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"

export default function Home() {
  return (
    <div className="pb-24">
      <Header />
      
      <section className="mt-4 px-4">
        <h1 className="text-3xl font-bold text-white text-right">
          مرحبًا بك في المتجر
        </h1>
      </section>

      <section className="mt-12">
        <div className="flex items-center justify-between px-4 mb-4">
          <button className="text-sm text-purple-500">عرض الكل</button>
          <h2 className="text-lg font-semibold text-white">المنتجات المميزة</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 px-4">
          <ProductCard
            title="اشتراك بلس ايفون"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4785.PNG-TSpgJRdEwk9l6Bi0rfvTlcoW9ktzJ6.png"
            price={100}
            slug="iphone-plus-subscription"
          />
          <ProductCard
            title="اشتراك بلس ايباد"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4787.PNG-bTVpLB2DUf8GVqPSUu4uDepl3LVoCl.png"
            price={50}
            slug="ipad-plus-subscription"
          />
        </div>
      </section>

      <BottomNav />
    </div>
  )
}

