import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from "lucide-react";
import { useState, memo } from "react";
import podcastLogo from "@/assets/podcast-logo-small.webp";
import ContactFormDialog from "@/components/ContactFormDialog";

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'fr' ? 'en' : 'fr');
  };

  const isActive = (path: string) => location.pathname === path;

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity" onClick={closeMobileMenu}>
          <img src={podcastLogo} alt="Business Legend" className="h-8 w-8 md:h-10 md:w-10 object-contain" loading="eager" decoding="async" width="40" height="40" />
          <div className="flex flex-col">
            <span className="text-sm md:text-lg font-bold text-foreground leading-tight">BUSINESS</span>
            <span className="text-sm md:text-lg font-bold text-primary leading-tight">LEGEND</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
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

        <div className="flex items-center gap-2 md:gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">{i18n.language.toUpperCase()}</span>
          </Button>
          
          <Button 
            variant="hero" 
            size="sm" 
            className="hidden lg:block"
            onClick={() => setContactDialogOpen(true)}
          >
            {t("home.becomePartner")}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              {t("nav.home")}
            </Link>
            <Link
              to="/partnerships"
              onClick={closeMobileMenu}
              className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                isActive("/partnerships") ? "text-primary" : "text-foreground"
              }`}
            >
              {t("nav.partnerships")}
            </Link>
            <Link
              to="/episodes"
              onClick={closeMobileMenu}
              className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                isActive("/episodes") ? "text-primary" : "text-foreground"
              }`}
            >
              {t("nav.episodes")}
            </Link>
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                isActive("/about") ? "text-primary" : "text-foreground"
              }`}
            >
              {t("nav.about")}
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              {t("nav.contact")}
            </Link>
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full"
              onClick={() => {
                closeMobileMenu();
                setContactDialogOpen(true);
              }}
            >
              {t("home.becomePartner")}
            </Button>
          </nav>
        </div>
      )}

      <ContactFormDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
    </header>
  );
};

export default memo(Header);
