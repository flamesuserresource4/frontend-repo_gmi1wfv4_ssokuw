import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import App from './App'
import Test from './Test'
import ProductsPage from './components/ProductsPage'
import ProductDetail from './components/ProductDetail'
import './index.css'

function ProductRoute() {
  const { id } = useParams()
  return <ProductDetail id={id} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/test" element={<Test />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductRoute />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
