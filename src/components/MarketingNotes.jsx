import { useState } from 'react'
import { MARKETING_NOTES, NOTE_FILTERS } from '../data/content'
import Icon from './Icon'

export default function MarketingNotes() {
  const [activeFilter, setActiveFilter] = useState('all')

  const notes =
    activeFilter === 'all'
      ? MARKETING_NOTES
      : MARKETING_NOTES.filter((note) => note.category === activeFilter)

  return (
    <section className="mx-auto w-full max-w-7xl px-gutter py-space-xl" id="services">
      <div className="mb-space-xl flex flex-col justify-between gap-space-md md:flex-row md:items-end">
        <div>
          <div className="mb-space-xs inline-flex items-center gap-2 rounded-full border-2 border-border-dark bg-secondary-fixed px-space-sm py-1 font-body text-label-sm font-bold text-on-secondary-fixed pop-sm">
            <Icon name="edit_note" className="text-[16px]" />
            <span>MARKETING INTEL // 营销笔记</span>
          </div>
          <h2 className="font-headline text-headline-lg text-border-dark">
            全球前线观察与 AI 实践手记
          </h2>
          <p className="mt-1 max-w-xl font-body text-body-md text-on-surface-variant">
            真实出海战场积累的战术复盘：从海外用户心理画像解析，到 AIGC 创意规模化实操手册。
          </p>
        </div>

        <div className="flex flex-wrap gap-space-xs">
          {NOTE_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-xl border-2 border-border-dark px-space-md py-1.5 font-body text-label-sm font-bold pop-sm transition-all ${
                  isActive
                    ? 'bg-border-dark text-surface-container-lowest'
                    : 'bg-surface-card text-border-dark hover:bg-surface-soft'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-gutter gap-space-xl md:grid-cols-3">
        {notes.map((note) => (
          <article
            key={note.id}
            className={`${note.cardClass} group flex flex-col justify-between rounded-2xl border-2 border-border-dark p-space-lg pop-lg transition-all duration-200 hover:translate-x-1 hover:-translate-y-1 hover:pop-xl`}
          >
            <div>
              <div className="mb-space-md flex items-center justify-between gap-space-xs">
                <span
                  className={`${note.tagClass} rounded-full border-2 border-border-dark px-space-sm py-1 font-body text-label-sm font-bold pop-sm`}
                >
                  {note.tag}
                </span>
                <span className="flex items-center gap-1 font-body text-label-sm font-semibold text-on-surface-variant">
                  <Icon name="schedule" className="text-[14px]" /> {note.readTime}
                </span>
              </div>
              <h3 className="font-headline text-headline-sm leading-snug text-border-dark transition-colors group-hover:text-primary">
                {note.title}
              </h3>
              <p className="mt-space-sm line-clamp-3 font-body text-body-md text-on-surface-variant">
                {note.excerpt}
              </p>
            </div>
            <div className="mt-space-md flex items-center justify-between border-t-2 border-border-dark/15 pt-space-md">
              <span className="font-body text-label-sm font-medium text-on-surface-variant">
                {note.meta}
              </span>
              <a
                className="inline-flex items-center gap-1 font-body text-label-sm font-bold text-border-dark group-hover:underline"
                href="#notes"
              >
                <span>Read Note</span>
                <Icon name="arrow_forward" className="text-[16px]" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
