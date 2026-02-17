/**
 * Ben David Logo Component
 * Design: Swiss-Israeli Legal Modernism
 * Logo always renders LTR regardless of page direction
 * Ben = Cormorant Garamond 300 (light), David = 600 (bold), Gold dot 7px
 */

interface LogoProps {
  variant?: 'full' | 'compact' | 'favicon';
  theme?: 'dark' | 'light' | 'cream';
  lang?: 'he' | 'en';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeMap = {
  sm: { name: 'text-lg', dot: 'w-1 h-1', above: 'text-[8px]', sub: 'text-[8px]', gap: 'gap-1.5', line: 'w-3' },
  md: { name: 'text-[22px]', dot: 'w-[5px] h-[5px]', above: 'text-[9px]', sub: 'text-[9px]', gap: 'gap-2', line: 'w-4' },
  lg: { name: 'text-[36px]', dot: 'w-[6px] h-[6px]', above: 'text-[11px]', sub: 'text-[10px]', gap: 'gap-3', line: 'w-5' },
  xl: { name: 'text-[56px]', dot: 'w-[7px] h-[7px]', above: 'text-[13px]', sub: 'text-[11px]', gap: 'gap-3.5', line: 'w-[22px]' },
};

const themeMap = {
  dark: {
    ben: 'text-white/55',
    david: 'text-white',
    dot: 'bg-[#B8860B]',
    above: 'text-white/20',
    sub: 'text-white/20',
    line: 'bg-white/[0.08]',
  },
  light: {
    ben: 'text-[#1B3A5C]/60',
    david: 'text-[#1B3A5C]',
    dot: 'bg-[#B8860B]',
    above: 'text-[#86868b]',
    sub: 'text-[#86868b]',
    line: 'bg-[#d2d2d7]',
  },
  cream: {
    ben: 'text-[#1B3A5C]/60',
    david: 'text-[#1B3A5C]',
    dot: 'bg-[#B8860B]',
    above: 'text-[#aeaeb2]',
    sub: 'text-[#aeaeb2]',
    line: 'bg-[#d2d2d7]',
  },
};

export default function Logo({
  variant = 'full',
  theme = 'dark',
  lang = 'he',
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizeMap[size];
  const t = themeMap[theme];

  if (variant === 'favicon') {
    return (
      <div
        className={`w-8 h-8 bg-[#1B3A5C] rounded-md flex items-center justify-center border border-white/10 ${className}`}
      >
        <span className="font-cormorant text-base font-semibold text-white leading-none">
          B<span className="text-[#B8860B]">.</span>
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-baseline ${s.gap} ${className}`} dir="ltr" style={{ direction: 'ltr' }}>
        <span className={`font-cormorant ${s.name} font-light leading-none ${t.ben}`}>
          Ben
        </span>
        <span className={`font-cormorant ${s.name} font-semibold leading-none ${t.david}`}>
          David
        </span>
        <span className={`${s.dot} ${t.dot} rounded-full inline-block relative -top-[1px]`} />
      </div>
    );
  }

  // Full variant
  return (
    <div className={`flex flex-col items-center ${className}`} dir="ltr" style={{ direction: 'ltr' }}>
      {/* Above text */}
      {lang === 'he' ? (
        <span
          className={`font-frank ${s.above} font-normal tracking-[1px] ${t.above}`}
          dir="rtl"
          style={{ direction: 'rtl' }}
        >
          עורך דין
        </span>
      ) : (
        <span
          className={`font-josefin ${s.above} font-light tracking-[10px] uppercase ${t.above}`}
        >
          Attorney at Law
        </span>
      )}

      {/* Name */}
      <div className={`flex items-baseline ${s.gap} my-2`}>
        <span className={`font-cormorant ${s.name} font-light leading-none ${t.ben}`}>
          Ben
        </span>
        <span className={`font-cormorant ${s.name} font-semibold leading-none ${t.david}`}>
          David
        </span>
        <span className={`${s.dot} ${t.dot} rounded-full inline-block relative -top-[2px]`} />
      </div>

      {/* Tagline */}
      <div className={`flex items-center ${s.gap} mt-1`}>
        <span className={`${s.line} h-px ${t.line}`} />
        {lang === 'he' ? (
          <>
            <span
              className={`font-heebo ${s.sub} font-light tracking-[3px] ${t.sub}`}
              dir="rtl"
              style={{ direction: 'rtl' }}
            >
              נדל״ן
            </span>
            <span className={`${s.line} h-px ${t.line}`} />
            <span
              className={`font-heebo ${s.sub} font-light tracking-[3px] ${t.sub}`}
              dir="rtl"
              style={{ direction: 'rtl' }}
            >
              השקעות
            </span>
          </>
        ) : (
          <>
            <span className={`font-dm ${s.sub} font-light tracking-[4px] uppercase ${t.sub}`}>
              Real Estate
            </span>
            <span className={`${s.line} h-px ${t.line}`} />
            <span className={`font-dm ${s.sub} font-light tracking-[4px] uppercase ${t.sub}`}>
              Investments
            </span>
          </>
        )}
        <span className={`${s.line} h-px ${t.line}`} />
      </div>
    </div>
  );
}
