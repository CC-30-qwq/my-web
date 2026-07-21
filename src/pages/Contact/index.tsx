import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-14">
        <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">联系方式</span>
        <h1 className="text-h1 text-text-primary mt-3 mb-3 sm:text-4xl">联系我</h1>
        <p className="text-text-secondary text-body max-w-md mx-auto">
          有想法就聊聊，欢迎通过以下方式联系
        </p>
      </div>

      {/* Row 1: 邮箱 + 微信 */}
      <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto mb-5">
        {/* 电子邮件 */}
        <div className="group card p-6 text-center hover:-translate-y-1">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-body-strong text-text-primary mb-1.5">电子邮件</h3>
          <p className="text-body text-text-secondary mb-4">发送邮件沟通</p>
          <a href="mailto:1025848465@qq.com" className="text-primary-light hover:text-primary text-body-strong transition-colors">
            1025848465@qq.com
          </a>
        </div>

        {/* 微信 */}
        <div className="group card p-6 text-center hover:-translate-y-1">
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h3 className="text-body-strong text-text-primary mb-1.5">微信</h3>
          <p className="text-body text-text-secondary mb-4">添加微信好友沟通</p>
          <p className="text-primary-light text-body-strong">xzyandcl0413</p>
        </div>
      </div>

      {/* Row 2: GitHub + Bilibili（整卡可点击跳转）*/}
      <div className="grid sm:grid-cols-2 gap-5 max-w-lg mx-auto mb-16">
        <a
          href="https://github.com/CC-30-qwq"
          target="_blank"
          rel="noopener noreferrer"
          className="group card p-6 text-center hover:-translate-y-1 block"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <h3 className="text-body-strong text-text-primary mb-1.5">GitHub</h3>
          <p className="text-body text-text-secondary mb-4">查看我的开源项目</p>
          <span className="text-primary-light group-hover:text-primary text-body-strong transition-colors">CC-30-qwq</span>
        </a>

        <a
          href="https://space.bilibili.com/3546640105343454"
          target="_blank"
          rel="noopener noreferrer"
          className="group card p-6 text-center hover:-translate-y-1 block"
        >
          <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-5 text-primary-light group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-200">
            <span className="text-lg font-bold">B</span>
          </div>
          <h3 className="text-body-strong text-text-primary mb-1.5">Bilibili</h3>
          <p className="text-body text-text-secondary mb-4">查看我的视频作品</p>
          <span className="text-primary-light group-hover:text-primary text-body-strong transition-colors">赋青zy</span>
        </a>
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
