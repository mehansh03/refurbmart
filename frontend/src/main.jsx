import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product.jsx'
import Sell from './pages/Sell.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/product' element={<Product />} />
      <Route path="/" element={<App />} />
      <Route path='/sell' element={<Sell/>}/>
    </Routes>
  </BrowserRouter>,
)
