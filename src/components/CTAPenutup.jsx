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
          className="card-accent bg-[var(--color-notion-blue)] text-center py-20 px-6 relative overflow-hidden"
        >

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-notion-display-sm md:text-notion-display text-[var(--color-white)] mb-6">
              Siap Bangun Website Impianmu?
            </h2>
            <p className="font-editorial text-[22px] md:text-[28px] text-[var(--color-white)] mb-10 leading-relaxed">
              Konsultasi gratis, tanpa komitmen. Ceritakan kebutuhanmu dan kami bantu temukan solusi terbaik.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/6283189121617" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary py-3 px-8 text-base bg-[var(--color-white)] hover:bg-[var(--color-notion-blue)] text-black hover:text-[var(--color-white)] transition-colors flex items-center gap-2 border border-[var(--color-white)] hover:border-[var(--color-white)]"
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
