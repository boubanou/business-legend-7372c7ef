import { memo } from "react";

interface SocialIconProps {
  href: string;
  label: string;
  children: React.ReactNode;
  name?: string;
}

const SocialIcon = ({ href, label, children, name }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center gap-2 hover:scale-110 transition-transform group"
    aria-label={label}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      {children}
    </div>
    {name && <span className="text-xs text-muted-foreground text-center">{name}</span>}
  </a>
);

export default memo(SocialIcon);
