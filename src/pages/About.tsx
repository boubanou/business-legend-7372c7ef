import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";

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

            {/* Mission */}
            <Card className="p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4">{t("about.missionTitle")}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.missionText")}
              </p>
            </Card>

            {/* Host */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-8">{t("about.hostTitle")}</h2>
              
              <div className="max-w-md mx-auto mb-8">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground">GB</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{t("about.hostName")}</h3>
                <p className="text-primary font-semibold mb-4">{t("about.hostRole")}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {t("about.hostBio")}
                </p>
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
