import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'md' | 'lg';
  children: ReactNode;
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5 border-transparent',
  ghost:
    'text-text-primary hover:bg-bg-card hover:-translate-y-0.5 border-transparent',
  outline:
    'border-border text-text-primary hover:border-primary/40 hover:bg-bg-card hover:-translate-y-0.5',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  md: 'px-6 py-2.5 text-body-strong rounded-lg',
  lg: 'px-7 py-3 text-body-strong rounded-lg',
};

/**
 * 统一按钮组件 — primary / ghost / outline 三种变体
 * 继承原生 button 属性，支持 disabled / aria-busy 等无障碍属性
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 border font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
