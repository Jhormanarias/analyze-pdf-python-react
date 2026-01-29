import React from 'react'

export const ProductCard = ({ product }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{product.name}</h3>
      <p>Precio: {product.price}</p>
    </div>
  )
}
