import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-background-paper py-space-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-space-md px-gutter font-body text-label-sm font-semibold">
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
    </footer>
  )
}
