/**
 * Accessibility Widget — Ben David Website
 * Floating button + settings panel for accessibility adjustments.
 * Compliant with Israeli Standard 5568 (WCAG 2.0 AA) interface requirements.
 *
 * Features: text size, high contrast, grayscale, link underlines,
 * readable font, big cursor, stop animations, text spacing.
 *
 * All preferences saved to localStorage and applied via CSS classes on <html>.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// ─── Types ───────────────────────────────────────────────
interface A11ySettings {
  textSize: number;       // 0 = normal, 1 = large, 2 = extra-large
  highContrast: boolean;
  grayscale: boolean;
  underlineLinks: boolean;
  readableFont: boolean;
  bigCursor: boolean;
  stopAnimations: boolean;
  textSpacing: boolean;
  focusHighlight: boolean;
}

const STORAGE_KEY = 'bd_a11y_settings';

const DEFAULT_SETTINGS: A11ySettings = {
  textSize: 0,
  highContrast: false,
  grayscale: false,
  underlineLinks: false,
  readableFont: false,
  bigCursor: false,
  stopAnimations: false,
  textSpacing: false,
  focusHighlight: false,
};

// ─── CSS class mapping ───────────────────────────────────
const CLASS_MAP: Record<string, string> = {
  highContrast: 'a11y-high-contrast',
  grayscale: 'a11y-grayscale',
  underlineLinks: 'a11y-underline-links',
  readableFont: 'a11y-readable-font',
  bigCursor: 'a11y-big-cursor',
  stopAnimations: 'a11y-stop-animations',
  textSpacing: 'a11y-text-spacing',
  focusHighlight: 'a11y-focus-highlight',
};

const TEXT_SIZE_CLASSES = ['', 'a11y-text-large', 'a11y-text-xl'];

// ─── Helper: load/save ──────────────────────────────────
function loadSettings(): A11ySettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch { /* ignore */ }
  return { ...DEFAULT_SETTINGS };
}

function saveSettings(s: A11ySettings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

// ─── Helper: apply classes to <html> ────────────────────
function applyClasses(settings: A11ySettings) {
  const root = document.documentElement;

  // Boolean toggles
  for (const [key, cls] of Object.entries(CLASS_MAP)) {
    root.classList.toggle(cls, !!settings[key as keyof A11ySettings]);
  }

  // Text size (remove all, then add current)
  TEXT_SIZE_CLASSES.forEach(c => c && root.classList.remove(c));
  const sizeClass = TEXT_SIZE_CLASSES[settings.textSize];
  if (sizeClass) root.classList.add(sizeClass);
}

// ─── Accessibility Icon (♿ style, SVG) ──────────────────
function AccessibilityIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Head */}
      <circle cx="12" cy="4.5" r="2" fill="currentColor" stroke="none" />
      {/* Body */}
      <path d="M12 7.5v5" />
      {/* Arms */}
      <path d="M8 9.5h8" />
      {/* Legs */}
      <path d="M12 12.5l-3.5 6" />
      <path d="M12 12.5l3.5 6" />
    </svg>
  );
}

