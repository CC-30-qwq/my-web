import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// 路由级代码分割：非首屏路由懒加载
const Home = lazy(() => import('./pages/Home'));
const Games = lazy(() => import('./pages/Games'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const Contact = lazy(() => import('./pages/Contact'));

/** 路由切换时的骨架屏 fallback */
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark">
      <div
        className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin"
        role="status"
        aria-label="页面加载中"
      />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        {/* GameDetail uses full-screen layout without header/footer */}
        <Route path="/games/:id" element={<GameDetail />} />
      </Routes>
    </Suspense>
  );
}
