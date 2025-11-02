import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { memo } from "react";
import SocialIcons from "./SocialIcons";

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
              <SocialIcons iconSize="w-6 h-6 md:w-8 md:h-8" />
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
