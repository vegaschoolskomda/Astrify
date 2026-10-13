import { motion } from 'framer-motion'
import { MessageSquare, MousePointerClick, Palette, RefreshCcw, Rocket } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Konsultasi Kebutuhan',
    desc: 'Diskusikan tujuan bisnis, jenis produk, dan referensi tampilan yang Anda inginkan bersama tim kami.',
  },
  {
    step: '02',
    icon: MousePointerClick,
    title: 'Pilih Skema Paket',
    desc: 'Tentukan jenis website (Landing Page, Web Perusahaan, atau Toko Online) serta registrasi domain resmi Anda.',
  },
  {
    step: '03',
    icon: Palette,
    title: 'Desain & Pengerjaan',
    desc: 'Tim pengembang Astrify membangun arsitektur, konten, dan integrasi teknis sesuai timeline 4–7 hari kerja.',
  },
  {
    step: '04',
    icon: RefreshCcw,
    title: 'Review & Penyesuaian',
    desc: 'Anda meninjau preview hasil website di perangkat nyata, kami lakukan penyempurnaan sampai Anda puas.',
  },
  {
    step: '05',
    icon: Rocket,
    title: 'Launch & Serah Terima',
    desc: 'Website resmi dipublikasikan online! Seluruh data login, akun domain, dan panduan kami serahkan 100%.',
  },
]

export default function ProsesKerja() {
  return (
    <section id="proses" className="bg-[#f8fafd] py-20 md:py-28">
      <div className="container-custom">
        {/* Header terpusat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
            Alur Pengerjaan
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
            Dari Konsultasi Hingga Website Online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Proses kerja terarah dan transparan, tanpa istilah teknis yang membingungkan atau biaya
            tambahan di tengah jalan.
          </p>
        </motion.div>

        {/* 5-Step Process Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.article
                key={s.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#e5e7eb] bg-white p-6 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(1,26,217,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#eef2ff] text-xs font-extrabold text-[#011ad9]">
                      {s.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f3f9] text-[#011ad9] transition-colors group-hover:bg-[#011ad9] group-hover:text-white">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold tracking-tight text-[#111827] group-hover:text-[#011ad9] transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#4b5563]">
                    {s.desc}
                  </p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
