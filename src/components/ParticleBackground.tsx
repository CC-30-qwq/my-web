import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityDir: number;
}

/**
 * Canvas 粒子动画背景
 * - 粒子缓慢上浮 + 淡入淡出
 * - 使用 primary (#6366f1) 低透明度
 * - 性能友好：限制粒子数量，使用 requestAnimationFrame
 */
export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 粒子数量随屏幕宽度调整
    const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth * 0.06), 80);
    const PRIMARY_R = 99;
    const PRIMARY_G = 102;
    const PRIMARY_B = 241;

    let particles: Particle[] = [];
    let animId = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // 限制 dpr 节省性能
      w = canvas.parentElement?.offsetWidth || window.innerWidth;
      h = canvas.parentElement?.offsetHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 2 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.4,
        opacityDir: Math.random() > 0.5 ? 1 : -1,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        // 位置更新
        p.y -= p.speedY;
        p.x += p.speedX;

        // 透明度呼吸
        p.opacity += p.opacityDir * 0.003;
        if (p.opacity >= 0.5) p.opacityDir = -1;
        if (p.opacity <= 0.05) p.opacityDir = 1;

        // 边界循环
        if (p.y < -10) { p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        // 绘制
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${p.opacity.toFixed(3)})`;
        ctx.fill();
      }

      // 连线：近距离粒子之间画细线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            const alpha = (1 - dist / 100) * 0.08;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${PRIMARY_R}, ${PRIMARY_G}, ${PRIMARY_B}, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    resize();
    initParticles();
    animate();

    const handleResize = () => {
      resize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
