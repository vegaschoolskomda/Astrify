import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search, MapPin, Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden relative">
      {/* Decorative character marks */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.4 }}
        className="absolute top-32 left-[10%] hidden lg:block"
      >
        <div className="w-14 h-14 bg-white rounded-full border-[3px] border-[var(--color-notion-blue)] flex items-center justify-center text-[var(--color-notion-blue)] font-bold text-2xl shadow-sm">
          ?
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.7, type: "spring", bounce: 0.4 }}
        className="absolute bottom-40 right-[12%] hidden lg:block"
      >
        <div className="w-12 h-12 bg-white rounded-full border-[3px] border-[var(--color-coral)] flex items-center justify-center text-[var(--color-coral)] font-bold text-xl shadow-sm">
          !
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9, type: "spring", bounce: 0.4 }}
        className="absolute top-48 right-[8%] hidden lg:block"
      >
        <div className="character-mark border-[var(--color-marigold)] shadow-sm">
          <div className="w-full h-full bg-[var(--color-marigold)] flex items-center justify-center">
            <Compass size={20} className="text-white" />
          </div>
        </div>
      </motion.div>

      <div className="container-custom max-w-4xl flex flex-col items-center text-center relative z-10">
        {/* Oversize 404 Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="mb-4"
        >
          <h1 className="text-[clamp(100px,20vw,200px)] font-bold text-[var(--color-ink-black)] leading-none" style={{ letterSpacing: '-0.06em' }}>
            4
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block bg-[var(--color-marigold)] text-[var(--color-ink-black)] rounded-full px-6 py-1 mx-1 transform"
              style={{ fontSize: '0.75em' }}
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="text-notion-caption text-[var(--color-notion-blue)] uppercase tracking-wider font-bold mb-5 block"
        >
          Halaman Tidak Ditemukan
        </motion.span>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          className="font-editorial text-[22px] md:text-[28px] text-[var(--color-graphite)] max-w-xl mx-auto mb-12 leading-relaxed"
        >
          Sepertinya kamu tersesat. Halaman yang kamu cari sudah dipindahkan atau tidak pernah ada.
        </motion.p>

        {/* Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, type: "spring", bounce: 0.3 }}
          className="card-white w-full max-w-md p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[var(--color-sky-tint)] rounded-lg flex items-center justify-center">
              <Search size={20} className="text-[var(--color-notion-blue)]" />
            </div>
            <div className="w-10 h-10 bg-[var(--color-marigold)]/10 rounded-lg flex items-center justify-center">
              <MapPin size={20} className="text-[var(--color-saffron)]" />
            </div>
            <div className="w-10 h-10 bg-[var(--color-coral)]/10 rounded-lg flex items-center justify-center">
              <Compass size={20} className="text-[var(--color-coral)]" />
            </div>
          </div>

          <p className="text-notion-body text-[var(--color-stone)] mb-6">
            Coba kembali ke beranda untuk menemukan apa yang kamu cari.
          </p>

          <Link to="/" className="btn-primary py-3 px-8 text-base w-full justify-center">
            <ArrowLeft size={18} />
            Kembali ke Beranda
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            { label: 'Layanan', href: '/#layanan' },
            { label: 'Template', href: '/#template' },
            { label: 'Portofolio', href: '/#portofolio' },
            { label: 'FAQ', href: '/#faq' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="btn-text-ghost border border-[var(--border-light)] text-notion-body-sm"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
