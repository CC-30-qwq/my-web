import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;          // 原始 JPG/PNG 路径（约定同目录存在 .webp）
  alt: string;
  className?: string;
}

/**
 * 图片懒加载组件
 * - Intersection Observer 延迟加载（提前 200px 预加载）
 * - 自动请求 WebP 格式（同目录同名 .webp），JPG 作为 fallback
 * - 加载前渲染骨架脉冲占位，加载后淡入过渡
 * - 原生 loading="lazy" 双重保障
 */
export default function LazyImage({ src, alt, className = '' }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // 提前 200px 预加载，用户无感知
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 约定同目录下的 .webp 文件
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* 加载前骨架脉冲占位 */}
      {!loaded && (
        <div
          className="absolute inset-0 skeleton-pulse"
          aria-hidden="true"
        />
      )}

      {inView && (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)} // 即使失败也移除骨架，防止永久 loading
          />
        </picture>
      )}
    </div>
  );
}
