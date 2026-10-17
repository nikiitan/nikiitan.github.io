import { METHODOLOGY_PILLARS } from '../data/content'
import Icon from './Icon'

const TAGS = [
  { label: '# 跨文化叙事', className: 'bg-surface-soft text-border-dark' },
  { label: '# GenAI 营销应用', className: 'bg-secondary-fixed text-border-dark' },
  { label: '# GTM 体系孵化', className: 'bg-quaternary-mint text-border-dark' },
  {
    label: '# 海外创作者生态',
    className: 'bg-primary-fixed text-on-primary-fixed',
  },
]

export default function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-gutter py-space-xl" id="about">
      <div className="grid grid-cols-1 items-start gap-gutter lg:grid-cols-12">
        <div className="flex flex-col gap-space-md lg:col-span-5">
          <div className="relative rounded-3xl border-2 border-border-dark bg-surface-card p-space-xl pop-xl">
            <div className="absolute -top-4 -right-4 flex h-12 w-12 -rotate-12 items-center justify-center rounded-full border-2 border-border-dark bg-secondary-container pop-sm">
              <Icon name="fingerprint" className="text-[24px] text-border-dark" />
            </div>

            <div className="mb-space-md flex items-center gap-space-md">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-border-dark bg-primary-fixed pop-sm">
                <span className="font-headline text-headline-lg font-bold text-primary">NT</span>
              </div>
              <div>
                <h3 className="font-headline text-headline-md text-border-dark">清子 / Niki Tan</h3>
                <p className="font-body text-label-sm font-bold text-on-surface-variant">
                  出海社媒与内容本地化营销专家
                </p>
                <div className="mt-0.5 flex items-center gap-1 text-[13px] text-on-surface-variant">
                  <Icon name="location_on" className="text-[14px]" />
                  <span>North America &amp; Europe Focus / Remote Worldwide</span>
                </div>
              </div>
            </div>

            <div className="space-y-space-sm font-body text-body-md text-on-surface-variant">
              <p>
                海外社媒破局不只是翻译，而是
                <strong>与欧美本土文化与社群情绪的深度共鸣</strong>。
                品牌需要能融入当地信息流的原生叙事。
                我将社媒洞察与生成式 AI 结合，帮助建立可识别、可复用的海外声量。
              </p>
            </div>

            <div className="mt-space-md flex flex-wrap gap-2 border-t-2 border-border-dark/15 pt-space-md">
              {TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`${tag.className} rounded-md border border-border-dark px-2.5 py-1 font-body text-label-sm font-bold`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-space-sm rounded-2xl border-2 border-border-dark bg-surface-soft p-space-md pop-md">
            <Icon name="format_quote" className="shrink-0 text-[28px] text-primary" />
            <div>
              <p className="font-headline text-headline-sm text-border-dark italic">
                &quot;Great marketing doesn&apos;t scream louder; it whispers in the exact rhythm of
                the local heartbeat.&quot;
              </p>
              <span className="mt-1 block font-body text-label-sm font-bold text-on-surface-variant">
                —— Niki Tan · 清子
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-space-lg lg:col-span-7">
          <div>
            <div className="mb-space-xs inline-flex items-center gap-2 rounded-full border-2 border-border-dark bg-quaternary-mint px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
              <Icon name="schema" className="text-[16px]" />
              <span>STRATEGY SYSTEM // 方法论模型</span>
            </div>
            <h2 className="font-headline text-headline-lg text-border-dark">
              三维一体的出海破局增长模型
            </h2>
            <p className="max-w-xl font-body text-body-md text-on-surface-variant">
              摒弃单点打法的盲目投放，以结构化的系统框架帮助出海业务扎根。
            </p>
          </div>

          {METHODOLOGY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="rounded-2xl border-2 border-border-dark bg-surface-card p-space-md pop-md transition-all hover:bg-background-paper"
            >
              <div className="flex items-start gap-space-md">
                <div
                  className={`${pillar.numberClass} flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-border-dark font-headline text-headline-sm pop-sm`}
                >
                  {pillar.number}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-headline text-headline-sm text-border-dark">
                      {pillar.title}
                    </h4>
                    <span
                      className={`${pillar.badgeClass} rounded border border-border-dark px-2 py-0.5 font-body text-label-sm font-bold`}
                    >
                      {pillar.badge}
                    </span>
                  </div>
                  <p className="mt-1 font-body text-body-md text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
