import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* Holographic grid background */}
      <div className="absolute inset-0 opacity-60 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.08),transparent_50%),radial-gradient(circle_at_80%_30%,rgba(167,139,250,0.08),transparent_55%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.08),transparent_55%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
      </div>

      {/* Spline 3D hero */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Gradient edge glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
      </div>

      {/* Tagline and chips */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 -mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-[0_0_30px_rgba(59,130,246,0.35)]"
        >
          Holographic Luxury Accessories Marketplace
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 text-cyan-200/80 max-w-2xl"
        >
          A next‑gen buying experience blending neon elegance, glass surfaces and living micro‑interactions.
        </motion.p>

        {/* Category chips */}
        <motion.div
          initial="hidden" animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {['Watches','Wearables','Tech','Wallets','Jewelry','Eyewear'].map((c) => (
            <motion.a
              key={c}
              href={`/products?category=${encodeURIComponent(c)}`}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(34,211,238,0.35)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md px-4 py-2 text-cyan-100 hover:text-white transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_2px_rgba(34,211,238,0.7)]" />
              {c}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
