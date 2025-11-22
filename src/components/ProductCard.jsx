import { motion } from 'framer-motion'

export default function ProductCard({ product }) {
  return (
    <motion.a
      href={`/product/${product.id}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        boxShadow: '0 25px 60px rgba(56,189,248,0.15), inset 0 0 0 1px rgba(56,189,248,0.3)'
      }}
      className="group relative rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-md p-4 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
        background: 'radial-gradient(600px circle at var(--x) var(--y), rgba(34,211,238,0.12), transparent 40%)'
      }} />

      <div className="relative z-10">
        <div className="aspect-square rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900">
          {product.image && (
            <img src={product.image} alt={product.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
          )}
          {/* Wireframe overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-60" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <h3 className="text-white/90 font-semibold leading-tight">{product.title}</h3>
            <p className="text-cyan-200/70 text-sm">{product.category}</p>
          </div>
          <div className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 text-sm">
            ${product.price}
          </div>
        </div>
      </div>
    </motion.a>
  )
}
