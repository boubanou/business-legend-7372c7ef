import { useState, memo } from "react";
import { Play } from "lucide-react";

interface LiteYouTubeProps {
  videoId: string;
  title: string;
}

const LiteYouTube = ({ videoId, title }: LiteYouTubeProps) => {
  const [isActive, setIsActive] = useState(false);

  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (isActive) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      />
    );
  }

  return (
    <button
      onClick={() => setIsActive(true)}
      className="relative w-full h-full bg-black group cursor-pointer"
      aria-label={`Play: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover"
        loading="eager"
        decoding="async"
        width="480"
        height="360"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
          <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" />
        </div>
      </div>
    </button>
  );
};

export default memo(LiteYouTube);
