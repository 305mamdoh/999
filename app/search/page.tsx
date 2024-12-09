"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { Header } from "@/components/header"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
import Link from "next/link"

// Dummy data for products and supporters
const products = [
  { id: "1", name: "اشتراك بلس ايفون", price: 100 },
  { id: "2", name: "اشتراك بلس ايباد", price: 50 },
  { id: "3", name: "بطاقة ستور 100 ريال", price: 100 },
  { id: "4", name: "بطاقة ستور 200 ريال", price: 200 },
]

const supporters = [
  { id: 1, name: "أحمد", amount: 5000 },
  { id: 2, name: "فاطمة", amount: 4500 },
  { id: 3, name: "محمد", amount: 4000 },
  { id: 4, name: "سارة", amount: 3500 },
]

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState<{ products: typeof products, supporters: typeof supporters }>({ products: [], supporters: [] })

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(term.toLowerCase())
    )
    const filteredSupporters = supporters.filter(supporter => 
      supporter.name.toLowerCase().includes(term.toLowerCase())
    )
    setSearchResults({ products: filteredProducts, supporters: filteredSupporters })
  }

  return (
    <div className="pb-24">
      <Header />
      
      <section className="mt-4 px-4">
        <h1 className="text-3xl font-bold text-white mb-6 text-right">البحث</h1>
        <div className="relative">
          <Input 
            type="search" 
            placeholder="ابحث عن المنتجات أو الداعمين..." 
            className="bg-gray-800/50 border-gray-700 text-white pr-10 text-right"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </section>

      {searchTerm && (
        <section className="mt-8 px-4">
          <h2 className="text-xl font-semibold text-white mb-4 text-right">نتائج البحث</h2>
          
          {searchResults.products.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-right">المنتجات</h3>
              <div className="space-y-2">
                {searchResults.products.map(product => (
                  <Link href={`/products/${product.id}`} key={product.id} className="block">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-white hover:bg-gray-700/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400">{product.price} ريال</span>
                        <h4 className="font-semibold">{product.name}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {searchResults.supporters.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2 text-right">الداعمين</h3>
              <div className="space-y-2">
                {searchResults.supporters.map(supporter => (
                  <Link href={`/supporters/${supporter.id}`} key={supporter.id} className="block">
                    <div className="bg-gray-800/50 rounded-lg p-4 text-white hover:bg-gray-700/50 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400">{supporter.amount} ريال</span>
                        <h4 className="font-semibold">{supporter.name}</h4>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {searchResults.products.length === 0 && searchResults.supporters.length === 0 && (
            <p className="text-gray-400 text-center">لا توجد نتائج للبحث</p>
          )}
        </section>
      )}

      {!searchTerm && (
        <section className="mt-8 px-4">
          <h2 className="text-xl font-semibold text-white mb-4 text-right">عمليات البحث الشائعة</h2>
          <div className="grid grid-cols-2 gap-4">
            {['فورتنايت', 'كول أوف ديوتي', 'فيفا 23', 'ماينكرافت'].map((game, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-white hover:bg-gray-700/50 transition-colors text-right">
                {game}
              </div>
            ))}
          </div>
        </section>
      )}

      <BottomNav />
    </div>
  )
}

