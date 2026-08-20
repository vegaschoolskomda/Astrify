import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'TokoBangJaya',
    category: 'E-commerce',
    color: 'bg-[var(--color-sky-wash)]',
  },
  {
    name: 'Klinik Mitra Sehat',
    category: 'Kesehatan',
    color: 'bg-[var(--color-marigold)]',
  },
  {
    name: 'PT. Sinar Abadi',
    category: 'Corporate',
    color: 'bg-white',
  },
  {
    name: 'SewaCampAja',
    category: 'Rental / Booking',
    color: 'bg-[var(--color-coral)]',
  },
  {
    name: 'EduLearn Platform',
    category: 'Edtech',
    color: 'bg-[var(--surface-dark-card-surface)] text-white',
  },
  {
    name: 'Warung Mami',
    category: 'UMKM / Kuliner',
    color: 'bg-[var(--color-saffron)]',
  },
]

export default function Portofolio() {
  return (
    <section id="portofolio" className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-[var(--border-light)] pt-20"
        >
          <div className="max-w-2xl">
            <span className="text-notion-caption text-[var(--color-notion-blue)] uppercase tracking-wider font-bold mb-4 block">
              Portofolio
            </span>
            <h2 className="text-notion-heading lg:text-notion-heading-lg text-[var(--color-ink-black)] mb-4">
              Proyek yang Sudah Kami Kerjakan
            </h2>
            <p className="font-editorial text-[20px] text-[var(--color-graphite)]">
              Bukti nyata kemampuan kami mengerjakan website custom dari nol untuk berbagai klien.
            </p>
          </div>
          <div className="shrink-0">
            <a href="#" className="btn-text-ghost border border-[var(--border-light)]">
              Lihat Semua <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className={`p-6 flex flex-col h-[300px] justify-between cursor-pointer group rounded-[var(--radius-xl)] ${p.color} ${p.color === 'bg-white' ? 'border border-[var(--border-light)]' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span className={`inline-block text-notion-caption font-bold rounded-[var(--radius-pills)] px-3 py-1 ${p.color.includes('dark') ? 'bg-white/20 text-white' : 'bg-black/5 text-[var(--color-ink-black)]/60'}`}>
                  {p.category}
                </span>
                <div className={`p-2 rounded-[var(--radius-buttons)] transition-colors ${p.color.includes('dark') ? 'bg-white/10 group-hover:bg-white/20' : 'bg-white shadow-sm border border-[var(--border-light)]'}`}>
                  <ArrowUpRight size={20} className={p.color.includes('dark') ? 'text-white' : 'text-[var(--color-ink-black)]'} />
                </div>
              </div>
              <div>
                <h3 className={`text-notion-heading-sm mb-2 ${p.color.includes('dark') ? 'text-white' : 'text-[var(--color-ink-black)]'}`}>
                  {p.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
