import WhatsAppButton from './WhatsAppButton'
import InstagramButton from './InstagramButton'
import BrochureButton from './BrochureButton'

// Stacks the floating corner buttons bottom-up. Each button hides itself
// when unconfigured (see WhatsAppButton / InstagramButton / BrochureButton),
// and this flex column collapses around whichever ones remain, so there's
// never an empty gap where a hidden button would have been.
// Order (bottom to top): WhatsApp, Instagram, Brochure — Brochure sits
// directly above Instagram since flex-col-reverse stacks later children
// higher.
export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-3">
      <WhatsAppButton />
      <InstagramButton />
      <BrochureButton />
    </div>
  )
}
