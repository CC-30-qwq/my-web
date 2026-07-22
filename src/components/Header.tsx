import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import ThemeToggle from './ThemeToggle';
import BrandLogo from './BrandLogo';

const navLinks = [
  { to: '/', label: '首页' },
  { to: '/games', label: '作品' },
  { to: '/contact', label: '联系我' },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrollSpy(10);
  const navRef = useRef<HTMLDivElement>(null);

  // 滑动下划线：找到当前激活的 nav 项，计算其 offsetLeft/offsetWidth
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, show: false });

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // 计算滑动下划线位置（响应窗口 resize 和路径变化）
  useEffect(() => {
    const updateIndicator = () => {
      if (!navRef.current) return;
      const activeLink = navRef.current.querySelector<HTMLAnchorElement>('[data-active="true"]');
      if (activeLink) {
        setIndicatorStyle({
          left: activeLink.offsetLeft,
          width: activeLink.offsetWidth,
          show: true,
        });
      } else {
        setIndicatorStyle((prev) => ({ ...prev, show: false }));
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-bg-dark/95 backdrop-blur-md border-border shadow-lg shadow-black/10'
          : 'bg-bg-dark border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 font-bold text-text-primary hover:opacity-80 transition-opacity">
            <BrandLogo size="sm" />
            <span className="hidden sm:inline text-lg tracking-tight">作品集</span>
          </Link>

          {/* Desktop Nav + ThemeToggle */}
          <div className="hidden md:flex items-center gap-1">
            <nav ref={navRef} className="flex items-center gap-1 relative">
              {/* 滑动下划线指示器 */}
              {indicatorStyle.show && (
                <span
                  className="absolute bottom-1 h-0.5 rounded-full bg-gradient-to-r from-primary to-primary-light transition-all duration-300 ease-out"
                  style={{
                    left: `${indicatorStyle.left}px`,
                    width: `${indicatorStyle.width}px`,
                  }}
                />
              )}
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    data-active={isActive ? 'true' : 'false'}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-primary-light'
                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-card/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="ml-2 border-l border-border pl-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile: ThemeToggle + Menu toggle */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="切换菜单"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-fade-up">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary-light'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
