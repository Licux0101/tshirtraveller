'use client'

import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { useTranslation } from 'next-i18next'

export default function Home() {
  const { addToCart } = useCart()
  const { t } = useTranslation('common')

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{t('store_title', 'Tienda de Camisetas')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </main>
  )
}
