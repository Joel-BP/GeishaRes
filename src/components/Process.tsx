import { useReveal } from '../lib/useReveal';

const STEPS = [
  {
    number: '01',
    title: 'Sourced',
    text: 'We work directly with family farms across South Florida, selecting only top-scoring Geisha lots.',
  },
  {
    number: '02',
    title: 'Hand-Picked',
    text: 'Cherries are selectively picked at peak ripeness — often multiple passes through the same tree in a single harvest.',
  },
  {
    number: '03',
    title: 'Processed',
    text: 'Washed, natural, honey, or anaerobic — each process is chosen to highlight the unique character of the lot.',
  },
  {
    number: '04',
    title: 'Roasted',
    text: 'Small-batch roasted to order in our drum roaster. We never roast more than 5kg at a time for maximum control.',
  },
  {
    number: '05',
    title: 'Delivered',
    text: 'Shipped within 48 hours of roasting. Your coffee arrives at peak flavor, ready to brew.',
  },
];

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="process" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="h-px w-10 bg-gold-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold-300">
                From Cherry to Cup
              </span>
              <div className="h-px w-10 bg-gold-400" />
            </div>
            <h2 className="font-serif text-4xl font-semibold text-cream-50 sm:text-5xl text-balance">
              The <span className="text-gold-gradient italic">journey</span> of every bean
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 top-12 hidden h-px w-full bg-gradient-to-r from-transparent via-espresso-600 to-transparent lg:block" />

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((step, i) => (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} ${visible ? 'is-visible' : ''} relative text-center`}
                >
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-espresso-700 bg-espresso-900" />
                    <span className="font-serif text-3xl font-semibold text-gold-300">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-cream-50">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-300">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
