import { Coffee } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-400 bg-espresso-900">
          <Coffee className="h-5 w-5 text-gold-400" strokeWidth={1.5} />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-xl font-semibold tracking-wide text-cream-100">
          Geisha Reserve
        </span>
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400">
          Coffee Club
        </span>
      </div>
    </div>
  );
}
