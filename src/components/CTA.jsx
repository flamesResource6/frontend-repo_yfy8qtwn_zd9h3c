export default function CTA() {
  return (
    <section id="cta" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_10%,rgba(34,211,238,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Ready for the InsideShine shock factor?</h2>
        <p className="mt-3 text-slate-300">Book in under 60 seconds. We come to you or visit our studio. Flexible scheduling, transparent pricing, professional results.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="tel:+1234567890" className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-900 shadow-[0_0_40px_rgba(34,211,238,0.35)] hover:brightness-110">Call Now</a>
          <a href="#pricing" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">See Packages</a>
        </div>
        <p className="mt-4 text-xs text-slate-400">Licensed • Insured • Satisfaction Guaranteed</p>
      </div>
    </section>
  );
}
