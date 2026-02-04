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
        <title>{i18n.language === 'fr' ? 'Podcast Business #1 Europe | Sponsors & Partenaires | Business Legend' : 'Top Business Podcast Europe | Sponsors & Partners | Business Legend'}</title>
        <meta name="description" content={i18n.language === 'fr' ? "Business Legend : podcast business Top 100 Europe. +120 pays, 50K+ auditeurs/mois. Sponsoring premium pour marques B2B, startups et entreprises. Devenez sponsor." : "Business Legend: Top 100 European business podcast. 120+ countries, 50K+ monthly listeners. Premium sponsorship for B2B brands, startups & enterprises. Become a sponsor."} />
        <meta name="keywords" content="podcast business sponsoring, sponsor podcast entrepreneur, partenariat podcast business, publicité podcast B2B, podcast leadership Europe, interview CEO podcast, podcast fondateurs startups, brand visibility podcast, podcast marketing B2B, business podcast advertising, sponsor business podcast, podcast executive audience, media partnership podcast" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://businesslegend.co/" />
        
        <link rel="preload" as="image" href="https://i.ytimg.com/vi/xlnCbeBAehY/hqdefault.jpg" fetchPriority="high" />
        
        <meta property="og:title" content={i18n.language === 'fr' ? 'Sponsorisez le Podcast Business #1 en Europe | Business Legend' : 'Sponsor Europe\'s #1 Business Podcast | Business Legend'} />
        <meta property="og:description" content={i18n.language === 'fr' ? "Visibilité premium pour votre marque auprès de 50K+ décideurs dans 120 pays. Sponsoring podcast business." : "Premium visibility for your brand to 50K+ decision-makers in 120 countries. Business podcast sponsorship."} />
        <meta property="og:url" content="https://businesslegend.co/" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={i18n.language === 'fr' ? 'Sponsorisez Business Legend | Podcast Business Europe' : 'Sponsor Business Legend | European Business Podcast'} />
        <meta name="twitter:description" content={i18n.language === 'fr' ? "Le podcast des décideurs. Sponsoring premium pour marques ambitieuses." : "The decision-makers' podcast. Premium sponsorship for ambitious brands."} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebPage",
                "@id": "https://businesslegend.co/#webpage",
                "url": "https://businesslegend.co/",
                "name": i18n.language === 'fr' ? "Business Legend - Podcast Business Top 100 Europe" : "Business Legend - Top 100 European Business Podcast",
                "description": i18n.language === 'fr' ? "Podcast business premium avec opportunités de sponsoring pour marques B2B" : "Premium business podcast with sponsorship opportunities for B2B brands",
                "isPartOf": { "@id": "https://businesslegend.co/#website" },
                "primaryImageOfPage": { "@id": "https://businesslegend.co/#primaryimage" },
                "datePublished": "2024-01-01",
                "dateModified": "2025-02-04"
              },
              {
                "@type": "WebSite",
                "@id": "https://businesslegend.co/#website",
                "url": "https://businesslegend.co",
                "name": "Business Legend",
                "description": i18n.language === 'fr' ? "Plateforme média et podcast business international" : "International business podcast and media platform",
                "publisher": { "@id": "https://businesslegend.co/#organization" },
                "inLanguage": ["fr", "en"]
              },
              {
                "@type": "Organization",
                "@id": "https://businesslegend.co/#organization",
                "name": "Business Legend",
                "url": "https://businesslegend.co",
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://businesslegend.co/#logo",
                  "url": "https://storage.googleapis.com/gpt-engineer-file-uploads/OtJIlsq6BkarYyLF2hyTG0HPUvI2/social-images/social-1761834119300-Podcast Logo.png",
                  "width": 1200,
                  "height": 630
                },
                "sameAs": [
                  "https://www.linkedin.com/company/business-legend-podcast",
                  "https://www.youtube.com/@businesslegend-g8g",
                  "https://open.spotify.com/show/1FaH8oLslZzgULdQRYJNSz",
                  "https://podcasts.apple.com/au/podcast/business-legend/id1791395807"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "email": "contact@businesslegend.co",
                  "contactType": i18n.language === 'fr' ? "Partenariats & Sponsoring" : "Partnerships & Sponsorship",
                  "availableLanguage": ["French", "English"]
                }
              },
              {
                "@type": "PodcastSeries",
                "@id": "https://businesslegend.co/#podcast",
                "name": "Business Legend",
                "description": i18n.language === 'fr' ? "Podcast business bilingue FR/EN diffusé dans 120+ pays. Interviews filmées de fondateurs, dirigeants et investisseurs." : "Bilingual FR/EN business podcast broadcast in 120+ countries. Filmed interviews with founders, executives and investors.",
                "url": "https://businesslegend.co",
                "webFeed": "https://anchor.fm/s/100214854/podcast/rss",
                "author": { "@type": "Person", "name": "Gregory Brenig" },
                "genre": ["Business", "Entrepreneurship", "Leadership", "Startups"],
                "inLanguage": ["fr", "en"],
                "audience": {
                  "@type": "Audience",
                  "audienceType": i18n.language === 'fr' ? "Entrepreneurs, Fondateurs, Dirigeants, Investisseurs" : "Entrepreneurs, Founders, Executives, Investors",
                  "geographicArea": { "@type": "Place", "name": "International - 120+ countries" }
                }
              },
              {
                "@type": "Service",
                "@id": "https://businesslegend.co/#sponsorship",
                "name": i18n.language === 'fr' ? "Sponsoring Podcast Business Legend" : "Business Legend Podcast Sponsorship",
                "serviceType": i18n.language === 'fr' ? "Sponsoring Podcast & Partenariat Média" : "Podcast Sponsorship & Media Partnership",
                "provider": { "@id": "https://businesslegend.co/#organization" },
                "description": i18n.language === 'fr' ? "Opportunités de sponsoring premium pour atteindre 50K+ décideurs par mois dans 120 pays" : "Premium sponsorship opportunities to reach 50K+ decision-makers monthly across 120 countries",
                "areaServed": "International",
                "audience": {
                  "@type": "Audience",
                  "audienceType": i18n.language === 'fr' ? "Marques B2B, Startups, Entreprises, Agences" : "B2B Brands, Startups, Enterprises, Agencies"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": i18n.language === 'fr' ? "Formats de Sponsoring" : "Sponsorship Formats",
                  "itemListElement": [
                    { "@type": "Offer", "name": "Pre-Roll (15s)" },
                    { "@type": "Offer", "name": "Host-Read Integration" },
                    { "@type": "Offer", "name": i18n.language === 'fr' ? "Épisode Exclusif" : "Exclusive Episode" },
                    { "@type": "Offer", "name": "Co-branded Shorts" }
                  ]
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                  "@type": "ListItem",
                  "position": 1,
                  "name": i18n.language === 'fr' ? "Accueil" : "Home",
                  "item": "https://businesslegend.co/"
                }]
              }
            ]
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
