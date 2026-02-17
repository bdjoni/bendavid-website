/**
 * About Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Sections: Hero, Professional Bio, Timeline, Personal, Approach/Philosophy
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/AnimateOnScroll';
import SectionHeader, { GoldDivider } from '@/components/SectionHeader';
import { ABOUT, CONTACT, CTA, IMAGES } from '@/lib/data';

export default function About() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <Header />

      {/* ═══════════════════════════════════════════
          HERO — Compact page header
          ═══════════════════════════════════════════ */}
      <section className="relative pt-[120px] pb-20 sm:pb-28 bg-[#0a1a30] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(184,134,11,0.05) 0%, transparent 60%)' }} />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-dm text-[10px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
              אודות
            </span>
            <h1 className="font-frank text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-white leading-[1.3]">
              עו״ד יונתן בן דוד
            </h1>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 mt-4 max-w-[550px] leading-[1.8]">
              13+ שנים בשטח. 1,300+ עסקאות. עורך דין שמבין נדל"ן מבפנים.
            </p>
            <GoldDivider className="mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PROFESSIONAL BIO
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Photo placeholder */}
            <AnimateOnScroll className="lg:col-span-2">
              <div className="relative">
                <div className="aspect-[3/4] bg-[#0a1a30] rounded-[12px] overflow-hidden">
                  <img
                    src={IMAGES.aboutMain}
                    alt="עו״ד יונתן בן דוד — עורך דין נדל״ן"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                {/* Gold accent corner */}
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-[3px] border-l-[3px] border-[#B8860B]/30 rounded-bl-[12px]" />
              </div>
            </AnimateOnScroll>

            {/* Bio text */}
            <AnimateOnScroll delay={0.1} className="lg:col-span-3">
              <span className="font-dm text-[10px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
                הסיפור המקצועי
              </span>
              <h2 className="font-frank text-[26px] sm:text-[30px] font-normal text-[#0a1a30] leading-[1.3] mb-6">
                {ABOUT.professional.title}
              </h2>
              {ABOUT.professional.text.split('\n\n').map((para, i) => (
                <p key={i} className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[1.9] mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          VISUAL BREAK — Office photo
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <AnimateOnScroll>
            <div className="relative rounded-[12px] overflow-hidden h-[280px] sm:h-[360px] lg:h-[420px]">
              <img
                src={IMAGES.aboutStory}
                alt="עו״ד יונתן בן דוד במשרד"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a30]/40 to-transparent" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TIMELINE
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeader
            tag="ציר זמן"
            title="אבני דרך"
            theme="light"
          />

          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute right-[23px] sm:right-[27px] top-0 bottom-0 w-px bg-[#e5e5e5]" />

            <StaggerContainer className="space-y-0">
              {ABOUT.timeline.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-6 sm:gap-8 py-5 relative group">
                    {/* Dot */}
                    <div className="flex-shrink-0 w-12 sm:w-14 flex items-start justify-center pt-1 relative z-10">
                      <div className="w-3 h-3 rounded-full bg-[#FAF8F5] border-2 border-[#B8860B] group-hover:bg-[#B8860B] transition-colors duration-300" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-5 border-b border-[#f0f0f0] last:border-0">
                      <span className="font-cormorant text-[24px] sm:text-[28px] font-semibold text-[#B8860B] leading-none block" dir="ltr" style={{ direction: 'ltr' }}>
                        {item.year}
                      </span>
                      <p className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] mt-2 leading-[1.7]">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PERSONAL
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a30] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(184,134,11,0.04) 0%, transparent 60%)' }} />
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <AnimateOnScroll>
            <span className="font-dm text-[10px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
              ברמה האישית
            </span>
            <h2 className="font-frank text-[26px] sm:text-[30px] font-normal text-white leading-[1.3] mb-6">
              {ABOUT.personal.title}
            </h2>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/40 leading-[1.9]">
              {ABOUT.personal.text}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          APPROACH / PHILOSOPHY
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10">
          <AnimateOnScroll>
            <span className="font-dm text-[10px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
              הפילוסופיה שלי
            </span>
            <h2 className="font-frank text-[26px] sm:text-[30px] font-normal text-[#0a1a30] leading-[1.3] mb-6">
              {ABOUT.approach.title}
            </h2>
            {ABOUT.approach.text.split('\n\n').map((para, i) => (
              <p key={i} className="font-heebo text-[14px] sm:text-[15px] font-light text-[#4a4a4a] leading-[1.9] mb-5 last:mb-0">
                {para}
              </p>
            ))}
          </AnimateOnScroll>

          {/* Signature quote */}
          <AnimateOnScroll className="mt-14 border-r-[3px] border-[#B8860B] pr-6 sm:pr-8">
            <blockquote className="font-frank text-[20px] sm:text-[24px] font-normal text-[#0a1a30] leading-[1.5]">
              "אני לא מבטיח וודאות. אני מצמצם אי-וודאות."
            </blockquote>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a30] relative">
        <div className="h-[2px] bg-gradient-to-l from-transparent via-[#B8860B]/50 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
          <AnimateOnScroll>
            <div className="flex flex-col items-center text-center gap-5">
              <h2 className="font-frank text-[24px] sm:text-[28px] font-normal text-white">
                {CTA.title}
              </h2>
              <p className="font-heebo text-[14px] font-light text-white/30 max-w-[400px]">
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
