import { useTranslation } from "react-i18next";
import { Music, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">BUSINESS LEGEND</h3>
            <p className="text-sm opacity-90">{t("footer.tagline")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.platforms")}</h4>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://lnkd.in/dUB74jMq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Spotify"
              >
                <svg className="w-8 h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
              <a
                href="https://lnkd.in/dPavRt9k"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Apple Podcasts"
              >
                <svg className="w-8 h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5h-9v-11h9v11z"/>
                </svg>
              </a>
              <a
                href="https://lnkd.in/d6GA8CkM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Deezer"
              >
                <svg className="w-8 h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.5h-11v-11h11v11z"/>
                </svg>
              </a>
              <a
                href="https://lnkd.in/dhsBJyNR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="Amazon Music"
              >
                <svg className="w-8 h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 7h10v1.5H7V7zm0 3h10v1.5H7V10zm0 3h10v1.5H7V13zm15.5-7.5v13l-4-2-4 2-4-2-4 2v-13l4 2 4-2 4 2 4-2z"/>
                </svg>
              </a>
              <a
                href="https://lnkd.in/d6zMHEW5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <svg className="w-8 h-8 text-secondary-foreground hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
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

        <div className="border-t border-border pt-6 text-center text-sm opacity-75">
          © {new Date().getFullYear()} Business Legend. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
