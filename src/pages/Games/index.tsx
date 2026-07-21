import { useState, useMemo } from 'react';
import GameCard from '../../components/GameCard';
import games from '../../data/games';

const allTags = Array.from(new Set(games.flatMap((g) => g.tags))).sort();

export default function Games() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [selectedEngine, setSelectedEngine] = useState<string>('');

  const filtered = useMemo(() => {
    return games.filter((game) => {
      const matchSearch =
        !search ||
        game.name.toLowerCase().includes(search.toLowerCase()) ||
        game.description.toLowerCase().includes(search.toLowerCase());
      const matchTag = !selectedTag || game.tags.includes(selectedTag);
      const matchEngine = !selectedEngine || game.engine === selectedEngine;
      return matchSearch && matchTag && matchEngine;
    });
  }, [search, selectedTag, selectedEngine]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">游戏中心</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3 mb-3">游戏中心</h1>
        <p className="text-text-secondary text-sm max-w-md mx-auto">
          所有游戏均可在线试玩，无需下载安装。点击游戏卡片即可开始体验
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-10">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="搜索游戏..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-bg-card border border-border rounded-xl text-text-primary placeholder-text-muted text-sm transition-all"
          />
        </div>

        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
          className="py-2.5 px-4 bg-bg-card border border-border rounded-xl text-text-primary text-sm cursor-pointer min-w-[120px]"
        >
          <option value="">全部类型</option>
          {allTags.map((tag) => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>

        <select
          value={selectedEngine}
          onChange={(e) => setSelectedEngine(e.target.value)}
          className="py-2.5 px-4 bg-bg-card border border-border rounded-xl text-text-primary text-sm cursor-pointer min-w-[140px]"
        >
          <option value="">全部引擎</option>
          <option value="Unity WebGL">Unity WebGL</option>
          <option value="Cocos Creator">Cocos Creator</option>
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
        <div className="text-center py-20">
          <svg className="w-16 h-16 mx-auto text-text-muted/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-text-secondary text-lg">没有找到匹配的游戏</p>
          <p className="text-text-muted text-sm mt-1">试试调整筛选条件</p>
        </div>
      )}
    </div>
  );
}
