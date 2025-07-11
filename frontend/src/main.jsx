import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './pages/Product.jsx'
import Sell from './pages/Sell.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import NotFound from './pages/404'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/product' element={<Product />} />
      <Route path="/" element={<App />} />
      <Route path='/sell' element={<Sell/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>,
)
