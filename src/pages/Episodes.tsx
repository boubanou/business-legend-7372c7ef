import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";

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
        const { data, error } = await supabase.functions.invoke('fetch-rss-episodes');
        
        if (error) {
          throw error;
        }
        
        if (data?.episodes) {
          setEpisodes(data.episodes);
        }
      } catch (error) {
        console.error("Error fetching episodes:", error);
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
        <title>{i18n.language === 'fr' ? 'Épisodes du Business Legend Podcast | Histoires d\'entrepreneurs et leaders' : 'Business Legend Podcast Episodes | Stories of entrepreneurs and leaders'}</title>
        <meta name="description" content={i18n.language === 'fr' ? "Découvrez des interviews profondes de fondateurs, dirigeants et créateurs d'entreprises qui inspirent le monde des affaires. Podcast business bilingue français-anglais." : "Discover deep interviews with founders, executives and business creators who inspire the business world. Bilingual French-English business podcast."} />
        <meta name="keywords" content="épisodes podcast business, interviews entrepreneurs, podcast leadership, episodes business legend, histoires entrepreneurs" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://businesslegend.co/episodes" />
        
        <meta property="og:title" content={i18n.language === 'fr' ? 'Épisodes Business Legend | Interviews entrepreneurs' : 'Business Legend Episodes | Entrepreneur interviews'} />
        <meta property="og:description" content={i18n.language === 'fr' ? "Interviews profondes de fondateurs et dirigeants inspirants." : "Deep interviews with inspiring founders and executives."} />
        <meta property="og:url" content="https://businesslegend.co/episodes" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={i18n.language === 'fr' ? 'Épisodes Business Legend' : 'Business Legend Episodes'} />
        <meta name="twitter:description" content={i18n.language === 'fr' ? "Interviews entrepreneurs et leaders" : "Entrepreneur and leader interviews"} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": i18n.language === 'fr' ? "Épisodes du Podcast Business Legend" : "Business Legend Podcast Episodes",
            "description": i18n.language === 'fr' ? "Tous les épisodes du podcast Business Legend avec des interviews inspirantes d'entrepreneurs, fondateurs et leaders du monde entier" : "All Business Legend podcast episodes with inspiring interviews of entrepreneurs, founders and leaders from around the world",
            "url": "https://businesslegend.co/episodes",
            "isPartOf": {
              "@type": "PodcastSeries",
              "name": "Business Legend",
              "@id": "https://businesslegend.co/#podcast"
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
                  "name": i18n.language === 'fr' ? "Épisodes" : "Episodes",
                  "item": "https://businesslegend.co/episodes"
                }
              ]
            }
          })}
        </script>
        
        <html lang={i18n.language} />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 md:mb-4">
                {t("episodes.title")}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-center mb-8 md:mb-12">
                {t("episodes.subtitle")}
              </p>

              {/* Filters */}
              <div className="flex justify-center gap-2 sm:gap-4 mb-8 md:mb-12 flex-wrap">
                <Button
                  variant={filter === "all" ? "default" : "outline"}
                  onClick={() => setFilter("all")}
                  size="sm"
                  className="sm:size-default"
                >
                  {t("episodes.all")}
                </Button>
                <Button
                  variant={filter === "fr" ? "default" : "outline"}
                  onClick={() => setFilter("fr")}
                  size="sm"
                  className="sm:size-default"
                >
                  {t("episodes.french")}
                </Button>
                <Button
                  variant={filter === "en" ? "default" : "outline"}
                  onClick={() => setFilter("en")}
                  size="sm"
                  className="sm:size-default"
                >
                  {t("episodes.english")}
                </Button>
              </div>

              {/* Episodes Grid */}
              {loading ? (
                <div className="text-center py-12">
                  <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mb-4"></div>
                  <p className="text-muted-foreground">{t("episodes.loading") || "Chargement des épisodes..."}</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {filteredEpisodes.map((episode) => (
                      <Card key={episode.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        {episode.image && (
                          <div className="aspect-video bg-muted overflow-hidden">
                            <img 
                              src={episode.image} 
                              alt={`${episode.title} - Business Legend Podcast episode cover`}
                              className="w-full h-full object-cover"
                              loading="lazy"
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
