import { useState, useEffect, useRef } from 'react';

/**
 * 滚动进度条 — 页面顶部 2px primary 色渐变条
 * 固定在 Header 下方，宽度随滚动的百分比变化
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafId = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) {
          setProgress(0);
          return;
        }
        setProgress(Math.min(scrollTop / docHeight, 1) * 100);
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      className="fixed top-16 left-0 z-40 h-0.5 pointer-events-none"
      style={{
        width: `${progress}%`,
        background: 'linear-gradient(90deg, #6366f1, #818cf8, #6366f1)',
        transition: 'width 0.1s linear',
      }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="页面滚动进度"
    />
  );
}
