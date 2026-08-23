import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import FaqAccordion from '../components/FaqAccordion'
import { faqs } from '../data/faq'

export default function FAQ() {
  return (
    <section className="py-28 md:py-36 bg-[var(--color-bg-raised)]">
      <Container className="max-w-2xl">
        <SectionHeading eyebrow="FAQ" title="Common questions" align="center" />
        <div className="mt-14">
          <FaqAccordion items={faqs} />
        </div>
      </Container>
    </section>
  )
}
