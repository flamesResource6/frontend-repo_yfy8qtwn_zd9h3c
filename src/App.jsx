import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top bar */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
            <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
              <span className="text-cyan-300">Inside</span>
              <span className="text-white">Shine</span>
            </a>
            <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#cta" className="hover:text-white">Book</a>
            </nav>
            <a href="tel:+1234567890" className="hidden rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:brightness-110 sm:block">Call Now</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/60 py-10 text-slate-300">
        <div className="mx-auto max-w-7xl px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm">© {new Date().getFullYear()} InsideShine. All rights reserved.</p>
          <div className="text-sm">
            Bookings & inquiries: <a href="tel:+1234567890" className="text-cyan-300 hover:underline">+1 (234) 567‑890</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App