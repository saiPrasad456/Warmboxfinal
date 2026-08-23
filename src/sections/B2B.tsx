import Container from '../components/Container'
import Button from '../components/Button'

const offerings = ['Private labeling', 'Custom packaging', 'Custom sizes & shapes', 'Bulk orders', 'Manufacturer integration', 'Corporate orders']
const chain = ['Heating pouch supplier', 'WarmBox', 'Restaurants / Cloud Kitchens / Caterers', 'Customers']

export default function B2B() {
  return (
    <section className="relative py-28 md:py-36 bg-[var(--color-ink)] text-[var(--color-bg)] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-8%] h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-heat), transparent 70%)' }}
      />
      <Container className="relative grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">For businesses</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight">Built for your brand.</h2>
          <p className="mt-5 text-white/60 max-w-md leading-relaxed">
            Our goal is to partner with restaurants, cloud kitchens, caterers and food businesses to
            make warm-meal experiences a simple, standard part of everyday food delivery.
          </p>

          <ol className="mt-8 flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wide text-white/50">
            {chain.map((step, i) => (
              <span key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/15 px-3 py-1.5">{step}</span>
                {i < chain.length - 1 && <span className="text-white/30">&rarr;</span>}
              </span>
            ))}
          </ol>

          <Button href="/contact?reason=partnership" variant="secondary" className="mt-8 !border-white/25 !text-white hover:!border-white">
            Talk to Our Team
          </Button>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {offerings.map((o) => (
            <li key={o} className="rounded-xl border border-white/10 px-5 py-4 text-sm text-white/80">
              {o}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
