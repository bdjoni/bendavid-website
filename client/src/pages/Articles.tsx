/**
 * Articles Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Grid of article cards sourced from /content/articles/*.md
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { StaggerContainer, StaggerItem } from '@/components/AnimateOnScroll';
import { GoldDivider } from '@/components/SectionHeader';
import { CTA } from '@/lib/data';
import { getAllArticles, getCategories, type Article } from '@/lib/articles';

export default function Articles() {
  const articles = getAllArticles();
  const categories = getCategories();
  const allCategories = ['הכל', ...categories];
  const [activeCategory, setActiveCategory] = useState('הכל');

  const filtered = activeCategory === 'הכל'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <Header />

      {/* ═══════════════════════════════════════════
          HERO — Compact page header
          ═══════════════════════════════════════════ */}
      <section className="relative pt-[120px] pb-20 sm:pb-28 bg-[#0a1a30] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 40% 50%, rgba(184,134,11,0.05) 0%, transparent 60%)' }} />
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <span className="font-dm text-[10px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
              בלוג
            </span>
            <h1 className="font-frank text-[32px] sm:text-[38px] lg:text-[44px] font-normal text-white leading-[1.3]">
              מאמרים ותובנות
            </h1>
            <p className="font-heebo text-[14px] sm:text-[15px] font-light text-white/30 mt-4 max-w-[550px] leading-[1.8]">
              תובנות מקצועיות מעולם הנדל״ן והמשפט — ישירות מהשטח. בגובה העיניים, בלי סיפורי סבתא.
            </p>
            <GoldDivider className="mt-6" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CATEGORY FILTER + ARTICLES GRID
          ═══════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-20 sm:py-28 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 lg:px-10">
          {/* Category Filter */}
          <AnimateOnScroll>
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {allCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full font-heebo text-[13px] transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-[#0a1a30] text-white'
                      : 'bg-white text-[#86868b] hover:text-[#0a1a30] shadow-[0_1px_3px_rgba(0,0,0,0.04)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Articles Grid */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((article) => (
              <StaggerItem key={article.slug}>
                <ArticleCard article={article} />
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-heebo text-[14px] font-light text-[#86868b]">
                אין מאמרים בקטגוריה זו כרגע.
              </p>
            </div>
          )}
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

function ArticleCard({ article }: { article: Article }) {
  const categoryColor = article.category === 'נדל״ן' ? '#B8860B' : article.category === 'השקעות' ? '#2a6b4a' : '#8B4513';
  const formattedDate = new Date(article.date).toLocaleDateString('he-IL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="group bg-white rounded-[12px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full flex flex-col cursor-pointer hover:shadow-md hover:border-[#B8860B]/20 transition-all duration-300">
        {/* Gold top line */}
        <div className="h-[3px] bg-[#B8860B] group-hover:bg-[#c9993a] transition-colors" />
        <div className="p-6 sm:p-7 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-heebo text-[11px] text-[#aeaeb2] font-light">
              {formattedDate}
            </span>
            <span
              className="font-heebo text-[10px] px-2 py-0.5 rounded-full"
              style={{ background: `${categoryColor}15`, color: categoryColor }}
            >
              {article.category}
            </span>
          </div>
          <h3 className="font-frank text-[18px] sm:text-[20px] font-normal text-[#0a1a30] mb-3 leading-[1.4] group-hover:text-[#B8860B] transition-colors">
            {article.title}
          </h3>
          <p className="font-heebo text-[13px] sm:text-[14px] font-light text-[#86868b] leading-[1.7] flex-1 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-4 pt-4 border-t border-[#f0f0f0] flex items-center justify-between">
            <span className="font-heebo text-[12px] text-[#aeaeb2] font-light">
              {article.readTime}
            </span>
            <span className="font-heebo text-[12px] text-[#B8860B] group-hover:translate-x-[-4px] transition-transform duration-300 flex items-center gap-1">
              קרא עוד
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-180">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
