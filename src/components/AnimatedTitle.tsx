import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedTitleProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  /** 每个字符的延迟 (ms)，默认 50 */
  charDelay?: number;
}

/**
 * 逐字渐入动画标题
 * - 当滚动进入视口时，每个字符从左下到右上依次淡入+上移
 * - 使用 IntersectionObserver 触发
 */
export default function AnimatedTitle({
  text,
  as: Tag = 'h2',
  className = '',
  charDelay = 50,
}: AnimatedTitleProps) {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.3 });
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isIntersecting && !started) {
      setStarted(true);
    }
  }, [isIntersecting, started]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="char-anim"
          style={{
            animationDelay: started ? `${i * charDelay}ms` : '0ms',
            display: 'inline-block',
            // 空格保留正常宽度和换行行为
            whiteSpace: char === ' ' ? 'pre' : undefined,
          }}
          aria-hidden={char === ' ' ? true : undefined}
        >
          {char}
        </span>
      ))}
    </Tag>
  );
}
