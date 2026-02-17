/**
 * Header Component — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Behavior: Transparent at top → navy-dark with backdrop-blur on scroll (after 80px)
 * Navigation: RTL Hebrew links, Logo always LTR
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import Logo from './Logo';

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/practice-areas', label: 'תחומי עיסוק' },
  { href: '/articles', label: 'מאמרים' },
  { href: '/contact', label: 'צור קשר', isGold: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-[100] focus:bg-[#B8860B] focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-heebo focus:shadow-lg"
      >
        דלג לתוכן הראשי
      </a>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a1a30]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/">
            <Logo variant="compact" theme="dark" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" dir="rtl" style={{ direction: 'rtl' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-heebo text-[13px] font-light transition-all duration-300 relative after:absolute after:bottom-[-4px] after:right-0 after:h-[1.5px] after:bg-[#B8860B] after:transition-all after:duration-300 ${
                  link.isGold
                    ? 'text-[#c9993a] font-normal hover:text-[#d4ad4a] after:w-0 hover:after:w-full'
                    : location === link.href
                    ? 'text-white/70 after:w-full'
                    : 'text-white/40 hover:text-[#c9993a] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="תפריט"
          >
            <span
              className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-white/60 transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav
          className="bg-[#0a1a30]/98 backdrop-blur-md border-t border-white/5 px-6 py-6 flex flex-col gap-5"
          dir="rtl"
          style={{ direction: 'rtl' }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heebo text-base font-light transition-colors duration-300 ${
                link.isGold
                  ? 'text-[#c9993a] font-normal'
                  : location === link.href
                  ? 'text-white/70'
                  : 'text-white/40 hover:text-[#c9993a]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
    </>
  );
}
