/**
 * Accessibility Statement Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism (matches PrivacyPolicy.tsx)
 * Required by Israeli law: Equal Rights for People with Disabilities Regulations, 2013
 */

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoldDivider } from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function AccessibilityStatement() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <SEO
        title="הצהרת נגישות"
        description="הצהרת הנגישות של אתר עו״ד יונתן בן דוד. מידע על התאמות נגישות, מגבלות ידועות, ודרכי פנייה בנושא נגישות."
        path="/accessibility"
        breadcrumbs={[
          { name: 'דף הבית', path: '/' },
          { name: 'הצהרת נגישות', path: '/accessibility' },
        ]}
      />
      <Header />

      {/* ═══════════════════════════════════════════
          HERO — Page Header
          ═══════════════════════════════════════════ */}
      <section className="relative pt-[120px] pb-16 sm:pb-20 bg-[#0a1a30] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(184,134,11,0.05) 0%, transparent 60%)' }} />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-dm text-[11px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
              Accessibility
            </span>
            <h1 className="font-frank text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-white leading-[1.3]">
              הצהרת נגישות
            </h1>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 mt-4 max-w-[550px] leading-[1.8]">
              עודכנה לאחרונה: פברואר 2026 | בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות
            </p>
            <GoldDivider className="mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          STATEMENT CONTENT
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Commitment */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                מחויבותנו לנגישות
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2]">
                משרד עו"ד יונתן בן דוד מחויב להנגשת האתר והשירותים הדיגיטליים לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות, וזאת בהתאם ל:
              </p>
              <ul className="space-y-3 mt-4">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">חוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998</strong>
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013</strong>
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">תקן ישראלי ת"י 5568</strong> — המבוסס על הנחיות WCAG 2.0 ברמת AA
                </li>
              </ul>
            </div>

            {/* What We Did */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                מה עשינו כדי להנגיש את האתר
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                במסגרת מאמצינו להנגשת האתר, נעשו הפעולות הבאות:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">מבנה סמנטי:</strong> האתר בנוי עם תגיות HTML סמנטיות המאפשרות ניווט באמצעות טכנולוגיות מסייעות (קוראי מסך וכד').
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">תגיות ARIA:</strong> הוספנו תגיות נגישות (aria-label, role) לאלמנטים אינטראקטיביים כגון כפתורים, תפריטים, וקישורים.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">ניגודיות צבעים:</strong> עיצוב האתר מקפיד על יחסי ניגודיות מספקים בין טקסט לרקע.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">טקסט חלופי:</strong> תמונות באתר כוללות תיאור טקסטואלי חלופי (alt text).
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">ניווט מקלדת:</strong> ניתן לנווט באתר באמצעות מקלדת בלבד (Tab, Enter, Escape).
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">עיצוב רספונסיבי:</strong> האתר מותאם לצפייה במכשירים שונים — מחשב, טאבלט וטלפון נייד.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">כותרות מובנות:</strong> מבנה כותרות הירארכי (H1–H6) לניווט נוח עם קוראי מסך.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">תוכן בעברית:</strong> האתר תומך בכיוון RTL (ימין לשמאל) לתצוגה מלאה בעברית.
                </li>
              </ul>
            </div>

            {/* Known Limitations */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                מגבלות ידועות
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                למרות מאמצינו, ייתכנו תכנים או אזורים באתר שטרם הונגשו במלואם:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  חלק מתכני הווידאו עשויים שלא לכלול כתוביות או תמלול.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  מסמכי PDF המצורפים לאתר עשויים שלא להיות מונגשים במלואם.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  תכנים המוטמעים מפלטפורמות חיצוניות (כגון: יוטיוב, פייסבוק) כפופים למדיניות הנגישות של אותן פלטפורמות.
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-[12px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-r-[3px] border-[#B8860B]">
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#4a4a4a] leading-[1.9]">
                  <strong className="font-medium text-[#0a1a30]">שיפור מתמיד:</strong> אנו עובדים באופן שוטף לשיפור הנגישות וטיפול במגבלות אלו.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                פנייה בנושא נגישות
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                אם נתקלת בבעיית נגישות באתר, או שיש לך הצעה לשיפור — נשמח לשמוע ממך:
              </p>
              <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <ul className="space-y-3">
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] flex items-start gap-3">
                    <span className="text-[#B8860B] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </span>
                    <span>רכז נגישות: <strong className="font-medium text-[#0a1a30]">עו"ד יונתן בן דוד</strong></span>
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] flex items-start gap-3">
                    <span className="text-[#B8860B] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <span>דוא"ל: <a href="mailto:office@bdyonatan.co.il" className="text-[#B8860B] hover:underline">office@bdyonatan.co.il</a></span>
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] flex items-start gap-3">
                    <span className="text-[#B8860B] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <span>טלפון: <a href="tel:054-210-2430" className="text-[#B8860B] hover:underline" dir="ltr">054-210-2430</a></span>
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] flex items-start gap-3">
                    <span className="text-[#B8860B] mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>כתובת: מנחם בגין 150, מגדל WE, קומה 11, תל אביב</span>
                  </li>
                </ul>
              </div>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-6">
                אנו מתחייבים לטפל בפניות נגישות בתוך <strong className="font-medium text-[#0a1a30]">14 ימי עסקים</strong> ממועד הפנייה.
              </p>
            </div>

            {/* Disclaimer footer */}
            <div className="pt-8 border-t border-[#0a1a30]/10">
              <p className="font-heebo text-[12px] font-light text-[#aeaeb2] text-center">
                ט.ל.ח
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
