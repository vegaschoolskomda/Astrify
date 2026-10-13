import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const projects = [
  {
    name: 'TokoBangJaya',
    clientType: 'Retail & Bahan Bangunan',
    type: 'Toko Online WhatsApp',
    timeline: 'Selesai 7 Hari Kerja',
    description: 'Etalase digital 120+ material bangunan dengan fitur cek stok dan kirim daftar pesanan langsung ke kasir via WhatsApp.',
    metrics: 'Pemesanan chat naik 2.4x lipat',
  },
  {
    name: 'Klinik Mitra Sehat',
    clientType: 'Layanan Kesehatan & Medis',
    type: 'Website Perusahaan Medis',
    timeline: 'Selesai 6 Hari Kerja',
    description: 'Profil klinik terpercaya dengan jadwal praktik 8 dokter, rincian biaya poli umum, dan formulir booking antrean online.',
    metrics: 'Mengurangi beban antrean manual',
  },
  {
    name: 'PT Sinar Abadi Perkasa',
    clientType: 'Konstruksi & Pengadaan B2B',
    type: 'Company Profile Tender',
    timeline: 'Selesai 7 Hari Kerja',
    description: 'Website resmi dengan legalitas PT lengkap, portofolio proyek industri, dan sertifikasi ISO untuk verifikasi tender B2B.',
    metrics: 'Lolos verifikasi vendor korporat',
  },
  {
    name: 'SewaCamp Nusantara',
    clientType: 'Rental Alat Outdoor',
    type: 'Katalog Sewa & Booking',
    timeline: 'Selesai 5 Hari Kerja',
    description: 'Katalog sewa tenda dan perlengkapan gunung dengan panduan syarat sewa dan kalkulator estimasi durasi rental.',
    metrics: 'Proses reservasi 3x lebih cepat',
  },
  {
    name: 'EduLearn Academy',
    clientType: 'Kursus & Pelatihan Kerja',
    type: 'Landing Page Pendaftaran',
    timeline: 'Selesai 4 Hari Kerja',
    description: 'Landing page pendaftaran program bootcamp dengan silabus materi, jadwal batch, dan link pembayaran terverifikasi.',
    metrics: 'Target kuota batch terpenuhi',
  },
  {
    name: 'Warung Mami Sedap',
    clientType: 'Kuliner & Katering Harian',
    type: 'Landing Page Menu Katering',
    timeline: 'Selesai 4 Hari Kerja',
    description: 'Daftar menu mingguan katering kantor dengan foto makanan menggugah selera dan tombol order kilat ke admin WhatsApp.',
    metrics: 'Pelanggan langganan bertambah',
  },
]

export default function Portofolio() {
  const handlePortfolioInquiry = (projectName, clientType) => {
    const text = `Halo Astrify, saya melihat portofolio proyek "${projectName}" (${clientType}). Bisakah bisnis saya dibuatkan website dengan konsep serupa?`
    const url = `https://wa.me/6283189121617?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="portofolio" className="bg-[#f8fafd] py-20 md:py-28">
      <div className="container-custom">
        {/* Header terpusat */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
              Studi Kasus & Hasil Nyata
            </span>
            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
              Proyek yang Sudah Kami Selesaikan
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Setiap website dibangun dengan memperhatikan karakter audiens industri masing-masing,
              memastikan hasil kerja benar-benar membawa dampak bisnis positif.
            </p>
          </motion.div>

          <div className="shrink-0">
            <a
              href="https://wa.me/6283189121617?text=Halo%20Astrify,%20boleh%20saya%20melihat%20studi%20kasus%20website%20klien%20lainnya?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-[#011ad9] hover:bg-[#eef2ff] hover:text-[#011ad9]"
            >
              Konsultasi Proyek Serupa
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              onClick={() => handlePortfolioInquiry(project.name, project.clientType)}
              className="group flex cursor-pointer flex-col justify-between rounded-3xl border border-[#e5e7eb] bg-white p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(1,26,217,0.06)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handlePortfolioInquiry(project.name, project.clientType)
                }
              }}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#011ad9]">
                    {project.clientType}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1f3f9] text-[#011ad9] transition-transform duration-200 group-hover:scale-110 group-hover:bg-[#011ad9] group-hover:text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-[#111827] group-hover:text-[#011ad9] transition-colors">
                  {project.name}
                </h3>

                <p className="mt-1 text-xs font-semibold text-[#6b7280]">
                  {project.type} · {project.timeline}
                </p>

                <p className="mt-3.5 text-sm leading-relaxed text-[#4b5563]">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 border-t border-[#f1f3f9] pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#10b981]">
                  <CheckCircle2 size={15} />
                  <span>{project.metrics}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
