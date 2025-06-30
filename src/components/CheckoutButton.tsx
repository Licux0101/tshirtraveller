'use client'

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

export default function CheckoutButton({ items }: { items: { name: string; price: number; quantity: number }[] }) {
  const handleCheckout = async () => {
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      alert('Error: falta la clave pública de Stripe');
      return;
    }

    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });

    const { url } = await res.json();
    const stripe = await stripePromise;
    if (stripe && url) {
      window.location.href = url;
    }
  };

  return (
    <button
      onClick={handleCheckout}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
    >
      Pagar con tarjeta
    </button>
  );
}
