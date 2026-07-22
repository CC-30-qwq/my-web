import BrandLogo from './BrandLogo';
import { Icons } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-card/50 border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-text-secondary text-body">
            <BrandLogo size="md" variant="muted" />
            <span>&copy; {currentYear} 作品集</span>
          </div>

          <div className="flex items-center gap-5">
            {/* GitHub — hover 还原品牌色 #333 (亮色) / #f5f5f5 (暗色) */}
            <a
              href="https://github.com/CC-30-qwq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-[#f5f5f5] transition-colors duration-200"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={Icons.github} />
              </svg>
            </a>

            {/* Bilibili — hover 粉色 #fb7299 */}
            <a
              href="https://space.bilibili.com/3546640105343454"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-[#fb7299] transition-colors duration-200"
              aria-label="Bilibili"
            >
              <span className="text-sm font-bold">B站</span>
            </a>

            {/* Email — hover primary 色 */}
            <a
              href="mailto:1025848465@qq.com"
              className="text-text-muted hover:text-primary-light transition-colors duration-200"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={Icons.mail} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
