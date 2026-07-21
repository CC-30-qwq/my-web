import { useState } from 'react';

interface IframeLoaderProps {
  src: string;
  title: string;
}

/**
 * WebGL 游戏 iframe 加载器
 * 提供完整的 加载中 → 成功/失败 反馈闭环
 * 使用骨架屏替代转圈，符合游戏加载的用户心理模型
 */
export default function IframeLoader({ src, title }: IframeLoaderProps) {
  const [phase, setPhase] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className="flex-1 relative bg-black">
      {/* 加载态：骨架屏 */}
      {phase === 'loading' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-bg-dark z-10"
          role="status"
          aria-label={`${title} 正在加载中`}
          aria-live="polite"
        >
          {/* 游戏图标占位 */}
          <div className="w-20 h-20 rounded-2xl bg-bg-card animate-pulse" aria-hidden="true" />

          <div className="space-y-2 text-center">
            <p className="text-text-primary font-semibold text-body">{title}</p>

            {/* 骨架进度条 */}
            <div
              className="w-56 h-1.5 bg-bg-card rounded-full overflow-hidden"
              aria-hidden="true"
            >
              <div
                className="h-full bg-primary/40 rounded-full animate-pulse"
                style={{ width: '60%' }}
              />
            </div>

            <p className="text-text-muted text-body-muted tabular-nums">
              加载中...
            </p>
          </div>
        </div>
      )}

      {/* 错误态 */}
      {phase === 'error' && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-bg-dark z-10"
          role="alert"
        >
          <svg
            className="w-14 h-14 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
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
        className="w-full h-full border-0"
        allow="accelerometer; autoplay; clipboard-write; gyroscope"
        allowFullScreen
        onLoad={() => setPhase('loaded')}
        onError={() => setPhase('error')}
      />
    </div>
  );
}
