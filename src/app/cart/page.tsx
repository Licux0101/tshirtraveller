'use client'

import ClientOnly from '../../components/ClientOnly'
import { useCart } from '../../context/CartContext'
import CheckoutButton from '@/components/CheckoutButton'

export default function CartPage() {
  return (
    <ClientOnly>
      <CartContent />
    </ClientOnly>
  )
}

function CartContent() {
  const { cart, addToCart, removeFromCart, clearCart, deleteFromCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  if (cart.length === 0) {
    return <p className="p-4 text-center text-gray-600">El carrito está vacío.</p>
  }

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="flex items-center gap-4 border-b py-4">
            <img src={item.images[0]} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-grow">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
            <div>
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => addToCart(item)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
              <button onClick={() => deleteFromCart(item.id)} className="ml-2 bg-black text-white px-2 py-1 rounded">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-right space-y-2">
        <p className="text-xl font-semibold mb-2">Total: ${total.toFixed(2)}</p>
        <CheckoutButton items={cart} />
        <div className="space-x-2">
          <button onClick={clearCart} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Vaciar carrito</button>
        </div>
      </div>
    </main>
  )
}
