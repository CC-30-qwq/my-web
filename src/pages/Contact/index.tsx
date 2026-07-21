import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-14">
        <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">联系方式</span>
        <h1 className="text-h1 text-text-primary mt-3 mb-3 sm:text-4xl">联系我</h1>
        <p className="text-text-secondary text-body max-w-md mx-auto">
          如果您有项目开发需求或希望合作，欢迎通过以下方式联系
        </p>
      </div>

      {/* Contact cards */}
      <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-16">
        {[
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
            title: '电子邮件',
            desc: '发送邮件咨询项目需求',
            action: 'example@email.com',
            href: 'mailto:example@email.com',
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            ),
            title: 'GitHub',
            desc: '查看我的开源项目',
            action: 'github.com',
            href: 'https://github.com',
            external: true,
          },
          {
            icon: (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            ),
            title: '微信',
            desc: '添加微信好友沟通',
            action: '微信号：your_wechat_id',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="group card p-6 text-center hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
              {item.icon}
            </div>
            <h3 className="text-body-strong text-text-primary mb-1.5">{item.title}</h3>
            <p className="text-body text-text-secondary mb-4">{item.desc}</p>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-primary-light hover:text-primary text-body-strong transition-colors"
              >
                {item.action}
              </a>
            ) : (
              <p className="text-primary-light text-body-strong">{item.action}</p>
            )}
          </div>
        ))}
      </div>

      {/* Cooperation flow */}
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-h2 text-text-primary">合作流程</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { step: '01', label: '需求沟通', desc: '明确项目范围与目标' },
            { step: '02', label: '方案设计', desc: '技术选型与架构规划' },
            { step: '03', label: '开发交付', desc: '迭代开发与测试上线' },
            { step: '04', label: '持续运维', desc: '监控优化与版本更新' },
          ].map((item, i) => (
            <div key={item.step} className="text-center relative">
              {/* Connector line */}
              {i < 3 && (
                <div className="hidden sm:block absolute top-5 left-[calc(50%+20px)] w-[calc(100%-40px)] h-px bg-border" aria-hidden="true" />
              )}
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10 ring-2 ring-bg-dark">
                <span className="text-primary-light text-body-strong">{item.step}</span>
              </div>
              <div className="text-body-strong text-text-primary mb-1">{item.label}</div>
              <div className="text-body-muted">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact form */}
      <div className="section-divider mb-16" />
      <div className="text-center mb-10">
        <h2 className="text-h2 text-text-primary">发送消息</h2>
        <p className="text-text-secondary text-body mt-2">直接给我留言，我会尽快回复</p>
      </div>
      <ContactForm />
    </div>
  );
}
