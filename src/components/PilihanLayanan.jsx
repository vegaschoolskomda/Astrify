import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'

const packages = [
  {
    name: 'Landing Page',
    badge: 'Fokus Promosi & Jualan',
    price: 'Rp 150.000',
    term: 'Sekali bayar untuk 2 tahun (.my.id)',
    duration: 'Selesai 4 hari kerja',
    description:
      'Website satu halaman fokus mengubah pengunjung menjadi pembeli untuk campaign iklan, produk unggulan, atau usaha baru.',
    features: [
      '1 Halaman fokus konversi',
      'Sudah termasuk domain .my.id 2 tahun',
      'Cloud hosting cepat aktif 2 tahun',
      'Formulir terhubung ke WhatsApp',
      'Desain responsif mobile & tablet',
      'Panduan kelola konten mandiri',
    ],
    isFeatured: false,
    actionText: 'Pilih Landing Page',
    whatsappText: 'Halo Astrify, saya tertarik dengan paket Landing Page (Rp 150.000 / 2 Tahun). Mohon informasi cara pemesanan dan jadwal pengerjaannya.',
  },
  {
    name: 'Website Perusahaan',
    badge: 'Paling Banyak Dipilih',
    price: 'Rp 2.301.010',
    term: 'Sekali bayar untuk 2 tahun (.com)',
    duration: 'Selesai 7 hari kerja',
    description:
      'Profil bisnis resmi dan terpercaya untuk memperkenalkan layanan, portofolio kerja, serta meningkatkan kredibilitas di mata calon klien.',
    features: [
      'Hingga 5 halaman profil profesional',
      'Sudah termasuk domain premium .com 2 tahun',
      'Cloud hosting bisnis berkecepatan tinggi',
      'Sertifikat keamanan SSL aktif',
      'Email bisnis resmi dengan nama domain',
      'Optimasi SEO dasar ramah Google',
      'Garansi evaluasi & revisi sampai puas',
    ],
    isFeatured: true,
    actionText: 'Pilih Web Perusahaan',
    whatsappText: 'Halo Astrify, saya tertarik dengan paket Website Perusahaan (Rp 2.301.010 / 2 Tahun). Mohon informasi ketersediaan slot pengerjaan dan detailnya.',
  },
  {
    name: 'Toko Online',
    badge: 'Katalog & Penjualan Mandiri',
    price: 'Mulai Rp 3.491.010',
    term: 'Sekali bayar untuk 2 tahun (.com)',
    duration: 'Selesai 7–20 hari kerja',
    description:
      'Lapak digital milik sendiri untuk memajang produk, mengelola pesanan, dan menerima pembayaran tanpa potongan komisi marketplace.',
    features: [
      'Katalog produk lengkap & kategori',
      'Keranjang belanja otomatis',
      'Checkout terhubung WhatsApp / Gateway',
      'Domain .com & hosting toko online 2 tahun',
      'Kalkulasi estimasi ongkos kirim',
      'Dashboard manajemen produk mandiri',
    ],
    isFeatured: false,
    actionText: 'Pilih Toko Online',
    whatsappText: 'Halo Astrify, saya tertarik dengan paket Toko Online (Mulai Rp 3.491.010 / 2 Tahun). Mohon informasi konsultasi fitur dan estimasi biayanya.',
  },
]

export default function PilihanLayanan() {
  const handleConsultation = (text) => {
    const url = `https://wa.me/6283189121617?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="layanan" className="bg-[#f8fafd] py-20 md:py-28">
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
            Pilihan Paket & Investasi
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
            Biaya Transparan, Siap Pakai 2 Tahun
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Pilih paket yang paling tepat untuk skala bisnis Anda. Seluruh paket sudah termasuk biaya
            domain dan cloud hosting aktif langsung untuk 2 tahun pertama.
          </p>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            return (
              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  pkg.isFeatured
                    ? 'border-2 border-[#011ad9] bg-white shadow-[0_20px_45px_rgba(1,26,217,0.12)] lg:-translate-y-2'
                    : 'border border-[#e5e7eb] bg-white shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.04)] hover:-translate-y-1'
                }`}
              >
                {/* Badge Unggulan untuk Web Perusahaan */}
                {pkg.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#011ad9] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md">
                      <Sparkles size={13} />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {!pkg.isFeatured && (
                    <span className="mb-2 inline-block rounded-full bg-[#eef2ff] px-3 py-1 text-xs font-semibold text-[#011ad9]">
                      {pkg.badge}
                    </span>
                  )}

                  <h3 className="text-2xl font-bold tracking-tight text-[#111827]">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#4b5563]">
                    {pkg.description}
                  </p>

                  <div className="mt-6 border-b border-[#e5e7eb] pb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold tracking-tight text-[#111827]">
                        {pkg.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs font-medium text-[#6b7280]">
                      {pkg.term}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#f1f3f9] px-3 py-1 text-xs font-semibold text-[#111827]">
                      <span>⏱ {pkg.duration}</span>
                    </div>
                  </div>

                  {/* Daftar Fitur Lengkap */}
                  <div className="mt-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#111827]">
                      Fasilitas yang Anda dapatkan:
                    </p>
                    <ul className="mt-4 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-[#4b5563]">
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#ecfdf5] text-[#10b981]">
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tombol Aksi Pill */}
                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => handleConsultation(pkg.whatsappText)}
                    className={`flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold transition-all duration-200 ${
                      pkg.isFeatured
                        ? 'bg-[#011ad9] text-white shadow-[0_8px_20px_-4px_rgba(1,26,217,0.35)] hover:bg-[#0115b0]'
                        : 'border border-[#e5e7eb] bg-white text-[#111827] hover:border-[#011ad9] hover:bg-[#eef2ff] hover:text-[#011ad9]'
                    }`}
                  >
                    {pkg.actionText}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
