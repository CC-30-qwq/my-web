import { useCallback } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';

/**
 * 回到顶部浮动按钮
 * - 滚动超过 300px 时淡入显示
 * - 平滑滚动到顶部
 * - hover 放大 10% + primary 外发光
 */
export default function BackToTop() {
  const visible = useScrollSpy(300);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-primary text-white shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-primary-light focus-visible:outline-offset-4 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="回到顶部"
      style={{
        boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
