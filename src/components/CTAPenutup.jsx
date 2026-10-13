import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTAPenutup() {
  return (
    <section id="kontak" className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-[#011ad9] px-7 py-16 text-center shadow-[0_20px_45px_rgba(1,26,217,0.25)] sm:px-12 md:py-20"
        >
          {/* Subtle ambient curves in background per DESIGN.md Section 1.3 */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-[#000b5e]/40 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xs">
              Mulai Langkah Pertama
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Siap Membangun Website Bisnis yang Menghasilkan?
            </h2>

            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">
              Konsultasikan rencana websitemu secara gratis. Tim Astrify siap membantu merancang
              website berpenampilan meyakinkan yang tepat guna dan ramah anggaran.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/6283189121617?text=Halo%20Astrify,%20saya%20ingin%20konsultasi%20pembuatan%20website%20untuk%20bisnis%20saya."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-[#011ad9] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f8fafd] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#011ad9]"
              >
                <MessageCircle size={18} />
                Konsultasi Gratis via WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>

            <p className="mt-5 text-xs text-white/70">
              Respon cepat pada jam operasional kerja. Tanpa komitmen pemesanan di awal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
