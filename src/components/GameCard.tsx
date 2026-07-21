import { Link } from 'react-router-dom';
import Badge from './ui/Badge';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const engineToVariant = (engine: string): 'primary' | 'accent' | 'neutral' => {
  if (engine === 'Unity WebGL') return 'primary';
  if (engine === 'Cocos Creator') return 'accent';
  return 'neutral';
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/games/${game.id}`}
      className="group block card overflow-hidden hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-bg-card via-transparent to-bg-section flex items-center justify-center overflow-hidden relative">
        {game.thumbnail ? (
          <img
            src={game.thumbnail}
            alt={game.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="text-center">
            <svg
              className="w-14 h-14 mx-auto text-text-muted group-hover:scale-110 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}

        {/* Engine badge — 使用 Badge UI 组件，数据映射提升到组件层 */}
        <span className="absolute top-3 right-3">
          <Badge variant={engineToVariant(game.engine)}>{game.engine}</Badge>
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-body-strong text-text-primary group-hover:text-primary-light transition-colors leading-snug">
            {game.name}
          </h3>
          <span className="text-body-muted bg-bg-dark/50 px-2 py-0.5 rounded-md whitespace-nowrap shrink-0">{game.size}</span>
        </div>

        <p className="text-body text-text-secondary leading-relaxed line-clamp-2 mb-3">
          {game.description}
        </p>

        {/* Tags — 使用 Badge UI 组件 */}
        <div className="flex flex-wrap gap-1.5">
          {game.tags.map((tag) => (
            <Badge key={tag} variant="neutral">{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
