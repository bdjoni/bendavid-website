/**
 * SectionHeader & GoldDivider — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Dual Script Headers: Hebrew large + English small label
 */

import AnimateOnScroll from './AnimateOnScroll';

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export function GoldDivider({ className = '', width = 'w-10' }: GoldDividerProps) {
  return <div className={`${width} h-[2px] bg-[#B8860B] opacity-50 ${className}`} />;
}

interface SectionHeaderProps {
  tag?: string;
  tagColor?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export default function SectionHeader({
  tag,
  tagColor = 'text-[#B8860B]',
  title,
  description,
  align = 'center',
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-right items-start';
  const titleColor = theme === 'dark' ? 'text-white' : 'text-[#0a1a30]';
  const descColor = theme === 'dark' ? 'text-white/35' : 'text-[#86868b]';

  return (
    <AnimateOnScroll className={`flex flex-col ${alignClass} ${className}`}>
      {tag && (
        <span
          className={`font-dm text-[11px] tracking-[5px] uppercase font-medium mb-3 ${tagColor}`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-frank text-[32px] sm:text-[36px] lg:text-[40px] font-normal leading-[1.2] ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-heebo text-[14px] sm:text-[15px] font-light ${descColor} mt-3 max-w-[520px] leading-[1.8]`}
          dir="rtl"
          style={{ direction: 'rtl' }}
        >
          {description}
        </p>
      )}
      <GoldDivider className={`mt-5 ${align === 'center' ? 'mx-auto' : ''}`} />
    </AnimateOnScroll>
  );
}
