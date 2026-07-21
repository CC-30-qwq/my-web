import ServiceCard from '../../components/ServiceCard';

const services = [
  {
    icon: '🎮',
    title: '互动应用开发',
    description: '基于 Unity 和 Cocos Creator 引擎的互动应用开发，支持多平台发布，性能优化经验丰富。',
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
    description: '资源压缩（Gzip/Brotli）、CDN 缓存策略、代码分割与懒加载，保障流畅体验。',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 bg-bg-section/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">
            服务项目
          </span>
          <h2 className="text-h2 text-text-primary mt-3 mb-4">业务服务</h2>
          <p className="text-text-secondary max-w-xl mx-auto text-body leading-relaxed">
            提供从项目开发到上线部署的全链路服务
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
