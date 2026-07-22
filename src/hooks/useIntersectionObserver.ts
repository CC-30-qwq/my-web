import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIOOptions {
  /** 元素进入视口的比例阈值 (0-1)，默认 0.2 */
  threshold?: number;
  /** 提前触发的边距，如 '200px' */
  rootMargin?: string;
  /** 是否只触发一次 */
  once?: boolean;
}

/**
 * 通用 IntersectionObserver Hook
 * - 用于滚动触发的入场动画、图片懒加载等
 * - 支持 once 模式（触发一次后断开观察）
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  rootMargin = '0px',
  once = true,
}: UseIOOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setRef = useCallback((node: T | null) => {
    // 清理旧观察者
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    if (node) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            if (once) {
              observerRef.current?.disconnect();
              observerRef.current = null;
            }
          } else if (!once) {
            setIsIntersecting(false);
          }
        },
        { threshold, rootMargin }
      );
      observerRef.current.observe(node);
    }

    ref.current = node;
  }, [threshold, rootMargin, once]);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return { ref: setRef, isIntersecting };
}
