import { motion } from 'framer-motion'
import { User } from 'lucide-react'

const tim = [
  {
    name: 'Andi Pratama',
    role: 'Founder & Lead Developer',
    color: 'border-[var(--color-notion-blue)]',
  },
  {
    name: 'Sari Dewi',
    role: 'UI/UX Designer',
    color: 'border-[var(--color-coral)]',
  },
  {
    name: 'Rizky Firmansyah',
    role: 'Fullstack Developer',
    color: 'border-[var(--color-marigold)]',
  },
  {
    name: 'Maya Putri',
    role: 'Project Manager',
    color: 'border-[var(--color-sky-wash)]',
  },
]

export default function TimKami() {
  return (
    <section id="tim" className="section-padding">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-notion-caption text-[var(--color-notion-blue)] uppercase tracking-wider font-bold mb-4 block">
            Tim Kami
          </span>
          <h2 className="text-notion-heading lg:text-notion-heading-lg text-[var(--color-ink-black)] mb-4">
            Orang-Orang di Balik Astrify
          </h2>
          <p className="font-editorial text-[20px] text-[var(--color-graphite)] max-w-xl mx-auto">
            Tim kecil yang berbakat dan passionate dalam membangun website.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {tim.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="card-white flex flex-col items-center text-center p-8"
            >
              <div className={`w-16 h-16 rounded-full border-[3px] ${t.color} flex items-center justify-center bg-white mb-6`}>
                <User size={28} className="text-[var(--color-stone)]" />
              </div>
              <h3 className="text-notion-heading-sm text-[var(--color-ink-black)] mb-1">{t.name}</h3>
              <p className="text-notion-body-sm text-[var(--color-slate)]">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
