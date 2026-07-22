import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 页面切换过渡动画组件
 * - 旧页面：opacity 0 → 上移 10px，150ms
 * - 新页面：opacity 1 → 上移归位，300ms ease-out
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [phase, setPhase] = useState<'entering' | 'active'>('entering');
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      setPhase('entering');
      prevPath.current = location.pathname;
      const timer = setTimeout(() => setPhase('active'), 50); // 下一帧触发入场
      return () => clearTimeout(timer);
    } else {
      // 首次渲染：直接显示
      const timer = setTimeout(() => setPhase('active'), 50);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen"
      style={{
        opacity: phase === 'active' ? 1 : 0,
        transform: phase === 'active' ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
}
