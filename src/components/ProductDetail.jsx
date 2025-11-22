import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function ProductDetail({ id }) {
  const [item, setItem] = useState(null)

  useEffect(() => {
    const load = async () => {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/products/${id}`)
      if (res.ok) {
        const data = await res.json()
        setItem(data)
      }
    }
    load()
  }, [id])

  if (!item) return (
    <div className="min-h-[60vh] flex items-center justify-center text-cyan-200">Loading...</div>
  )

  return (
    <section className="relative bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_160px_at_50%_0,rgba(34,211,238,0.12),transparent)]" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.25)]">{item.title}</h1>
          <p className="mt-4 text-cyan-200/80">{item.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-2xl font-semibold text-white">${item.price}</span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 text-sm">{item.category}</span>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <motion.button whileTap={{ scale: 0.98 }} whileHover={{ boxShadow: '0 0 35px rgba(59,130,246,0.5)' }} className="px-5 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold">
              Add to Cart
            </motion.button>
            <button className="px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-white/90 hover:bg-white/10 transition-colors">
              AR Preview
            </button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 text-cyan-200/80">
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-cyan-300/70">Materials</p>
              <p className="mt-1">{(item.materials||[]).join(', ') || '—'}</p>
            </div>
            <div className="rounded-xl bg-white/5 border border-white/10 p-4">
              <p className="text-xs uppercase tracking-wide text-cyan-300/70">Colors</p>
              <p className="mt-1">{(item.colors||[]).join(', ') || '—'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
