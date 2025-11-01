import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ContactFormDialog from "@/components/ContactFormDialog";
import LiteYouTube from "@/components/LiteYouTube";
import { useState } from "react";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{i18n.language === 'fr' ? 'Business Legend Podcast | Entrepreneuriat, Leadership & Inspiration' : 'Business Legend Podcast | Entrepreneurship, Leadership & Inspiration'}</title>
        <meta name="description" content={i18n.language === 'fr' ? "Le podcast business international francophone qui révèle les parcours inspirants de dirigeants, fondateurs et innovateurs du monde entier. Interviews filmées sur LinkedIn, Spotify, YouTube." : "The international French-language business podcast revealing inspiring journeys of executives, founders and innovators from around the world. Filmed interviews on LinkedIn, Spotify, YouTube."} />
        <meta name="keywords" content="podcast business, podcast entrepreneur, podcast inspiration, podcast leadership, podcast francophone international, interview dirigeants, podcast carrières inspirantes, business legend podcast" />
        <link rel="canonical" href="https://businesslegend.co/" />
        
        <meta property="og:title" content={i18n.language === 'fr' ? 'Business Legend Podcast | Entrepreneuriat, Leadership & Inspiration' : 'Business Legend Podcast | Entrepreneurship, Leadership & Inspiration'} />
        <meta property="og:description" content={i18n.language === 'fr' ? "Le podcast business international francophone qui révèle les parcours inspirants de dirigeants, fondateurs et innovateurs." : "The international French-language business podcast revealing inspiring journeys of executives and founders."} />
        <meta property="og:url" content="https://businesslegend.co/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={i18n.language === 'fr' ? 'Business Legend Podcast | Entrepreneuriat, Leadership & Inspiration' : 'Business Legend Podcast | Entrepreneurship, Leadership & Inspiration'} />
        <meta name="twitter:description" content={i18n.language === 'fr' ? "Le podcast business international francophone qui révèle les parcours inspirants de dirigeants, fondateurs et innovateurs." : "The international French-language business podcast revealing inspiring journeys of executives and founders."} />
        
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
                <LiteYouTube
                  videoId="xlnCbeBAehY"
                  title="Business Legend Podcast - Interview entrepreneurs et leaders internationaux"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/episodes">
                  <Button variant="hero" size="lg">
                    {t("home.watchNow")}
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-secondary-foreground bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  {t("home.becomePartner")}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <ContactFormDialog 
          open={isContactDialogOpen} 
          onOpenChange={setIsContactDialogOpen} 
        />

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
                  <TrendingUp className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold mb-2">{t("home.stats.top100")}</h2>
                <p className="text-muted-foreground">Premium business content</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold mb-2">{t("home.stats.global")}</h2>
                <p className="text-muted-foreground">+120 Pays</p>
              </Card>

              <Card className="p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold mb-2">{t("home.stats.balanced")}</h2>
                <p className="text-muted-foreground">Founders, investors, executives</p>
              </Card>
            </div>

            <div className="text-center mt-12 md:mt-16 px-4">
              <div className="grid grid-cols-3 sm:flex sm:justify-center sm:items-center gap-4 sm:gap-6 md:gap-8 mb-4 max-w-2xl mx-auto">
                <a href="https://open.spotify.com/show/1FaH8oLslZzgULdQRYJNSz?si=gR1efx4hTLW0bevPj_Fhmw&nd=1&dlsi=b1fabe7817f9465f" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Spotify</span>
                </a>
                <a href="https://podcasts.apple.com/au/podcast/business-legend/id1791395807" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 2.824c5.073 0 9.176 4.104 9.176 9.176 0 5.073-4.103 9.177-9.176 9.177-5.072 0-9.176-4.104-9.176-9.177 0-5.072 4.104-9.176 9.176-9.176zm-.164 4.09c-2.27 0-4.103 1.834-4.103 4.103 0 1.807 1.162 3.338 2.782 3.887v3.722c0 .14.114.254.254.254h2.133c.14 0 .254-.114.254-.254v-3.722c1.62-.55 2.782-2.08 2.782-3.887 0-2.269-1.833-4.103-4.102-4.103zm0 1.278c1.56 0 2.824 1.265 2.824 2.825 0 1.56-1.265 2.824-2.824 2.824-1.56 0-2.825-1.265-2.825-2.824 0-1.56 1.265-2.825 2.825-2.825zm0 1.098c-.955 0-1.727.773-1.727 1.727 0 .955.772 1.727 1.727 1.727.954 0 1.726-.772 1.726-1.727 0-.954-.772-1.727-1.726-1.727z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Apple</span>
                </a>
                <a href="https://www.deezer.com/fr/show/1001563291" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.81 4.16v3.03h5.15V4.16h-5.15zm0 4.54v3.03h5.15V8.7h-5.15zm-6.05-4.54v3.03h5.15V4.16h-5.15zm0 4.54v3.03h5.15V8.7h-5.15zm0 4.55v3.03h5.15v-3.03h-5.15zm6.05 0v3.03h5.15v-3.03h-5.15zm-12.1 0v3.03h5.15v-3.03H6.76zm6.05 4.54v3.03h5.15v-3.03h-5.15zm6.05 0v3.03h5.15v-3.03h-5.15zm-12.1 0v3.03h5.15v-3.03H6.76zm-6.05 0v3.03h5.15v-3.03H.71z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Deezer</span>
                </a>
                <a href="https://music.amazon.fr/podcasts/5db5f446-4f09-4366-993e-4a867992ff10/business-legend" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.7 19.3c-1.4 1.4-2.8 2-4 1.8-.4-.1-.6-.4-.6-.8 0-.3.2-.6.5-.8 3.4-1.6 5.3-4.6 5.3-7.8V3.4c0-.5.4-.9.9-.9s.9.4.9.9v8.3c0 3.8-2.2 7.3-6 9.6 1.5.1 3.4-.5 5.3-2.4C9.6 16.2 11 13 11 9.5V3.4c0-.5.4-.9.9-.9s.9.4.9.9v6.1c0 4-1.6 7.8-4.5 10.6 2.2-1.5 3.9-3.8 4.8-6.4.2-.5.7-.7 1.2-.5.5.2.7.7.5 1.2-1 3-3 5.6-5.6 7.4 3.8-1.5 6.5-4.8 7.3-8.8.1-.5.6-.8 1.1-.7.5.1.8.6.7 1.1-.9 4.6-4.1 8.4-8.4 10.2 4.8-.7 8.6-4.5 9.5-9.3 0-.5.5-.9 1-.9.5 0 .9.5.9 1 0 5.8-4.4 10.6-10 11.4-.5.1-1 .1-1.5.1-2.8 0-5.5-1-7.7-2.9z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">Amazon</span>
                </a>
                <a href="https://www.youtube.com/@businesslegend-g8g" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <span className="text-xs text-muted-foreground text-center">YouTube</span>
                </a>
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{t("home.poweredBy")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
