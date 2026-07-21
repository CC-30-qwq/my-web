interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, index = 0 }: ServiceCardProps) {
  return (
    <div
      className="group bg-bg-card rounded-2xl p-6 border border-border/60 glow-on-hover hover:-translate-y-1 text-center animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-2.5">{title}</h3>
      <p className="text-text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  );
}
