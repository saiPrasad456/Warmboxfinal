interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-[var(--color-steel)] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}
