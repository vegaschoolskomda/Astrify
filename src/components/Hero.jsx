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
          <div className="character-mark border-[var(--color-notion-blue)] -mr-2 z-30 shadow-sm">
            <LayoutTemplate size={20} className="text-[var(--color-notion-blue)] mx-auto" />
          </div>
          <div className="character-mark border-[var(--color-marigold)] -mr-2 z-20 shadow-sm scale-110">
            <div className="w-full h-full bg-[var(--color-marigold)] flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
          </div>
          <div className="character-mark border-[var(--color-coral)] z-10 shadow-sm">
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
          <span className="inline-block bg-[var(--color-marigold)] text-[var(--color-ink-black)] rounded-full px-6 py-2 ml-2 transform -rotate-1">
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
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.4 }}
          className="w-full max-w-5xl mx-auto bg-white rounded-xl border border-[var(--border-light)] overflow-hidden"
          style={{ boxShadow: '0px 12px 32px rgba(0, 0, 0, 0.08)' }}
        >
          {/* Mockup Header */}
          <div className="h-12 border-b border-[var(--border-light)] flex items-center px-4 gap-2 bg-[#f9f9f9]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-4 flex-1 flex justify-center">
              <div className="bg-white border border-[var(--border-light)] rounded-md px-32 py-1 text-xs text-[var(--color-stone)] flex items-center gap-2">
                astrify.id/dashboard
              </div>
            </div>
          </div>
          
          {/* Mockup Body */}
          <div className="flex h-[400px]">
            {/* Sidebar */}
            <div className="w-48 border-r border-[var(--border-light)] p-4 flex flex-col gap-2 bg-[#fbfbfa]">
              <div className="text-xs font-semibold text-[var(--color-stone)] mb-2 px-2">WORKSPACE</div>
              <div className="flex items-center gap-2 text-sm text-[var(--color-ink-black)]/80 bg-[var(--color-ink-black)]/5 px-2 py-1.5 rounded-md">
                <span>📁</span> Projects
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--color-ink-black)]/80 px-2 py-1.5 rounded-md hover:bg-[var(--color-ink-black)]/5">
                <span>💬</span> Messages
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--color-ink-black)]/80 px-2 py-1.5 rounded-md hover:bg-[var(--color-ink-black)]/5">
                <span>⚙️</span> Settings
              </div>
            </div>
            {/* Content */}
            <div className="flex-1 p-8 text-left bg-white">
              <h3 className="text-notion-heading-sm mb-6 flex items-center gap-2">
                <span>🚀</span> Active Projects
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {/* Kanban Cards */}
                <div className="bg-white border border-[var(--border-light)] rounded-lg p-3 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-[var(--color-sky-tint)] text-[var(--color-notion-blue)] px-2 py-0.5 rounded-full">In Progress</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-ink-black)] mt-1">E-Commerce TokoBangJaya</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-stone)] mt-2">
                    <CheckCircle2 size={12} /> 4/5 tasks
                  </div>
                </div>
                
                <div className="bg-white border border-[var(--border-light)] rounded-lg p-3 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium bg-[#fce8e8] text-[#e32d14] px-2 py-0.5 rounded-full">Review</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-ink-black)] mt-1">Klinik Sehat Landing Page</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-stone)] mt-2">
                    <CheckCircle2 size={12} /> 2/2 tasks
                  </div>
                </div>
                
                <div className="bg-[#fbfbfa] border border-dashed border-[var(--border-light)] rounded-lg p-3 flex items-center justify-center cursor-pointer hover:bg-[var(--color-ink-black)]/5 transition-colors">
                  <span className="text-sm text-[var(--color-stone)] font-medium">+ New Project</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
