import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import gregoryBrenig from "@/assets/gregory-brenig.webp";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{i18n.language === 'fr' ? 'À propos de Business Legend | Créé et animé par Gregory Brenig' : 'About Business Legend | Created and hosted by Gregory Brenig'}</title>
        <meta name="description" content={i18n.language === 'fr' ? "Business Legend est un podcast francophone international qui explore la réussite et l'humain derrière les plus grands parcours professionnels. Créé par Gregory Brenig." : "Business Legend is an international French-speaking podcast that explores success and the human behind the greatest professional journeys. Created by Gregory Brenig."} />
        <meta name="keywords" content="Gregory Brenig, podcast business, animateur podcast, podcast leadership, podcast entrepreneur francophone" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://businesslegend.co/about" />
        
        <meta property="og:title" content={i18n.language === 'fr' ? 'À propos de Business Legend | Gregory Brenig' : 'About Business Legend | Gregory Brenig'} />
        <meta property="og:description" content={i18n.language === 'fr' ? "Business Legend est un podcast francophone international qui explore la réussite et l'humain derrière les plus grands parcours professionnels." : "Business Legend is an international French-speaking podcast that explores success and the human behind the greatest professional journeys."} />
        <meta property="og:url" content="https://businesslegend.co/about" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={i18n.language === 'fr' ? 'À propos de Business Legend | Gregory Brenig' : 'About Business Legend | Gregory Brenig'} />
        <meta name="twitter:description" content={i18n.language === 'fr' ? "Podcast francophone international explorant les parcours professionnels inspirants." : "International French-speaking podcast exploring inspiring professional journeys."} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": i18n.language === 'fr' ? "À propos de Business Legend" : "About Business Legend",
            "description": i18n.language === 'fr' ? "Découvrez l'histoire et la vision derrière Business Legend, le podcast business francophone international créé par Gregory Brenig" : "Discover the story and vision behind Business Legend, the international French-speaking business podcast created by Gregory Brenig",
            "url": "https://businesslegend.co/about",
            "mainEntity": {
              "@type": "Person",
              "name": "Gregory Brenig",
              "jobTitle": i18n.language === 'fr' ? "Créateur et Animateur" : "Creator and Host",
              "description": i18n.language === 'fr' ? "Entrepreneur, créateur et animateur du podcast Business Legend, fondateur de Block Tech et NLG Consulting" : "Entrepreneur, creator and host of Business Legend podcast, founder of Block Tech and NLG Consulting",
              "url": "https://www.linkedin.com/in/gregory-brenig-98007125/",
              "sameAs": [
                "https://www.linkedin.com/in/gregory-brenig-98007125/",
                "https://block-tech.co",
                "https://nlgconsulting.co"
              ],
              "image": "https://businesslegend.co/assets/gregory-brenig.jpg",
              "alumniOf": "Business Legend",
              "knowsAbout": ["Entrepreneuriat", "Leadership", "Business Development", "Innovation"]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": i18n.language === 'fr' ? "Accueil" : "Home",
                  "item": "https://businesslegend.co/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": i18n.language === 'fr' ? "À propos" : "About",
                  "item": "https://businesslegend.co/about"
                }
              ]
            }
          })}
        </script>
        
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
              {t("about.title")}
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground text-center mb-8 md:mb-16">
              {t("about.subtitle")}
            </p>

            {/* Introduction */}
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                {t("about.introTitle")}
              </h2>
              <p className="text-lg sm:text-xl text-foreground/90 italic">
                {t("about.introText")}
              </p>
            </div>

            {/* Main Content */}
            <Card className="p-6 md:p-8 lg:p-12 mb-8 md:mb-12">
              <div className="prose prose-lg max-w-none">
                {t("about.mainText").split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* Quote */}
            <Card className="p-6 md:p-8 lg:p-12 mb-8 md:mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <blockquote className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-relaxed">
                  {t("about.quote").split('\n').map((line, index) => (
                    <p key={index} className="mb-2">"{line}"</p>
                  ))}
                </div>
                <footer className="text-base sm:text-lg text-muted-foreground">
                  — {t("about.quoteAuthor")}
                </footer>
              </blockquote>
            </Card>

            {/* Host */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 md:mb-8">{t("about.hostTitle")}</h2>
              
              <div className="max-w-md mx-auto mb-6 md:mb-8">
                <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={gregoryBrenig} 
                    alt="Gregory Brenig - Créateur et animateur du podcast Business Legend, entrepreneur et fondateur de Block Tech et NLG Consulting" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                
                <a href="https://www.linkedin.com/in/gregory-brenig-98007125/" target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="text-2xl font-bold mb-2 hover:text-primary transition-colors cursor-pointer">{t("about.hostName")}</h3>
                </a>
                <p className="text-primary font-semibold mb-4">{t("about.hostRole")}</p>
              </div>

              <div className="flex justify-center gap-4 mt-8 text-sm text-muted-foreground">
                <a href="https://block-tech.co" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Block Tech
                </a>
                <span>•</span>
                <a href="https://nlgconsulting.co" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  NLG Consulting
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
