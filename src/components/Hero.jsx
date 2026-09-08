import { motion } from 'framer-motion'
import { ArrowRight, LayoutTemplate, Palette, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-custom flex flex-col items-center text-center">
        
        {/* Character marks row - simplified with icons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center gap-[-8px] mb-8"
        >
          <div className="character-mark border-[var(--color-black)] -mr-2 z-30 shadow-sm">
            <LayoutTemplate size={20} className="text-[var(--color-notion-blue)] mx-auto" />
          </div>
          <div className="character-mark border-[var(--color-black)] -mr-2 z-20 shadow-sm scale-110">
            <div className="w-full h-full bg-[var(--color-notion-blue)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>
          <div className="character-mark border-[0var(--color-coral)] z-10 shadow-sm">
            <Palette size={20} className="text-[var(--color-coral)] mx-auto" />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-notion-display-sm md:text-notion-display text-[var(--color-ink-black)] max-w-4xl mx-auto mb-6"
        >
          Website Profesional, <br className="hidden md:block" />
          <span className="inline-block bg-[var(--color-notion-blue)] text-[var(--color-ink-black)] rounded-full px-6 py-2 ml-2 transform -rotate-1">
            Pilih Caramu
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-editorial text-[22px] md:text-[28px] text-[var(--color-graphite)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Template siap pakai untuk kebutuhan cepat, atau custom dari nol sesuai brand kamu. Dua jalur, satu solusi — Astrify.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a href="#layanan" className="btn-primary py-3 px-6 text-base">
            Mulai Sekarang
          </a>
          <a href="#template" className="btn-ghost py-3 px-6 text-base">
            Lihat Template <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Product UI Mockup */}
        <motion.div>
          <div className="relative w-370 max-w-1xl">
            <div className="relative w-full h-100 md:h-[700px] rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/public/img/poster/banner_gabut.png" 
                alt="Hero Mockup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
