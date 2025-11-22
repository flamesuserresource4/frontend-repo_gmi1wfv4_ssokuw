import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="pt-28">
        <Hero />
        <ProductGrid title="Featured" query="?featured=true&limit=8" />
      </main>
      <Footer />
    </div>
  )
}

export default App
