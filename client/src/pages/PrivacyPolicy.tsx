/**
 * Privacy Policy Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Full privacy policy in Hebrew, compliant with Israeli Privacy Protection Law
 */

import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoldDivider } from '@/components/SectionHeader';
import SEO from '@/components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <SEO
        title="מדיניות פרטיות"
        description="מדיניות הפרטיות של אתר עו״ד יונתן בן דוד. מידע על איסוף, שימוש ושמירת נתונים אישיים בהתאם לחוק הגנת הפרטיות."
        path="/privacy-policy"
        breadcrumbs={[
          { name: 'דף הבית', path: '/' },
          { name: 'מדיניות פרטיות', path: '/privacy-policy' },
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
              Privacy Policy
            </span>
            <h1 className="font-frank text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-white leading-[1.3]">
              מדיניות פרטיות
            </h1>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 mt-4 max-w-[550px] leading-[1.8]">
              עודכנה לאחרונה: פברואר 2026 | מותאמת להוראות חוק הגנת הפרטיות ותיקון 13
            </p>
            <GoldDivider className="mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          POLICY CONTENT
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-10"
          >
            {/* Introduction */}
            <div className="prose-section">
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2]">
                ברוכים הבאים לאתר של יונתן בן דוד. מדיניות זו מתייחסת לאתר האינטרנט בכתובת www.bdyonatan.co.il, וכן לכל דפי הנחיתה, הנכסים הדיגיטליים והשירותים המופעלים תחת המותג "יונתן בן דוד" (להלן: "האתר" או "המותג").
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                האתר מופעל ומנוהל על ידי יונתן בן דוד ו/או מי מטעמו, שכתובתם הרשומה היא מנחם בגין 150, תל אביב (להלן: "הנהלת האתר" או "אנו").
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                מטרת מסמך זה היא לפרט בפני המשתמשים, הגולשים, נרשמי הניוזלטר ולקוחותינו, כיצד אנו אוספים, שומרים ומעבדים את המידע האישי שלכם. אנו פועלים בהתאם לחוק הגנת הפרטיות, התשמ"א–1981 ("החוק"), תיקון מס' 13 לחוק, והוראות כל דין רלוונטי אחר.
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                השקיפות חשובה לנו. אנו ממליצים לקרוא מסמך זה בעיון. השימוש באתר, הרשמה לתכנים או מסירת פרטים מהווה הסכמה מצדכם למדיניות זו. המסמך מנוסח בלשון זכר מטעמי נוחות אך פונה לכולם.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                1. הגדרות ומונחים
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">מידע אישי:</strong> נתונים המתייחסים לאדם מזוהה או ניתן לזיהוי (לדוגמה: שם, טלפון, אימייל, תמונת פרופיל, הרגלי צריכת תוכן וכד').
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">עיבוד מידע:</strong> כל פעולה במידע, לרבות איסוף, אחסון, פילוח, דיוור ומחיקה.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">המשתמש:</strong> כל אדם הגולש באתר, נרשם לשירותים או מוסר מידע למותג.
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                2. המידע שאנו אוספים
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                במסגרת הפעילות באתר, אנו עשויים לאסוף את סוגי המידע הבאים:
              </p>
              <ul className="space-y-4">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">מידע שאתה מוסר לנו ביוזמתך:</strong> בעת הרשמה לניוזלטר, השארת פרטים בטופס "צור קשר", הורדת מדריכים דיגיטליים, רישום לקורסים או וובינרים – תתבקש למסור פרטים כגון: שם מלא, כתובת דוא"ל, מספר טלפון, ותחום עיסוק.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">מידע טכני ונתוני גלישה:</strong> מערכות האתר אוספות באופן אוטומטי נתונים כגון כתובת ה-IP שלך, סוג הדפדפן, המכשיר ממנו גלשת, העמודים בהם ביקרת, זמני שהייה באתר והפניות מאתרים אחרים.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">מידע מפלטפורמות חברתיות:</strong> במידה ותפנה אלינו או תגיב לתכנים דרך רשתות חברתיות (פייסבוק, אינסטגרם, לינקדאין, יוטיוב), אנו עשויים לקבל מידע בסיסי מהפרופיל הציבורי שלך בהתאם להגדרות הפרטיות באותן פלטפורמות.
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-[12px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-r-[3px] border-[#B8860B]">
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#4a4a4a] leading-[1.9]">
                  <strong className="font-medium text-[#0a1a30]">הבהרה:</strong> לא חלה עליך חובה חוקית למסור לנו מידע זה. מסירת המידע תלויה ברצונך ובהסכמתך בלבד, אך ללא מסירתו ייתכן שלא נוכל לספק לך חלק מהשירותים (כגון משלוח מדריכים או יצירת קשר).
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                3. עוגיות (Cookies) ופיקסלים
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                האתר עושה שימוש ב"עוגיות" (Cookies) – קבצי טקסט קטנים הנשמרים בדפדפן שלך – וכן בטכנולוגיות מעקב נוספות (כגון Pixels של פייסבוק/טיקטוק, Google Analytics וכו').
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-medium text-[#0a1a30] leading-[2] mb-3">
                מטרות השימוש בטכנולוגיות אלו:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">תפעול:</strong> שיפור חווית המשתמש, זכירת העדפות והתחברות מהירה.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">סטטיסטיקה:</strong> ניתוח התנועה באתר כדי להבין אילו תכנים מעניינים את הקהל שלנו.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">שיווק ופרסום (Retargeting):</strong> התאמת הפרסומות שוצגו לך ברחבי הרשת (גוגל, פייסבוק וכו') לתחומי העניין שלך, על בסיס ביקורך באתר.
                </li>
              </ul>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                באפשרותך לנהל או לחסום את השימוש בעוגיות דרך הגדרות הדפדפן שלך, אך הדבר עשוי לפגוע בחווית הגלישה באתר.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                4. מטרות השימוש במידע
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                המידע שנאסף ישמר במאגרי המידע של יונתן בן דוד (ו/או סיגנט גלובל) וישמש למטרות הבאות בלבד:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  יצירת קשר ומענה לפנייתך.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  אספקת שירותים, תכנים, מדריכים ומוצרים שהזמנת.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">דיוור ישיר וניוזלטר:</strong> שליחת עדכונים מקצועיים, מאמרים, טיפים, והצעות שיווקיות רלוונטיות (על קורסים, סדנאות או שירותים).
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  שיפור השירותים והתאמת התכנים לצרכי המשתמשים.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  ניתוח סטטיסטי ומחקר שיווקי.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  הגנה משפטית, אבטחת מידע ועמידה בהוראות כל דין.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                5. דיוור שיווקי (הסכמה לפי חוק התקשורת)
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                בהשארת פרטיך באתר (ובסימון התיבה הייעודית, ככל שישנה), אתה מאשר ליונתן בן דוד לשלוח אליך דבר פרסומת, ניוזלטרים ועדכונים באמצעות דוא"ל, מסרונים (SMS), וואטסאפ או אמצעים דיגיטליים אחרים.
              </p>
              <div className="bg-white rounded-[12px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-r-[3px] border-[#B8860B]">
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#4a4a4a] leading-[1.9]">
                  <strong className="font-medium text-[#0a1a30]">הסרה:</strong> זכותך לחזור בך מהסכמתך בכל עת. ניתן להסיר את פרטיך מרשימת התפוצה באמצעות לחיצה על קישור "הסרה" המופיע בתחתית כל הודעה, או בפנייה ישירה אלינו במייל: <a href="mailto:office@bdyonatan.co.il" className="text-[#B8860B] hover:underline">office@bdyonatan.co.il</a>.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                6. מסירת מידע לצדדים שלישיים
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                אנו מתחייבים לא למכור או להעביר את המידע האישי שלך לצדדים שלישיים, למעט במקרים הבאים:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">ספקים ונותני שירותים:</strong> העברת מידע לספקים המסייעים בתפעול האתר והעסק (כגון: מערכות דיוור, שרתי אחסון, סליקת אשראי, מערכות CRM), וזאת לצורך מתן השירות בלבד.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">דרישה חוקית:</strong> אם נדרש לעשות זאת מכוח צו שיפוטי או הוראת רשות מוסמכת.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">הליכים משפטיים:</strong> במסגרת מחלוקת משפטית בינך לבין הנהלת האתר.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">שינוי מבני:</strong> במקרה של מיזוג פעילות או מכירת המותג, ובלבד שהרוכש יקבל על עצמו את הוראות מדיניות זו.
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-[12px] p-6 shadow-[0_1px_4px_rgba(0,0,0,0.04)] border-r-[3px] border-[#B8860B]">
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#4a4a4a] leading-[1.9]">
                  <strong className="font-medium text-[#0a1a30]">העברה לחו"ל:</strong> חלק מהשירותים בהם אנו משתמשים (כגון גוגל, פייסבוק, מערכות דיוור) עשויים לשמור מידע בשרתים מחוץ לישראל (בעיקר בארה"ב או באירופה). השימוש באתר מהווה הסכמה להעברת המידע כאמור.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                7. אבטחת מידע
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                הנהלת האתר נוקטת באמצעים טכנולוגיים וארגוניים מקובלים כדי לאבטח את המידע ולמנוע גישה בלתי מורשית אליו. עם זאת, אין באפשרותנו להבטיח חסינות מוחלטת מפני פריצות סייבר ("האקרים"). בהתאם לדין, לא נהיה אחראים לנזק שיגרם כתוצאה מחדירה בלתי חוקית למערכות, אלא אם פעלנו ברשלנות חמורה.
              </p>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2]">
                במקרה של אירוע אבטחה חמור המסכן את פרטיותך, אנו נפעל לדווח על כך בהתאם להוראות החוק ותקנות הגנת הפרטיות.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                8. זכויותיך
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                על פי חוק הגנת הפרטיות, עומדות לך הזכויות הבאות:
              </p>
              <ul className="space-y-3">
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">זכות העיון:</strong> זכותך לבקש לעיין במידע האישי המוחזק עליך.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">זכות התיקון:</strong> אם המידע אינו נכון או מעודכן, זכותך לבקש לתקנו.
                </li>
                <li className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] pr-4 border-r-[2px] border-[#B8860B]/20">
                  <strong className="font-medium text-[#0a1a30]">זכות המחיקה ("להישכח"):</strong> זכותך לבקש את מחיקת המידע האישי שלך ממאגרינו (למעט מידע שאנו חייבים לשמור לפי חוק, כגון חשבוניות).
                </li>
              </ul>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mt-4">
                למימוש זכויות אלו, יש לפנות אלינו בכתב לכתובת המייל: <a href="mailto:office@bdyonatan.co.il" className="text-[#B8860B] hover:underline">office@bdyonatan.co.il</a>, בצירוף פרטים מזהים. אנו נשיב לבקשתך בתוך 30 יום.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-frank text-[22px] sm:text-[26px] font-normal text-[#0a1a30] mb-4 leading-[1.3]">
                9. יצירת קשר
              </h2>
              <div className="h-[2px] w-10 bg-[#B8860B]/30 mb-6" />
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[2] mb-4">
                בכל שאלה, בקשה או הבהרה בנוגע למדיניות זו או לפרטיותך באתר, ניתן ליצור עמנו קשר:
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <span>כתובת למכתבים: מנחם בגין 150, תל אביב (עבור יונתן בן דוד / סיגנט גלובל)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Disclaimer */}
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
