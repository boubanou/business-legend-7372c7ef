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
                className="hover:text-primary transition-colors"
                aria-label="Spotify"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="https://lnkd.in/d6GA8CkM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Deezer"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="https://lnkd.in/dhsBJyNR"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Amazon Music"
              >
                <Music className="h-5 w-5" />
              </a>
              <a
                href="https://lnkd.in/d6zMHEW5"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://lnkd.in/dPavRt9k"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Apple Podcasts"
              >
                <Music className="h-5 w-5" />
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
