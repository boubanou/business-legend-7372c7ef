import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import gregoryBrenig from "@/assets/gregory-brenig.jpg";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("about.title")} | Business Legend</title>
        <meta name="description" content={t("about.missionText")} />
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              {t("about.title")}
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              {t("about.subtitle")}
            </p>

            {/* Introduction */}
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("about.introTitle")}
              </h2>
              <p className="text-xl text-foreground/90 italic">
                {t("about.introText")}
              </p>
            </div>

            {/* Main Content */}
            <Card className="p-8 md:p-12 mb-12">
              <div className="prose prose-lg max-w-none">
                {t("about.mainText").split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            {/* Quote */}
            <Card className="p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <blockquote className="text-center">
                <div className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                  {t("about.quote").split('\n').map((line, index) => (
                    <p key={index} className="mb-2">"{line}"</p>
                  ))}
                </div>
                <footer className="text-lg text-muted-foreground">
                  — {t("about.quoteAuthor")}
                </footer>
              </blockquote>
            </Card>

            {/* Host */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">{t("about.hostTitle")}</h2>
              
              <div className="max-w-md mx-auto mb-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={gregoryBrenig} 
                    alt="Gregory Brenig" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{t("about.hostName")}</h3>
                <p className="text-primary font-semibold mb-4">{t("about.hostRole")}</p>
              </div>

              <div className="flex justify-center gap-4 mt-8 text-sm text-muted-foreground">
                <a href="https://blocktech.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Block Tech
                </a>
                <span>•</span>
                <a href="https://nlgconsulting.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
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
