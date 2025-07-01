import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
})

interface CheckoutItem {
  name: string
  price: number
  quantity: number
}

export async function POST(req: Request) {
  try {
    const { items }: { items: CheckoutItem[] } = await req.json()

    if (!items || !Array.isArray(items)) {
      return NextResponse.json({ error: 'Items inválidos' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: items.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${req.headers.get('origin')}/thankyou`,
      cancel_url: `${req.headers.get('origin')}/cart`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creando sesión:', error)
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
