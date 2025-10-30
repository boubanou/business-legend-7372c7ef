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
        <section className="relative pt-28 pb-16 flex items-center justify-center bg-gradient-to-br from-secondary via-secondary to-accent overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-4 md:mb-6 leading-tight px-4">
                {t("home.heroTitle")}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-secondary-foreground font-semibold mb-6 md:mb-8 italic px-4">
                {t("home.heroSubtitle")}
              </p>
              
              <div className="max-w-3xl mx-auto mb-6 md:mb-8 px-4">
                {t("home.heroText").split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg md:text-xl text-secondary-foreground/90 mb-3 md:mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* YouTube Video Embed */}
              <div className="aspect-video max-w-3xl mx-auto mb-6 md:mb-8 rounded-lg md:rounded-xl overflow-hidden shadow-2xl px-4">
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
                  <Button variant="outline" size="lg" className="border-secondary-foreground bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                    {t("home.becomePartner")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">{t("home.visionTitle")}</h2>
            <div className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("home.visionText").split('\n').map((line, index) => (
                <p key={index} className="mb-2 md:mb-3">{line}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
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
                <p className="text-muted-foreground">+120 Pays</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.stats.balanced")}</h3>
                <p className="text-muted-foreground">Founders, investors, executives</p>
              </Card>
            </div>

            <div className="text-center mt-12 md:mt-16">
              <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-4 flex-wrap">
                <a href="https://open.spotify.com/show/1FaH8oLslZzgULdQRYJNSz?si=gR1efx4hTLW0bevPj_Fhmw&nd=1&dlsi=b1fabe7817f9465f" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Spotify</span>
                </a>
                <a href="https://podcasts.apple.com/au/podcast/business-legend/id1791395807" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17.5h-9v-11h9v11z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Apple Podcasts</span>
                </a>
                <a href="https://www.deezer.com/fr/show/1001563291" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.5 17.5h-11v-11h11v11z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Deezer</span>
                </a>
                <a href="https://music.amazon.fr/podcasts/5db5f446-4f09-4366-993e-4a867992ff10/business-legend" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 7h10v1.5H7V7zm0 3h10v1.5H7V10zm0 3h10v1.5H7V13zm15.5-7.5v13l-4-2-4 2-4-2-4 2v-13l4 2 4-2 4 2 4-2z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">Amazon Music</span>
                </a>
                <a href="https://www.youtube.com/@businesslegend-g8g" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground">YouTube</span>
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
