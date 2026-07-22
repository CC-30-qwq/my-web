import { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import ParticleBackground from '../../components/ParticleBackground';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCountUp } from '../../hooks/useCountUp';

const stats = [
  { value: 3, suffix: '', label: 'Unity / Cocos 项目数量', isNumeric: true },
  { value: 3, suffix: '+', label: 'C# / TS 语言支持', isNumeric: true },
  { value: 3, suffix: '', label: 'AIGC 工具经验', isNumeric: true },
  { value: 4, suffix: '', label: '多端支持平台', isNumeric: true },
];

/** 按钮点击涟漪 Hook */
function useRipple() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    // 确保按钮有 overflow: hidden
    const rect = btn.getBoundingClientRect();
    const size = Math.max(btn.offsetWidth, btn.offsetHeight);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  }, []);

  return handleClick;
}

export default function HeroSection() {
  const { x, y, ref: parallaxRef } = useMouseParallax();
  const { ref: statsRef, isIntersecting: statsInView } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.3 });
  const handleRipple = useRipple();

  // 数字统计
  const count0 = useCountUp(3, 600, statsInView);
  const count1 = useCountUp(3, 600, statsInView);
  const count2 = useCountUp(3, 600, statsInView);
  const count3 = useCountUp(4, 600, statsInView);
  const counts = [count0, count1, count2, count3];

  return (
    <section
      ref={parallaxRef}
      className="relative overflow-hidden"
    >
      {/* 粒子背景 */}
      <ParticleBackground />

      {/* 背景渐变层 */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark to-bg-section/30" />

      {/* 背景光晕 — 跟随鼠标视差偏移 */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${x * 30}px), calc(-50% + ${y * 30}px))`,
          transition: 'transform 0.6s ease-out',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28 text-center">
        {/* 状态指示器 */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light px-4 py-1.5 rounded-full text-body-muted mb-8">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse-dot" />
          <span>开放合作，欢迎联系</span>
        </div>

        {/* 标题 — 鼠标视差偏移 */}
        <h1
          className="text-h1 text-text-primary mb-6 leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          style={{
            transform: `translate(${x * 8}px, ${y * 8}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        >
          把想法变成
          <br className="sm:hidden" />
          <span className="text-gradient"> 能跑 </span>
          的东西
        </h1>

        {/* 副标题 */}
        <p
          className="text-body text-text-secondary mb-12 leading-relaxed max-w-xl mx-auto"
          style={{
            transform: `translate(${x * 4}px, ${y * 4}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        >
          会写游戏，会搭界面，会做 AIGC，会上线部署<br />
          独立搞定从零到一，也擅长团队协作交付
        </p>

        {/* CTA 按钮 — 带涟漪效果 */}
        <div
          className="flex flex-wrap items-center justify-center gap-3"
          style={{
            transform: `translate(${x * 2}px, ${y * 2}px)`,
            transition: 'transform 0.6s ease-out',
          }}
        >
          <Link
            to="/games"
            onClick={handleRipple}
            className="ripple-container inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            查看作品
          </Link>
          <Link
            to="/contact"
            onClick={handleRipple}
            className="ripple-container inline-flex items-center gap-2 border border-border hover:border-primary/40 text-text-primary px-7 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-bg-card hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系我
          </Link>
        </div>

        {/* 统计面板 — 数字计数动画 */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-14"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="group text-center p-5 card">
              <div className="text-2xl font-bold text-text-primary group-hover:scale-110 transition-transform duration-200">
                {stat.isNumeric ? counts[i] : stat.value}{stat.suffix}
              </div>
              <div className="text-body-muted mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
