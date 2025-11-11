import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { X, Settings } from 'lucide-react';
import { grantAnalyticsConsent, denyAnalyticsConsent, initGoogleAnalytics } from '@/lib/analytics';
import { useGeoLocation } from '@/hooks/useGeoLocation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const CONSENT_KEY = 'cookie_consent_v2';
const CONSENT_DURATION = 180 * 24 * 60 * 60 * 1000; // 180 days in milliseconds

interface ConsentData {
  accepted: boolean;
  timestamp: number;
}

export function CookieConsent() {
  const { t, i18n } = useTranslation();
  const { isGDPRCountry, isLoading } = useGeoLocation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    if (isLoading) return;

    // Check existing consent
    const storedConsent = localStorage.getItem(CONSENT_KEY);
    
    if (storedConsent) {
      try {
        const consent: ConsentData = JSON.parse(storedConsent);
        const isExpired = Date.now() - consent.timestamp > CONSENT_DURATION;
        
        if (!isExpired) {
          if (consent.accepted) {
            initGoogleAnalytics();
            grantAnalyticsConsent();
          } else {
            initGoogleAnalytics();
            denyAnalyticsConsent();
          }
          return; // Don't show banner
        }
      } catch (e) {
        console.error('Failed to parse consent data', e);
      }
    }

    // Show banner only for GDPR countries without valid consent
    if (isGDPRCountry) {
      initGoogleAnalytics(); // Initialize with default denied state
      setShowBanner(true);
    } else {
      // Non-GDPR countries: load analytics directly
      initGoogleAnalytics();
      grantAnalyticsConsent();
    }
  }, [isGDPRCountry, isLoading]);

  const saveConsent = (accepted: boolean) => {
    const consent: ConsentData = {
      accepted,
      timestamp: Date.now(),
    };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  };

  const handleAcceptAll = () => {
    grantAnalyticsConsent();
    saveConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    denyAnalyticsConsent();
    saveConsent(false);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    if (analyticsEnabled) {
      grantAnalyticsConsent();
      saveConsent(true);
    } else {
      denyAnalyticsConsent();
      saveConsent(false);
    }
    setShowSettings(false);
    setShowBanner(false);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  // Export function to reopen settings from footer
  useEffect(() => {
    (window as any).openCookieSettings = () => {
      setShowSettings(true);
    };
  }, []);

  if (!showBanner) return null;

  const bannerText = i18n.language === 'fr'
    ? "Nous utilisons des cookies pour analyser le trafic, améliorer votre expérience et personnaliser le contenu. Vous pouvez accepter ou refuser ces cookies conformément à notre politique de confidentialité."
    : "We use cookies to analyze traffic, improve your experience, and personalize content. You can accept or decline cookies in accordance with our privacy policy.";

  const acceptText = i18n.language === 'fr' ? "Accepter tout" : "Accept all";
  const declineText = i18n.language === 'fr' ? "Refuser" : "Decline";
  const customizeText = i18n.language === 'fr' ? "Personnaliser" : "Customize";
  const privacyText = i18n.language === 'fr' ? "Politique de confidentialité" : "Privacy Policy";

  return (
    <>
      {/* Cookie Banner - Fixed Overlay (no CLS) */}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-[#1E1E1E] border-t border-white/10 shadow-2xl" style={{ willChange: 'transform' }}>
        <div className="max-w-6xl mx-auto p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 text-sm text-white/90">
              {bannerText}{' '}
              <a
                href="/privacy-policy"
                className="text-[hsl(16,100%,50%)] hover:underline font-medium"
              >
                {privacyText}
              </a>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 shrink-0">
              <Button
                onClick={handleDecline}
                variant="outline"
                size="sm"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                {declineText}
              </Button>
              <Button
                onClick={openSettings}
                variant="outline"
                size="sm"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
              >
                <Settings className="w-4 h-4 mr-2" />
                {customizeText}
              </Button>
              <Button
                onClick={handleAcceptAll}
                variant="hero"
                size="sm"
              >
                {acceptText}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="bg-[#1E1E1E] border-white/10 text-white">
          <DialogHeader>
            <DialogTitle>
              {i18n.language === 'fr' ? 'Paramètres des cookies' : 'Cookie Settings'}
            </DialogTitle>
            <DialogDescription className="text-white/70">
              {i18n.language === 'fr'
                ? 'Choisissez les cookies que vous autorisez. Les cookies essentiels sont toujours activés.'
                : 'Choose which cookies you allow. Essential cookies are always enabled.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">
                  {i18n.language === 'fr' ? 'Cookies essentiels' : 'Essential Cookies'}
                </h3>
                <p className="text-sm text-white/70">
                  {i18n.language === 'fr'
                    ? 'Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.'
                    : 'Required for the website to function. Cannot be disabled.'}
                </p>
              </div>
              <div className="text-sm font-medium text-green-400">
                {i18n.language === 'fr' ? 'Toujours actif' : 'Always active'}
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">
                  {i18n.language === 'fr' ? 'Cookies analytiques' : 'Analytics Cookies'}
                </h3>
                <p className="text-sm text-white/70">
                  {i18n.language === 'fr'
                    ? 'Nous aident à comprendre comment vous utilisez le site (Google Analytics).'
                    : 'Help us understand how you use the website (Google Analytics).'}
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-white/20 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[hsl(16,100%,50%)]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[hsl(16,100%,50%)]"></div>
              </label>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              onClick={() => setShowSettings(false)}
              variant="outline"
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
            >
              {i18n.language === 'fr' ? 'Annuler' : 'Cancel'}
            </Button>
            <Button
              onClick={handleSaveSettings}
              variant="hero"
            >
              {i18n.language === 'fr' ? 'Enregistrer' : 'Save'}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
