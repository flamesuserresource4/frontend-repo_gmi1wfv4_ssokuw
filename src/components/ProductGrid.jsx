import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ title = 'Featured', query = '' }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products${query}`)
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [query])

  return (
    <section className="relative py-16 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_0%,rgba(34,211,238,0.08),transparent)]" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <a href="/products" className="text-cyan-300 hover:text-white transition-colors">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 rounded-2xl bg-white/5 border border-white/10 animate-pulse" />
            ))
          ) : (
            items.map(p => <ProductCard key={p.id} product={p} />)
          )}
        </div>
      </div>
    </section>
  )
}
