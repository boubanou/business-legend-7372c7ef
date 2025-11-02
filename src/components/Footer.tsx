import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { memo } from "react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">BUSINESS LEGEND</h2>
            <p className="text-xs md:text-sm opacity-90">{t("footer.tagline")}</p>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2" aria-label="Footer navigation">
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Navigation</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="text-sm hover:text-primary transition-colors">
                  {t("nav.partnerships")}
                </Link>
              </li>
              <li>
                <Link to="/episodes" className="text-sm hover:text-primary transition-colors">
                  {t("nav.episodes")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary transition-colors">
                  {t("nav.contact")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  {t("nav.about")}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">{t("footer.platforms")}</h3>
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap gap-3 md:gap-4">
              <a
                href="https://open.spotify.com/show/1FaH8oLslZzgULdQRYJNSz?si=gR1efx4hTLW0bevPj_Fhmw&nd=1&dlsi=b1fabe7817f9465f"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Spotify"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://podcasts.apple.com/au/podcast/business-legend/id1791395807"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Apple Podcasts"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 2.824c5.073 0 9.176 4.104 9.176 9.176 0 5.073-4.103 9.177-9.176 9.177-5.072 0-9.176-4.104-9.176-9.177 0-5.072 4.104-9.176 9.176-9.176zm-.164 4.09c-2.27 0-4.103 1.834-4.103 4.103 0 1.807 1.162 3.338 2.782 3.887v3.722c0 .14.114.254.254.254h2.133c.14 0 .254-.114.254-.254v-3.722c1.62-.55 2.782-2.08 2.782-3.887 0-2.269-1.833-4.103-4.102-4.103zm0 1.278c1.56 0 2.824 1.265 2.824 2.825 0 1.56-1.265 2.824-2.824 2.824-1.56 0-2.825-1.265-2.825-2.824 0-1.56 1.265-2.825 2.825-2.825zm0 1.098c-.955 0-1.727.773-1.727 1.727 0 .955.772 1.727 1.727 1.727.954 0 1.726-.772 1.726-1.727 0-.954-.772-1.727-1.726-1.727z"/>
                </svg>
              </a>
              <a
                href="https://www.deezer.com/fr/show/1001563291"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Deezer"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.81 4.16v3.03h5.15V4.16h-5.15zm0 4.54v3.03h5.15V8.7h-5.15zm-6.05-4.54v3.03h5.15V4.16h-5.15zm0 4.54v3.03h5.15V8.7h-5.15zm0 4.55v3.03h5.15v-3.03h-5.15zm6.05 0v3.03h5.15v-3.03h-5.15zm-12.1 0v3.03h5.15v-3.03H6.76zm6.05 4.54v3.03h5.15v-3.03h-5.15zm6.05 0v3.03h5.15v-3.03h-5.15zm-12.1 0v3.03h5.15v-3.03H6.76zm-6.05 0v3.03h5.15v-3.03H.71z"/>
                </svg>
              </a>
              <a
                href="https://music.amazon.fr/podcasts/5db5f446-4f09-4366-993e-4a867992ff10/business-legend"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Amazon Music"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.7 19.3c-1.4 1.4-2.8 2-4 1.8-.4-.1-.6-.4-.6-.8 0-.3.2-.6.5-.8 3.4-1.6 5.3-4.6 5.3-7.8V3.4c0-.5.4-.9.9-.9s.9.4.9.9v8.3c0 3.8-2.2 7.3-6 9.6 1.5.1 3.4-.5 5.3-2.4C9.6 16.2 11 13 11 9.5V3.4c0-.5.4-.9.9-.9s.9.4.9.9v6.1c0 4-1.6 7.8-4.5 10.6 2.2-1.5 3.9-3.8 4.8-6.4.2-.5.7-.7 1.2-.5.5.2.7.7.5 1.2-1 3-3 5.6-5.6 7.4 3.8-1.5 6.5-4.8 7.3-8.8.1-.5.6-.8 1.1-.7.5.1.8.6.7 1.1-.9 4.6-4.1 8.4-8.4 10.2 4.8-.7 8.6-4.5 9.5-9.3 0-.5.5-.9 1-.9.5 0 .9.5.9 1 0 5.8-4.4 10.6-10 11.4-.5.1-1 .1-1.5.1-2.8 0-5.5-1-7.7-2.9z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@businesslegend-g8g"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 md:w-8 md:h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm">
              Produced by <strong>Gregory Brenig</strong>
            </p>
            <p className="text-sm mt-2 opacity-75">
              Powered by <strong>NLG Consulting</strong>
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center space-y-2">
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-2">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              {t("footer.privacyPolicy")}
            </Link>
            <button
              onClick={() => (window as any).openCookieSettings?.()}
              className="hover:text-primary transition-colors"
            >
              {t("footer.cookieSettings")}
            </button>
          </div>
          <p className="text-sm opacity-75">
            © {new Date().getFullYear()} Business Legend. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
