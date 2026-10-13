import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const templates = [
  {
    name: 'WarungKu',
    category: 'UMKM / Kuliner',
    color: 'bg-[var(--color-marigold)]',
  },
  {
    name: 'Portofolio Dev',
    category: 'Personal / Freelancer',
    color: 'bg-[var(--color-sky-wash)]',
  },
  {
    name: 'KlinikSehat',
    category: 'Kesehatan / Klinik',
    color: 'bg-[#85e0a3]', // Add a soft green for variety
  },
  {
    name: 'TokoSerba',
    category: 'E-commerce',
    color: 'bg-[var(--color-coral)]',
  },
  {
    name: 'RestoEnak',
    category: 'Restoran / Cafe',
    color: 'bg-[var(--color-saffron)]',
  },
  {
    name: 'AgencyPro',
    category: 'Agensi',
    color: 'bg-[var(--color-signal-blue)]',
  },
]

export default function KatalogTemplate() {
  return (
    <section id="template" className="section-padding">
      <div className="container-custom border-t border-[var(--border-light)] pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12"
        >
          <div className="max-w-2xl">
            <span className="text-notion-caption text-[var(--color-notion-blue)] uppercase tracking-wider font-bold mb-4 block">
              Katalog Template
            </span>
            <h2 className="text-notion-heading lg:text-notion-heading-lg text-[var(--color-ink-black)] mb-4">
              Pilih Desain yang Sudah Siap
            </h2>
            <p className="font-editorial text-[20px] text-[var(--color-graphite)]">
              Contoh arah visual untuk membantu kamu menemukan tampilan yang paling cocok untuk bisnis.
            </p>
          </div>
          <div className="shrink-0">
            <a href="#" className="btn-text-ghost border border-[var(--border-light)]">
              Lihat Semua <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="card-white group flex cursor-pointer flex-col overflow-hidden p-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`relative flex h-48 items-center justify-center overflow-hidden border-b border-[var(--border-light)] ${t.color}`}>
                <span className="text-notion-heading-sm font-bold text-[var(--color-ink-black)]/20 transition-transform duration-500 group-hover:scale-105">
                  {t.name}
                </span>
                <div className="absolute inset-0 flex items-center justify-center bg-white/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 rounded-lg border border-[var(--border-light)] bg-white p-2.5 shadow-sm transition-transform duration-300 group-hover:translate-y-0">
                    <ExternalLink size={18} className="text-[var(--color-ink-black)]" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-[var(--surface-page-canvas)] border border-[var(--border-light)] text-[var(--color-slate)] text-notion-caption font-bold rounded-[var(--radius-pills)] px-3 py-1">
                    {t.category}
                  </span>
                </div>
                <h3 className="text-notion-subheading text-[var(--color-ink-black)] font-bold group-hover:text-[var(--color-notion-blue)] transition-colors">
                  {t.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
