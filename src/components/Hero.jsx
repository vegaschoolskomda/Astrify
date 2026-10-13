import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="overflow-hidden pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container-custom flex flex-col items-center text-center">
        
        {/* Iklan Text Singkat */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="flex p-10 items-center gap-2 border-b border-[var(--color-notion-blue)]/30 pb-2 text-sm font-semibold text-[var(--color-notion-blue)] md:text-base">
          <CheckCircle2 size={18} />
            Website yang rapi, cepat, dan siap dipakai jualan.
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-notion-display-sm md:text-notion-display text-[var(--color-ink-black)] max-w-4xl mx-auto mb-6"
        >
          Website Profesional, <br className="hidden md:block" />
          <span className="ml-2 inline-block text-[var(--color-notion-blue)]">
            yang Menghasilkan
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="font-editorial text-[22px] md:text-[20px] text-[var(--color-graphite)] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Dari landing page sampai toko online, kami bantu bisnis kamu tampil meyakinkan dan mudah ditemukan.
        </motion.p>
        {/* Card Harga */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="w-full max-w-[900px] mb-20"
        >
          
          <div className="flex flex-col gap-4 text-left">
            <a href="#layanan" className="grid min-h-[90px] grid-cols-1 items-center gap-3 rounded-[18px] border-2 border-[#817a75] bg-white px-7 py-4 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1.05fr_1.65fr_1.35fr_auto] md:gap-5 md:px-7">
              <h2 className="text-[21px] font-bold leading-tight text-[#191919]">Landing Page</h2>
              <p className="text-[18px] leading-[1.35] text-[#69635f]">1 halaman fokus jualan · selesai 4 hari kerja</p>
              <div className="text-left md:text-right">
                <p className="text-[25px] font-extrabold leading-none text-[#191919]">Rp 150.000</p>
                <p className="mt-1 text-[16px] leading-tight text-[#69635f]">Sekali bayar untuk 2 tahun</p>
              </div>
              <ArrowRight size={25} strokeWidth={2.5} className="hidden text-[#030A8C] md:block" />
            </a>

            <a href="#layanan" className="grid min-h-[94px] grid-cols-1 items-center gap-3 rounded-[18px] border-2 border-[#040DBF] bg-[#f0f0ff] px-7 py-4 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1.05fr_1.65fr_1.35fr_auto] md:gap-5 md:px-7">
              <div>
                <h2 className="text-[21px] font-bold leading-tight text-[#191919]">Web Perusahaan</h2>
                <span className="mt-2 inline-flex rounded-full bg-[#030A8C] px-3 py-1 text-[14px] font-bold uppercase leading-none text-white">
                  Paling Dipilih
                </span>
              </div>
              <p className="text-[18px] leading-[1.35] text-[#69635f]">5 halaman profil · selesai 7 hari kerja</p>
              <div className="text-left md:text-right">
                <p className="text-[25px] font-extrabold leading-none text-[#191919]">Rp 2.301.010</p>
                <p className="mt-1 text-[16px] leading-tight text-[#69635f]">Sekali bayar untuk 2 tahun (.com)</p>
              </div>
              <ArrowRight size={25} strokeWidth={2.5} className="hidden text-[#040DBF] md:block" />
            </a>

            <a href="#layanan" className="grid min-h-[90px] grid-cols-1 items-center gap-3 rounded-[18px] border-2 border-[#817a75] bg-white px-7 py-4 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[1.05fr_1.65fr_1.35fr_auto] md:gap-5 md:px-7">
              <h2 className="text-[21px] font-bold leading-tight text-[#191919]">Toko Online</h2>
              <p className="text-[18px] leading-[1.35] text-[#69635f]">Lapak milik sendiri · 7–20 hari kerja</p>
              <div className="text-left md:text-right">
                <p className="text-[25px] font-extrabold leading-none text-[#191919]">mulai Rp 3.491.010</p>
                <p className="mt-1 text-[16px] leading-tight text-[#69635f]">Sekali bayar untuk 2 tahun</p>
              </div>
              <ArrowRight size={25} strokeWidth={2.5} className="hidden text-[#030A8C] md:block" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <a href="#layanan" className="btn-primary py-3 px-6 text-base border-2 border-[#030A8C] rounded-full hover:bg-[#030A8C] hover:text-white transition-colors duration-300">
            Konsultasi Gratis <ArrowDown size={16} />
          </a>
          <a href="#template" className="btn-ghost py-3 px-6 text-base border-2 border-[#030A8C] rounded-full hover:bg-[#030A8C] hover:text-white transition-colors duration-300">
            Lihat Template <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Product UI Mockup */}


      </div>
    </section>
  )
}
