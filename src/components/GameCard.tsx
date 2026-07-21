import { Link } from 'react-router-dom';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const engineBadgeColors: Record<string, string> = {
  'Unity WebGL': 'bg-primary/20 text-primary-light',
  'Cocos Creator': 'bg-accent/20 text-accent',
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/games/${game.id}`}
      className="group block bg-bg-card rounded-2xl overflow-hidden border border-border/60 glow-on-hover hover:-translate-y-1 hover:border-primary/30"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-primary/20 via-transparent to-accent/20 flex items-center justify-center overflow-hidden relative">
        {game.thumbnail ? (
          <img
            src={game.thumbnail}
            alt={game.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="text-center">
            <svg className="w-14 h-14 mx-auto text-primary-light/50 mb-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}

        {/* Engine badge top-right */}
        <span className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-md font-medium ${engineBadgeColors[game.engine] || 'bg-bg-dark text-text-muted'}`}>
          {game.engine}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-base font-semibold text-text-primary group-hover:text-primary-light transition-colors leading-snug">
            {game.name}
          </h3>
          <span className="text-[11px] text-text-muted bg-bg-dark/50 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">{game.size}</span>
        </div>

        <p className="text-text-secondary text-[13px] leading-relaxed line-clamp-2 mb-3">
          {game.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {game.tags.map((tag) => (
            <span key={tag} className="text-[11px] text-text-muted bg-bg-dark/50 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
