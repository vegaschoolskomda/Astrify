import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react'

const serviceOptions = [
  { value: 'Landing Page', label: 'Landing Page (Rp 150.000 / 2 Tahun)' },
  { value: 'Website Perusahaan', label: 'Web Perusahaan (Rp 2.301.010 / 2 Tahun)' },
  { value: 'Toko Online', label: 'Toko Online (Mulai Rp 3.491.010 / 2 Tahun)' },
  { value: 'Konsultasi Kustom', label: 'Konsultasi Kustom / Kebutuhan Khusus' },
]

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    serviceType: 'Landing Page',
    note: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const trimmedName = formData.name.trim()
    const trimmedWhatsapp = formData.whatsapp.trim()

    if (!trimmedName) {
      setErrorMessage('Mohon cantumkan nama lengkap Anda.')
      return
    }

    if (!trimmedWhatsapp) {
      setErrorMessage('Mohon cantumkan nomor WhatsApp yang aktif.')
      return
    }

    const message =
      `Halo Astrify, saya ingin konsultasi pembuatan website.\n\n` +
      `Nama: ${trimmedName}\n` +
      `Nomor WhatsApp: ${trimmedWhatsapp}\n` +
      `Pilihan Layanan: ${formData.serviceType}\n` +
      (formData.note.trim() ? `Catatan Tambahan: ${formData.note.trim()}\n\n` : `\n`) +
      `Mohon informasi estimasi pengerjaan dan detail langkah selanjutnya. Terima kasih!`

    const whatsappUrl = `https://wa.me/6283189121617?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 lg:pb-28 lg:pt-44">
      {/* Background ambient accent per DESIGN.md Section 1.3 */}
      <div
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#eef2ff]/80 via-[#f8fafd]/40 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          
          {/* Kolom Kiri: Value Proposition & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="text-left lg:col-span-7"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#e0e7ff] bg-[#eef2ff] px-4 py-1.5 text-xs font-semibold text-[#011ad9] md:text-sm">
              <span className="h-2 w-2 rounded-full bg-[#011ad9]" />
              Layanan Pembuatan Website Bisnis & UMKM
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-[#111827] sm:text-5xl lg:text-[56px]">
              Website Bisnis Profesional yang{' '}
              <span className="text-[#011ad9]">Mengubah Pengunjung Jadi Pembeli</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4b5563] md:text-lg">
              Bangun reputasi usaha yang meyakinkan, cepat diakses, dan siap mendatangkan prospek.
              Biaya transparan sekali bayar untuk 2 tahun, sudah termasuk domain dan hosting siap pakai.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#layanan"
                className="btn-primary inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#011ad9] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_20px_-4px_rgba(1,26,217,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#0115b0]"
              >
                Pilih Layanan Kami
                <ArrowRight size={16} />
              </a>
              <a
                href="#template"
                className="btn-ghost inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-7 py-3.5 text-sm font-semibold text-[#111827] transition-all hover:-translate-y-0.5 hover:bg-[#f8fafd]"
              >
                Lihat Contoh Desain
              </a>
            </div>

            {/* Micro-metrics & Key Trust Points */}
            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 pt-6 border-t border-[#e5e7eb]">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] sm:text-[13px]">
                <CheckCircle2 size={18} className="shrink-0 text-[#10b981]" />
                <span>Selesai 4–7 Hari Kerja</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] sm:text-[13px]">
                <CheckCircle2 size={18} className="shrink-0 text-[#10b981]" />
                <span>100% Hak Milik Akses</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-[#111827] sm:text-[13px]">
                <CheckCircle2 size={18} className="shrink-0 text-[#10b981]" />
                <span>Mulai Rp 150rb / 2 Tahun</span>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Floating Form Card (Convertio Archetype) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl border border-[#e5e7eb] bg-white p-7 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.06)] md:p-8">
              
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
                  Konsultasi Kilat
                </span>
                <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#111827]">
                  Mulai Rencanakan Websitemu
                </h2>
                <p className="mt-1 text-sm text-[#4b5563]">
                  Kirim kebutuhan websitemu, kami susunkan estimasi dan arahan terbaik secara gratis.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-600">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="hero-name" className="mb-1.5 block text-xs font-semibold text-[#111827]">
                    Nama Anda
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="input-pill min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="hero-whatsapp" className="mb-1.5 block text-xs font-semibold text-[#111827]">
                    Nomor WhatsApp Aktif
                  </label>
                  <input
                    id="hero-whatsapp"
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    placeholder="Contoh: 081234567890"
                    className="input-pill min-h-[48px]"
                  />
                </div>

                <div>
                  <label htmlFor="hero-service" className="mb-1.5 block text-xs font-semibold text-[#111827]">
                    Pilihan Paket Website
                  </label>
                  <select
                    id="hero-service"
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    className="input-pill min-h-[48px] cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%234B5563%22%20stroke-width%3D%221.8%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[length:18px] bg-[right_18px_center] bg-no-repeat pr-10"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="hero-note" className="mb-1.5 block text-xs font-semibold text-[#111827]">
                    Detail Kebutuhan (Opsional)
                  </label>
                  <input
                    id="hero-note"
                    type="text"
                    value={formData.note}
                    onChange={(e) => handleInputChange('note', e.target.value)}
                    placeholder="Contoh: Butuh web profil katering dan menu"
                    className="input-pill min-h-[48px]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary mt-2 flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[#011ad9] py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_-4px_rgba(1,26,217,0.35)] transition-all hover:bg-[#0115b0]"
                >
                  <MessageCircle size={18} />
                  Kirim & Konsultasi via WhatsApp
                </button>
              </form>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-[#6b7280]">
                <ShieldCheck size={14} className="text-[#10b981]" />
                <span>Konsultasi gratis langsung dengan tim pengembang Astrify.</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
