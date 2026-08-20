import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--surface-card-surface)]/90 backdrop-blur-md' : 'bg-transparent'}`}
        style={{ boxShadow: scrolled ? '0px 0.7px 1.462px 0px rgba(0,0,0,0.015), 0px 3px 9px 0px rgba(0,0,0,0.03)' : 'none' }}
      >
        <div className="container-custom h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[var(--color-ink-black)] rounded-md flex items-center justify-center text-white font-bold text-xs">
              A
            </div>
            <span className="text-notion-subheading font-bold tracking-tight text-[var(--color-ink-black)]">
              Astrify
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={location.pathname === '/' ? link.href : `/${link.href}`}
                className="text-notion-body-sm font-medium text-[var(--color-ink-black)]/54 hover:text-[var(--color-ink-black)] px-4 py-2 rounded-[var(--radius-lg)] hover:bg-[var(--color-ink-black)]/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="btn-text-ghost">
              Log in
            </Link>
            <a href="#kontak" className="btn-primary">
              Mulai Sekarang
            </a>
          </div>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-1.5 text-[var(--color-ink-black)]/80 hover:text-[var(--color-ink-black)] rounded-lg">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-4 top-20 z-50 bg-[var(--surface-card-surface)] border border-[var(--border-light)] rounded-[var(--radius-xl)] p-4 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={location.pathname === '/' ? link.href : `/${link.href}`}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-4 text-[var(--color-ink-black)]/80 font-medium hover:text-[var(--color-ink-black)] hover:bg-[var(--color-ink-black)]/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="border-t border-[var(--border-light)] mt-2 pt-4 flex flex-col gap-2">
            <Link to="/login" onClick={() => setMobileOpen(false)} className="w-full text-center py-2.5 text-notion-body-sm font-medium text-[var(--color-ink-black)] hover:bg-[var(--color-ink-black)]/5 rounded-[var(--radius-lg)]">
              Log in
            </Link>
            <a href="#kontak" onClick={() => setMobileOpen(false)} className="w-full text-center btn-primary justify-center">
              Mulai Sekarang
            </a>
          </div>
        </div>
      )}
    </>
  )
}
