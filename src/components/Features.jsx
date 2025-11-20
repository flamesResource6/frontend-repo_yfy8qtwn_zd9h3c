import { SprayCan, Sparkles, GaugeCircle, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Showroom Finish',
    desc: 'Meticulous interior deep clean with precision tools and premium products.'
  },
  {
    icon: SprayCan,
    title: 'Steam + Ozone',
    desc: 'High-temp steam and ozone treatment remove embedded odors at the source.'
  },
  {
    icon: ShieldCheck,
    title: 'Protect & Preserve',
    desc: 'Leather conditioning and UV protection to keep your cabin flawless.'
  },
  {
    icon: GaugeCircle,
    title: 'Fast Turnaround',
    desc: 'Most details completed in 2–3 hours. Same-day slots available.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_20%_10%,rgba(34,211,238,0.08),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why InsideShine?</h2>
          <p className="mt-3 text-slate-300 max-w-2xl">We combine industry-leading equipment with elite attention to detail for results that truly stun.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              <div className="mb-4 inline-flex rounded-xl border border-cyan-400/30 bg-cyan-400/10 p-3">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
