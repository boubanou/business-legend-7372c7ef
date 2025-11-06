import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ContactFormDialog from "@/components/ContactFormDialog";
import LiteYouTube from "@/components/LiteYouTube";
import { useState, memo } from "react";
import SocialIcons from "@/components/SocialIcons";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>{i18n.language === 'fr' ? 'Business Legend Podcast | Entrepreneuriat, Leadership & Inspiration' : 'Business Legend Podcast | Entrepreneurship, Leadership & Inspiration'}</title>
        <meta name="description" content={i18n.language === 'fr' ? "Le podcast business international francophone qui révèle les parcours inspirants de dirigeants, fondateurs et innovateurs du monde entier. Interviews filmées sur LinkedIn, Spotify, YouTube." : "The international French-language business podcast revealing inspiring journeys of executives, founders and innovators from around the world. Filmed interviews on LinkedIn, Spotify, YouTube."} />
        <meta name="keywords" content="podcast business, podcast entrepreneur, podcast inspiration, podcast leadership, podcast francophone international, interview dirigeants, podcast carrières inspirantes, business legend podcast" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://businesslegend.co/" />
        
        {/* Preconnect for critical external resources */}
        <link rel="preconnect" href="https://www.cloudflare.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://podcasts.apple.com" />
        <link rel="dns-prefetch" href="https://www.deezer.com" />
        <link rel="dns-prefetch" href="https://music.amazon.fr" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link 
          rel="preload" 
          as="image" 
          href="https://i.ytimg.com/vi/xlnCbeBAehY/hqdefault.jpg"
        />
        
        <meta property="og:title" content={i18n.language === 'fr' ? 'Business Legend Podcast | Entrepreneuriat, Leadership & Inspiration' : 'Business Legend Podcast | Entrepreneurship, Leadership & Inspiration'} />
        <meta property="og:description" content={i18n.language === 'fr' ? "Le podcast business international francophone qui révèle les parcours inspirants de dirigeants, fondateurs et innovateurs." : "The international French-language business podcast revealing inspiring journeys of executives and founders."} />
        <meta property="og:url" content="https://businesslegend.co/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={i18n.language === 'fr' ? 'Business Legend Podcast | Entrepreneuriat, Leadership & Inspiration' : 'Business Legend Podcast | Entrepreneurship, Leadership & Inspiration'} />
        <meta name="twitter:description" content={i18n.language === 'fr' ? "Le podcast business international francophone qui révèle les parcours inspirants de dirigeants, fondateurs et innovateurs." : "The international French-language business podcast revealing inspiring journeys of executives and founders."} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": i18n.language === 'fr' ? "Business Legend Podcast - Accueil" : "Business Legend Podcast - Home",
            "description": i18n.language === 'fr' ? "Podcast business international francophone avec interviews de dirigeants et entrepreneurs" : "International French-speaking business podcast with executive and entrepreneur interviews",
            "url": "https://businesslegend.co/",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://businesslegend.co/#website"
            },
            "about": {
              "@type": "PodcastSeries",
              "name": "Business Legend",
              "description": i18n.language === 'fr' ? "Podcast business francophone international avec des interviews filmées de fondateurs, dirigeants et innovateurs. Format bilingue français-anglais disponible sur LinkedIn, Spotify, YouTube et Apple Podcasts." : "International French-speaking business podcast with filmed interviews of founders, executives and innovators. Bilingual French-English format available on LinkedIn, Spotify, YouTube and Apple Podcasts.",
              "genre": ["Business", "Entrepreneuriat", "Leadership", "Innovation"],
              "inLanguage": ["fr", "en"]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [{
                "@type": "ListItem",
                "position": 1,
                "name": i18n.language === 'fr' ? "Accueil" : "Home",
                "item": "https://businesslegend.co/"
              }]
            }
          })}
        </script>
        
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

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
                <Link to="/episodes" className="w-full sm:w-auto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    {t("home.watchNow")}
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto border-secondary-foreground bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
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
                <SocialIcons showLabels />
              </div>
              <p className="text-sm md:text-base text-muted-foreground">{t("home.poweredBy")}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default memo(Home);
