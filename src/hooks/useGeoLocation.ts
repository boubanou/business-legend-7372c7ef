import { useState, useEffect } from 'react';

// Countries requiring GDPR consent (EU/EEA/UK/CH)
const GDPR_COUNTRIES = new Set([
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR',
  'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK',
  'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'UK', 'CH'
]);

export function useGeoLocation() {
  const [isGDPRCountry, setIsGDPRCountry] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Try to get country from Cloudflare headers (if available)
        const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const data = await response.text();
        const countryMatch = data.match(/loc=([A-Z]{2})/);
        
        if (countryMatch) {
          const country = countryMatch[1];
          setIsGDPRCountry(GDPR_COUNTRIES.has(country));
        } else {
          // Fallback: use timezone to approximate location
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
          const europeanTimezones = ['Europe/', 'Atlantic/Reykjavik', 'Atlantic/Faroe', 'Atlantic/Canary'];
          const isEuropeanTimezone = europeanTimezones.some(tz => timezone?.startsWith(tz));
          setIsGDPRCountry(isEuropeanTimezone);
        }
      } catch (error) {
        console.error('Geolocation detection failed:', error);
        // Conservative approach: show consent banner if detection fails
        setIsGDPRCountry(true);
      } finally {
        setIsLoading(false);
      }
    };

    const scheduleCheck = () => {
      if (typeof (window as any).requestIdleCallback === 'function') {
        (window as any).requestIdleCallback(checkLocation, { timeout: 2000 });
      } else {
        setTimeout(checkLocation, 0);
      }
    };

    // Defer geolocation to avoid impacting initial render/LCP
    scheduleCheck();
  }, []);

  return { isGDPRCountry, isLoading };
}
