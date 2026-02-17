/**
 * ArticlePage — Individual article view
 *
 * Design: Swiss-Israeli Legal Modernism
 * - Cream background (#FAF8F5), dark text
 * - Frank Ruhl Libre for headings, Heebo for body
 * - Max width 720px for optimal reading
 * - RTL Hebrew-first
 * - Gold accents for links and highlights
 */

import { useEffect } from 'react';
import { useParams, Link, useLocation } from 'wouter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, Tag, ChevronLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getArticleBySlug, getRelatedArticles, type Article } from '@/lib/articles';
import { CONTACT, IMAGES } from '@/lib/data';

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const related = slug ? getRelatedArticles(slug, 3) : [];

  // Scroll to top on article change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Update document title for SEO
  useEffect(() => {
    if (article) {
      document.title = `${article.title} | עו״ד יונתן בן דוד`;
      // Update meta description
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', article.excerpt);
      // Update OG tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', article.title);
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute('content', article.excerpt);
    }
    return () => {
      document.title = 'Ben David — Attorney at Law';
    };
  }, [article]);

  if (!article) {
    return (
      <div dir="rtl" className="min-h-screen bg-[#0a1a30] text-white flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-frank text-4xl mb-4">המאמר לא נמצא</h1>
            <p className="font-heebo text-white/60 mb-8">המאמר שחיפשת לא קיים או הוסר.</p>
            <Link href="/articles" className="inline-flex items-center gap-2 font-heebo text-[#B8860B] hover:text-[#c9993a] transition-colors">
              <ArrowRight className="w-4 h-4" />
              חזרה למאמרים
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryColor = article.category === 'נדל״ן' ? '#B8860B' : article.category === 'השקעות' ? '#2a6b4a' : '#8B4513';

  return (
    <div dir="rtl" className="min-h-screen bg-[#FAF8F5] flex flex-col">
      <Header />

      {/* Article Header — Navy background */}
      <section className="bg-[#0a1a30] pt-28 pb-16 sm:pt-32 sm:pb-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(184,134,11,0.06) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-[800px] mx-auto px-5 sm:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 mb-8"
          >
            <Link href="/articles" className="inline-flex items-center gap-1.5 font-heebo text-[13px] text-white/40 hover:text-[#B8860B] transition-colors">
              <ArrowRight className="w-3.5 h-3.5" />
              כל המאמרים
            </Link>
            <ChevronLeft className="w-3 h-3 text-white/20" />
            <span className="font-heebo text-[13px] text-white/40">{article.category}</span>
          </motion.div>

          {/* Category tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span
              className="inline-block font-heebo text-[11px] tracking-[0.15em] uppercase px-3 py-1 rounded-full mb-6"
              style={{ background: `${categoryColor}20`, color: categoryColor, border: `1px solid ${categoryColor}40` }}
            >
              {article.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-frank text-[28px] sm:text-[36px] lg:text-[42px] font-bold text-white leading-[1.3] mb-6"
          >
            {article.title}
          </motion.h1>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center gap-5 text-white/40"
          >
            <span className="inline-flex items-center gap-1.5 font-heebo text-[13px]">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.date).toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="inline-flex items-center gap-1.5 font-heebo text-[13px]">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="inline-flex items-center gap-1.5 font-heebo text-[13px]">
              <Tag className="w-3.5 h-3.5" />
              עו״ד יונתן בן דוד
            </span>
          </motion.div>
        </div>
      </section>

      {/* Article Body — Cream background */}
      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-[720px] mx-auto px-5 sm:px-8 article-content"
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({ children }) => (
                <h1 className="font-frank text-[28px] sm:text-[32px] font-bold text-[#0a1a30] leading-[1.35] mt-12 mb-6 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="font-frank text-[22px] sm:text-[26px] font-bold text-[#0a1a30] leading-[1.4] mt-10 mb-4 pb-3 border-b border-[#0a1a30]/10">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-frank text-[18px] sm:text-[20px] font-bold text-[#0a1a30] leading-[1.4] mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="font-heebo text-[15px] sm:text-[16px] font-light text-[#2a2a2a] leading-[1.9] mb-5">
                  {children}
                </p>
              ),
              strong: ({ children }) => (
                <strong className="font-heebo font-semibold text-[#0a1a30]">{children}</strong>
              ),
              ul: ({ children }) => (
                <ul className="font-heebo text-[15px] sm:text-[16px] font-light text-[#2a2a2a] leading-[1.9] mb-5 pr-6 space-y-2 list-disc marker:text-[#B8860B]">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="font-heebo text-[15px] sm:text-[16px] font-light text-[#2a2a2a] leading-[1.9] mb-5 pr-6 space-y-2 list-decimal marker:text-[#B8860B] marker:font-semibold">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="pr-1">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-r-[3px] border-[#B8860B] pr-5 my-6 py-3 bg-[#B8860B]/[0.04] rounded-l-[8px]">
                  {children}
                </blockquote>
              ),
              hr: () => (
                <hr className="my-10 border-0 h-[1px] bg-gradient-to-l from-transparent via-[#0a1a30]/15 to-transparent" />
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-[#B8860B] hover:text-[#c9993a] underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer">
                  {children}
                </a>
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto my-6 rounded-[8px] border border-[#0a1a30]/10">
                  <table className="w-full font-heebo text-[14px]">{children}</table>
                </div>
              ),
              thead: ({ children }) => (
                <thead className="bg-[#0a1a30] text-white">{children}</thead>
              ),
              th: ({ children }) => (
                <th className="px-4 py-3 text-right font-medium">{children}</th>
              ),
              td: ({ children }) => (
                <td className="px-4 py-3 border-t border-[#0a1a30]/10">{children}</td>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </motion.article>

        {/* Author Bio */}
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 mt-12">
          <div className="flex items-center gap-5 py-6 border-t border-[#0a1a30]/10 border-b border-b-[#0a1a30]/10">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#B8860B]/20">
              <img
                src={IMAGES.avatar}
                alt="עו״ד יונתן בן דוד"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="font-frank text-[16px] font-bold text-[#0a1a30]">עו״ד יונתן בן דוד</h4>
              <p className="font-heebo text-[13px] font-light text-[#86868b] leading-[1.6] mt-1">
                עורך דין ויזם נדל״ן. 13+ שנים בשטח, 1,300+ עסקאות.
              </p>
            </div>
          </div>
        </div>

        {/* Article Footer CTA */}
        <div className="max-w-[720px] mx-auto px-5 sm:px-8 mt-12">
          <div className="bg-[#0a1a30] rounded-[12px] p-8 sm:p-10 text-center">
            <h3 className="font-frank text-[22px] sm:text-[26px] font-bold text-white mb-3">
              רוצה לדעת אם אני מתאים לך?
            </h3>
            <p className="font-heebo text-[14px] text-white/50 font-light mb-6">
              שיחת אפיון קצרה של 20 דקות, בלי התחייבות — רק כדי להבין אם אני יכול לעזור.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#B8860B] hover:bg-[#c9993a] text-white font-heebo text-[14px] font-medium px-8 py-3 rounded-[8px] transition-colors duration-300"
            >
              לשיחת אפיון — בלי התחייבות
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="max-w-[900px] mx-auto px-5 sm:px-8 mt-16">
            <h3 className="font-frank text-[22px] font-bold text-[#0a1a30] mb-8 text-center">
              מאמרים נוספים שיעניינו אותך
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <RelatedCard key={rel.slug} article={rel} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function RelatedCard({ article }: { article: Article }) {
  const categoryColor = article.category === 'נדל״ן' ? '#B8860B' : article.category === 'השקעות' ? '#2a6b4a' : '#8B4513';

  return (
    <Link href={`/articles/${article.slug}`}>
      <div className="group bg-white border border-[#0a1a30]/8 rounded-[10px] p-5 hover:border-[#B8860B]/30 hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer">
        <span
          className="inline-block self-start font-heebo text-[11px] tracking-[0.12em] uppercase px-2.5 py-0.5 rounded-full mb-3"
          style={{ background: `${categoryColor}15`, color: categoryColor }}
        >
          {article.category}
        </span>
        <h4 className="font-frank text-[16px] font-bold text-[#0a1a30] leading-[1.4] mb-2 group-hover:text-[#B8860B] transition-colors">
          {article.title}
        </h4>
        <p className="font-heebo text-[13px] text-[#666] font-light leading-[1.7] flex-1 line-clamp-2">
          {article.excerpt}
        </p>
        <span className="font-heebo text-[12px] text-[#B8860B] mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          קרא עוד
          <ArrowRight className="w-3 h-3 rotate-180" />
        </span>
      </div>
    </Link>
  );
}
