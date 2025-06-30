'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function CartStatus() {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link
      href="/cart"
      className="fixed top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition flex items-center gap-2 z-50"
      aria-label="Ver carrito de compras"
    >
      🛒
      <span>{totalItems}</span>
    </Link>
  )
}
