/**
 * Contact Page — Ben David Website
 * Design: Swiss-Israeli Legal Modernism
 * Simplified form: name + phone + submit button on navy-dark background
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';
import { GoldDivider } from '@/components/SectionHeader';
import { CONTACT, CTA, IMAGES } from '@/lib/data';
import { toast } from 'sonner';

interface FormData {
  name: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'שם מלא הוא שדה חובה';
    if (!form.phone.trim()) {
      newErrors.phone = 'מספר טלפון הוא שדה חובה';
    } else if (!/^[\d\-+() ]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp message
    const whatsappMsg = encodeURIComponent(
      `שלום, שמי ${form.name}.\nאשמח לשיחת אפיון.`
    );
    const whatsappUrl = `${CONTACT.whatsapp}?text=${whatsappMsg}`;

    setSubmitted(true);
    toast.success('תודה! מעביר לווטסאפ...');

    // Open WhatsApp after a brief delay
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen" dir="rtl" style={{ direction: 'rtl' }}>
      <Header />

      {/* ═══════════════════════════════════════════
          MAIN SECTION — Full navy-dark background
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#0a1a30] overflow-hidden pt-[72px]">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(184,134,11,0.05) 0%, transparent 60%)' }} />

        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 lg:px-10 py-20 sm:py-28 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Left Column — Text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <span className="font-dm text-[11px] tracking-[5px] uppercase text-[#B8860B] font-medium block mb-4">
                צור קשר
              </span>
              <h1 className="font-frank text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-white leading-[1.3]">
                {CTA.title}
              </h1>
              <p className="font-heebo text-[15px] sm:text-[16px] font-light text-white/40 mt-5 leading-[1.8] max-w-[420px]">
                {CTA.subtitle}
              </p>
              <p className="font-heebo text-[13px] font-light text-white/20 mt-3 max-w-[380px] leading-[1.7]">
                {CTA.note}
              </p>
              <GoldDivider className="mt-8" />

              {/* Office Details — compact */}
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="font-heebo text-[13px] font-light text-white/30">
                    {CONTACT.address}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <a href={CONTACT.emailLink} className="font-dm text-[13px] font-light text-white/30 hover:text-[#c9993a] transition-colors duration-300" dir="ltr" style={{ direction: 'ltr' }}>
                    {CONTACT.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <a href={CONTACT.phoneLink} className="font-dm text-[13px] font-light text-white/30 hover:text-[#c9993a] transition-colors duration-300" dir="ltr" style={{ direction: 'ltr' }}>
                    {CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="font-heebo text-[13px] font-light text-white/30">
                    א׳-ה׳: 09:00-18:00
                  </span>
                </div>
              </div>

              {/* Profile photo - talking on phone */}
              <div className="hidden lg:block mt-10">
                <div className="relative w-[220px] h-[280px] rounded-[12px] overflow-hidden">
                  <img
                    src={IMAGES.contactPhone}
                    alt="עו״ד יונתן בן דוד מדבר בטלפון"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a30]/30 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Right Column — Form */}
            <AnimateOnScroll delay={0.15}>
              {submitted ? (
                <div className="bg-white/[0.04] border border-white/10 rounded-[12px] p-8 sm:p-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#B8860B" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-frank text-[24px] font-normal text-white mb-3">
                    תודה על הפנייה
                  </h3>
                  <p className="font-heebo text-[14px] font-light text-white/40 leading-[1.8] mb-6">
                    אחזור אליך בהקדם.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', phone: '' }); }}
                    className="font-heebo text-[13px] text-[#c9993a] hover:underline"
                  >
                    שלח הודעה נוספת
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/[0.04] border border-white/10 rounded-[12px] p-8 sm:p-10">
                  <h2 className="font-frank text-[22px] sm:text-[24px] font-normal text-white mb-2">
                    לשיחת אפיון של 20 דקות
                  </h2>
                  <p className="font-heebo text-[13px] font-light text-white/25 mb-8">
                    בלי התחייבות, בלי שיחת מכירה.
                  </p>

                  {/* Name */}
                  <div className="mb-5">
                    <label className="font-heebo text-[13px] font-normal text-white/50 block mb-2">
                      שם מלא <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-3.5 bg-white/[0.04] border rounded-[6px] font-heebo text-[16px] font-light text-white outline-none transition-colors duration-200 focus:border-[#B8860B] focus:bg-white/[0.06] placeholder:text-white/15 ${errors.name ? 'border-red-400' : 'border-white/10'}`}
                      placeholder="הכנס שם מלא"
                    />
                    {errors.name && <span className="font-heebo text-[12px] text-red-400 mt-1 block">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="mb-8">
                    <label className="font-heebo text-[13px] font-normal text-white/50 block mb-2">
                      טלפון <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={e => handleChange('phone', e.target.value)}
                      className={`w-full px-4 py-3.5 bg-white/[0.04] border rounded-[6px] font-heebo text-[16px] font-light text-white outline-none transition-colors duration-200 focus:border-[#B8860B] focus:bg-white/[0.06] placeholder:text-white/15 ${errors.phone ? 'border-red-400' : 'border-white/10'}`}
                      placeholder="050-0000000"
                      dir="ltr"
                      style={{ direction: 'ltr', textAlign: 'right' }}
                    />
                    {errors.phone && <span className="font-heebo text-[12px] text-red-400 mt-1 block">{errors.phone}</span>}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#B8860B] rounded-[6px] font-heebo text-[14px] text-white font-normal tracking-[0.5px] hover:bg-[#9a7209] transition-all duration-350"
                  >
                    לשיחת אפיון חינם
                  </button>

                  {/* WhatsApp alternative */}
                  <div className="mt-5 text-center">
                    <span className="font-heebo text-[12px] font-light text-white/15 block mb-2">
                      או ישירות בווטסאפ
                    </span>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-heebo text-[13px] text-[#25D366] hover:text-[#1fb855] transition-colors duration-300"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      שלח הודעה בווטסאפ
                    </a>
                  </div>
                </form>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
