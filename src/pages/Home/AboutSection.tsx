const items = [
  { label: '开发经验', value: '3+ 年' },
  { label: '技术栈', value: 'React / Unity / Cocos' },
  { label: '擅长领域', value: '互动应用 / 前端工程化' },
  { label: '部署平台', value: '腾讯云 / Vercel / GitHub' },
  { label: '工作方式', value: '远程协作 / 独立开发' },
  { label: '开发理念', value: '性能优先 / 用户体验' },
];

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-body-muted font-semibold text-primary-light uppercase tracking-widest">
            个人简介
          </span>
          <h2 className="text-h2 text-text-primary mt-3 mb-4">关于我</h2>
          <p className="text-text-secondary max-w-xl mx-auto text-body leading-relaxed">
            一名热爱技术创造的全栈工程师，专注于互动应用与前端领域，
            致力于将优秀的产品体验带到浏览器中
          </p>
        </div>

        {/* About cards — 去品牌色渐变，改用中性灰微调 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-4 card p-5">
              <span className="text-text-primary text-body-strong whitespace-nowrap">
                {item.value}
              </span>
              <span className="text-text-secondary text-body">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
