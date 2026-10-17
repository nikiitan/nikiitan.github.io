import { MARQUEE_ITEMS } from '../data/content'

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div className="flex w-full select-none overflow-hidden whitespace-nowrap border-y-2 border-border-dark bg-border-dark py-space-sm text-background-paper">
      <div className="inline-flex animate-marquee items-center gap-space-lg font-headline text-headline-sm tracking-wider uppercase">
        {items.map((item, index) => (
          <span key={`${item.text}-${index}`} className={item.color}>
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
