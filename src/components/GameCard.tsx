import { Link } from 'react-router-dom';
import { useState } from 'react';
import Badge from './ui/Badge';
import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
}

const engineToVariant = (engine: string): 'primary' | 'accent' | 'success' | 'neutral' => {
  if (engine === 'Unity WebGL') return 'primary';
  if (engine === 'Cocos Creator') return 'accent';
  if (engine === 'AIGC') return 'success';
  return 'neutral';
};

/** 引擎对应的顶部色条颜色 */
const engineAccentBar = (engine: string): string => {
  if (engine === 'Unity WebGL') return 'bg-primary/60 group-hover:bg-primary';
  if (engine === 'Cocos Creator') return 'bg-accent/60 group-hover:bg-accent';
  if (engine === 'AIGC') return 'bg-success/60 group-hover:bg-success';
  return 'bg-border group-hover:bg-text-muted';
};

/** 引擎对应的 hover border 颜色 */
const engineHoverBorder = (engine: string): string => {
  if (engine === 'Unity WebGL') return 'group-hover:border-primary/40';
  if (engine === 'Cocos Creator') return 'group-hover:border-accent/40';
  if (engine === 'AIGC') return 'group-hover:border-success/40';
  return 'group-hover:border-border';
};

/**
 * 缩略图占位：16:9 渐变色
 * 如果有 thumbnail 路径就显示图片（lazy + skeleton），否则显示引擎色渐变
 */
function ThumbnailPlaceholder({ game }: { game: Game }) {
  const hasImage = !!game.thumbnail;
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // 渐变色映射
  const gradientMap: Record<string, string> = {
    'Unity WebGL': 'from-primary/20 via-primary/10 to-bg-card',
    'Cocos Creator': 'from-accent/20 via-accent/10 to-bg-card',
    'AIGC': 'from-success/20 via-success/10 to-bg-card',
  };

  const gradient = gradientMap[game.engine] || 'from-bg-card to-bg-card';

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
    <div className={`relative w-full aspect-video bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
      <span className="text-4xl opacity-20 select-none font-bold text-text-muted">
        {game.name.charAt(0)}
      </span>
      {/* 装饰圆点 */}
      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-primary/10" />
    </div>
  );
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <Link
      to={`/games/${game.id}`}
      className={`group block card hover:-translate-y-1 ${engineHoverBorder(game.engine)}`}
    >
      {/* 引擎色条 */}
      <div className={`h-1 rounded-t-xl transition-colors ${engineAccentBar(game.engine)}`} />

      {/* 缩略图区域 16:9 */}
      <ThumbnailPlaceholder game={game} />

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
