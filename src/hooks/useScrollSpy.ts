import { useState, useEffect, useRef } from 'react';

/**
 * 滚动监听 Hook — rAF 防抖 + 差量更新
 * 仅在值真正变化时才触发 re-render
 */
export function useScrollSpy(threshold = 10) {
  const [scrolled, setScrolled] = useState(false);
  const rafId = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const over = window.scrollY > threshold;
        setScrolled((prev) => (prev !== over ? over : prev));
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [threshold]);

  return scrolled;
}
