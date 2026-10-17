import { SOCIAL_LINKS } from '../data/content'
import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-background-paper py-space-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-space-md px-gutter md:flex-row">
        <div className="flex flex-col items-center gap-space-sm md:flex-row md:gap-space-md">
          <span className="font-headline text-headline-sm text-border-dark">
            Connect &amp; Follow / 社交阵地
          </span>
          <div className="flex flex-wrap justify-center gap-space-sm">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                className="inline-flex items-center rounded-lg border-2 border-border-dark bg-surface-card px-space-sm py-1.5 font-body text-label-sm font-bold text-border-dark pop-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-surface-soft"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-space-md font-body text-label-sm font-semibold">
          <a
            className="text-on-surface-variant underline decoration-2 hover:text-on-surface"
            href="#privacy"
          >
            Privacy Policy
          </a>
          <a
            className="text-on-surface-variant underline decoration-2 hover:text-on-surface"
            href="#terms"
          >
            Terms of Service
          </a>
          <span className="inline-flex items-center gap-1 rounded border border-border-dark bg-surface-variant px-2 py-0.5 text-[11px] text-border-dark">
            <Icon name="bolt" className="text-[14px]" />
            NEO-MKTG
          </span>
        </div>
      </div>
    </footer>
  )
}
