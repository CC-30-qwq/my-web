/**
 * 品牌化加载动画
 * - 网站 Logo 的 "W" 字母，带呼吸缩放 + 底部淡入淡出光晕
 * - 背景保持 bg-dark
 */
export default function BrandLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-dark" role="status" aria-label="页面加载中">
      <div className="flex flex-col items-center gap-6">
        {/* W Logo — 呼吸缩放 */}
        <div
          className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white text-2xl font-bold animate-brand-breathe"
          style={{ boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)' }}
        >
          W
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
