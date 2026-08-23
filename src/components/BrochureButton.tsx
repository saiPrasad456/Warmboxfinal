import { Download } from 'lucide-react'
import { contact } from '../data/contact'

export default function BrochureButton() {
  if (!contact.brochureUrl.trim()) {
    // Same pattern as WhatsAppButton / InstagramButton — stays hidden until
    // contact.brochureUrl is set in src/data/contact.ts.
    if (import.meta.env.DEV) {
      console.warn('BrochureButton: set contact.brochureUrl in src/data/contact.ts to show this button.')
    }
    return null
  }

  return (
    <a
      href={contact.brochureUrl}
      download
      aria-label="Download brochure"
      className="grid place-items-center h-14 w-14 rounded-full bg-[var(--color-ink)] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.35)] hover:scale-105 transition-transform duration-200"
    >
      <Download size={22} strokeWidth={2} />
    </a>
  )
}
