import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

/**
 * 服务卡片 — 基于 IntersectionObserver 的触发式入场动画
 * 卡片进入视口 20% 时才触发，保持 stagger 延迟
 */
export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className="group card p-6 text-center hover:-translate-y-1"
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease-out ${index * 100}ms, transform 0.5s ease-out ${index * 100}ms`,
      }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-200">
        {icon}
      </div>
      <h3 className="text-body-strong text-text-primary mb-2.5">{title}</h3>
      <p className="text-body text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
