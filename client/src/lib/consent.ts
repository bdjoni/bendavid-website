/**
 * Consent Management — Ben David Website
 * ────────────────────────────────────────
 * Manages cookie consent + Google Consent Mode v2.
 *
 * HOW IT WORKS:
 * 1. On page load, consent defaults to "denied" (no tracking)
 * 2. If user already accepted (stored in localStorage), consent is "granted"
 * 3. When user clicks "מאשר", grantConsent() is called:
 *    - Updates Google Consent Mode → GTM fires all tags
 *    - Saves to localStorage so it persists across visits
 *
 * SETUP INSTRUCTIONS (for when you have your GTM ID):
 * ───────────────────────────────────────────────────
 * 1. Create a GTM account at https://tagmanager.google.com
 * 2. Replace 'GTM-XXXXXXX' in index.html with your real GTM ID
 * 3. Inside GTM, add your pixels (Facebook, Google Ads, TikTok, etc.)
 * 4. Set each tag to fire on "Consent Initialization" or "All Pages"
 * 5. GTM will automatically respect the consent state set here
 */

const STORAGE_KEY = 'bd_cookie_consent';

// Extend Window to include gtag and dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
  }
}

/**
 * Initialize Google Consent Mode v2 with default "denied" state.
 * Called once on app startup (in index.html, before GTM loads).
 * This ensures no tracking happens until user explicitly consents.
 */
export function initConsentDefaults(): void {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments as unknown as Record<string, unknown>);
  };

  // Check if user already consented in a previous visit
  const previousConsent = localStorage.getItem(STORAGE_KEY);

  if (previousConsent === 'accepted') {
    // Returning visitor who already accepted — grant immediately
    window.gtag('consent', 'default', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted',
    });
  } else {
    // New visitor or no consent yet — deny everything
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',   // basic site functionality
      personalization_storage: 'denied',
      security_storage: 'granted',         // security-related storage
      wait_for_update: 500,                // wait 500ms for consent update
    });
  }
}

/**
 * Grant consent — called when user clicks "מאשר".
 * Updates Google Consent Mode so all GTM tags can fire.
 */
export function grantConsent(): void {
  window.dataLayer = window.dataLayer || [];
  if (window.gtag) {
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
      functionality_storage: 'granted',
      personalization_storage: 'granted',
      security_storage: 'granted',
    });
  }

  // Push a custom event so GTM tags can trigger on consent
  window.dataLayer.push({ event: 'cookie_consent_granted' });
}

/**
 * Check if user has already given consent.
 */
export function hasConsent(): boolean {
  return localStorage.getItem(STORAGE_KEY) === 'accepted';
}
