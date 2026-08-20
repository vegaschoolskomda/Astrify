import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTAPenutup() {
  return (
    <section id="kontak" className="section-padding overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
          className="card-accent bg-[var(--color-marigold)] text-center py-20 px-6 relative overflow-hidden"
        >
          {/* Decorative Marks */}
          <div className="absolute top-10 left-10 hidden md:block">
            <div className="w-12 h-12 bg-white rounded-full border-[3px] border-[var(--color-notion-blue)] flex items-center justify-center text-[var(--color-notion-blue)] font-bold text-xl">
              !
            </div>
          </div>
          <div className="absolute bottom-10 right-10 hidden md:block">
            <div className="w-16 h-16 bg-white rounded-full border-[3px] border-[var(--color-coral)] flex items-center justify-center text-[var(--color-coral)] font-bold text-2xl">
              *
            </div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-notion-display-sm md:text-notion-display text-[var(--color-ink-black)] mb-6">
              Siap Bangun Website Impianmu?
            </h2>
            <p className="font-editorial text-[22px] md:text-[28px] text-[var(--color-charcoal)] mb-10 leading-relaxed">
              Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhanmu dan kami bantu temukan solusi terbaik.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary py-3 px-8 text-base bg-[var(--color-ink-black)] hover:bg-[var(--color-charcoal)] text-white"
              >
                Konsultasi Sekarang
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
