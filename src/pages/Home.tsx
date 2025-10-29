import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Business Legend | {t("home.heroTitle")}</title>
        <meta name="description" content={t("home.heroSubtitle")} />
        <meta property="og:title" content="Business Legend" />
        <meta property="og:description" content={t("home.heroSubtitle")} />
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 flex items-center justify-center bg-gradient-to-br from-secondary via-secondary to-accent overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary-foreground mb-6 leading-tight">
                {t("home.heroTitle")}
              </h1>
              <p className="text-2xl md:text-3xl text-secondary-foreground font-semibold mb-8 italic">
                {t("home.heroSubtitle")}
              </p>
              
              <div className="max-w-3xl mx-auto mb-8">
                {t("home.heroText").split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg md:text-xl text-secondary-foreground/90 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* YouTube Video Embed */}
              <div className="aspect-video max-w-3xl mx-auto mb-8 rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/xlnCbeBAehY?si=buIDmp0JdXfbWX0M" 
                  title="Business Legend Podcast" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/episodes">
                  <Button variant="hero" size="lg">
                    {t("home.watchNow")}
                  </Button>
                </Link>
                <Link to="/partnerships">
                  <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                    {t("home.becomePartner")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("home.visionTitle")}</h2>
            <div className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("home.visionText").split('\n').map((line, index) => (
                <p key={index} className="mb-3">{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.stats.top100")}</h3>
                <p className="text-muted-foreground">Premium business content</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.stats.global")}</h3>
                <p className="text-muted-foreground">France, Canada, USA, Australia, Israel</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.stats.balanced")}</h3>
                <p className="text-muted-foreground">Founders, investors, executives</p>
              </Card>
            </div>

            <div className="text-center mt-16">
              <div className="flex justify-center gap-6 mb-4">
                <a href="https://lnkd.in/dUB74jMq" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Spotify
                </a>
                <a href="https://lnkd.in/dPavRt9k" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Apple Podcasts
                </a>
                <a href="https://lnkd.in/d6GA8CkM" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Deezer
                </a>
                <a href="https://lnkd.in/dhsBJyNR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  Amazon Music
                </a>
                <a href="https://lnkd.in/d6zMHEW5" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  YouTube
                </a>
              </div>
              <p className="text-muted-foreground">{t("home.poweredBy")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
