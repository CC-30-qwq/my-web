import ContactForm from '../../components/ContactForm';
import AnimatedTitle from '../../components/AnimatedTitle';
import { Icons } from '../../components/Icons';

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="text-center mb-14">
        <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">联系方式</span>
        <AnimatedTitle
          text="联系我"
          as="h1"
          className="text-h1 text-text-primary mt-3 mb-3 sm:text-4xl"
        />
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={Icons.mail} />
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
              <path d={Icons.github} />
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
        <AnimatedTitle text="发送消息" className="text-h2 text-text-primary" />
        <p className="text-text-secondary text-body mt-2">直接给我留言，我会尽快回复</p>
      </div>
      <ContactForm />
    </div>
  );
}
