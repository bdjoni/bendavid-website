/**
 * Homepage — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Updated with official copy document content (Feb 2026)
 * Sections: Hero, Stats, Problem, Process, WhyMe, Value, Testimonials, Services, Articles, CTA
 */

import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Logo from '@/components/Logo';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/AnimateOnScroll';
import SectionHeader, { GoldDivider } from '@/components/SectionHeader';
import {
  IMAGES, HERO, STATS, PROBLEM_SECTION, PROCESS_STEPS,
  WHY_ME, VALUE_VS_COST, GOOGLE_REVIEWS, GOOGLE_REVIEWS_META, MAIN_QUOTE,
  CTA, CONTACT, SERVICES,
} from '@/lib/data';
import { getFeaturedArticles } from '@/lib/articles';

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <Header />

      {/* ═══════════════════════════════════════════
          SECTION 1: HERO
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with overlay */}
        <div className="absolute inset-0">
          <img src={IMAGES.heroBg} alt="" className="w-full h-full object-cover" style={{ objectPosition: 'center top' }} loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-[#0a1a30]/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a1a30]/40 via-transparent to-[#0a1a30]/60" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.06) 0%, transparent 70%)' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-5 sm:px-8 max-w-[780px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <Logo variant="full" theme="dark" lang="he" size="xl" className="mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="font-frank text-[26px] sm:text-[32px] lg:text-[38px] font-normal text-white leading-[1.4] mt-10"
          >
            {HERO.headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="font-heebo text-[13px] sm:text-[14px] font-light text-white/30 mt-5 max-w-[560px] mx-auto leading-[1.8]"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="font-heebo text-[15px] sm:text-[16px] font-light text-white/55 mt-6 max-w-[620px] mx-auto leading-[1.9]"
          >
            {HERO.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-block px-7 py-3 bg-[#B8860B] rounded-[4px] font-heebo text-[13px] text-white font-normal tracking-[0.5px] hover:bg-[#9a7209] transition-all duration-350"
            >
              {HERO.ctaPrimary}
            </Link>
            <a
              href="#process"
              className="inline-block px-7 py-3 border border-white/15 rounded-[4px] font-heebo text-[13px] text-white/50 font-light tracking-[0.5px] hover:border-[#B8860B] hover:text-[#c9993a] transition-all duration-350"
            >
              {HERO.ctaSecondary}
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: STATS BAR
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a30] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x md:divide-white/5">
            {STATS.map((stat, i) => (
              <AnimateOnScroll key={i} delay={i * 0.08}>
                <div className="text-center py-8 sm:py-10">
                  <span className={`font-cormorant font-semibold text-[#c9993a] block leading-none ${
                    'isText' in stat && stat.isText ? 'text-[20px] sm:text-[24px]' : 'text-[32px] sm:text-[38px]'
                  }`}>
                    {stat.value}
                  </span>
                  <span className="font-heebo text-[12px] sm:text-[13px] font-light text-white/30 mt-2 block">
                    {stat.label}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: THE PROBLEM
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeader
            tag="למה מגיעים אליי"
            title={PROBLEM_SECTION.title}
            theme="light"
          />

          <AnimateOnScroll className="mt-12">
            <p className="font-heebo text-[15px] sm:text-[16px] font-light text-[#4a4a4a] leading-[1.9] text-center max-w-[700px] mx-auto">
              {PROBLEM_SECTION.intro}
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {PROBLEM_SECTION.problems.map((problem, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-[12px] p-7 shadow-[0_1px_4px_rgba(0,0,0,0.04)] h-full">
                  <div className="w-8 h-8 rounded-full bg-[#0a1a30] flex items-center justify-center mb-5">
                    <span className="font-dm text-[11px] font-medium text-[#c9993a]">{i + 1}</span>
                  </div>
                  <h3 className="font-frank text-[18px] sm:text-[20px] font-normal text-[#0a1a30] mb-3 leading-[1.3]">
                    {problem.title}
                  </h3>
                  <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.8]">
                    {problem.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="mt-12 text-center">
            <p className="font-frank text-[18px] sm:text-[20px] font-normal text-[#0a1a30] leading-[1.5] max-w-[600px] mx-auto">
              {PROBLEM_SECTION.closing}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: HOW I WORK (5 Steps)
          ═══════════════════════════════════════════ */}
      <section id="process" className="bg-[#0a1a30] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(184,134,11,0.04) 0%, transparent 60%)' }} />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <SectionHeader
            tag="תהליך העבודה"
            title="איך אני עובד — 5 שלבים"
            theme="dark"
          />

          <div className="mt-16 space-y-0">
            {PROCESS_STEPS.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.06}>
                <div className="flex gap-6 sm:gap-8 py-8 border-b border-white/5 last:border-0 group">
                  {/* Step Number */}
                  <div className="flex-shrink-0 w-12 sm:w-14">
                    <span className="font-cormorant text-[32px] sm:text-[40px] font-light text-[#B8860B]/30 leading-none group-hover:text-[#B8860B]/60 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-frank text-[18px] sm:text-[20px] font-normal text-white mb-2 leading-[1.3]">
                      {step.title}
                    </h3>
                    <p className="font-heebo text-[13px] sm:text-[14px] font-light text-white/35 leading-[1.8]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: WHY ME (Differentiators)
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            {/* Profile photo - lobby */}
            <AnimateOnScroll className="lg:w-[280px] shrink-0 mx-auto lg:mx-0">
              <div className="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-full overflow-hidden border-[3px] border-[#B8860B]/20 shadow-lg mx-auto">
                <img
                  src={IMAGES.profileLobby}
                  alt="עו״ד יונתן בן דוד"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            </AnimateOnScroll>

            <div className="flex-1">
              <SectionHeader
                tag="למה דווקא אני"
                title={WHY_ME.title}
                theme="light"
              />

              <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {WHY_ME.items.map((item, i) => (
              <StaggerItem key={i}>
                <div className="bg-white rounded-[12px] p-7 sm:p-8 shadow-[0_1px_4px_rgba(0,0,0,0.04)] h-full border-r-[3px] border-[#B8860B]">
                  <h3 className="font-frank text-[18px] sm:text-[20px] font-normal text-[#0a1a30] mb-3 leading-[1.3]">
                    {item.title}
                  </h3>
                  <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.8]">
                    {item.text}
                  </p>
                </div>
              </StaggerItem>
            ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 6: VALUE VS COST
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeader
            tag="עלות מול ערך"
            title={VALUE_VS_COST.title}
            theme="light"
          />

          <AnimateOnScroll className="mt-10">
            <p className="font-heebo text-[15px] sm:text-[16px] font-light text-[#4a4a4a] leading-[1.9] text-center max-w-[700px] mx-auto">
              {VALUE_VS_COST.text}
            </p>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {VALUE_VS_COST.examples.map((ex, i) => (
              <StaggerItem key={i}>
                <div className="bg-[#0a1a30] rounded-[12px] p-6 text-center">
                  <span className="font-cormorant text-[24px] sm:text-[28px] font-semibold text-[#c9993a] block leading-none">
                    {ex.value}
                  </span>
                  <span className="font-heebo text-[11px] font-light text-white/25 mt-1 block">
                    {ex.description}
                  </span>
                  <GoldDivider className="mx-auto my-3" width="w-6" />
                  <span className="font-heebo text-[12px] sm:text-[13px] font-normal text-white/60 block">
                    {ex.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimateOnScroll className="mt-12 text-center">
            <p className="font-frank text-[18px] sm:text-[20px] font-normal text-[#0a1a30] leading-[1.5]">
              {VALUE_VS_COST.bottomLine}
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 7: GOOGLE REVIEWS
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a30] py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.04) 0%, transparent 60%)' }} />
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <SectionHeader
            tag="ביקורות גוגל"
            title={`${GOOGLE_REVIEWS_META.rating} מתוך 5 — ${GOOGLE_REVIEWS_META.totalReviews} ביקורות`}
            theme="dark"
          />

          {/* Google Rating Summary */}
          <AnimateOnScroll>
            <div className="flex items-center justify-center gap-3 mt-8 mb-12">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <svg className="w-14 h-5" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
                <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
                <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
                <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
                <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
                <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
                <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.01z" fill="#4285F4"/>
              </svg>
            </div>
          </AnimateOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOOGLE_REVIEWS.map((review: typeof GOOGLE_REVIEWS[number], i: number) => (
              <StaggerItem key={i}>
                <div className="bg-white/[0.03] border border-white/5 rounded-[12px] p-7 sm:p-8 h-full">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-[#FBBC04]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/60 leading-[1.8]">
                    {review.text}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#B8860B]/20 flex items-center justify-center">
                        <span className="font-heebo text-[11px] font-medium text-[#B8860B]">
                          {review.author.charAt(0)}
                        </span>
                      </div>
                      <span className="font-heebo text-[12px] font-light text-white/40">
                        {review.author}
                      </span>
                    </div>
                    <span className="font-heebo text-[11px] font-light text-white/20">
                      {review.date}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Link to all Google Reviews */}
          <AnimateOnScroll>
            <div className="mt-10 text-center">
              <a
                href={GOOGLE_REVIEWS_META.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-heebo text-[13px] font-light text-white/40 hover:text-[#B8860B] transition-colors duration-300"
              >
                צפו בכל {GOOGLE_REVIEWS_META.totalReviews} הביקורות בגוגל
                <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 8: KEY QUOTE
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
        <div className="max-w-[800px] mx-auto px-5 sm:px-8 lg:px-10 text-center">
          <AnimateOnScroll>
            <span className="font-cormorant text-[80px] sm:text-[100px] text-[#B8860B]/15 leading-none block -mb-8 sm:-mb-10">
              ״
            </span>
            <blockquote className="font-frank text-[22px] sm:text-[26px] lg:text-[30px] font-normal text-[#0a1a30] leading-[1.5] sm:leading-[1.6]">
              {MAIN_QUOTE.text}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <GoldDivider width="w-8" />
              <span className="font-heebo text-[12px] font-light text-[#86868b] tracking-[2px]">
                {MAIN_QUOTE.author}
              </span>
              <GoldDivider width="w-8" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 9: SERVICES PREVIEW
          ═══════════════════════════════════════════ */}
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeader
            tag="שירותים"
            title="תחומי עיסוק"
            description="שני תחומי ליבה, מומחיות אחת — להגן על האינטרסים שלכם."
            theme="light"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16">
            {/* Real Estate Card */}
            <AnimateOnScroll delay={0}>
              <Link href="/practice-areas">
                <div className="group relative rounded-[12px] overflow-hidden cursor-pointer transition-all duration-350 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                    <img src={IMAGES.realEstate} alt="נדל״ן" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-[#0a1a30]/60 group-hover:bg-[#0a1a30]/50 transition-colors duration-350" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-frank text-[28px] sm:text-[32px] font-normal text-white">נדל״ן</h3>
                    </div>
                  </div>
                  <div className="bg-[#0a1a30] p-6 sm:p-8">
                    <p className="font-heebo text-[14px] font-light text-white/40 leading-[1.8]">
                      ליווי משפטי מלא בעסקאות נדל״ן — רכישה, מכירה, התחדשות עירונית, תמ״א 38, ובדיקות נאותות.
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 font-heebo text-[13px] text-[#c9993a] font-normal group-hover:gap-3 transition-all duration-300">
                      למידע נוסף
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8860B]" />
                </div>
              </Link>
            </AnimateOnScroll>

            {/* Investments Card */}
            <AnimateOnScroll delay={0.1}>
              <Link href="/practice-areas">
                <div className="group relative rounded-[12px] overflow-hidden cursor-pointer transition-all duration-350 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                  <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                    <img src={IMAGES.investments} alt="השקעות" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-[#0a1a30]/60 group-hover:bg-[#0a1a30]/50 transition-colors duration-350" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="font-frank text-[28px] sm:text-[32px] font-normal text-white">השקעות</h3>
                    </div>
                  </div>
                  <div className="bg-[#0a1a30] p-6 sm:p-8">
                    <p className="font-heebo text-[14px] font-light text-white/40 leading-[1.8]">
                      ייעוץ משפטי אסטרטגי להשקעות נדל״ן בישראל ובחו״ל — מבנה עסקה, מיסוי, הסכמי שותפות, וניהול סיכונים.
                    </p>
                    <span className="inline-flex items-center gap-2 mt-5 font-heebo text-[13px] text-[#c9993a] font-normal group-hover:gap-3 transition-all duration-300">
                      למידע נוסף
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#B8860B]" />
                </div>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 10: LATEST ARTICLES
          ═══════════════════════════════════════════ */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          <SectionHeader
            tag="מאמרים"
            title="מאמרים אחרונים"
            description="תובנות מקצועיות מעולם הנדל״ן והמשפט — ישירות מהשטח."
            theme="light"
          />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16">
            {getFeaturedArticles(3).map((article) => {
              const categoryColor = article.category === 'נדל״ן' ? '#B8860B' : article.category === 'השקעות' ? '#2a6b4a' : '#8B4513';
              const formattedDate = new Date(article.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' });
              return (
                <StaggerItem key={article.slug}>
                  <Link href={`/articles/${article.slug}`}>
                    <div className="group bg-white rounded-[12px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full cursor-pointer hover:shadow-md transition-all duration-300">
                      <div className="h-[3px] bg-[#B8860B] group-hover:bg-[#c9993a] transition-colors" />
                      <div className="p-6 sm:p-7">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-heebo text-[11px] text-[#aeaeb2] font-light">
                            {formattedDate}
                          </span>
                          <span className="font-heebo text-[11px] px-2 py-0.5 rounded-full" style={{ background: `${categoryColor}15`, color: categoryColor }}>
                            {article.category}
                          </span>
                        </div>
                        <h3 className="font-frank text-[18px] sm:text-[20px] font-normal text-[#0a1a30] mb-3 leading-[1.4] group-hover:text-[#B8860B] transition-colors">
                          {article.title}
                        </h3>
                        <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.7] line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <AnimateOnScroll className="text-center mt-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 font-heebo text-[13px] text-[#1B3A5C] font-normal hover:text-[#B8860B] transition-colors duration-300"
            >
              לכל המאמרים
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7" /></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          SECTION 12: CTA STRIP
          ═══════════════════════════════════════════ */}
      <section className="bg-[#0a1a30] relative">
        <div className="h-[2px] bg-gradient-to-l from-transparent via-[#B8860B]/50 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10 py-16 sm:py-20">
          <AnimateOnScroll>
            <div className="flex flex-col items-center text-center gap-6">
              <h2 className="font-frank text-[24px] sm:text-[28px] font-normal text-white">
                {CTA.title}
              </h2>
              <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 max-w-[500px]">
                {CTA.subtitle}
              </p>
              <p className="font-heebo text-[12px] font-light text-white/20 max-w-[400px]">
                {CTA.note}
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
