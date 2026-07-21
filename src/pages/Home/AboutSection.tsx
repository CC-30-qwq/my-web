const items = [
  { label: '游戏引擎', value: 'Unity · Cocos Creator' },
  { label: '编程语言', value: 'C# · TypeScript · Lua' },
  { label: 'AIGC', value: 'MJ · SD · ComfyUI · 即梦' },
  { label: '前端开发', value: 'React · Vue · Tailwind' },
  { label: '跨平台', value: '抖音 · 微信 · Web · PC' },
  { label: '工程化', value: 'Git · 分层架构 · CI/CD' },
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
            会写游戏也会写网页，能做玩法也能做界面。
            习惯把事情从头到尾做完整，不挑技术栈。
          </p>
        </div>

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
