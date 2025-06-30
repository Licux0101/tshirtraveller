'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(current === 0 ? images.length - 1 : current - 1)
  const next = () => setCurrent(current === images.length - 1 ? 0 : current + 1)

  return (
    <div className="relative w-full h-64 overflow-hidden rounded">
      <Image
        src={images[current]}          // <-- Aquí va una imagen a la vez, NO el array entero
        alt={`Imagen ${current + 1}`}
        width={400}
        height={400}
        className="object-cover w-full h-full"
      />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded"
            aria-label="Imagen siguiente"
          >
            ›
          </button>
        </>
      )}
    </div>
  )
}
