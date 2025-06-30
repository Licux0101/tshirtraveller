export interface Product {
  id: string
  name: string
  price: number
  images: string[]
  pdf?: string
}

export const products: Product[] = [
  // Mantengo tal cual tus dos primeros productos originales
  {
    id: '1',
    name: 'Camiseta básica blanca',
    price: 15.99,
    images: [
      '/images/1/IMG_1688.JPG',
      '/images/1/IMG_1689.JPG',
      '/images/1/IMG_9684.JPG',
      '/images/1/IMG_9686.JPG',
      '/images/1/IMG_1687.JPG',
    ],
    pdf: '/pdf/santiago.pdf',
  },
  {
    id: '2',
    name: 'Camiseta negra logo',
    price: 19.99,
    images: [
      '/images/2/IMG_1683.JPG',
      '/images/2/IMG_1658.jpg',
      '/images/2/IMG_1659.jpg',
      '/images/2/IMG_1660.JPG',
      '/images/2/IMG_1681.JPG',
      '/images/2/IMG_1682.JPG',
    ],
    pdf: '/pdf/santiago2.pdf',
  },

  // A partir del tercero, asigno las imágenes y pdfs según tu árbol
  {
    id: '3',
    name: 'Camiseta azul deportiva',
    price: 22.99,
    images: [
      '/images/3/IMG_9681.JPG',
      '/images/3/IMG_9682.JPG',
    ],
    pdf: '/pdf/大扇貝紅線網頁.pdf',
  },
  {
    id: '4',
    name: 'Camiseta roja estampada',
    price: 17.49,
    images: [
      '/images/4/IMG_1658.JPG',
      '/images/4/IMG_1659.JPG',
      '/images/4/IMG_1660.JPG',
      '/images/4/IMG_1681.JPG',
      '/images/4/IMG_1682.JPG',
      '/images/4/IMG_1683.JPG',
    ],
    pdf: '/pdf/大貝殼白線網頁.pdf',
  },
  {
    id: '5',
    name: 'Camiseta verde deportiva',
    price: 21.99,
    images: [
      '/images/5/IMG_9687.JPG',
      '/images/5/IMG_9688.JPG',
      '/images/5/IMG_9689.JPG',
      '/images/5/IMG_9728.JPG',
      '/images/5/IMG_9729.JPG',
    ],
    pdf: '/pdf/大貝殼黑線網頁.pdf',
  },
  {
    id: '6',
    name: 'Camiseta amarilla casual',
    price: 16.99,
    images: [
      '/images/6/IMG_1690.JPG',
      '/images/6/IMG_1691.JPG',
      '/images/6/IMG_1692.JPG',
      '/images/6/IMG_1693.JPG',
      '/images/6/IMG_1694.JPG',
    ],
    pdf: '/pdf/聖雅各網頁白線.pdf',
  },
  {
    id: '7',
    name: 'Camiseta gris urbana',
    price: 18.49,
    images: [
      '/images/7/IMG_1695.JPG',
      '/images/7/IMG_1697.JPG',
      '/images/7/IMG_9715.JPG',
      '/images/7/IMG_9717.JPG',
    ],
    pdf: '/pdf/繁星原野-中1網頁白線.pdf',
  },
  {
    id: '8',
    name: 'Camiseta beige básica',
    price: 15.49,
    images: [
      '/images/8/IMG_1698.JPG',
      '/images/8/IMG_1699.JPG',
      '/images/8/IMG_1700.JPG',
      '/images/8/IMG_9693.JPG',
    ],
    pdf: '/pdf/視力表網頁.pdf',
  },
  {
    id: '9',
    name: 'Camiseta negra manga larga',
    price: 23.99,
    images: [
      '/images/9/IMG_1701.JPG',
      '/images/9/IMG_1702.JPG',
      '/images/9/IMG_1703.JPG',
      '/images/9/IMG_9713.JPG',
    ],
    pdf: '/pdf/三格黑衣網頁.pdf',
  },

  // Para los demás productos, como no tienes carpeta ni PDF asignados, mantengo las imágenes originales sin PDF
  {
    id: '10',
    name: 'Camiseta blanca con bolsillo',
    price: 19.49,
    images: ['/images/camiseta-blanca-bolsillo.jpg'],
  },
  {
    id: '11',
    name: 'Camiseta azul marino clásica',
    price: 20.99,
    images: ['/images/camiseta-azul-marino.jpg'],
  },
  {
    id: '12',
    name: 'Camiseta marrón vintage',
    price: 24.49,
    images: ['/images/camiseta-marron.jpg'],
  },
  {
    id: '13',
    name: 'Camiseta lila oversize',
    price: 22.49,
    images: ['/images/camiseta-lila.jpg'],
  },
  {
    id: '14',
    name: 'Camiseta rosa pastel',
    price: 17.99,
    images: ['/images/camiseta-rosada.jpg'],
  },
  {
    id: '15',
    name: 'Camiseta negra slim fit',
    price: 25.99,
    images: ['/images/camiseta-negra-slim.jpg'],
  },
  {
    id: '16',
    name: 'Camiseta blanca cuello en V',
    price: 18.99,
    images: ['/images/camiseta-blanca-cuello-v.jpg'],
  },
  {
    id: '17',
    name: 'Camiseta naranja casual',
    price: 16.49,
    images: ['/images/camiseta-naranja.jpg'],
  },
  {
    id: '18',
    name: 'Camiseta verde militar',
    price: 20.49,
    images: ['/images/camiseta-verde-militar.jpg'],
  },
]
