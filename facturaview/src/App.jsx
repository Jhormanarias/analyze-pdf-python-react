import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FacturaTable } from './components/FacturaTable'
import './App.css'
import {Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { UploadFactura } from './pages/UploadFactura'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Users } from './pages/Users'
import { SearchPersons } from './pages/SearchPersons'
import { CharacterProvider } from './context/CharacterContext'
import { Products } from './pages/Products'
import { ProductProvider } from './context/ProductContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uploadCheck" element={<UploadFactura />} />
        <Route path="/users" element={<Users />} />



      </Routes>
      <CharacterProvider>
        <Routes>
          <Route path="/searchpersons" element={<SearchPersons />} />
        </Routes>
      </CharacterProvider>
      <ProductProvider>
        <Routes>
          <Route path="/products" element={<Products />} />

        </Routes>
      </ProductProvider>

    </BrowserRouter>
      
  )
}

export default App
