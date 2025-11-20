export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-slate-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_20%,rgba(34,211,238,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Packages</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">Transparent pricing designed for results that impress and interiors that last.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Express */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
            <h3 className="text-xl font-semibold">Express Refresh</h3>
            <p className="mt-1 text-slate-300">Quick uplift for well-kept cars</p>
            <p className="mt-4 text-3xl font-bold">$89</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
              <li>• Vacuum + wipe-down</li>
              <li>• Windows + mirrors</li>
              <li>• Light stain treatment</li>
            </ul>
          </div>

          {/* Signature */}
          <div className="relative rounded-2xl border border-cyan-400/40 bg-cyan-400/10 p-6 text-white shadow-[0_0_40px_rgba(34,211,238,0.25)]">
            <div className="absolute -top-3 right-4 rounded-full border border-cyan-400/50 bg-cyan-400/20 px-3 py-1 text-xs text-cyan-100">Most Popular</div>
            <h3 className="text-xl font-semibold">Signature Deep Clean</h3>
            <p className="mt-1 text-slate-200">Comprehensive interior reset</p>
            <p className="mt-4 text-3xl font-bold">$189</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-100">
              <li>• Full steam clean</li>
              <li>• Fabric shampoo & extraction</li>
              <li>• Leather clean & condition</li>
              <li>• Ozone odor neutralization</li>
            </ul>
          </div>

          {/* Elite */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
            <h3 className="text-xl font-semibold">Elite Showroom</h3>
            <p className="mt-1 text-slate-300">Maximum protection + detail</p>
            <p className="mt-4 text-3xl font-bold">$289</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
              <li>• Everything in Signature</li>
              <li>• Fabric & leather protectants</li>
              <li>• UV trim treatment</li>
              <li>• Complimentary maintenance kit</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href="#cta" className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:brightness-110">Reserve Your Spot</a>
        </div>
      </div>
    </section>
  );
}
