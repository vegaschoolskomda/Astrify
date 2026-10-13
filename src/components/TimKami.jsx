import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

const tim = [
  {
    name: 'Naufal',
    slug: 'naufal',
    role: 'DevOps & Backend Developer',
    color: 'border-[var(--color-notion-blue)]',
    image: '/img/admin/naufal.png',
  },
  {
    name: 'Vega',
    slug: 'vega',
    role: 'FullStack Developer',
    color: 'border-[var(--color-coral)]',
    image: '/img/admin/vega.png',
  },
  {
    name: 'Kevin',
    slug: 'kevin',
    role: 'Ui/UX Designer',
    color: 'border-[var(--color-marigold)]',
    image: '/img/admin/kevin.png',
  },
  {
    name: 'Atha',
    slug: 'atha',
    role: 'Data Analyst & Frontend Developer',
    color: 'border-[var(--color-sky-wash)]',
    image: '/img/admin/atha.png',
  },
]

export default function TimKami() {
  return (
    <section id="tim" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-16 text-center"
        >
          <span className="text-notion-caption mb-4 block font-bold uppercase tracking-wider text-[var(--color-notion-blue)]">
            Tim Kami
          </span>
          <h2 className="text-notion-heading mb-4 text-[var(--color-ink-black)] lg:text-notion-heading-lg">
            Orang-Orang di Balik Astrify
          </h2>
          <p className="mx-auto max-w-xl font-editorial text-[20px] text-[var(--color-graphite)]">
            Tim kecil yang berbakat dan passionate dalam membangun website.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tim.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <Link
                to={`/admin/${t.slug}`}
                className="card-white group flex h-full flex-col items-center p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-notion-blue)]/20 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
                aria-label={`Lihat profil ${t.name}`}
              >
                <div
                  className={`mb-6 flex h-30 w-30 items-center justify-center overflow-hidden rounded-full border-[3px] bg-white ${t.color}`}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      const fallback = event.currentTarget.nextSibling
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center bg-[var(--color-paper-warmth)] text-[var(--color-stone)]">
                    <User size={28} />
                  </div>
                </div>

                <h3 className="mb-1 text-notion-heading-sm text-[var(--color-ink-black)]">
                  {t.name}
                </h3>
                <p className="text-notion-body-sm text-[var(--color-slate)]">{t.role}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
