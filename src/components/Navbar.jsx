import { Menu, ShoppingCart, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <Menu className="w-5 h-5 text-cyan-300" />
              </button>
              <a href="/" className="text-white font-semibold tracking-tight">NEONVAULT</a>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
              <Search className="w-4 h-4 text-cyan-300" />
              <input placeholder="Search accessories" className="bg-transparent text-sm outline-none text-white placeholder-cyan-200/60" />
            </div>
            <a href="/cart" className="p-2 rounded-lg hover:bg-white/10 transition-colors relative">
              <ShoppingCart className="w-5 h-5 text-cyan-300" />
              <span className="absolute -top-1 -right-1 text-[10px] rounded-full bg-cyan-500 text-white px-1.5">2</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
