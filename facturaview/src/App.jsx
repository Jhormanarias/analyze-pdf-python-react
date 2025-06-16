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

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/uploadCheck" element={<UploadFactura />} />
    </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
