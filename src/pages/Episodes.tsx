import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Episodes = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<"all" | "fr" | "en">("all");

  // Placeholder episodes data
  const episodes = [
    {
      id: 1,
      title: "Episode Example",
      language: "fr",
      videoId: "placeholder",
      subtitles: ["en"],
    },
  ];

  const filteredEpisodes = episodes.filter(
    (ep) => filter === "all" || ep.language === filter
  );

  return (
    <>
      <Helmet>
        <title>{t("episodes.title")} | Business Legend</title>
        <meta name="description" content={t("episodes.subtitle")} />
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                {t("episodes.title")}
              </h1>
              <p className="text-xl text-muted-foreground text-center mb-12">
                {t("episodes.subtitle")}
              </p>

              {/* Filters */}
              <div className="flex justify-center gap-4 mb-12">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                >
                  {t("episodes.all")}
                </Button>
                <Button
                  variant={filter === "fr" ? "default" : "outline"}
                  onClick={() => setFilter("fr")}
                >
                  {t("episodes.french")}
                </Button>
                <Button
                  variant={filter === "en" ? "default" : "outline"}
                  onClick={() => setFilter("en")}
                >
                  {t("episodes.english")}
                </Button>
              </div>

              {/* Episodes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredEpisodes.map((episode) => (
                  <Card key={episode.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <p className="text-muted-foreground">YouTube Embed</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline">
                          {episode.language.toUpperCase()}
                        </Badge>
                        {episode.subtitles.map((sub) => (
                          <Badge key={sub} variant="secondary">
                            {t("episodes.subtitles")} {sub.toUpperCase()}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{episode.title}</h3>
                      <div className="flex gap-3">
                        <Button variant="default" size="sm">
                          {t("episodes.watch")}
                        </Button>
                        <Button variant="outline" size="sm">
                          {t("episodes.listen")}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {filteredEpisodes.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No episodes found for this filter.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Episodes;
