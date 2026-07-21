interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="group card p-6 text-center hover:-translate-y-1 animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-200">
        {icon}
      </div>
      <h3 className="text-body-strong text-text-primary mb-2.5">{title}</h3>
      <p className="text-body text-text-secondary leading-relaxed">{description}</p>
    </div>
  );
}
