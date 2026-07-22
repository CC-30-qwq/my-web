import { Link } from 'react-router-dom';
import { useState } from 'react';
import Badge from './ui/Badge';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const ENGINE_CONFIG: Record<string, { variant: 'primary' | 'accent' | 'success' | 'neutral'; accentBar: string; hoverBorder: string; gradient: string }> = {
  'Unity WebGL': {
    variant: 'primary',
    accentBar: 'bg-primary/60 group-hover:bg-primary',
    hoverBorder: 'group-hover:border-primary/40',
    gradient: 'from-primary/20 via-primary/10 to-bg-card',
  },
  'Cocos Creator': {
    variant: 'accent',
    accentBar: 'bg-accent/60 group-hover:bg-accent',
    hoverBorder: 'group-hover:border-accent/40',
    gradient: 'from-accent/20 via-accent/10 to-bg-card',
  },
  'AIGC': {
    variant: 'success',
    accentBar: 'bg-success/60 group-hover:bg-success',
    hoverBorder: 'group-hover:border-success/40',
    gradient: 'from-success/20 via-success/10 to-bg-card',
  },
};

const DEFAULT_ENGINE = {
  variant: 'neutral' as const,
  accentBar: 'bg-border group-hover:bg-text-muted',
  hoverBorder: 'group-hover:border-border',
  gradient: 'from-bg-card to-bg-card',
};

/**
 * 缩略图占位：16:9 渐变色
 * 如果有 thumbnail 路径就显示图片（lazy + skeleton），否则显示引擎色渐变
 */
function ThumbnailPlaceholder({ game }: { game: Game }) {
  const hasImage = !!game.thumbnail;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const gradient = ENGINE_CONFIG[game.engine]?.gradient ?? DEFAULT_ENGINE.gradient;

  if (hasImage && !imgError) {
    return (
      <div className="relative w-full aspect-video overflow-hidden bg-bg-card">
        {/* Skeleton pulse */}
        {!imgLoaded && (
          <div className="absolute inset-0 skeleton-pulse" aria-hidden="true" />
        )}
        <img
          src={game.thumbnail}
          alt={`${game.name} 截图`}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    );
  }

  // 无图片或有错误 — 自动生成渐变色占位
  return (
    <div
      aria-label={`游戏：${game.name}`}
      className={`relative w-full aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
    >
      <span className="text-6xl opacity-20 select-none font-bold text-text-muted" aria-hidden="true">
        🎮
      </span>
      {/* 装饰圆点 */}
      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-primary/10" />
    </div>
  );
}

export default function GameCard({ game }: GameCardProps) {
  const cfg = ENGINE_CONFIG[game.engine] ?? DEFAULT_ENGINE;

  return (
    <Link
      to={`/games/${game.id}`}
      className={`group block card hover:-translate-y-1 ${cfg.hoverBorder}`}
    >
      {/* 引擎色条 */}
      <div className={`h-1 rounded-t-xl transition-colors ${cfg.accentBar}`} />

      {/* 缩略图区域 16:9 */}
      <ThumbnailPlaceholder game={game} />

      <div className="p-5">
        {/* 引擎 + 大小 */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant={cfg.variant}>{game.engine}</Badge>
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
