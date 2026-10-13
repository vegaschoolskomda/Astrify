import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, User } from 'lucide-react'

const tim = [
  {
    name: 'Naufal',
    slug: 'naufal',
    role: 'DevOps & Backend Engineer',
    image: '/img/admin/naufal.png',
  },
  {
    name: 'Vega',
    slug: 'vega',
    role: 'FullStack Developer',
    image: '/img/admin/vega.png',
  },
  {
    name: 'Kevin',
    slug: 'kevin',
    role: 'UI/UX Designer',
    image: '/img/admin/kevin.png',
  },
  {
    name: 'Atha',
    slug: 'atha',
    role: 'Frontend & Data Analyst',
    image: '/img/admin/atha.png',
  },
]

export default function TimKami() {
  return (
    <section id="tim" className="bg-white py-20 md:py-28">
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
            Tim Profesional
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-[#111827] sm:text-4xl md:text-[38px]">
            Orang-Orang di Balik Astrify
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
            Tim insinyur perangkat lunak dan desainer yang berdedikasi membangun website berkualitas
            tinggi untuk akselerasi bisnis Anda.
          </p>
        </motion.div>

        {/* Grid Kartu Profil Tim */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {tim.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
            >
              <Link
                to={`/admin/${t.slug}`}
                className="group flex h-full flex-col items-center rounded-3xl border border-[#e5e7eb] bg-white p-7 text-center shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05),0_20px_40px_-15px_rgba(1,26,217,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#011ad9]/30 hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.08),0_8px_16px_-4px_rgba(1,26,217,0.06)] focus:outline-none focus:ring-2 focus:ring-[#011ad9]"
                aria-label={`Lihat profil ${t.name}`}
              >
                {/* Avatar Lingkaran dengan Ring Halus */}
                <div className="relative mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-[#e5e7eb] bg-[#f8fafd] ring-4 ring-[#eef2ff]">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                      const fallback = event.currentTarget.nextSibling
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center bg-[#f1f3f9] text-[#9ca3af]">
                    <User size={32} />
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-[#111827] group-hover:text-[#011ad9] transition-colors">
                  {t.name}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-[#f1f3f9] px-3 py-1 text-xs font-semibold text-[#4b5563]">
                  {t.role}
                </span>

                <div className="mt-5 flex items-center gap-1 text-xs font-bold text-[#011ad9] opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Lihat Profil</span>
                  <ArrowUpRight size={13} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
