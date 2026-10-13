import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'

const templates = [
  {
    name: 'WarungKu',
    category: 'Kuliner & F&B',
    tag: 'Menu & Reservasi WhatsApp',
    gradient: 'from-[#011ad9]/10 via-[#011ad9]/5 to-white',
    description: 'Tata letak visual untuk rumah makan, cafe, dan katering dengan daftar menu foto dan pemesanan instan.',
  },
  {
    name: 'Klinik Mitra Sehat',
    category: 'Layanan Medis & Klinik',
    tag: 'Jadwal Dokter & Konsultasi',
    gradient: 'from-[#10b981]/15 via-[#10b981]/5 to-white',
    description: 'Profil klinik bersih dan terpercaya dengan daftar dokter, fasilitas poli, serta formulir pendaftaran janji temu.',
  },
  {
    name: 'Sinar Abadi Logistik',
    category: 'Korporat & Jasa B2B',
    tag: 'Profil Usaha & Portofolio Tender',
    gradient: 'from-[#011ad9]/15 via-[#4f46e5]/5 to-white',
    description: 'Struktur profesional untuk perusahaan jasa, konstruksi, dan supplier yang membutuhkan kredibilitas saat tender.',
  },
  {
    name: 'TokoSerba Retail',
    category: 'Toko Online & Retail',
    tag: 'Etalase & Keranjang Belanja',
    gradient: 'from-[#f59e0b]/15 via-[#f59e0b]/5 to-white',
    description: 'Katalog produk mandiri dengan filter kategori, keranjang pesanan, dan checkout langsung terhubung ke WhatsApp.',
  },
  {
    name: 'SewaCamp Outdoor',
    category: 'Rental & Penyewaan',
    tag: 'Katalog Alat & Syarat Sewa',
    gradient: 'from-[#10b981]/15 via-blue-50 to-white',
    description: 'Sistem tampilan inventaris alat sewa, paket camping, dan kalkulasi durasi booking yang mudah dipahami klien.',
  },
  {
    name: 'DevStudio Creative',
    category: 'Agensi & Kreatif',
    tag: 'Showcase Karya & Layanan',
    gradient: 'from-[#011ad9]/12 via-[#a5b4fc]/10 to-white',
    description: 'Tampilan visual modern untuk studio foto, desainer, dan konsultan yang ingin memukau calon klien berkelas.',
  },
]

export default function KatalogTemplate() {
  const handleTemplateInquiry = (templateName) => {
    const text = `Halo Astrify, saya tertarik melihat preview dan detail template "${templateName}". Boleh kirimkan contoh demonya?`
    const url = `https://wa.me/6283189121617?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="template" className="bg-white py-20 md:py-28">
      <div className="container-custom">
        {/* Header terpusat dengan tombol Lihat Semua */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
              Inspirasi & Desain
            </span>
            <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
              Katalog Arah Desain Siap Pakai
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Beragam konsep tata letak teruji yang siap disesuaikan dengan identitas brand, warna,
              dan materi bisnis Anda.
            </p>
          </motion.div>

          <div className="shrink-0">
            <a
              href="https://wa.me/6283189121617?text=Halo%20Astrify,%20saya%20ingin%20melihat%20katalog%20lengkap%20contoh%20website%20klien."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] shadow-sm transition-all hover:border-[#011ad9] hover:bg-[#eef2ff] hover:text-[#011ad9]"
            >
              Minta Contoh Lainnya
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        {/* Grid Template Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((tpl, i) => (
            <motion.article
              key={tpl.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              onClick={() => handleTemplateInquiry(tpl.name)}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(1,26,217,0.06)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleTemplateInquiry(tpl.name)
                }
              }}
            >
              {/* Browser Mockup Chrome Header */}
              <div className={`relative flex h-48 flex-col justify-between border-b border-[#e5e7eb] bg-gradient-to-br p-4 ${tpl.gradient}`}>
                <div className="flex items-center justify-between">
                  {/* Window Mock Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  </div>
                  <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-semibold text-[#4b5563] backdrop-blur-xs">
                    {tpl.category}
                  </span>
                </div>

                <div className="text-center">
                  <h4 className="text-2xl font-bold tracking-tight text-[#111827] transition-transform duration-300 group-hover:scale-105">
                    {tpl.name}
                  </h4>
                  <span className="mt-1 inline-block text-xs font-medium text-[#4b5563]">
                    {tpl.tag}
                  </span>
                </div>

                <div className="flex justify-end">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#011ad9] shadow-sm transition-transform duration-200 group-hover:scale-110">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>

              {/* Deskripsi & Aksi */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <span className="inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#011ad9]">
                    {tpl.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#111827] group-hover:text-[#011ad9] transition-colors">
                    {tpl.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                    {tpl.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#f1f3f9] pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#011ad9] group-hover:underline">
                    Tanyakan Contoh Desain Ini
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
