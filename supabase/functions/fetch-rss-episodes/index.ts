import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Episode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  publishDate: string;
  language: "fr" | "en";
  image?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching RSS feed from Anchor...');
    const rssUrl = "https://anchor.fm/s/100214854/podcast/rss";
    
    const response = await fetch(rssUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }
    
    const text = await response.text();
    console.log('RSS feed fetched successfully');
    
    // Simple regex-based XML parsing (Deno edge functions don't have DOMParser)
    const itemMatches = text.matchAll(/<item>([\s\S]*?)<\/item>/g);
    const episodes: Episode[] = [];
    
    let index = 0;
    for (const match of itemMatches) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
      const title = (titleMatch?.[1] || titleMatch?.[2] || "Untitled Episode").trim();
      
      const descMatch = itemContent.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/s);
      const description = (descMatch?.[1] || descMatch?.[2] || "").replace(/<[^>]*>/g, "").trim();
      
      const audioMatch = itemContent.match(/<enclosure[^>]*url="([^"]*)"[^>]*>/);
      const audioUrl = audioMatch?.[1] || "";
      
      const dateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const publishDate = dateMatch?.[1] || "";
      
      const imageMatch = itemContent.match(/<itunes:image[^>]*href="([^"]*)"[^>]*>/);
      const channelImageMatch = text.match(/<image>\s*<url>(.*?)<\/url>/);
      const image = imageMatch?.[1] || channelImageMatch?.[1] || "";
      
      const guidMatch = itemContent.match(/<guid[^>]*>(.*?)<\/guid>/);
      const id = guidMatch?.[1] || String(index);
      
      episodes.push({
        id,
        title,
        description,
        audioUrl,
        publishDate,
        language: title.toLowerCase().includes("english") ? "en" : "fr",
        image,
      });
      
      index++;
    }

    console.log(`Returning ${episodes.length} parsed episodes`);

    return new Response(
      JSON.stringify({ episodes }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : 'Unknown error',
        episodes: [] 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
