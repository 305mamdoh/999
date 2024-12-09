import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  image: string
  price: number
  slug: string
}

export function ProductCard({ title, image, price, slug }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`} className="block">
      <Card className="border-2 border-purple-500 bg-[#1a0b2e]/50 overflow-hidden backdrop-blur-sm rounded-lg shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105 duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-white text-right">{title}</h3>
            <p className="text-sm text-purple-400 font-bold mt-1 text-right">{price} ريال</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

