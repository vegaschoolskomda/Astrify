import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Jenis website apa saja yang dapat dibuat oleh Astrify?',
    a: 'Kami melayani pembuatan Landing Page promosi konversi tinggi, Website Perusahaan (company profile) untuk tender dan kredibilitas, serta Toko Online mandiri dengan katalog dan integrasi pemesanan WhatsApp.',
  },
  {
    q: 'Berapa lama estimasi pengerjaan website sampai siap pakai?',
    a: 'Landing Page diselesaikan dalam 4 hari kerja, Website Perusahaan dalam 7 hari kerja, dan Toko Online sekitar 7–20 hari kerja dihitung sejak materi dan rincian kebutuhan diterima lengkap.',
  },
  {
    q: 'Apakah biaya paket sudah termasuk domain dan cloud hosting?',
    a: 'Ya, seluruh paket website Astrify sudah mencakup biaya registrasi domain resmi (.my.id atau .com) dan cloud hosting berkecepatan tinggi aktif langsung selama 2 tahun pertama tanpa biaya bulanan tersembunyi.',
  },
  {
    q: 'Berapa kali kesempatan revisi yang didapatkan?',
    a: 'Kami memberikan garansi evaluasi dan penyesuaian konten sampai tampilan sesuai dengan kesepakatan dan standar kualitas yang Anda inginkan sebelum website resmi dipublikasikan.',
  },
  {
    q: 'Bagaimana alur dan sistem pembayarannya?',
    a: 'Pembayaran dilakukan secara transparan sesuai invoice resmi atas nama perusahaan. Setelah pembayaran dan kelengkapan materi diterima, pengerjaan langsung dimulai sesuai jadwal.',
  },
  {
    q: 'Apakah website mudah diperbarui sendiri setelah serah terima?',
    a: 'Tentu. Kami mendesain website dengan struktur yang mudah dikelola, dan kami menyerahkan video panduan pengoperasian mandiri agar Anda dapat memperbarui foto, teks, atau produk kapan saja.',
  },
]

function FaqItem({ faq, isOpen, toggle, index }) {
  return (
    <div className="rounded-2xl border border-[#e5e7eb] bg-white transition-all duration-200 hover:border-[#011ad9]/30">
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="flex w-full min-h-[56px] items-center justify-between p-5 text-left text-base font-bold text-[#111827] transition-colors focus:outline-none focus:ring-2 focus:ring-[#011ad9] rounded-2xl group"
      >
        <span className="pr-4 group-hover:text-[#011ad9] transition-colors">
          {faq.q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1f3f9] text-[#011ad9] transition-transform duration-300 ${
            isOpen ? 'rotate-180 bg-[#eef2ff]' : ''
          }`}
        >
          <ChevronDown size={18} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#f1f3f9] px-5 pb-5 pt-3.5 text-sm leading-relaxed text-[#4b5563]">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-[#f8fafd] py-20 md:py-28">
      <div className="container-custom max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-[#011ad9]">
            Tanya Jawab
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Jawaban jelas dan transparan mengenai layanan, teknis pengerjaan, dan garansi website di Astrify.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="space-y-4"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              index={i}
              faq={faq}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
