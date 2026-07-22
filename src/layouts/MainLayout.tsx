import { useLocation, Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop from '../components/BackToTop';

/**
 * 页面切换过渡包装器
 * 旧页面淡出（150ms）→ 新页面淡入（300ms）
 */
function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [phase, setPhase] = useState<'entering' | 'active'>('active');
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      setPhase('entering');
      prevPath.current = location.pathname;
      // 等一帧再触发出场动画完成
      const timer = setTimeout(() => setPhase('active'), 200);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div
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

export default function MainLayout() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
