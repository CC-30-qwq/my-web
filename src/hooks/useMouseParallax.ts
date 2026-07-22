import { useState, useEffect, useCallback, useRef } from 'react';

interface ParallaxState {
  /** 鼠标相对容器中心偏移比例 (-1 ~ 1) */
  x: number;
  y: number;
  /** 是否正在悬停 */
  hovering: boolean;
}

/**
 * 鼠标视差效果 Hook
 * - 监听容器内鼠标位置，返回相对于容器中心的偏移比例 (-1 ~ 1)
 * - 用于 Hero 标题和光晕的跟随移动效果
 * - 使用 passive 事件 + rAF 节流
 */
export function useMouseParallax() {
  const [state, setState] = useState<ParallaxState>({ x: 0, y: 0, hovering: false });
  const containerRef = useRef<HTMLElement | null>(null);
  const rafId = useRef(0);

  const setContainerRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 ~ 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setState({ x, y, hovering: true });
      });
    };

    const handleMouseLeave = () => {
      cancelAnimationFrame(rafId.current);
      setState({ x: 0, y: 0, hovering: false });
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { ...state, ref: setContainerRef };
}
