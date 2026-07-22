import { useState, useEffect, useRef } from 'react';

/**
 * 数字滚动计数动画 Hook
 * - 当 isActive 变为 true 时，从 0 开始滚动到 target 值
 * - 使用 requestAnimationFrame，duration 控制动画时长
 */
export function useCountUp(target: number, duration = 600, isActive = true) {
  const [display, setDisplay] = useState(0);
  const rafId = useRef(0);
  const startTime = useRef(0);
  const startValue = useRef(0);

  useEffect(() => {
    if (!isActive) return;

    startTime.current = 0;
    startValue.current = 0;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp: number) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }

      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = Math.round(startValue.current + (target - startValue.current) * easedProgress);

      setDisplay(current);

      if (progress < 1) {
        rafId.current = requestAnimationFrame(animate);
      }
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
    };
  }, [target, duration, isActive]);

  return display;
}
