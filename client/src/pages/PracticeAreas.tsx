/**
 * Practice Areas Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Sections: Hero, Flagship Service, Additional Services, CTA
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/AnimateOnScroll';
import SectionHeader, { GoldDivider } from '@/components/SectionHeader';
import { SERVICES, CONTACT, CTA, IMAGES } from '@/lib/data';

export default function PracticeAreas() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <Header />

      {/* ═══════════════════════════════════════════
          HERO — Compact page header
          ═══════════════════════════════════════════ */}
      <section className="relative pt-[120px] pb-20 sm:pb-28 bg-[#0a1a30] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 40%, rgba(184,134,11,0.05) 0%, transparent 60%)' }} />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-dm text-[10px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
              שירותים
            </span>
            <h1 className="font-frank text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-white leading-[1.3]">
              תחומי עיסוק
            </h1>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 mt-4 max-w-[550px] leading-[1.8]">
              ליווי משפטי מלא, ייעוץ השקעות, בדיקות נאותות — הכל תחת גג אחד.
            </p>
            <GoldDivider className="mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FLAGSHIP SERVICE
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10">
          <AnimateOnScroll>
            <div className="bg-white rounded-[16px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] overflow-hidden">
              {/* Gold top bar */}
              <div className="h-[4px] bg-[#B8860B]" />

              <div className="p-8 sm:p-10 lg:p-12">
                {/* Tag */}
                <span className="inline-block font-dm text-[10px] tracking-[4px] uppercase text-[#B8860B] font-medium bg-[#B8860B]/10 px-3 py-1 rounded-full mb-5">
                  {SERVICES.flagship.tag}
                </span>

                <h2 className="font-frank text-[26px] sm:text-[30px] lg:text-[34px] font-normal text-[#0a1a30] leading-[1.3] mb-2">
                  {SERVICES.flagship.title}
                </h2>
                <p className="font-frank text-[16px] sm:text-[18px] font-normal text-[#86868b] leading-[1.5] mb-6">
                  {SERVICES.flagship.subtitle}
                </p>

                <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[1.9] mb-8">
                  {SERVICES.flagship.description}
                </p>

                {/* Service items grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {SERVICES.flagship.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 px-4 bg-[#FAF8F5] rounded-[8px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] flex-shrink-0" />
                      <span className="font-heebo text-[13px] sm:text-[14px] font-light text-[#4a4a4a]">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                <GoldDivider className="mb-6" />

                <p className="font-heebo text-[14px] sm:text-[15px] font-normal text-[#0a1a30] leading-[1.8]">
                  {SERVICES.flagship.closingLine}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ADDITIONAL SERVICES
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeader
            tag="שירותים נוספים"
            title="עוד דרכים שאני יכול לעזור"
            theme="light"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
            {/* Investment Advice */}
            <StaggerItem>
              <div className="bg-[#FAF8F5] rounded-[12px] p-7 sm:p-8 h-full group hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-350">
                <div className="w-10 h-10 rounded-full bg-[#0a1a30] flex items-center justify-center mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9993a" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-frank text-[20px] sm:text-[22px] font-normal text-[#0a1a30] mb-2 leading-[1.3]">
                  {SERVICES.investmentAdvice.title}
                </h3>
                <p className="font-frank text-[14px] font-normal text-[#B8860B] mb-3">
                  {SERVICES.investmentAdvice.subtitle}
                </p>
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.8]">
                  {SERVICES.investmentAdvice.description}
                </p>
              </div>
            </StaggerItem>

            {/* Due Diligence */}
            <StaggerItem>
              <div className="bg-[#FAF8F5] rounded-[12px] p-7 sm:p-8 h-full group hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-350">
                <div className="w-10 h-10 rounded-full bg-[#0a1a30] flex items-center justify-center mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9993a" strokeWidth="1.5">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                </div>
                <h3 className="font-frank text-[20px] sm:text-[22px] font-normal text-[#0a1a30] mb-2 leading-[1.3]">
                  {SERVICES.dueDiligence.title}
                </h3>
                <p className="font-frank text-[14px] font-normal text-[#B8860B] mb-3">
                  {SERVICES.dueDiligence.subtitle}
                </p>
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.8]">
                  {SERVICES.dueDiligence.description}
                </p>
              </div>
            </StaggerItem>

            {/* Tenants */}
            <StaggerItem>
              <div className="bg-[#FAF8F5] rounded-[12px] p-7 sm:p-8 h-full group hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-350">
                <div className="w-10 h-10 rounded-full bg-[#0a1a30] flex items-center justify-center mb-5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9993a" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="font-frank text-[20px] sm:text-[22px] font-normal text-[#0a1a30] mb-2 leading-[1.3]">
                  {SERVICES.tenants.title}
                </h3>
                <p className="font-frank text-[14px] font-normal text-[#B8860B] mb-3">
                  {SERVICES.tenants.subtitle}
                </p>
                <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.8]">
                  {SERVICES.tenants.description}
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PRACTICE AREA CARDS (Visual)
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a30] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.04) 0%, transparent 60%)' }} />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <SectionHeader
            tag="התמחויות"
            title="שני עולמות, מומחיות אחת"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16">
            {/* Real Estate */}
            <AnimateOnScroll delay={0}>
              <div className="group relative rounded-[12px] overflow-hidden">
                <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                  <img src={IMAGES.realEstate} alt="נדל״ן" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[#0a1a30]/70 group-hover:bg-[#0a1a30]/60 transition-colors duration-350" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    <h3 className="font-frank text-[32px] sm:text-[36px] font-normal text-white mb-3">נדל״ן</h3>
                    <p className="font-heebo text-[13px] sm:text-[14px] font-light text-white/40 leading-[1.8] max-w-[300px]">
                      ליווי משפטי מלא בעסקאות נדל״ן — רכישה, מכירה, התחדשות עירונית, תמ״א 38, ובדיקות נאותות.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8860B]" />
              </div>
            </AnimateOnScroll>

            {/* Investments */}
            <AnimateOnScroll delay={0.1}>
              <div className="group relative rounded-[12px] overflow-hidden">
                <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                  <img src={IMAGES.investments} alt="השקעות" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-[#0a1a30]/70 group-hover:bg-[#0a1a30]/60 transition-colors duration-350" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                    <h3 className="font-frank text-[32px] sm:text-[36px] font-normal text-white mb-3">השקעות</h3>
                    <p className="font-heebo text-[13px] sm:text-[14px] font-light text-white/40 leading-[1.8] max-w-[300px]">
                      ייעוץ משפטי אסטרטגי להשקעות נדל״ן בישראל ובחו״ל — מבנה עסקה, מיסוי, הסכמי שותפות, וניהול סיכונים.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8860B]" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] relative">
        <div className="h-[2px] bg-gradient-to-l from-transparent via-[#B8860B]/30 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
          <AnimateOnScroll>
            <div className="flex flex-col items-center text-center gap-5">
              <h2 className="font-frank text-[24px] sm:text-[28px] font-normal text-[#0a1a30]">
                {CTA.title}
              </h2>
              <p className="font-heebo text-[14px] font-light text-[#86868b] max-w-[400px]">
                {CTA.subtitle}
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[#B8860B] rounded-[4px] font-heebo text-[14px] text-white font-normal tracking-[0.5px] hover:bg-[#9a7209] transition-all duration-350 mt-2"
              >
                {CTA.button}
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
}
