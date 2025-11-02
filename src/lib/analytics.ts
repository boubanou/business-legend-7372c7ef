// Google Analytics 4 with Consent Mode V2
const GA_MEASUREMENT_ID = 'G-5H17M278WY';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize gtag with default consent (denied)
export function initGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  // Set default consent to denied (GDPR compliant)
  window.gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted', // Essential for security
  });

  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    cookie_flags: 'SameSite=None;Secure'
  });
}

// Load GA4 script
export function loadGoogleAnalytics() {
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    return; // Already loaded
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

// Update consent when user accepts
export function grantAnalyticsConsent() {
  if (!window.gtag) {
    initGoogleAnalytics();
  }

  window.gtag('consent', 'update', {
    'ad_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'analytics_storage': 'granted',
    'functionality_storage': 'granted',
    'personalization_storage': 'granted',
  });

  loadGoogleAnalytics();
}

// Update consent when user declines
export function denyAnalyticsConsent() {
  if (!window.gtag) {
    initGoogleAnalytics();
  }

  window.gtag('consent', 'update', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
  });
}
