import type { ProductShape } from '../../types'

interface ProductArtProps {
  shape: ProductShape
  className?: string
  /** Optional small caption chip, e.g. a gallery view label like "Open container" */
  label?: string
  /** Visually mutes the flame/steam accents — used for secondary gallery frames */
  muted?: boolean
  /** Real product photo path (e.g. '/images/products/warmbox-circular.jpg'). When set, renders the photo instead of the line-art illustration. */
  photoSrc?: string
}

/**
 * Brand line-art standing in for real product photography. Pass `photoSrc`
 * to render a real photo instead — falls back to the illustration when no
 * photo is available yet for a given product/view.
 */
export default function ProductArt({ shape, className = '', label, muted = false, photoSrc }: ProductArtProps) {
  if (photoSrc) {
    return (
      <div className={`relative overflow-hidden bg-[var(--color-bg-raised)] ${className}`}>
        <img
          src={photoSrc}
          alt={label ?? `${shape} self-heating container`}
          className={`h-full w-full object-cover ${muted ? 'opacity-80' : ''}`}
        />
        {label && (
          <span className="absolute bottom-3 left-3 rounded-full bg-[var(--color-bg)]/90 backdrop-blur-sm border border-[var(--color-line)] px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-[var(--color-steel)]">
            {label}
          </span>
        )}
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden bg-[var(--color-bg-raised)] ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 20% 15%, color-mix(in srgb, var(--color-glow-soft) 55%, transparent), transparent 60%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, var(--color-line) 0, var(--color-line) 1px, transparent 1px, transparent 22px)',
        }}
      />
      <svg
        viewBox="0 0 240 200"
        className="relative h-full w-full"
        role="img"
        aria-label={label ?? `${shape} self-heating container illustration`}
      >
        <defs>
          <linearGradient id={`body-${shape}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: 'var(--color-bg)' }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-line)' }} />
          </linearGradient>
          <radialGradient id={`glow-${shape}`} cx="50%" cy="35%" r="65%">
            <stop offset="0%" style={{ stopColor: 'var(--color-glow-soft)', stopOpacity: muted ? 0.25 : 0.9 }} />
            <stop offset="100%" style={{ stopColor: 'var(--color-glow-soft)', stopOpacity: 0 }} />
          </radialGradient>
        </defs>

        <circle cx="120" cy="78" r="70" fill={`url(#glow-${shape})`} />

        {shape === 'rectangular' ? (
          <g>
            {/* container body */}
            <rect x="58" y="70" width="124" height="86" rx="14" fill={`url(#body-${shape})`} stroke="var(--color-steel-light)" strokeWidth="1.5" />
            {/* lid seam */}
            <line x1="58" y1="92" x2="182" y2="92" stroke="var(--color-steel-light)" strokeWidth="1.25" strokeDasharray="3 4" />
            {/* compartment divider */}
            <line x1="120" y1="92" x2="120" y2="156" stroke="var(--color-steel-light)" strokeWidth="1.25" strokeDasharray="3 4" />
            {/* water droplet, pour-to-activate */}
            <path
              d="M120 44 C114 52, 108 60, 108 66 a12 12 0 0 0 24 0 c0 -6 -6 -14 -12 -22z"
              fill="var(--color-ink)"
              opacity={muted ? 0.5 : 1}
            />
          </g>
        ) : (
          <g>
            {/* bowl body */}
            <path
              d="M64 90 C64 128, 90 156, 120 156 C150 156, 176 128, 176 90 Z"
              fill={`url(#body-${shape})`}
              stroke="var(--color-steel-light)"
              strokeWidth="1.5"
            />
            <ellipse cx="120" cy="90" rx="56" ry="16" fill="var(--color-bg)" stroke="var(--color-steel-light)" strokeWidth="1.5" />
            {/* water droplet, pour-to-activate */}
            <path
              d="M120 52 C114 60, 108 68, 108 74 a12 12 0 0 0 24 0 c0 -6 -6 -14 -12 -22z"
              fill="var(--color-ink)"
              opacity={muted ? 0.5 : 1}
            />
          </g>
        )}

        {/* steam */}
        {!muted && (
          <g stroke="var(--color-heat)" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.55">
            <path d="M104 48 C100 40, 110 36, 106 28" />
            <path d="M120 44 C116 36, 126 32, 122 24" />
            <path d="M136 48 C132 40, 142 36, 138 28" />
          </g>
        )}
      </svg>

      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-[var(--color-bg)]/90 backdrop-blur-sm border border-[var(--color-line)] px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-[var(--color-steel)]">
          {label}
        </span>
      )}
    </div>
  )
}
