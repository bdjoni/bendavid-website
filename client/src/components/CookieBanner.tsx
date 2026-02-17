/**
 * Cookie Consent Banner — Ben David Website
 * Compliant with Israeli Privacy Protection Law (Amendment 13)
 * Accept-only banner: continued browsing = consent
 * Integrates with Google Consent Mode v2 via GTM
 */

import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { grantConsent, hasConsent } from '@/lib/consent';

const STORAGE_KEY = 'bd_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so it doesn't compete with page load
    const timer = setTimeout(() => {
      if (!hasConsent()) setVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    grantConsent();
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-0 inset-x-0 z-[9999] p-4 sm:p-5"
          dir="rtl"
          role="dialog"
          aria-label="הודעת עוגיות"
        >
          <div className="max-w-[680px] mx-auto bg-[#0a1a30]/95 backdrop-blur-md border border-white/10 rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-5 sm:p-6">
            {/* Cookie icon + text */}
            <div className="flex gap-4 items-start">
              <span className="text-[24px] shrink-0 mt-0.5" aria-hidden="true">🍪</span>
              <div className="flex-1">
                <h3 className="font-frank text-[16px] sm:text-[17px] font-normal text-white mb-2">
                  האתר משתמש בעוגיות
                </h3>
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-white/50 leading-[1.8]">
                  אנו משתמשים בעוגיות ובטכנולוגיות מעקב לשיפור חוויית הגלישה, ניתוח תנועה והתאמת תכנים ופרסום.
                  המשך גלישה באתר מהווה הסכמה לשימוש בעוגיות בהתאם ל
                  <Link
                    href="/privacy-policy"
                    className="text-[#c9993a] hover:underline mx-1"
                  >
                    מדיניות הפרטיות
                  </Link>
                  שלנו.
                </p>

                {/* Accept button only */}
                <div className="mt-4">
                  <button
                    onClick={handleAccept}
                    className="px-7 py-2.5 bg-[#B8860B] rounded-[4px] font-heebo text-[13px] text-white font-normal tracking-[0.3px] hover:bg-[#9a7209] transition-all duration-300 min-h-[44px]"
                  >
                    מאשר
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
