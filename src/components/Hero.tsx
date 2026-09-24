import { ArrowDown, Star } from 'lucide-react';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg"
          alt="Coffee plantation in Florida, USA"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/70 via-espresso-950/50 to-espresso-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 animate-fade-in">
            <div className="h-px w-12 bg-gold-400" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
              Single-Origin · Florida
            </span>
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-[1.1] text-cream-50 sm:text-6xl lg:text-7xl text-balance animate-fade-up">
            The world's most
            <br />
            <span className="text-gold-gradient italic">extraordinary</span> coffee
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-200 animate-fade-up" style={{ animationDelay: '0.15s', opacity: 0, animationFillMode: 'forwards' }}>
            Rare Geisha varietal, sustainably sourced from the sunny coastlines of
            Florida. Hand-picked, small-batch roasted, and delivered at peak freshness.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
            <a
              href="#shop"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-8 py-4 text-sm font-semibold text-espresso-950 transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30"
            >
              Explore the Collection
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#club"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-300/30 px-8 py-4 text-sm font-semibold text-cream-100 backdrop-blur-sm transition-all hover:border-gold-400 hover:text-gold-300"
            >
              Join the Club
            </a>
          </div>

          {/* Rating */}
          <div className="mt-12 flex items-center gap-4 animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0, animationFillMode: 'forwards' }}>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <span className="text-sm text-cream-300">
              Rated 4.9/5 by 2,000+ members
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-cream-300/60" />
      </div>
    </section>
  );
}
