import Spline from '@splinetool/react-spline';
import { PhoneCall, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for contrast (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/30 to-slate-900/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(56,189,248,0.25),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="max-w-2xl text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-cyan-200">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs tracking-wide">Premium Interior Detailing</span>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              InsideShine
              <span className="block bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
                Shockingly Clean. Impossibly Fresh.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200/90">
              We transform tired interiors into showroom perfection — deep steam clean, leather care, stain removal, ozone odor neutralization and more. Book today and feel that new-car wow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.45)] transition hover:brightness-110"
              >
                Book Your Detail
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                <PhoneCall className="h-5 w-5 text-cyan-300" />
                Call: +1 (234) 567-890
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300/80">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Same‑day appointments
              </div>
              <div className="hidden sm:block h-4 w-px bg-white/20" />
              <div className="hidden sm:flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-400/70" />
                Mobile service available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
