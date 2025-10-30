import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Parser from "rss-parser";

interface Episode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishDate: string;
  language: "fr" | "en";
  image?: string;
}

const Episodes = () => {
  const { t, i18n } = useTranslation();
  const [filter, setFilter] = useState<"all" | "fr" | "en">("all");
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const parser = new Parser();
        const feed = await parser.parseURL("https://anchor.fm/s/100214854/podcast/rss");
        
        const parsedEpisodes: Episode[] = feed.items.map((item, index) => ({
          id: item.guid || String(index),
          title: item.title || "Untitled Episode",
          description: item.contentSnippet || item.content || "",
          audioUrl: item.enclosure?.url || "",
          publishDate: item.pubDate || "",
          language: item.title?.toLowerCase().includes("english") ? "en" : "fr",
          image: item.itunes?.image || feed.image?.url,
        }));

        setEpisodes(parsedEpisodes);
      } catch (error) {
        console.error("Error fetching RSS feed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpisodes();
  }, []);

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
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading episodes...</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredEpisodes.map((episode) => (
                      <Card key={episode.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        {episode.image && (
                          <div className="aspect-video bg-muted overflow-hidden">
                            <img 
                              src={episode.image} 
                              alt={episode.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline">
                              {episode.language.toUpperCase()}
                            </Badge>
                            <Badge variant="secondary">
                              {new Date(episode.publishDate).toLocaleDateString()}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">{episode.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {episode.description}
                          </p>
                          <div className="flex gap-3">
                            {episode.audioUrl && (
                              <a href={episode.audioUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                                <Button variant="default" size="sm" className="w-full">
                                  {t("episodes.listen")}
                                </Button>
                              </a>
                            )}
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
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Episodes;
