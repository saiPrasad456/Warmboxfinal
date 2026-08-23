import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import { demoVideo } from '../data/media'

export default function DemoVideo() {
  const hasLocalVideo = demoVideo.localSrc.trim().length > 0
  const hasYoutube = demoVideo.youtubeId.trim().length > 0
  const hasVideo = hasLocalVideo || hasYoutube

  return (
    <section id="watch" className="py-28 md:py-36 bg-[var(--color-bg-raised)]">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="See it in action" title={demoVideo.title} align="center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className={`mt-10 relative mx-auto rounded-2xl overflow-hidden ${hasLocalVideo ? 'aspect-[9/16] max-w-xs sm:max-w-sm' : 'aspect-video'}`}
          style={!hasVideo ? { background: 'linear-gradient(155deg, #17160F 0%, #3A2A1E 60%, #7A3A1E 130%)' } : { background: 'var(--color-ink)' }}
        >
          {hasLocalVideo ? (
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={demoVideo.localSrc}
              controls
              playsInline
              preload="metadata"
              title={demoVideo.title}
            />
          ) : hasYoutube ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${demoVideo.youtubeId}?rel=0`}
              title={demoVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center gap-3 text-white/70">
              <span className="grid place-items-center h-14 w-14 rounded-full bg-white/10 border border-white/20">
                <Play size={22} strokeWidth={2} className="ml-0.5" />
              </span>
              <span className="text-xs font-mono uppercase tracking-wide">Demo video coming soon</span>
            </div>
          )}
        </motion.div>

        <p className="mt-6 text-center text-sm text-[var(--color-steel)]">{demoVideo.caption}</p>
      </Container>
    </section>
  )
}
