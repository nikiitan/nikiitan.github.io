import { NAV_LINKS } from '../data/content'
import Icon from './Icon'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border-dark bg-background-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-gutter">
        <a className="group flex items-center gap-space-sm focus:outline-none" href="#top">
          <div className="rounded-lg border-2 border-border-dark bg-primary px-space-sm py-1 font-headline text-headline-sm text-on-primary pop-sm transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            N
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-headline text-headline-sm leading-none tracking-tight text-border-dark">
              Niki Tan
            </span>
            <span className="hidden items-center gap-1 rounded-full border-2 border-border-dark bg-surface-card px-2 py-0.5 font-body text-label-sm font-bold text-border-dark pop-sm sm:inline-flex">
              <Icon name="verified" className="text-[14px] text-primary" />
              5年+出海实战经验
            </span>
          </div>
        </a>

        <div className="flex items-center gap-gutter">
          <nav className="hidden items-center gap-space-sm font-body text-label-lg md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="rounded-lg px-space-md py-1.5 text-on-surface-variant transition-all hover:bg-surface-container-high hover:text-on-surface"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            className="inline-flex items-center justify-center rounded-xl border-2 border-border-dark bg-secondary-container px-space-md py-2 font-body text-label-lg font-bold text-border-dark pop-md transition-all duration-150 hover:translate-x-px hover:translate-y-px hover:bg-secondary-fixed active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            href="#contact"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </header>
  )
}
