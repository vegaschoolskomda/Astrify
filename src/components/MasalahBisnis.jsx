import { motion } from 'framer-motion'
import { CheckCircle2, ShieldCheck, Target, Zap } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Struktur Fokus Konversi',
    tagline: 'Mengarahkan Pengunjung',
    description:
      'Halaman dirancang sistematis membimbing calon klien ke tindakan nyata: formulir pemesanan, katalog produk, atau kontak WhatsApp tanpa distraksi.',
  },
  {
    icon: ShieldCheck,
    title: 'Biaya Transparan 2 Tahun',
    tagline: 'Tanpa Biaya Tersembunyi',
    description:
      'Sudah mencakup domain resmi dan hosting aktif langsung 2 tahun pertama. Tidak ada tagihan bulanan mendadak atau biaya tersembunyi.',
  },
  {
    icon: Zap,
    title: 'Selesai 4–7 Hari Kerja',
    tagline: 'Cepat & Siap Pakai',
    description:
      'Alur kerja terstruktur dengan standar waktu pengerjaan pasti. Website live dengan optimasi mobile penuh dan seluruh akses diserahkan 100% ke Anda.',
  },
]

export default function MasalahBisnis() {
  return (
    <section className="bg-[#f8fafd] py-20 md:py-28">
      <div className="container-custom">
        {/* Header terpusat per DESIGN.md Section 5.3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
            Keunggulan Layanan
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
            Dirancang untuk Keberhasilan Bisnis Anda
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Setiap elemen dan arsitektur website dibangun dengan pertimbangan cermat untuk mendukung
            pertumbuhan usaha dan memperkuat kepercayaan calon pembeli.
          </p>
        </motion.div>

        {/* 3-Kolom Kartu Fitur dengan sudut rounded-3xl dan ikon bulat 56px */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="group relative flex flex-col items-center rounded-3xl border border-[#e5e7eb] bg-white p-8 text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(1,26,217,0.06)]"
              >
                {/* Kontainer ikon lingkaran 56px per DESIGN.md Section 5.3 */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#f1f3f9] text-[#011ad9] transition-colors duration-300 group-hover:bg-[#eef2ff]">
                  <Icon size={26} strokeWidth={2.2} />
                </div>

                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#011ad9]">
                  {feature.tagline}
                </span>

                <h3 className="mb-3 text-xl font-bold tracking-tight text-[#111827]">
                  {feature.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#4b5563]">
                  {feature.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
