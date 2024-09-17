"use client"

import { useState } from 'react'
import React = require('react')

const images = [
  ' https://i.pinimg.com/474x/2c/fa/50/2cfa503268470005d369f9aabd70c37b.jpg',
  'https://i.pinimg.com/736x/de/16/86/de16861fe754bf5ea3e6dea32308bec0.jpg ',
  ' https://i.pinimg.com/736x/10/2d/f8/102df8a17a1e1a2fe694f07dd0706a7c.jpg',
  ' https://i.pinimg.com/736x/73/b5/ce/73b5ceeaaae8f0c365fd0bca1b162210.jpg',
  ' https://i.pinimg.com/736x/32/96/f6/3296f6ccca8b5f4e9a4bb0c62eb78623.jpg',
  ' https://i.pinimg.com/736x/65/ca/19/65ca19ba6e9d3f543cb692dab9ef55f3.jpg',
  ' https://i.pinimg.com/736x/4b/1c/63/4b1c63d59e7655fc37094c2be80b758b.jpg',
  ' https://i.pinimg.com/564x/13/40/f8/1340f820a2dbe7c1e0f98e91aa104705.jpg',
  ' https://i.pinimg.com/736x/e8/07/aa/e807aa7419bf8bfe5c26d0c37e5d6c60.jpg',
]

export default function ImageAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="flex h-screen w-full items-center justify-center bg-black p-4">
      <div className="flex h-[600px] w-full max-w-5xl overflow-hidden rounded-lg">
        {images.map((src, index) => (
          <div
            key={index}
            className={`relative h-full transition-all duration-500 ease-in-out ${
              hoveredIndex === index ? 'w-full' : 'w-[10%]'
            } ${hoveredIndex !== null && hoveredIndex !== index ? 'w-0' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={src}
              alt={`Accordion image ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}