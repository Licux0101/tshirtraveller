'use client'

import { useState } from 'react'
import { Product } from '../data/products'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  function nextImage() {
    setCurrentImageIndex((currentImageIndex + 1) % product.images.length)
  }

  function prevImage() {
    setCurrentImageIndex(
      (currentImageIndex - 1 + product.images.length) % product.images.length
    )
  }

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  return (
    <div className="border rounded p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded cursor-pointer"
          loading="lazy"
          onClick={openModal}
        />
        {product.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 rounded"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 rounded"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </>
        )}
      </div>
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">${product.price.toFixed(2)}</p>

      {/* Botones alineados */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={() => onAddToCart(product)}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Añadir al carrito
        </button>

        {product.pdf && (
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition text-center"
          >
            Ficha técnica (PDF)
          </a>
        )}
      </div>

      {/* Modal para imagen ampliada */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <img
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="max-w-3xl max-h-[80vh] rounded shadow-lg"
            onClick={e => e.stopPropagation()} // no cierra el modal al clicar la imagen
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}
