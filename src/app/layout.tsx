import './globals.css'
import { ReactNode } from 'react'
import { CartProvider } from '../context/CartContext'
import ClientOnly from '../components/ClientOnly'
import CartStatus from '../components/CartStatus'
import LanguageSwitcher from '../components/LanguageSwitcher'

export const metadata = {
  title: 'Tienda Tshirt Traveller',
  description: 'Tienda online de camisetas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <ClientOnly>
            <CartStatus />
            <LanguageSwitcher /> {/* Aquí dentro para que solo se renderice en cliente */}
          </ClientOnly>
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
