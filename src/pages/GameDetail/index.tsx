import { useParams, Link } from 'react-router-dom';
import Badge from '../../components/ui/Badge';
import IframeLoader from '../../components/IframeLoader';
import games from '../../data/games';
import { Icons } from '../../components/Icons';

export default function GameDetail() {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-dark">
        <div className="text-center px-4" role="status">
          <svg className="w-20 h-20 mx-auto text-text-muted/50 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-h1 text-text-primary mb-2">作品未找到</h1>
          <p className="text-text-secondary text-body mb-6">该作品不存在或已被移除</p>
          <Link
            to="/games"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={Icons.arrowLeft} />
            </svg>
            返回作品列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    // h-dvh = 100dvh (动态视口高度，移动端地址栏折叠时自动适配)
    <div className="flex flex-col bg-bg-dark" style={{ height: '100dvh' }}>
      {/* Top bar — 精简高度 */}
      <div className="shrink-0 bg-bg-card/95 backdrop-blur-sm border-b border-border px-4 py-2">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 min-w-0">
            <Link
              to="/games"
              className="text-text-muted hover:text-text-primary transition-colors shrink-0 p-1"
              aria-label="返回作品列表"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={Icons.arrowLeft} />
              </svg>
            </Link>
            <div className="min-w-0">
              <h2 className="text-body-strong text-text-primary truncate">{game.name}</h2>
              <div className="flex items-center gap-2 text-body-muted" style={{ fontSize: '13px' }}>
                <span>{game.engine}</span>
                <span className="opacity-40" aria-hidden="true">·</span>
                <span>{game.size}</span>
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 shrink-0">
            {game.tags.map((tag) => (
              <Badge key={tag} variant="neutral">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>

      {/* 内容区域 — 自动填充剩余空间 */}
      {game.type === 'video' ? (
        <div className="flex-1 bg-black flex items-center justify-center p-4" style={{ minHeight: 0 }}>
          <video
            src={game.path}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain rounded-lg"
            style={{ maxHeight: 'calc(100dvh - 60px)' }}
          >
            <p className="text-white text-center p-10">您的浏览器不支持视频播放，请尝试用 Chrome 打开</p>
          </video>
        </div>
      ) : (
        <IframeLoader src={game.path} title={game.name} />
      )}
    </div>
  );
}
