import { useMemo } from 'react'
import ProductGrid from './ProductGrid'

export default function ProductsPage() {
  const search = typeof window !== 'undefined' ? window.location.search : ''
  const query = useMemo(() => search || '', [search])
  return (
    <div className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 pt-32">
        <h1 className="text-3xl font-bold text-white">All Products</h1>
      </div>
      <ProductGrid title="Results" query={query} />
    </div>
  )
}
