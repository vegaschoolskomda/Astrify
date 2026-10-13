import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Star, Zap } from 'lucide-react'

const showcaseTabs = [
  {
    id: 'transparansi',
    title: 'Transparansi Biaya & Rincian Paket',
    subtitle: 'Rincian Jelas di Awal',
    description:
      'Seluruh komponen biaya dijelaskan sejak konsultasi pertama. Paket sudah mencakup registrasi domain resmi, cloud hosting aktif 2 tahun, dan setup SSL tanpa biaya siluman.',
    actionText: 'Lihat Pilihan Paket',
    actionHref: '#layanan',
  },
  {
    id: 'hak-milik',
    title: '100% Hak Milik Akses & Data Bisnis',
    subtitle: 'Kendali Penuh di Tangan Anda',
    description:
      'Setelah proses serah terima, seluruh akun domain, hosting, dan materi website menjadi milik Anda sepenuhnya. Kami pastikan Anda mandiri tanpa keterikatan sepihak.',
    actionText: 'Pelajari Alur Serah Terima',
    actionHref: '#proses',
  },
  {
    id: 'garansi',
    title: 'Garansi Evaluasi & Panduan Mandiri',
    subtitle: 'Dukungan Pasca Launching',
    description:
      'Kami mendampingi proses penyesuaian konten sampai tampilan sesuai harapan. Dilengkapi video panduan ringkas agar tim Anda dapat mengelola website dengan mudah.',
    actionText: 'Konsultasi Sekarang',
    actionHref: '#kontak',
  },
]

export default function ShowcaseLayanan() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <div className="container-custom">
        {/* Header section terpusat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
            Standar Kerja & Kualitas
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
            Transparansi Total dari Hari Pertama
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Kami percaya hasil website yang baik berawal dari komunikasi terbuka, kepemilikan aset
            yang jelas, dan komitmen waktu yang ditepati.
          </p>
        </motion.div>

        {/* Two-Column Split Showcase per DESIGN.md Section 5.4 */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Kolom Kiri: Interactive Stack / Tab Cards */}
          <div className="space-y-4 lg:col-span-6">
            {showcaseTabs.map((tab, index) => {
              const isActive = activeTab === index

              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
                  onClick={() => setActiveTab(index)}
                  className={`group cursor-pointer rounded-2xl p-6 transition-all duration-300 ${
                    isActive
                      ? 'bg-[#011ad9] text-white shadow-[0_14px_30px_rgba(1,26,217,0.28)]'
                      : 'border border-[#e5e7eb] bg-white text-[#111827] hover:border-[#011ad9]/40 hover:bg-[#f8fafd]'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveTab(index)
                    }
                  }}
                  aria-pressed={isActive}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isActive ? 'text-white/80' : 'text-[#011ad9]'
                      }`}
                    >
                      {tab.subtitle}
                    </span>
                    {isActive && (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                    )}
                  </div>

                  <h3
                    className={`mt-2 text-xl font-bold tracking-tight ${
                      isActive ? 'text-white' : 'text-[#111827]'
                    }`}
                  >
                    {tab.title}
                  </h3>

                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      isActive ? 'text-white/90' : 'text-[#4b5563]'
                    }`}
                  >
                    {tab.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold">
                    <a
                      href={tab.actionHref}
                      className={`inline-flex items-center gap-1.5 transition-transform duration-200 group-hover:translate-x-1 ${
                        isActive ? 'text-white underline underline-offset-4' : 'text-[#011ad9]'
                      }`}
                    >
                      {tab.actionText}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Kolom Kanan: Graphic Collage & Arch Frame dengan Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center lg:col-span-6"
          >
            {/* Visual Arch Frame berlatar solid #011ad9 */}
            <div className="relative mx-auto flex h-[460px] w-[310px] sm:h-[500px] sm:w-[360px] items-end justify-center overflow-hidden rounded-t-[140px] md:rounded-t-[180px] bg-[#011ad9] shadow-[0_20px_45px_rgba(1,26,217,0.2)]">
              {/* Soft interior glow */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000b5e]/40 via-transparent to-white/10"
                aria-hidden="true"
              />

              {/* Foto profesional subjek membingkai kubah arch */}
              <img
                src="/img/admin/naufal.png"
                alt="Pengembang Astrify"
                className="relative z-10 h-[92%] w-auto max-w-none object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Floating Badge 1: Performa Kecepatan (Kiri Atas) */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="absolute -left-2 top-6 z-20 w-48 rounded-2xl border border-[#e5e7eb] bg-white p-3.5 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.03)] sm:-left-6"
            >
              <div className="flex items-center justify-between text-xs font-bold text-[#111827]">
                <span>Skor Kecepatan</span>
                <span className="flex items-center gap-1 text-[11px] font-extrabold text-[#10b981]">
                  <Zap size={11} fill="currentColor" /> 99/100
                </span>
              </div>
              <div className="mt-2.5 space-y-1.5 text-[11px] text-[#4b5563]">
                <div>
                  <div className="flex justify-between">
                    <span>Mobile</span>
                    <span className="font-semibold text-[#111827]">98%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#f1f3f9]">
                    <div className="h-full w-[98%] rounded-full bg-[#10b981]" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <span>Desktop</span>
                    <span className="font-semibold text-[#111827]">100%</span>
                  </div>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-[#f1f3f9]">
                    <div className="h-full w-full rounded-full bg-[#10b981]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Star Rating & Kepemilikan (Kiri Bawah) */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -left-3 bottom-10 z-20 flex items-center gap-2.5 rounded-full border border-[#e5e7eb] bg-white px-4 py-2.5 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] sm:-left-6"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fef3c7] text-[#f59e0b]">
                <Star size={15} fill="currentColor" />
              </span>
              <div className="text-left leading-tight">
                <span className="block text-xs font-bold text-[#111827]">100% Hak Milik</span>
                <span className="block text-[11px] text-[#6b7280]">Akses penuh Anda</span>
              </div>
            </motion.div>

            {/* Floating Badge 3: SLA & Ketepatan Waktu (Kanan Bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -right-2 -bottom-2 z-20 flex items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-3.5 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.08)] sm:-right-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ecfdf5] text-base font-extrabold text-[#10b981]">
                98%
              </div>
              <div className="text-left leading-tight">
                <span className="block text-xs font-bold text-[#111827]">Tepat Waktu</span>
                <span className="block text-[11px] text-[#4b5563]">Sesuai kesepakatan</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
