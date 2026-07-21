import { Link } from 'react-router-dom';
import Badge from './ui/Badge';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const engineToVariant = (engine: string): 'primary' | 'accent' | 'neutral' => {
  if (engine === 'Unity WebGL') return 'primary';
  if (engine === 'Cocos Creator') return 'accent';
  if (engine === 'AIGC') return 'accent';
  return 'neutral';
};

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/games/${game.id}`}
      className="group block card hover:-translate-y-1"
    >
      {/* 引擎色条 — 替代图片的视觉锚点 */}
      <div className={`h-1 rounded-t-xl ${
        game.engine === 'Unity WebGL'
          ? 'bg-primary/60 group-hover:bg-primary transition-colors'
          : 'bg-accent/60 group-hover:bg-accent transition-colors'
      }`} />

      <div className="p-5">
        {/* 引擎 + 大小 */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant={engineToVariant(game.engine)}>{game.engine}</Badge>
          <span className="text-body-muted">{game.size}</span>
        </div>

        {/* 标题 */}
        <h3 className="text-h2 text-text-primary group-hover:text-primary-light transition-colors mb-2.5">
          {game.name}
        </h3>

        {/* 描述 */}
        <p className="text-body text-text-secondary leading-relaxed line-clamp-3 mb-4">
          {game.description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-1.5">
          {game.tags.map((tag) => (
            <Badge key={tag} variant="neutral">{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
