export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/Joel-Bell-DFY-JUST-LOGO.jpg"
        alt=""
        aria-hidden="true"
        className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
      />
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
