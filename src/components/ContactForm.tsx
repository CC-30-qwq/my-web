import { useState, type FormEvent } from 'react';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

/**
 * 联系表单组件
 * - 客户端即时校验 + 具体错误原因
 * - aria-live 实时播报，屏幕阅读器友好
 * - 完整的 idle → submitting → success/error 状态机
 */
export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [phase, setPhase] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (form: FormData): FieldErrors => {
    const errs: FieldErrors = {};
    const name = (form.get('name') as string || '').trim();
    const email = (form.get('email') as string || '').trim();
    const message = (form.get('message') as string || '').trim();

    if (!name || name.length < 2) {
      errs.name = '请输入至少 2 个字符的姓名';
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = '请输入有效的邮箱地址（如 name@example.com）';
    }
    if (!message || message.length < 10) {
      errs.message = '请输入至少 10 个字符的留言内容';
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setPhase('submitting');
    try {
      // TODO: 替换为实际 API endpoint
      await new Promise((r) => setTimeout(r, 1000));
      setPhase('success');
    } catch {
      setPhase('error');
    }
  };

  if (phase === 'success') {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <p className="text-success text-h2 mb-2">✓ 发送成功</p>
        <p className="text-text-secondary text-body">
          感谢您的留言，我会尽快回复
        </p>
      </div>
    );
  }

  const hasErrors = Object.values(errors).some(Boolean);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-5"
      noValidate
    >
      {/* 屏幕阅读器实时播报区域 */}
      <div
        className="sr-only"
        role="status"
        aria-live="assertive"
        aria-atomic="true"
      >
        {hasErrors ? `表单有 ${Object.values(errors).filter(Boolean).length} 个错误：` : ''}
        {Object.values(errors).filter(Boolean).join('；')}
      </div>

      {/* 姓名 */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-body text-text-secondary mb-1.5"
        >
          姓名 <span className="text-text-muted">(必填)</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full px-4 py-2.5 bg-bg-card border rounded-lg text-text-primary text-body transition-colors placeholder:text-text-muted ${
            errors.name ? 'border-red-500/50' : 'border-border'
          }`}
          placeholder="您的姓名"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-body-muted text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      {/* 邮箱 */}
      <div>
        <label
          htmlFor="contact-email"
          className="block text-body text-text-secondary mb-1.5"
        >
          邮箱 <span className="text-text-muted">(必填)</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full px-4 py-2.5 bg-bg-card border rounded-lg text-text-primary text-body transition-colors placeholder:text-text-muted ${
            errors.email ? 'border-red-500/50' : 'border-border'
          }`}
          placeholder="name@example.com"
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-body-muted text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      {/* 留言 */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-body text-text-secondary mb-1.5"
        >
          留言 <span className="text-text-muted">(必填，至少 10 个字符)</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full px-4 py-2.5 bg-bg-card border rounded-lg text-text-primary text-body transition-colors placeholder:text-text-muted resize-y ${
            errors.message ? 'border-red-500/50' : 'border-border'
          }`}
          placeholder="请输入您的留言内容..."
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-body-muted text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {/* 提交按钮 */}
      <button
        type="submit"
        disabled={phase === 'submitting'}
        className="w-full py-3 bg-primary hover:bg-primary-dark text-white rounded-lg text-body-strong transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
        aria-busy={phase === 'submitting'}
      >
        {phase === 'submitting' ? '发送中...' : '发送消息'}
      </button>

      {phase === 'error' && (
        <p className="text-center text-body-muted text-red-400" role="alert">
          发送失败，请稍后重试
        </p>
      )}
    </form>
  );
}
