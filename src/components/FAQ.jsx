import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Website seperti apa yang bisa dibuat?',
    a: 'Kami mengerjakan landing page, website perusahaan, dan toko online. Struktur dan isi halaman disesuaikan dengan tujuan bisnis kamu.',
  },
  {
    q: 'Berapa lama pengerjaan website?',
    a: 'Landing page selesai sekitar 4 hari kerja, website perusahaan sekitar 7 hari kerja, dan toko online sekitar 7–20 hari kerja setelah materi lengkap.',
  },
  {
    q: 'Berapa kali revisi?',
    a: 'Jumlah revisi disepakati sebelum pengerjaan dimulai. Kami memastikan halaman, konten, dan tampilan sudah sesuai sebelum website dipublikasikan.',
  },
  {
    q: 'Bagaimana sistem pembayarannya?',
    a: 'Pembayaran dilakukan sesuai invoice dan kesepakatan proyek. Detail termin akan dijelaskan sejak konsultasi awal agar semuanya jelas.',
  },
  {
    q: 'Apakah ada biaya hosting & domain?',
    a: 'Biaya hosting dan domain ditanggung klien. Kami bantu rekomendasikan provider terbaik dan setup semuanya untukmu.',
  },
  {
    q: 'Apakah website bisa di-update sendiri?',
    a: 'Tentu. Kami serahkan website dalam kondisi yang mudah dikelola. Untuk custom, kami juga berikan panduan editing konten.',
  },
]

function FaqItem({ faq, isOpen, toggle }) {
  return (
    <div className="border-b border-[var(--border-light)] last:border-0">
      <button 
        onClick={toggle} 
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-notion-heading-sm text-[var(--color-ink-black)] group-hover:text-[var(--color-notion-blue)] transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown 
          size={24} 
          className={`text-[var(--color-stone)] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-notion-body text-[var(--color-charcoal)] leading-relaxed max-w-2xl">
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
    <section id="faq" className="section-padding">
      <div className="container-custom max-w-[800px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="text-notion-caption text-[var(--color-notion-blue)] uppercase tracking-wider font-bold mb-4 block">
            FAQ
          </span>
          <h2 className="text-notion-heading lg:text-notion-heading-lg text-[var(--color-ink-black)] mb-4">
            Pertanyaan yang Sering Ditanyakan
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="border-t border-[var(--border-light)]"
        >
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
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
