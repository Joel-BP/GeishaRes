import { Leaf, Mountain, HandHeart, Globe2 } from 'lucide-react';
import { useReveal } from '../lib/useReveal';

const VALUES = [
  {
    icon: Mountain,
    title: 'Highland Grown',
    text: 'Cultivated at 1,700+ meters in the volcanic soils of Boquete, where cooler temperatures slow ripening and concentrate flavor.',
  },
  {
    icon: Leaf,
    title: 'Sustainably Sourced',
    text: 'Direct-trade relationships with family farms. Fair prices, regenerative practices, and full traceability from cherry to cup.',
  },
  {
    icon: HandHeart,
    title: 'Hand-Picked & Crafted',
    text: 'Only perfectly ripe cherries are selected, then processed and roasted in micro-batches by our master roaster.',
  },
  {
    icon: Globe2,
    title: 'Delivered Fresh',
    text: 'Roasted to order and shipped within 48 hours. Every bag arrives at peak flavor, never sitting on a shelf.',
  },
];

export function Story() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="story" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px w-10 bg-gold-400" />
                <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                  Our Story
                </span>
              </div>
              <h2 className="font-serif text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl text-balance">
                A legacy rooted in
                <span className="text-gold-gradient italic"> Panama's highlands</span>
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-cream-200">
                <p>
                  Geisha Reserve was born from a singular obsession: to share the
                  extraordinary coffee that grows in the cloud forests of Panama.
                  The Geisha varietal — originally from Ethiopia — found its spiritual
                  home in the volcanic soils of Boquete, where it produces a cup so
                  floral, so complex, that it has commanded record prices at auction
                  for two decades running.
                </p>
                <p>
                  We work directly with a small group of family farms in Boquete and
                  Volcán, paying well above fair-trade rates. Every lot is cupped and
                  scored before it earns our label. No blends, no shortcuts — just
                  the purest expression of one of the world's rarest coffees.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.pexels.com/photos/2168892/pexels-photo-2168892.jpeg"
                  alt="Coffee cherries ripening on the branch"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/40 to-transparent" />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-espresso-700 bg-espresso-900/90 p-6 backdrop-blur-md">
                <p className="font-serif text-4xl font-semibold text-gold-300">1,900m</p>
                <p className="mt-1 text-sm text-cream-300">Peak growing altitude</p>
              </div>
            </div>
          </div>

          {/* Values grid */}
          <div className="mt-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''} group rounded-2xl border border-espresso-700/50 bg-espresso-900/40 p-8 transition-all hover:border-gold-400/40 hover:bg-espresso-900/70`}
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-espresso-800 transition-colors group-hover:bg-gold-400/10">
                  <value.icon className="h-6 w-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream-50">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-300">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
