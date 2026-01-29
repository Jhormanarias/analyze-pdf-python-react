import { products } from '../data/products'
import { useProduct } from '../context/ProductContext'
import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { SearchForm } from '../components/SearchForm'

export const Products = () => {

    const { dispatch } = useProduct()
    
    const searchProduct = (id) => {
    const product = products[id]
    if (!product) {
      alert('Producto no encontrado')
      return
    }
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  const CurrentResult = () => {
          const { state } = useProduct()
          const char = state.products[state.lastSearchedId]
  
          return char ? (
              <div>
                  <h2>Último producto buscado:</h2>
                  <ProductCard product={char} />
              </div>
          ) : null
      }

  return (
    <div style={{ padding: '2rem' }}>
            <h1>Productos</h1>
            <SearchForm onSubmit={searchProduct} />
            <CurrentResult />
          </div>
  )
}
