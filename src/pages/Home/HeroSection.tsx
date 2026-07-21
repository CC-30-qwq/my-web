import { Link } from 'react-router-dom';

const stats = [
  { value: 'Unity', label: 'Cocos Creator' },
  { value: 'C# / TS', label: '主力语言' },
  { value: 'MJ · SD', label: 'ComfyUI' },
  { value: '多端', label: '跨平台' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-bg-dark to-bg-section/30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-light px-4 py-1.5 rounded-full text-body-muted mb-8">
          <span className="w-2 h-2 bg-success rounded-full animate-pulse-dot" />
          <span>开放合作，欢迎联系</span>
        </div>

        <h1 className="text-h1 text-text-primary mb-6 leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          把想法变成
          <br className="sm:hidden" />
          <span className="text-gradient"> 能跑 </span>
          的东西
        </h1>

        <p className="text-body text-text-secondary mb-12 leading-relaxed max-w-xl mx-auto">
          会写游戏，会搭界面，会做 AIGC，会上线部署<br />
          独立搞定从零到一，也擅长团队协作交付
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            查看作品
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-border hover:border-primary/40 text-text-primary px-7 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-bg-card hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            联系我
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mt-14">
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center p-5 card">
              <div className="text-2xl font-bold text-text-primary group-hover:scale-110 transition-transform duration-200">
                {stat.value}
              </div>
              <div className="text-body-muted mt-1.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
