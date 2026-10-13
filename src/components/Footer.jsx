import { Link } from 'react-router-dom'
import { ArrowUpRight, Heart, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e7eb] bg-white py-16">
      <div className="container-custom">
        <div className="mb-14 grid gap-10 md:grid-cols-12">
          
          {/* Kolom 1: Brand Info */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block" aria-label="Astrify Beranda">
              <img
                src="/img/logo/logo-lengkap.png"
                alt="Astrify"
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#4b5563]">
              Layanan pembuatan website profesional, cepat, dan siap pakai untuk pelaku usaha,
              perusahaan, dan UMKM di seluruh Indonesia.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f1f3f9] px-3.5 py-1 text-xs font-semibold text-[#011ad9]">
              <span className="h-2 w-2 rounded-full bg-[#10b981]" />
              Menerima Proyek Baru Tahun 2026
            </div>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Navigasi Halaman
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href="#layanan"
                  className="text-[#4b5563] transition-colors hover:text-[#011ad9]"
                >
                  Pilihan Layanan
                </a>
              </li>
              <li>
                <a
                  href="#template"
                  className="text-[#4b5563] transition-colors hover:text-[#011ad9]"
                >
                  Katalog Template
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  className="text-[#4b5563] transition-colors hover:text-[#011ad9]"
                >
                  Studi Kasus & Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#proses"
                  className="text-[#4b5563] transition-colors hover:text-[#011ad9]"
                >
                  Alur Proses Kerja
                </a>
              </li>
              <li>
                <a
                  href="#tim"
                  className="text-[#4b5563] transition-colors hover:text-[#011ad9]"
                >
                  Profil Tim Kami
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-[#4b5563] transition-colors hover:text-[#011ad9]"
                >
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Konsultasi */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#111827]">
              Hubungi Kami
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[#4b5563]">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-[#011ad9]" />
                <a href="mailto:hello@astrify.id" className="hover:text-[#011ad9] transition-colors">
                  hello@astrify.id
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-[#011ad9]" />
                <a
                  href="https://wa.me/6283189121617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#011ad9] transition-colors"
                >
                  +62 831-8912-1617 (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#011ad9]" />
                <span>Bandung, Jawa Barat, Indonesia</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Legal Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#f1f3f9] pt-8 text-xs text-[#6b7280] md:flex-row">
          <p>&copy; 2026 Astrify. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi di Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
