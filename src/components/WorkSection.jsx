import Icon from './Icon'

const FLAGSHIP_METRICS = [
  { value: '+240%', label: '社媒销售增长', valueClass: 'text-primary' },
  { value: '120K', label: 'Instagram 粉丝', valueClass: 'text-secondary' },
  { value: '3.8x', label: '内容种草 ROI', valueClass: 'text-quaternary-mint' },
  { value: '18+', label: '海外时尚媒体', valueClass: 'text-border-dark' },
]

export default function WorkSection() {
  return (
    <section
      className="w-full border-y-2 border-border-dark bg-surface-container-low py-space-xl"
      id="work-section"
    >
      <div className="mx-auto max-w-7xl px-gutter">
        <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
          <div>
            <div className="mb-space-xs inline-flex items-center gap-2 rounded-full border-2 border-border-dark bg-primary-fixed px-space-sm py-1 font-body text-label-sm font-bold text-on-primary-fixed pop-sm">
              <Icon name="military_tech" className="text-[16px]" />
              <span>PROVEN IMPACT // 精选项目案例</span>
            </div>
            <h2 className="font-headline text-headline-lg text-border-dark">
              全球化增长实操与战果
            </h2>
            <p className="mt-1 max-w-xl font-body text-body-md text-on-surface-variant">
              与科技硬件、跨境消费电子及 SaaS
              头部品牌并肩作战，以数据量化结果，以口碑树立标杆。
            </p>
          </div>
          <a
            className="inline-flex items-center gap-space-xs rounded-xl border-2 border-border-dark bg-surface-card px-space-md py-2.5 font-body text-label-lg font-bold text-border-dark pop-md transition-all hover:bg-surface-soft"
            href="#work-section"
          >
            <span>查看全部案例 / View All Archive (18+)</span>
            <Icon name="north_east" className="text-[18px]" />
          </a>
        </div>

        <div className="mb-gutter grid grid-cols-1 gap-gutter gap-space-xl lg:grid-cols-12">
          <div className="flex flex-col justify-between rounded-3xl border-2 border-border-dark bg-surface-card p-space-xl pop-xl lg:col-span-8">
            <div>
              <div className="mb-space-md flex flex-wrap items-center gap-space-xs">
                <span className="rounded-full border-2 border-border-dark bg-secondary-container px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
                  North America Market
                </span>
                <span className="rounded-full border-2 border-border-dark bg-quaternary-mint px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
                  Fashion Brand
                </span>
                <span className="rounded-full border-2 border-border-dark bg-surface-soft px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
                  DTC &amp; Social Commerce
                </span>
              </div>
              <h3 className="font-headline text-headline-md text-border-dark">
                新锐服装品牌北美破圈：本土化内容矩阵驱动社媒销售增长 +240%
              </h3>
              <p className="mt-space-sm font-body text-body-lg leading-relaxed text-on-surface-variant">
                为国内服装品牌定制欧美 GTM 与社媒叙事。跳出硬广堆砌，聚焦穿搭场景与本土审美共鸣。通过创作者共创与 AI
                批量素材迭代，完成从 0 到可规模化的海外声量与转化。
              </p>

              <div className="mt-space-lg grid grid-cols-2 gap-space-sm sm:grid-cols-4">
                {FLAGSHIP_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl border-2 border-border-dark bg-background-paper p-space-sm pop-sm"
                  >
                    <span
                      className={`block font-headline text-headline-sm ${metric.valueClass}`}
                    >
                      {metric.value}
                    </span>
                    <span className="font-body text-label-sm text-on-surface-variant">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-space-lg flex flex-wrap items-center justify-between gap-space-sm border-t-2 border-border-dark/20 pt-space-lg">
              <div className="flex flex-wrap items-center gap-space-xs">
                <span className="font-body text-label-sm font-bold text-on-surface-variant">
                  CORE DELIVERABLES:
                </span>
                {['GTM Positioning', 'Creator Seeding', 'Lookbook Content'].map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border-dark bg-surface-container px-2 py-0.5 font-body text-label-sm text-border-dark"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <a
                className="flex items-center gap-1 font-body text-label-lg font-bold text-primary hover:underline"
                href="#work-section"
              >
                <span>查看案例详情 / Case Deep-dive</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-3xl border-2 border-border-dark bg-surface-soft p-space-xl pop-xl lg:col-span-4">
            <div>
              <div className="mb-space-md flex flex-wrap items-center gap-space-xs">
                <span className="rounded-full border-2 border-border-dark bg-surface-card px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
                  North America &amp; Europe
                </span>
                <span className="rounded-full border-2 border-border-dark bg-quaternary-mint px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
                  社媒内容驱动
                </span>
              </div>
              <h3 className="font-headline text-headline-md leading-snug text-border-dark">
                欧美社媒本土化内容规划：跨国创作者共创与爆款裂变矩阵
              </h3>
              <p className="mt-space-sm font-body text-body-md text-on-surface-variant">
                重构海外社交媒体原生长视频与短视频内容流，联动 60+
                位欧美本土创作者打造多元叙事矩阵，结合 AI
                自动化分发，实现品牌自然裂变与高质付费转化。
              </p>
              <div className="mt-space-md space-y-space-xs">
                <div className="flex items-center justify-between rounded-xl border-2 border-border-dark bg-surface-card p-space-sm pop-sm">
                  <span className="font-body text-label-sm text-on-surface-variant">
                    欧美社媒总触达
                  </span>
                  <span className="font-headline text-headline-sm text-primary">48,000,000+</span>
                </div>
              </div>
            </div>
            <div className="mt-space-md flex items-center justify-between border-t-2 border-border-dark/20 pt-space-md">
              <span className="font-body text-label-sm text-on-surface-variant">
                2023 - 2024 Q1 项目
              </span>
              <a
                className="flex items-center gap-1 font-body text-label-sm font-bold text-border-dark hover:underline"
                href="#work-section"
              >
                <span>View Case</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-space-md rounded-2xl border-2 border-border-dark bg-surface-card p-space-lg pop-lg md:flex-row">
          <div className="flex items-center gap-space-md">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-border-dark bg-secondary-fixed pop-sm">
              <Icon name="storefront" className="text-[26px] text-secondary" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-headline text-headline-sm text-border-dark">
                  新中式可持续生活方式品牌：巴黎 &amp; 纽约快闪与海外原生社媒裂变
                </h4>
                <span className="hidden rounded border border-border-dark bg-surface-soft px-2 py-0.5 font-body text-label-sm font-bold text-border-dark sm:inline">
                  +240% Growth
                </span>
              </div>
              <p className="mt-0.5 font-body text-body-sm text-on-surface-variant">
                跨越东西方审美鸿沟的策展式内容策略，全案海外 Instagram 粉丝从 3K 增长至 120K。
              </p>
            </div>
          </div>
          <a
            className="inline-flex shrink-0 items-center rounded-xl border-2 border-border-dark bg-surface-soft px-space-md py-2 font-body text-label-sm font-bold text-border-dark pop-sm transition-all hover:bg-surface-card"
            href="#work-section"
          >
            <span>阅读简报 / Briefing</span>
            <Icon name="chevron_right" className="ml-1 text-[16px]" />
          </a>
        </div>
      </div>
    </section>
  )
}
