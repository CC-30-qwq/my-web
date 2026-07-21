import { useState } from 'react';
import GameCard from '../../components/GameCard';
import games from '../../data/games';

const allTags = Array.from(new Set(games.flatMap((g) => g.tags))).sort();

export default function Games() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedEngine, setSelectedEngine] = useState<string>('');

  // 直接 filter — 无需 useMemo 开销
  const filtered = games.filter((game) => {
    const matchSearch =
      !search ||
      game.name.toLowerCase().includes(search.toLowerCase()) ||
      game.description.toLowerCase().includes(search.toLowerCase());
    const matchTag = !selectedTag || game.tags.includes(selectedTag);
    const matchEngine = !selectedEngine || game.engine === selectedEngine;
    return matchSearch && matchTag && matchEngine;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">作品列表</span>
        <h1 className="text-h1 text-text-primary mt-3 mb-3 sm:text-4xl">作品</h1>
        <p className="text-text-secondary text-body max-w-md mx-auto">
          游戏可在线试玩，AIGC 视频可直接播放
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="搜索游戏..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-bg-card border border-border rounded-lg text-text-primary placeholder-text-muted text-body transition-all"
            aria-label="搜索游戏"
          />
        </div>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="py-2.5 px-4 bg-bg-card border border-border rounded-lg text-text-primary text-body cursor-pointer min-w-[120px]"
          aria-label="按类型筛选"
        >
          <option value="">全部类型</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>

        <select
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
          className="py-2.5 px-4 bg-bg-card border border-border rounded-lg text-text-primary text-body cursor-pointer min-w-[140px]"
          aria-label="按引擎筛选"
        >
          <option value="">全部类型</option>
          <option value="Unity WebGL">Unity WebGL</option>
          <option value="Cocos Creator">Cocos Creator</option>
          <option value="AIGC">AIGC</option>
        </select>
      </div>

      {/* Game Grid */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20" role="status">
          <svg className="w-16 h-16 mx-auto text-text-muted/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-text-secondary text-h2">没有找到匹配的作品</p>
          <p className="text-text-muted text-body mt-1">试试调整筛选条件</p>
        </div>
      )}
    </div>
  );
}
