import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Partnerships = () => {
  const { t, i18n } = useTranslation();

  const formats = [
    { title: t("partnerships.preroll"), desc: t("partnerships.prerollDesc") },
    { title: t("partnerships.hostRead"), desc: t("partnerships.hostReadDesc") },
    { title: t("partnerships.exclusive"), desc: t("partnerships.exclusiveDesc") },
    { title: t("partnerships.shorts"), desc: t("partnerships.shortsDesc") },
  ];

  const steps = [
    { title: t("partnerships.step1"), desc: t("partnerships.step1Desc") },
    { title: t("partnerships.step2"), desc: t("partnerships.step2Desc") },
    { title: t("partnerships.step3"), desc: t("partnerships.step3Desc") },
    { title: t("partnerships.step4"), desc: t("partnerships.step4Desc") },
  ];

  return (
    <>
      <Helmet>
        <title>{t("nav.partnerships")} | Business Legend</title>
        <meta name="description" content={t("partnerships.heroSubtitle")} />
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-accent text-secondary-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t("partnerships.heroTitle")}
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {t("partnerships.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t("partnerships.requestKit")}
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary">
                {t("partnerships.bookCall")}
              </Button>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("partnerships.whyPartner")}
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("partnerships.premiumTitle")}</h3>
                <p className="text-lg text-muted-foreground">{t("partnerships.premiumText")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">{t("partnerships.narrativeTitle")}</h3>
                <p className="text-lg text-muted-foreground">{t("partnerships.narrativeText")}</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">{t("partnerships.formatTitle")}</h3>
                <p className="text-lg text-muted-foreground">{t("partnerships.formatText")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Formats */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("partnerships.formats")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formats.map((format, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">{format.title}</h3>
                      <p className="text-muted-foreground">{format.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              {t("partnerships.process")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-accent text-secondary-foreground">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("partnerships.ctaTitle")}
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              {t("partnerships.ctaText")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                {t("partnerships.requestKit")}
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary">
                {t("partnerships.bookCall")}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partnerships;
