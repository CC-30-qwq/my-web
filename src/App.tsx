import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import BrandLoader from './components/BrandLoader';

// 路由级代码分割：非首屏路由懒加载
const Home = lazy(() => import('./pages/Home'));
const Games = lazy(() => import('./pages/Games'));
const GameDetail = lazy(() => import('./pages/GameDetail'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <Suspense fallback={<BrandLoader />}>
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
