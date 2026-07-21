import { useState, useCallback, useEffect } from 'react';

interface IframeLoaderProps {
  src: string;
  title: string;
}

export default function IframeLoader({ src, title }: IframeLoaderProps) {
  const [phase, setPhase] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [fullscreen, setFullscreen] = useState(false);

  // ESC 退出全屏
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') setFullscreen(false);
  }, []);

  useEffect(() => {
    if (fullscreen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [fullscreen, handleKeyDown]);

  const content = (
    <div className="relative bg-black" style={{ width: '100%', height: '100%' }}>
      {/* 加载态：骨架屏 */}
      {phase === 'loading' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-bg-dark z-10"
          role="status"
          aria-label={`${title} 正在加载中`}
          aria-live="polite"
        >
          <div className="w-20 h-20 rounded-2xl bg-bg-card animate-pulse" aria-hidden="true" />
          <div className="space-y-2 text-center">
            <p className="text-text-primary font-semibold text-body">{title}</p>
            <div className="w-56 h-1.5 bg-bg-card rounded-full overflow-hidden" aria-hidden="true">
              <div className="h-full bg-primary/40 rounded-full animate-pulse" style={{ width: '60%' }} />
            </div>
            <p className="text-text-muted text-body-muted tabular-nums">加载中...</p>
          </div>
        </div>
      )}

      {/* 错误态 */}
      {phase === 'error' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-bg-dark z-10"
          role="alert"
        >
          <svg className="w-14 h-14 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <p className="text-text-secondary text-body">{title} 加载失败</p>
          <button
            onClick={() => setPhase('loading')}
            className="px-5 py-2.5 bg-primary/20 text-primary-light rounded-lg text-body-strong hover:bg-primary/30 transition-colors focus-visible:outline-2 focus-visible:outline-primary/40"
          >
            重新加载
          </button>
        </div>
      )}

      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; gyroscope"
        allowFullScreen
        onLoad={() => setPhase('loaded')}
        onError={() => setPhase('error')}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
      />
    </div>
  );

  if (fullscreen) {
    return (
      <div
        className="fixed inset-0 z-[100] bg-black"
        style={{ width: '100vw', height: '100vh' }}
      >
        {/* 退出全屏按钮 */}
        <button
          onClick={() => setFullscreen(false)}
          className="absolute top-4 right-4 z-10 px-4 py-2 bg-bg-card/80 backdrop-blur-sm border border-border rounded-lg text-text-secondary hover:text-text-primary text-body transition-colors"
          aria-label="退出全屏"
        >
          ✕ 退出全屏
        </button>
        {content}
      </div>
    );
  }

  return (
    <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
      {content}
      {/* 全屏按钮 */}
      <button
        onClick={() => setFullscreen(true)}
        className="absolute bottom-4 right-4 z-10 px-4 py-2 bg-bg-card/80 backdrop-blur-sm border border-border rounded-lg text-text-secondary hover:text-text-primary text-body transition-colors"
        aria-label="进入全屏"
      >
        ⛶ 全屏
      </button>
    </div>
  );
}
