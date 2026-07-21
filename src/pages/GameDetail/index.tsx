import { useParams, Link } from 'react-router-dom';
import games from '../../data/games';

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-dark">
        <div className="text-center px-4">
          <svg className="w-20 h-20 mx-auto text-text-muted/50 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-text-primary mb-2">游戏未找到</h1>
          <p className="text-text-secondary text-sm mb-6">该游戏不存在或已被移除</p>
          <Link
            to="/games"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回游戏中心
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-bg-dark">
      {/* Top bar */}
      <div className="shrink-0 bg-bg-card/95 backdrop-blur-sm border-b border-border px-5 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link
              to="/games"
              className="text-text-muted hover:text-text-primary transition-colors shrink-0"
              aria-label="返回游戏列表"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="min-w-0">
              <h2 className="text-base font-semibold text-text-primary truncate">{game.name}</h2>
              <div className="flex items-center gap-2 text-[11px] text-text-muted">
                <span>{game.engine}</span>
                <span className="opacity-40">·</span>
                <span>{game.size}</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {game.tags.map((tag) => (
              <span key={tag} className="text-[11px] text-text-muted bg-bg-dark/80 px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Game iframe */}
      <div className="flex-1 bg-black">
        <iframe
          src={game.path}
          title={game.name}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; gyroscope"
          allowFullScreen
        />
      </div>
    </div>
  );
}
