/**
 * 品牌 "W" Logo
 * - 统一 Header / Footer / BrandLoader 三处的 W 图标
 * - variant: 'brand' (渐变) | 'muted' (Footer 弱化版)
 * - size: 'sm' | 'md' | 'lg'
 */
interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'brand' | 'muted';
  /** 是否带呼吸光晕动效 (BrandLoader 用) */
  glow?: boolean;
}

const sizeMap = {
  sm: 'w-8 h-8 rounded-lg text-sm',
  md: 'w-6 h-6 rounded-md text-body-muted',
  lg: 'w-16 h-16 rounded-2xl text-2xl',
};

export default function BrandLogo({ size = 'sm', variant = 'brand', glow = false }: BrandLogoProps) {
  const sizeClass = sizeMap[size];
  const isBrand = variant === 'brand';

  return (
    <span
      className={`${sizeClass} flex items-center justify-center font-bold ${
        isBrand
          ? 'bg-gradient-to-br from-primary to-primary-dark text-white'
          : 'bg-bg-card text-text-muted border border-border'
      }`}
      style={glow ? { boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' } : undefined}
    >
      W
    </span>
  );
}
