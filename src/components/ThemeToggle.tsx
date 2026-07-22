import { useState, useEffect, useCallback, useRef } from 'react';

type Theme = 'dark' | 'light';

/**
 * 亮色/暗色主题切换按钮
 * - 太阳/月亮图标切换
 * - 圆形遮罩扩散过渡动画（Material ripple 风格）
 * - localStorage 持久化
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  const [ripple, setRipple] = useState<{ x: number; y: number; show: boolean }>({
    x: 0, y: 0, show: false,
  });
  const btnRef = useRef<HTMLButtonElement>(null);

  // 应用主题到 document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    // 计算点击位置（相对视口）
    const x = e.clientX;
    const y = e.clientY;
    setRipple({ x, y, show: true });

    // 延迟切换主题，让 ripple 先扩散
    setTimeout(() => {
      setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    }, 150);

    // 清除 ripple
    setTimeout(() => {
      setRipple({ x: 0, y: 0, show: false });
    }, 600);
  }, []);

  return (
    <>
      {/* Ripple overlay */}
      {ripple.show && (
        <div
          className="fixed inset-0 z-[100] pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute rounded-full animate-theme-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '0',
              height: '0',
              background: theme === 'dark'
                ? 'rgba(248, 250, 252, 0.3)'
                : 'rgba(15, 23, 42, 0.3)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        </div>
      )}

      <button
        ref={btnRef}
        onClick={toggle}
        className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors focus-visible:outline-2 focus-visible:outline-primary-light focus-visible:outline-offset-2"
        aria-label={theme === 'dark' ? '切换到亮色模式' : '切换到暗色模式'}
        title={theme === 'dark' ? '亮色模式' : '暗色模式'}
      >
        {/* 太阳图标 (当前是暗色 → 显示太阳) */}
        {theme === 'dark' ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          /* 月亮图标 (当前是亮色 → 显示月亮) */
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    </>
  );
}
