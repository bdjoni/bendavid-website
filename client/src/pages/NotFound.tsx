/**
 * 404 Not Found Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Branded error page with navigation back to home
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoldDivider } from '@/components/SectionHeader';

export default function NotFound() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <Header />

      <section className="relative min-h-[80vh] flex items-center justify-center bg-[#0a1a30] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.05) 0%, transparent 60%)',
          }}
        />

        <div className="relative z-10 text-center px-5 sm:px-8 max-w-[500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span
              className="font-cormorant text-[120px] sm:text-[160px] font-light text-white/[0.04] leading-none block"
              dir="ltr"
              style={{ direction: 'ltr' }}
            >
              404
            </span>

            <div className="flex justify-center -mt-8 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#B8860B]" />
            </div>

            <h1 className="font-frank text-[26px] sm:text-[30px] font-normal text-white leading-[1.3] mb-4">
              העמוד לא נמצא
            </h1>

            <p className="font-heebo text-[14px] font-light text-white/30 leading-[1.8] mb-8">
              הדף שחיפשת לא קיים או שהועבר למיקום אחר. אפשר לחזור לדף הבית ולנווט משם.
            </p>

            <GoldDivider className="mx-auto mb-8" />

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="inline-block px-7 py-3 bg-[#B8860B] rounded-[4px] font-heebo text-[13px] text-white font-normal tracking-[0.5px] hover:bg-[#9a7209] transition-all duration-350"
              >
                חזרה לדף הבית
              </Link>
              <Link
                href="/contact"
                className="inline-block px-7 py-3 border border-white/15 rounded-[4px] font-heebo text-[13px] text-white/50 font-light tracking-[0.5px] hover:border-[#B8860B] hover:text-[#c9993a] transition-all duration-350"
              >
                צור קשר
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
