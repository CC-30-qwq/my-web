/**
 * 品牌化加载动画
 * - 网站 Logo 的 "W" 字母，带呼吸缩放 + 底部淡入淡出光晕
 * - 背景保持 bg-dark
 */
import BrandLogo from './BrandLogo';

export default function BrandLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark" role="status" aria-label="页面加载中">
      <div className="flex flex-col items-center gap-6">
        <div className="animate-brand-breathe">
          <BrandLogo size="lg" glow />
        </div>
        {/* 底部光晕 */}
        <div
          className="w-12 h-1 bg-primary/40 rounded-full animate-brand-glow"
        />
        <p className="text-text-muted text-body-muted mt-1">加载中...</p>
      </div>
    </div>
  );
}
