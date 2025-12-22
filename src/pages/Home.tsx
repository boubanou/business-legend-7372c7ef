import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Globe, Users, Target, Handshake, Briefcase, Rocket, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import ContactFormDialog from "@/components/ContactFormDialog";
import LiteYouTube from "@/components/LiteYouTube";
import { useState, memo } from "react";
import SocialIcons from "@/components/SocialIcons";

const Home = () => {
  const { t, i18n } = useTranslation();
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);

  const audienceItems = t("home.audienceItems", { returnObjects: true }) as string[];

  return (
    <>
      <Helmet>
        <title>{i18n.language === 'fr' ? 'Podcast Business pour Entrepreneurs & Leaders | Business Legend' : 'Business Podcast for Entrepreneurs & Leaders | Business Legend'}</title>
        <meta name="description" content={i18n.language === 'fr' ? "Business Legend est un podcast business premium & plateforme média partageant des histoires entrepreneuriales puissantes, des insights leadership et des stratégies de croissance." : "Business Legend is a premium business podcast & media platform sharing powerful entrepreneurial stories, leadership insights & growth strategies."} />
        <meta name="keywords" content="business podcast, entrepreneur podcast, leadership podcast, startup podcast, founder interviews, personal branding, business media platform, executive interviews, growth strategies, entrepreneurship" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://businesslegend.co/" />
        
        {/* LCP optimization - preload hero YouTube thumbnail */}
        <link 
          rel="preload" 
          as="image" 
          href="https://i.ytimg.com/vi/xlnCbeBAehY/hqdefault.jpg"
          fetchPriority="high"
        />
        
        <meta property="og:title" content={i18n.language === 'fr' ? 'Podcast Business pour Entrepreneurs & Leaders | Business Legend' : 'Business Podcast for Entrepreneurs & Leaders | Business Legend'} />
        <meta property="og:description" content={i18n.language === 'fr' ? "Le podcast business premium qui partage des histoires entrepreneuriales puissantes et des stratégies de croissance." : "The premium business podcast sharing powerful entrepreneurial stories and growth strategies."} />
        <meta property="og:url" content="https://businesslegend.co/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={i18n.language === 'fr' ? 'Podcast Business pour Entrepreneurs & Leaders | Business Legend' : 'Business Podcast for Entrepreneurs & Leaders | Business Legend'} />
        <meta name="twitter:description" content={i18n.language === 'fr' ? "Le podcast business premium qui partage des histoires entrepreneuriales puissantes." : "The premium business podcast sharing powerful entrepreneurial stories."} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": i18n.language === 'fr' ? "Business Legend - Podcast Business pour Entrepreneurs" : "Business Legend - Business Podcast for Entrepreneurs",
            "description": i18n.language === 'fr' ? "Plateforme média business premium avec interviews de dirigeants et entrepreneurs" : "Premium business media platform with executive and entrepreneur interviews",
            "url": "https://businesslegend.co/",
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://businesslegend.co/#website"
            },
            "about": {
              "@type": "PodcastSeries",
              "name": "Business Legend",
              "description": i18n.language === 'fr' ? "Podcast business international avec des interviews filmées de fondateurs, dirigeants et innovateurs. Format bilingue français-anglais disponible sur LinkedIn, Spotify, YouTube et Apple Podcasts." : "International business podcast with filmed interviews of founders, executives and innovators. Bilingual French-English format available on LinkedIn, Spotify, YouTube and Apple Podcasts.",
              "genre": ["Business", "Entrepreneurship", "Leadership", "Innovation", "Startup"],
              "inLanguage": ["fr", "en"]
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Business Legend",
              "url": "https://businesslegend.co",
              "logo": "https://businesslegend.co/favicon.ico",
              "sameAs": [
                "https://www.linkedin.com/company/business-legend-podcast",
                "https://www.youtube.com/@BusinessLegendPodcast",
                "https://open.spotify.com/show/businesslegend"
              ]
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

              {/* YouTube Video Embed - LCP element with explicit dimensions */}
              <div 
                className="aspect-video max-w-3xl mx-auto mb-6 md:mb-8 rounded-lg md:rounded-xl overflow-hidden shadow-2xl px-4"
                style={{ aspectRatio: '16/9' }}
              >
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

        {/* Authority Section - SEO Block */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
              {t("home.authorityTitle")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              {t("home.authorityText")}
            </p>
          </div>
        </section>

        {/* Audience Section - SEO Block */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
              {t("home.audienceTitle")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              {audienceItems.map((item, index) => {
                const icons = [Briefcase, Target, Rocket, LineChart, Handshake];
                const Icon = icons[index % icons.length];
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border/50">
                    <Icon className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                    <span className="font-medium">{item}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              {t("home.audienceText")}
            </p>
          </div>
        </section>

        {/* Partner Section - SEO Block */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              {t("home.partnerTitle")}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              {t("home.partnerText")}
            </p>
            <Button 
              variant="default" 
              size="lg"
              onClick={() => setIsContactDialogOpen(true)}
            >
              {t("home.becomePartner")}
            </Button>
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
                <h3 className="text-xl font-bold mb-2">{t("home.stats.top100")}</h3>
                <p className="text-muted-foreground">Premium business content</p>
              </Card>

              <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.stats.global")}</h3>
                <p className="text-muted-foreground">+120 {i18n.language === 'fr' ? 'Pays' : 'Countries'}</p>
              </Card>

              <Card className="p-6 md:p-8 text-center hover:shadow-lg transition-shadow border-primary/20">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("home.stats.balanced")}</h3>
                <p className="text-muted-foreground">{i18n.language === 'fr' ? 'Fondateurs, investisseurs, dirigeants' : 'Founders, investors, executives'}</p>
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
