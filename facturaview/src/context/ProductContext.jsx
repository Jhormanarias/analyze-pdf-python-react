import React, { createContext, useContext, useReducer } from 'react'
import { productReducer, initialState } from '../reduce/productReducer'

const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productReducer, initialState)

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)