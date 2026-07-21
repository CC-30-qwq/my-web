import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard';
import GameCard from '../../components/GameCard';
import games from '../../data/games';

const services = [
  {
    icon: '🎮',
    title: 'WebGL 游戏开发',
    description: '基于 Unity 和 Cocos Creator 引擎的 WebGL 游戏开发，支持多平台发布，性能优化经验丰富。',
  },
  {
    icon: '🖥️',
    title: '前端工程化',
    description: 'React / Vue / TypeScript 技术栈，现代化前端架构设计，组件化开发，响应式布局。',
  },
  {
    icon: '☁️',
    title: '云部署运维',
    description: '腾讯云 COS + CDN 静态资源部署，自动化构建流水线，持续集成与持续交付。',
  },
  {
    icon: '🎯',
    title: '性能优化',
    description: 'WebGL 资源压缩（Gzip/Brotli）、CDN 缓存策略、代码分割与懒加载，保障流畅体验。',
  },
];

const featuredGames = games.filter((g) => g.featured);

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light px-4 py-1.5 rounded-full text-sm mb-8">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse-dot" />
            <span>开放合作，欢迎联系</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-8 leading-tight tracking-tight">
            创造精彩的
            <br className="sm:hidden" />
            <span className="text-gradient"> WebGL 游戏 </span>
            体验
          </h1>

          <p className="text-base sm:text-lg text-text-secondary mb-12 leading-relaxed max-w-xl mx-auto">
            专注 WebGL 游戏开发与前端工程化，提供从游戏制作到云端部署的一站式解决方案
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/games"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              在线试玩
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-border hover:border-primary/40 text-text-primary px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-bg-card hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              联系我
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-14">
            {[
              { value: '5+', label: '上线游戏' },
              { value: '3', label: '引擎支持' },
              { value: '99.9%', label: '服务可用率' },
              { value: '<100ms', label: '平均延迟' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group text-center p-5 bg-bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 glow-on-hover"
              >
                <div className="text-2xl font-bold text-primary-light group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-xs text-text-muted mt-1.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== About ===== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">个人简介</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3 mb-4">关于我</h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
              一名热爱游戏开发的全栈工程师，专注于 WebGL 技术领域，
              致力于将优秀的游戏体验带到浏览器中
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { label: '开发经验', value: '3+ 年', color: 'from-primary/20 to-primary/5' },
              { label: '技术栈', value: 'React / Unity / Cocos', color: 'from-accent/20 to-accent/5' },
              { label: '擅长领域', value: 'WebGL / 前端工程化', color: 'from-primary/20 to-primary/5' },
              { label: '部署平台', value: '腾讯云 / Vercel / GitHub', color: 'from-accent/20 to-accent/5' },
              { label: '工作方式', value: '远程协作 / 独立开发', color: 'from-primary/20 to-primary/5' },
              { label: '开发理念', value: '性能优先 / 用户体验', color: 'from-accent/20 to-accent/5' },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-4 bg-bg-card bg-gradient-to-br ${item.color} rounded-xl p-5 border border-border/50 glow-on-hover`}
              >
                <span className="text-primary-light text-lg font-bold whitespace-nowrap">{item.value}</span>
                <span className="text-text-secondary text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* ===== Services ===== */}
      <section className="py-20 sm:py-24 bg-bg-section/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">服务项目</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3 mb-4">业务服务</h2>
            <p className="text-text-secondary max-w-xl mx-auto text-sm leading-relaxed">
              提供从游戏开发到上线部署的全链路服务
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Featured Games ===== */}
      <section className="py-20 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="text-xs font-semibold text-primary-light uppercase tracking-widest">游戏精选</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mt-3 mb-2">精选游戏</h2>
              <p className="text-text-secondary text-sm">在线试玩，无需下载安装</p>
            </div>
            <Link
              to="/games"
              className="hidden sm:inline-flex items-center gap-1.5 text-primary-light hover:text-primary font-medium text-sm transition-colors"
            >
              查看全部
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {featuredGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="text-center mt-10 sm:hidden">
            <Link
              to="/games"
              className="inline-flex items-center gap-1.5 text-primary-light font-medium text-sm"
            >
              查看全部游戏
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
