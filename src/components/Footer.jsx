export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cyan-200/70">© {new Date().getFullYear()} NEONVAULT. All rights reserved.</p>
          <div className="flex items-center gap-6 text-cyan-300/80">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
