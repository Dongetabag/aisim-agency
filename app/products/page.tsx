'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check, ShoppingCart } from 'lucide-react'
import { deliverables, categories } from '@/data/deliverables'
import { useCartStore } from '@/store/cartStore'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const addItem = useCartStore(state => state.addItem)

  const filteredDeliverables = selectedCategory === 'All'
    ? deliverables
    : deliverables.filter(d => d.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products & Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete catalog of agency-quality deliverables. Each product is ready to purchase instantly.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeliverables.map((deliverable) => (
            <div
              key={deliverable.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow relative"
            >
              {deliverable.badge && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {deliverable.badge}
                </div>
              )}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                    {deliverable.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {deliverable.name}
                </h3>
                <p className="text-gray-600 mb-4">{deliverable.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">
                    Delivery: {deliverable.estimatedDelivery}
                  </p>
                  <ul className="space-y-1">
                    {deliverable.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-3xl font-bold text-primary-600">
                      ${deliverable.price.toLocaleString()}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/intake?product=${deliverable.id}`}
                      className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
                    >
                      Customize
                    </Link>
                    <button
                      onClick={() => addItem(deliverable)}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center text-sm font-medium"
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDeliverables.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}



