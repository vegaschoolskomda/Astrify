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
              ? 'rounded-full border border-[#e5e7eb] bg-white/95 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.06)] backdrop-blur-xl'
              : 'max-w-[1240px] bg-transparent'
          }`}
        >
          <Link to="/" className="flex shrink-0 items-center" aria-label="Astrify Beranda">
            <div className="flex w-28 items-center justify-center md:w-32 lg:w-36">
              <img src="/img/logo/logo-lengkap.png" alt="Astrify" className="h-6 w-auto object-contain" />
            </div>
          </Link>

          <div className="hidden items-center gap-1 rounded-full bg-[#f1f3f9] p-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={() => handleNavigation(link.href)}
                className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[#011ad9] ${
                  activeLink === link.href
                    ? 'text-[#011ad9]'
                    : 'text-[#4b5563] hover:text-[#011ad9]'
                }`}
              >
                {activeLink === link.href && (
                  <motion.span
                    layoutId="active-navbar-pill"
                    transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                    className="absolute inset-0 -z-0 rounded-full bg-white shadow-[0_2px_8px_rgba(1,26,217,0.08)]"
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
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[#011ad9] px-5 py-2.5 text-[14px] font-semibold text-white shadow-[0_8px_20px_-4px_rgba(1,26,217,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0115b0] focus:outline-none focus:ring-2 focus:ring-[#011ad9] focus:ring-offset-2"
            >
              Konsultasi Sekarang
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight size={13} />
              </span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#e5e7eb] text-[#011ad9] transition-colors hover:bg-[#f1f3f9] focus:outline-none focus:ring-2 focus:ring-[#011ad9] md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[84px] z-40 overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white/98 p-4 shadow-[0_16px_36px_rgba(1,26,217,0.12)] backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => handleNavigation(link.href)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                  className={`flex min-h-[48px] items-center justify-between rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    activeLink === link.href
                      ? 'bg-[#eef2ff] text-[#011ad9]'
                      : 'text-[#4b5563] hover:bg-[#f8fafd] hover:text-[#011ad9]'
                  }`}
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </motion.a>
              ))}
            </div>
            <div className="mt-3 border-t border-[#e5e7eb] pt-3">
              <a
                href="#kontak"
                onClick={() => handleNavigation('#kontak')}
                className="flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#011ad9] px-4 py-3 text-sm font-bold text-white shadow-[0_8px_20px_-4px_rgba(1,26,217,0.35)] transition-all hover:bg-[#0115b0]"
              >
                Konsultasi Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