// ─── Toggle row component ───────────────────────────────
function ToggleRow({
  label,
  description,
  active,
  onToggle,
}: {
  label: string;
  description?: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors duration-200 text-right ${
        active
          ? 'bg-[#B8860B]/15 border border-[#B8860B]/30'
          : 'bg-white/5 border border-transparent hover:bg-white/10'
      }`}
      role="switch"
      aria-checked={active}
      aria-label={label}
    >
      <div className="flex-1 min-w-0">
        <span className="font-heebo text-[14px] text-white block">{label}</span>
        {description && (
          <span className="font-heebo text-[11px] text-white/40 block mt-0.5">{description}</span>
        )}
      </div>
      {/* Toggle indicator */}
      <div
        className={`w-10 h-[22px] rounded-full relative shrink-0 transition-colors duration-200 ${
          active ? 'bg-[#B8860B]' : 'bg-white/20'
        }`}
      >
        <div
          className={`absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm transition-all duration-200 ${
            active ? 'right-[3px]' : 'right-[19px]'
          }`}
        />
      </div>
    </button>
  );
}

// ─── Main Widget ────────────────────────────────────────
export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<A11ySettings>(DEFAULT_SETTINGS);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Load saved settings on mount
  useEffect(() => {
    const saved = loadSettings();
    setSettings(saved);
    applyClasses(saved);
  }, []);

  // Apply classes whenever settings change
  useEffect(() => {
    applyClasses(settings);
    saveSettings(settings);
  }, [settings]);

  // Focus trap + Escape + auto-focus when panel opens
  useEffect(() => {
    if (!open) return;

    // Auto-focus the first focusable element after animation
    const timer = setTimeout(() => {
      if (!panelRef.current) return;
      const first = panelRef.current.querySelector<HTMLElement>(
        'button, a[href], [tabindex]:not([tabindex="-1"])'
      );
      first?.focus();
    }, 100);

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      // Focus trap: keep Tab cycling inside the panel
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', handleKey);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('keydown', handleKey);
    };
  }, [open]);

  // Close when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Toggle a boolean setting
  const toggle = useCallback((key: keyof A11ySettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Cycle text size: 0 → 1 → 2 → 0
  const cycleTextSize = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      textSize: (prev.textSize + 1) % 3,
    }));
  }, []);

  // Reset all
  const resetAll = useCallback(() => {
    setSettings({ ...DEFAULT_SETTINGS });
  }, []);

  const hasActiveSettings = Object.entries(settings).some(
    ([key, val]) => key === 'textSize' ? val !== 0 : val === true
  );

  const textSizeLabels = ['רגיל', 'גדול', 'גדול מאוד'];

  return (
    <>
      {/* ── Floating Button ── */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(prev => !prev)}
        className={`fixed bottom-6 left-6 z-[9998] w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:ring-offset-2 ${
          open
            ? 'bg-[#B8860B] text-white'
            : 'bg-[#0a1a30] text-[#B8860B] border border-[#B8860B]/30'
        }`}
        aria-label={open ? 'סגור תפריט נגישות' : 'פתח תפריט נגישות'}
        aria-expanded={open}
        aria-controls="a11y-panel"
      >
        <AccessibilityIcon className="w-7 h-7" />
        {/* Active indicator dot */}
        {hasActiveSettings && !open && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#B8860B] rounded-full border-2 border-[#0a1a30]" />
        )}
      </button>

      {/* ── Settings Panel ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="a11y-panel"
            ref={panelRef}
            role="dialog"
            aria-label="הגדרות נגישות"
            dir="rtl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed z-[9998] bg-[#0a1a30]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_48px_rgba(0,0,0,0.4)] overflow-hidden inset-x-0 bottom-0 rounded-t-2xl max-h-[85vh] sm:inset-x-auto sm:bottom-24 sm:left-6 sm:w-[320px] sm:max-h-[75vh] sm:rounded-2xl"
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-3 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="font-frank text-[18px] text-white">הגדרות נגישות</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="סגור"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M1 1l12 12M13 1L1 13" />
                  </svg>
                </button>
              </div>
              <p className="font-heebo text-[12px] text-white/40 mt-1">
                התאם את האתר לצרכים שלך
              </p>
            </div>

            {/* Scrollable content */}
            <div className="px-4 py-3 overflow-y-auto max-h-[calc(85vh-140px)] sm:max-h-[calc(75vh-140px)] space-y-2 a11y-panel-scroll">
              {/* Text Size — special (cycle button) */}
              <button
                onClick={cycleTextSize}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors duration-200 text-right ${
                  settings.textSize > 0
                    ? 'bg-[#B8860B]/15 border border-[#B8860B]/30'
                    : 'bg-white/5 border border-transparent hover:bg-white/10'
                }`}
                aria-label={`גודל טקסט: ${textSizeLabels[settings.textSize]}`}
              >
                <div className="flex-1 min-w-0">
                  <span className="font-heebo text-[14px] text-white block">גודל טקסט</span>
                  <span className="font-heebo text-[11px] text-white/40 block mt-0.5">הגדלת גופנים באתר</span>
                </div>
                <span className={`font-heebo text-[13px] px-3 py-1 rounded-full shrink-0 ${
                  settings.textSize > 0
                    ? 'bg-[#B8860B]/30 text-[#c9993a]'
                    : 'bg-white/10 text-white/50'
                }`}>
                  {textSizeLabels[settings.textSize]}
                </span>
              </button>

              <ToggleRow
                label="ניגודיות גבוהה"
                description="הגברת ניגודיות הצבעים"
                active={settings.highContrast}
                onToggle={() => toggle('highContrast')}
              />

              <ToggleRow
                label="גווני אפור"
                description="הצגה בשחור-לבן"
                active={settings.grayscale}
                onToggle={() => toggle('grayscale')}
              />

              <ToggleRow
                label="הדגשת קישורים"
                description="קו תחתון לכל הקישורים"
                active={settings.underlineLinks}
                onToggle={() => toggle('underlineLinks')}
              />

              <ToggleRow
                label="גופן קריא"
                description="גופן מותאם לדיסלקציה"
                active={settings.readableFont}
                onToggle={() => toggle('readableFont')}
              />

              <ToggleRow
                label="סמן גדול"
                description="הגדלת סמן העכבר"
                active={settings.bigCursor}
                onToggle={() => toggle('bigCursor')}
              />

              <ToggleRow
                label="עצירת אנימציות"
                description="הסרת כל התנועות באתר"
                active={settings.stopAnimations}
                onToggle={() => toggle('stopAnimations')}
              />

              <ToggleRow
                label="ריווח טקסט"
                description="הגדלת המרווח בין מילים ושורות"
                active={settings.textSpacing}
                onToggle={() => toggle('textSpacing')}
              />

              <ToggleRow
                label="הדגשת מיקוד"
                description="מסגרת בולטת לאלמנט הפעיל"
                active={settings.focusHighlight}
                onToggle={() => toggle('focusHighlight')}
              />
            </div>

            {/* Footer — Reset + Link to statement */}
            <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={resetAll}
                disabled={!hasActiveSettings}
                className={`font-heebo text-[12px] transition-colors ${
                  hasActiveSettings
                    ? 'text-white/50 hover:text-white'
                    : 'text-white/20 cursor-not-allowed'
                }`}
              >
                איפוס הכל
              </button>
              <a
                href="/accessibility"
                className="font-heebo text-[12px] text-[#c9993a] hover:underline"
              >
                הצהרת נגישות
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
