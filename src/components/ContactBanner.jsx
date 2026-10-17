import { CONTACT_EMAIL } from '../data/content'
import Icon from './Icon'

export default function ContactBanner() {
  return (
    <section className="mx-auto w-full max-w-7xl px-gutter py-space-xl pb-space-xl" id="contact">
      <div className="relative overflow-hidden rounded-3xl border-2 border-border-dark bg-primary p-space-xl text-on-primary pop-xl">
        <div className="pointer-events-none absolute -top-6 -right-6 h-24 w-24 rotate-45 rounded-full border-2 border-border-dark bg-surface-soft pop-sm" />
        <div className="pointer-events-none absolute bottom-4 left-6 h-10 w-10 -rotate-12 rounded-lg border-2 border-border-dark bg-quaternary-mint pop-sm" />
        <div className="pointer-events-none absolute top-8 left-1/3 h-6 w-6 rounded-full border-2 border-border-dark bg-secondary-container" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-space-lg lg:grid-cols-12">
          <div className="flex flex-col gap-space-xs lg:col-span-8">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-border-dark bg-surface-soft px-space-sm py-1 font-body text-label-sm font-bold text-border-dark pop-sm">
              <Icon name="celebration" className="text-[16px]" />
              <span>NEXT QUARTER BOOKINGS OPEN // 开启出海新篇章</span>
            </div>
            <h2 className="mt-1 font-headline text-headline-xl leading-tight text-on-primary max-md:text-headline-xl-mobile">
              准备好将你的品牌带入全球高光视野了吗？
            </h2>
            <p className="max-w-2xl font-body text-body-lg text-primary-fixed">
              无论你需要从 0 到 1 规划欧美首发策略，还是希望将 AI
              工具链深度融入团队出海工作流，我们都可以约一次 45 分钟的深度战略探讨。
            </p>
          </div>

          <div className="flex justify-center lg:col-span-4 lg:justify-end">
            <a
              className="inline-flex w-full items-center justify-center gap-space-xs rounded-xl border-2 border-border-dark bg-surface-card px-space-lg py-3 text-center font-body text-label-lg font-bold text-border-dark pop-md transition-all hover:bg-surface-container-high sm:w-auto"
              href={`mailto:${CONTACT_EMAIL}`}
            >
              <Icon name="mail" className="text-[18px]" />
              <span>{CONTACT_EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
