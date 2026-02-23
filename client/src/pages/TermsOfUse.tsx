/**
 * Terms of Use Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism (matches PrivacyPolicy.tsx)
 * Full terms of use in Hebrew, with critical disclaimers for a law firm website
 */

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoldDivider } from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function TermsOfUse() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <SEO
        title="תנאי שימוש"
        description="תנאי השימוש באתר עו״ד יונתן בן דוד. מידע חשוב על הסרת אחריות, קניין רוחני, וכללי השימוש באתר."
        path="/terms-of-use"
        breadcrumbs={[
          { name: 'דף הבית', path: '/' },
          { name: 'תנאי שימוש', path: '/terms-of-use' },
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
              Terms of Use
            </span>
            <h1 className="font-frank text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-white leading-[1.3]">
              תנאי שימוש
            </h1>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 mt-4 max-w-[550px] leading-[1.8]">
              עודכנו לאחרונה: פברואר 2026
            </p>
            <GoldDivider className="mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TERMS CONTENT
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Section 1 — General */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                1. כללי
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2]">
                ברוכים הבאים לאתר האינטרנט של עו"ד יונתן בן דוד (להלן: <strong className="font-medium text-[#0a1a30]">"האתר"</strong>). האתר מופעל ומנוהל על ידי עו"ד יונתן בן דוד, מרחוב מנחם בגין 150, מגדל WE, קומה 11, תל אביב (להלן: <strong className="font-medium text-[#0a1a30]">"המשרד"</strong> או <strong className="font-medium text-[#0a1a30]">"אנו"</strong>).
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                תנאי שימוש אלה (להלן: <strong className="font-medium text-[#0a1a30]">"התנאים"</strong>) מסדירים את השימוש באתר, בתכניו ובשירותים הזמינים בו. <strong className="font-medium text-[#0a1a30]">הגלישה באתר ו/או השימוש בשירותיו מהווים הסכמה מלאה לתנאים אלה.</strong> אם אינך מסכים לתנאים — אנא הימנע משימוש באתר.
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                התנאים מנוסחים בלשון זכר מטעמי נוחות בלבד ופונים לכל אדם.
              </p>
            </div>

            {/* Section 2 — DISCLAIMER (most important!) */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                2. הסרת אחריות — המידע באתר אינו מהווה ייעוץ משפטי
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-r-[3px] border-[#B8860B]">
                <p className="font-heebo text-[14px] sm:text-[15px] font-medium text-[#0a1a30] leading-[2] mb-4">
                  זהו הסעיף החשוב ביותר בתנאים אלה:
                </p>
                <ul className="space-y-4">
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/40">
                    <strong className="font-medium text-[#0a1a30]">המידע באתר, לרבות מאמרים, כתבות, מדריכים, סרטונים וכל תוכן אחר — הינו מידע כללי בלבד ואינו מהווה ייעוץ משפטי, חוות דעת משפטית, או תחליף להתייעצות עם עורך דין.</strong>
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/40">
                    <strong className="font-medium text-[#0a1a30]">גלישה באתר, קריאת מאמרים, או פנייה דרך טופס "צור קשר" — אינם יוצרים יחסי עורך דין–לקוח</strong> בינך לבין עו"ד יונתן בן דוד או מי מטעמו.
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/40">
                    יחסי עורך דין–לקוח נוצרים <strong className="font-medium text-[#0a1a30]">אך ורק</strong> לאחר חתימה על הסכם שכר טרחה מפורש ובכתב.
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/40">
                    <strong className="font-medium text-[#0a1a30]">תוצאות שהושגו בתיקים קודמים אינן מבטיחות תוצאות דומות בתיקים אחרים.</strong> כל מקרה נבחן לגופו בהתאם לנסיבותיו הייחודיות.
                  </li>
                  <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/40">
                    המשרד אינו אחראי לכל נזק, הפסד או הוצאה שייגרמו למי שיפעל על סמך המידע באתר ללא ייעוץ משפטי פרטני.
                  </li>
                </ul>
              </div>
            </div>

            {/* Section 3 — Services */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                3. השירותים באתר
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                האתר מספק מידע אודות:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  תחומי הפעילות של המשרד (נדל"ן, מקרקעין, השקעות, מיסוי ועוד).
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  מאמרים ותכנים מקצועיים בתחומי המשפט והנדל"ן.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  דרכי יצירת קשר עם המשרד.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  טפסי פנייה לקבלת ייעוץ ראשוני.
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-[12px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-r-[3px] border-[#B8860B]">
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#4a4a4a] leading-[1.9]">
                  <strong className="font-medium text-[#0a1a30]">הבהרה:</strong> האתר אינו מספק שירותי ייעוץ משפטי מקוון, ואינו תחליף לפגישת ייעוץ אישית.
                </p>
              </div>
            </div>

            {/* Section 4 — Intellectual Property */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                4. קניין רוחני
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <ul className="space-y-4">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  כל התכנים באתר — לרבות טקסטים, מאמרים, עיצובים, תמונות, לוגו, סימני מסחר, סרטונים, גרפיקה וקוד מחשב — הם קניינו הבלעדי של עו"ד יונתן בן דוד ו/או מי מטעמו, ומוגנים בחוקי זכויות יוצרים וקניין רוחני.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  אין להעתיק, לשכפל, להפיץ, לפרסם, להציג בפומבי, לעשות שימוש מסחרי, או ליצור יצירות נגזרות מתכני האתר, ללא הסכמה מפורשת בכתב מראש.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  ציטוט קצר מתכני האתר מותר לצרכים אקדמיים או עיתונאיים, בכפוף למתן קרדיט מלא ולינק לאתר.
                </li>
              </ul>
            </div>

            {/* Section 5 — Acceptable Use */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                5. שימוש מותר באתר
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                המשתמש מתחייב:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  לעשות שימוש באתר למטרות חוקיות בלבד.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  לא להעלות, לשלוח או להפיץ באמצעות האתר תכנים פוגעניים, מאיימים, מטעים, או בלתי חוקיים.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  לא לנסות לחדור למערכות האתר, לשבש את פעולתו, או לאסוף מידע באמצעות אמצעים אוטומטיים.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  למסור פרטים נכונים ומדויקים בטפסי יצירת קשר.
                </li>
              </ul>
            </div>

            {/* Section 6 — External Links */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                6. קישורים לאתרים חיצוניים
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                האתר עשוי לכלול קישורים לאתרי צד שלישי (כגון: רשתות חברתיות, אתרי מידע, מערכות ממשלתיות). קישורים אלה ניתנים לנוחות המשתמש בלבד.
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  המשרד אינו אחראי לתוכנם, מדיניות הפרטיות שלהם, או לכל נזק שייגרם מהשימוש בהם.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  הימצאות קישור באתר אינה מהווה המלצה או אישור מטעם המשרד.
                </li>
              </ul>
            </div>

            {/* Section 7 — Limitation of Liability */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                7. הגבלת אחריות
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  האתר ותכניו מסופקים <strong className="font-medium text-[#0a1a30]">"כפי שהם" (AS IS)</strong> ללא כל מצג או התחייבות, מפורשים או משתמעים.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  המשרד אינו מתחייב שהאתר יפעל באופן רציף, ללא הפרעות או תקלות.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  המשרד לא יישא באחריות לכל נזק ישיר, עקיף, מקרי או תוצאתי הנובע מהשימוש באתר או מהסתמכות על תכניו.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  אין באמור כדי לגרוע מהוראות כל דין שאינן ניתנות להתנאה.
                </li>
              </ul>
            </div>

            {/* Section 8 — Changes */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                8. שינויים בתנאי השימוש
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2]">
                המשרד שומר לעצמו את הזכות לעדכן או לשנות תנאים אלה מעת לעת, לפי שיקול דעתו הבלעדי. תנאים מעודכנים ייכנסו לתוקף עם פרסומם באתר. המשך השימוש באתר לאחר עדכון התנאים מהווה הסכמה לנוסח המעודכן.
              </p>
            </div>

            {/* Section 9 — Governing Law */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                9. דין חל וסמכות שיפוט
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  תנאי שימוש אלה כפופים <strong className="font-medium text-[#0a1a30]">לדין הישראלי בלבד</strong>.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  כל מחלוקת בקשר לאתר או לתנאים אלה תידון <strong className="font-medium text-[#0a1a30]">בבתי המשפט המוסמכים בתל אביב-יפו בלבד</strong>.
                </li>
              </ul>
            </div>

            {/* Section 10 — Contact */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                10. יצירת קשר
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                לכל שאלה בנוגע לתנאי שימוש אלה:
              </p>
              <div className="bg-white rounded-[12px] p-6 sm:p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
                <ul className="space-y-3">
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
