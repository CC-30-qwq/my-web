interface BadgeProps {
  variant?: 'primary' | 'accent' | 'neutral' | 'success';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

const variantStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  primary: 'bg-primary/15 text-primary-light border-primary/20',
  accent: 'bg-accent/15 text-accent border-accent/20',
  neutral: 'bg-bg-dark/50 text-text-muted border-border/50',
  success: 'bg-success/15 text-success border-success/20',
};

const sizeStyles: Record<NonNullable<BadgeProps['size']>, string> = {
  sm: 'text-body-muted px-2 py-0.5',
  md: 'text-body px-2.5 py-1',
};

/**
 * 纯展示 Badge 组件
 * 语义化 variant 替代硬编码的颜色映射
 */
export default function Badge({ variant = 'neutral', size = 'sm', children }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full font-medium border ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {children}
    </span>
  );
}
