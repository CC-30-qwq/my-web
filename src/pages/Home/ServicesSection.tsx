import ServiceCard from '../../components/ServiceCard';

const services = [
  {
    icon: '🎮',
    title: '游戏开发',
    description: 'Unity 2D/3D、Cocos Creator 小游戏。Animator、UGUI、行为树、NavMesh、Input System，从玩法原型到完整项目交付。',
  },
  {
    icon: '🖥️',
    title: '前端工程',
    description: 'React / Vue / TypeScript，响应式布局，组件化架构。这个网站就是自己搭的。',
  },
  {
    icon: '🎨',
    title: 'UI 与交互',
    description: '界面拼接搭建、动效调校、多分辨率适配。关注信息层级与操作反馈，习惯站在用户角度审视体验。',
  },
  {
    icon: '☁️',
    title: '部署上线',
    description: '云服务静态部署、CDN 加速、CI/CD 流水线。抖音/微信/Web/PC 多平台发布与适配。',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-24 bg-bg-section/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">
            技能方向
          </span>
          <h2 className="text-h2 text-text-primary mt-3 mb-4">能做什么</h2>
          <p className="text-text-secondary max-w-xl mx-auto text-body leading-relaxed">
            不只一件——游戏、网页、界面、部署，哪块需要就搞哪块
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
