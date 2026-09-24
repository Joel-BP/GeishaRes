export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/Joel-Bell-DFY-JUST-LOGO.jpg"
        alt="Geisha Reserve Coffee Club"
        className="h-12 w-auto object-contain sm:h-14"
      />
    </div>
  );
}
