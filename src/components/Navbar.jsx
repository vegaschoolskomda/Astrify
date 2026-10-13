import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Template', href: '#template' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Proses', href: '#proses' },
  { label: 'Tim', href: '#tim' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('#layanan')
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getHref = (href) => (location.pathname === '/' ? href : `/${href}`)

  const handleNavigation = (href) => {
    setActiveLink(href)
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          y: scrolled ? 12 : 0,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-4 md:px-8 ${
          scrolled ? 'max-w-[1240px]' : 'max-w-none'
        }`}
      >
        <div
          className={`mx-auto flex h-[72px] items-center justify-between px-5 transition-all duration-300 md:px-7 ${
            scrolled
              ? 'rounded-full border border-white/80 bg-white/90 shadow-[0_12px_30px_rgba(22,37,70,0.12)] backdrop-blur-xl'
              : 'max-w-[1240px] bg-transparent'
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center" aria-label="Astrify beranda">
            <div className="flex w-28 items-center justify-center md:w-32 lg:w-39">
              <img src="/img/logo/logo-lengkap.png" alt="Astrify" className="h-6 w-auto object-contain" />
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-[#f1f2f6] p-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={() => handleNavigation(link.href)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-colors ${
                  activeLink === link.href
                    ? 'text-[#354391]'
                    : 'text-[#626675] hover:text-[#354391]'
                }`}
              >
                {activeLink === link.href && (
                  <motion.span
                    layoutId="active-navbar-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                    className="absolute inset-0 -z-0 rounded-full bg-white shadow-[0_3px_8px_rgba(20,30,60,0.12)]"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#kontak"
              onClick={() => handleNavigation('#kontak')}
              className="inline-flex items-center gap-2 rounded-full bg-[#354391] px-4 py-2.5 text-[13px] font-bold text-white shadow-[0_6px_14px_rgba(53,67,145,0.22)] transition-all hover:-translate-y-0.5 hover:bg-[#293477]"
            >
              Mulai Sekarang
              <span className="flex h-6 w-9 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight size={14} />
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu' : 'Buka menu'}
            className="rounded-full border border-[#e1e5ed] p-2 text-[#354391] transition-colors hover:bg-[#f1f2f6] md:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[84px] z-40 overflow-hidden rounded-2xl border border-[#e1e5ed] bg-white/95 p-3 shadow-[0_16px_35px_rgba(22,37,70,0.14)] backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={getHref(link.href)}
                onClick={() => handleNavigation(link.href)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                  activeLink === link.href
                    ? 'bg-[#f0f2fb] text-[#354391]'
                    : 'text-[#626675] hover:bg-[#f7f8fb] hover:text-[#354391]'
                }`}
              >
                {link.label}
                <ArrowUpRight size={16} />
              </motion.a>
            ))}
            <div className="mt-2 border-t border-[#e5e8ef] pt-3">
              <a
                href="#kontak"
                onClick={() => handleNavigation('#kontak')}
                className="flex w-full items-center justify-center rounded-xl bg-[#354391] px-4 py-3 text-sm font-bold text-white"
              >
                Mulai Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
