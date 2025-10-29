import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import podcastLogo from "@/assets/podcast-logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src={podcastLogo} alt="Business Legend" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary" : "text-foreground"
            }`}
          >
            {t("nav.home")}
          </Link>
          <Link
            to="/partnerships"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/partnerships") ? "text-primary" : "text-foreground"
            }`}
          >
            {t("nav.partnerships")}
          </Link>
          <Link
            to="/episodes"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/episodes") ? "text-primary" : "text-foreground"
            }`}
          >
            {t("nav.episodes")}
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary" : "text-foreground"
            }`}
          >
            {t("nav.about")}
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary" : "text-foreground"
            }`}
          >
            {t("nav.contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            {i18n.language.toUpperCase()}
          </Button>
          <Link to="/partnerships">
            <Button variant="hero" size="sm" className="hidden md:inline-flex">
              {t("home.becomePartner")}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
