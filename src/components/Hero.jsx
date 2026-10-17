import Icon from './Icon'

export default function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl overflow-hidden px-gutter py-space-xl">
      <div className="absolute -top-10 -right-10 -z-10 h-44 w-44 rounded-full border-2 border-border-dark bg-surface-soft opacity-70" />
      <div className="absolute top-1/2 -left-12 -z-10 h-28 w-28 rotate-12 rounded-2xl border-2 border-border-dark bg-secondary-fixed opacity-60" />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center py-space-md text-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-headline text-headline-xl leading-tight tracking-tight text-border-dark max-md:text-headline-xl-mobile">
            让品牌被看见，
            <br />
            <span className="relative inline-block text-primary">
              也被深度理解。
              <svg
                className="absolute -bottom-2 left-0 -z-10 h-3 w-full text-secondary-container"
                preserveAspectRatio="none"
                viewBox="0 0 100 20"
                aria-hidden="true"
              >
                <path d="M0,10 Q50,0 100,10 Q50,20 0,10 Z" fill="currentColor" />
              </svg>
            </span>
          </h1>
          <p className="mt-space-sm font-headline text-headline-md font-medium text-on-surface-variant">
            &quot;Helping Brands Get Seen &amp; Truly Understood Overseas.&quot;
          </p>
        </div>

        <p className="mx-auto mt-space-md max-w-2xl font-body text-body-lg leading-relaxed text-on-surface-variant">
          专注欧美高价值市场出海社媒战略、北美及欧洲深度文化语境洞察与生成式 AI
          原生内容增长。以本土化叙事为锚，以全链路社媒内容矩阵重塑品牌海外声量。
        </p>

        <div className="mt-space-xs flex flex-wrap items-center justify-center gap-space-md pt-space-md">
          <a
            className="inline-flex items-center justify-center gap-space-xs rounded-xl border-2 border-border-dark bg-accent-violet px-space-xl py-3.5 font-body text-label-lg font-bold text-surface-container-lowest pop-md transition-all hover:translate-x-0.5 hover:-translate-y-0.5 active:translate-x-1 active:translate-y-1"
            href="#contact"
          >
            <Icon name="chat_bubble" className="text-[20px]" />
            <span>联系我 / Get in Touch</span>
          </a>
          <a
            className="inline-flex items-center justify-center gap-space-xs rounded-xl border-2 border-border-dark bg-surface-card px-space-lg py-3.5 font-body text-label-lg font-bold text-border-dark pop-md transition-all hover:translate-x-0.5 hover:-translate-y-0.5 hover:bg-surface-soft active:translate-x-1 active:translate-y-1"
            href="#work-section"
          >
            <span>浏览案例 / Explore Work</span>
            <Icon name="arrow_downward" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
